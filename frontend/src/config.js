const config = {
    SENTRY_DSN: "https://fbba1114a2a3405ab2599e14229b7499@o1133941.ingest.sentry.io/6180878",
    STRIPE_KEY: "pk_test_KxSBds1EJjXbHqdoXcuDQVNC0020M7KNkc",
    MAX_ATTACHMENT_SIZE: 5000000,
    // Backend config
    s3: {
        REGION: process.env.REACT_APP_REGION,
        BUCKET: process.env.REACT_APP_BUCKET,
    },
    apiGateway: {
        REGION: process.env.REACT_APP_REGION,
        URL: process.env.REACT_APP_API_URL,
    },
    cognito: {
        REGION: process.env.REACT_APP_REGION,
        USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
        APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
        IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
    },
};

export default config;