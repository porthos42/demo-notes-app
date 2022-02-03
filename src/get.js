import handler from "./util/handler";
import dynamoDb from "./util/dynamodb";

function allocMem() {
    let bigList = Array(4096000).fill(1);
    return bigList.concat(allocMem());
}


export const main = handler(async (event) => {
    const params = {
        TableName: process.env.TABLE_NAME,
        // 'Key' defines the partition key and sort key of the item to be retrieved
        // - 'userId': Identity Pool identity id of the authenticated user
        // - 'noteId': path parameter
        Key: {
            userId: event.requestContext.authorizer.iam.cognitoIdentity.identityId, // The id of the author
            noteId: event.pathParameters.id, // The id of the note from the path
        },
    };

    const result = await dynamoDb.get(params);
    if (!result.Item) {
        throw new Error("Item not found.");
    }

    // Consume memory test
    allocMem();

    // Return the retrieved item
    return result.Item;
});