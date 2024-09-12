const awsconfig = {
  Auth: {
    region: 'us-east-1',
    userPoolId: 'us-east-1_oxdsG5r8n',
    userPoolWebClientId: 'd24rcm3vxndya6', // Reemplaza con el App Client ID real
    // Si tienes un Identity Pool, descomenta y reemplaza esta línea:
    // identityPoolId: 'us-east-1:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  }
};

export default awsconfig;
