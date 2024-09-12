import React from 'react';
import './App.css';
import { Amplify } from 'aws-amplify';
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

function App({ signOut }) {
  return (
    <div>
      <h1>Thank you for doing verification</h1>
      <h2>My Content</h2>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
}

export default withAuthenticator(App);
