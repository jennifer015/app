const awsconfig = {
  Auth: {
    // Configure estos valores según tu configuración de AWS Amplify
    identityPoolId: 'YOUR_IDENTITY_POOL_ID',
    region: 'YOUR_AWS_REGION',
    userPoolId: 'YOUR_USER_POOL_ID',
    userPoolWebClientId: 'YOUR_USER_POOL_WEB_CLIENT_ID'
  }
};

export default awsconfig;
