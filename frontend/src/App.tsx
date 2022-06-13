import React from 'react';
import Container from './components/layouts/base/Container';
import Header from './components/layouts/base/Header';
import client from './client/client';

/**
 * Makes the main page
 *
 * @return {JSX.Element}
 */
function App(): JSX.Element {
  console.log(client.socket);
  return (
    <Container>
      <Header/>
    </Container>
  );
}

export default App;
