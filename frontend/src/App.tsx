import React from 'react';
import Container from './components/layouts/base/Container';
import Header from './components/layouts/base/Header';

/**
 * Makes the main page
 *
 * @returns {JSX.Element}
 */
function App(): JSX.Element {
  return (
    <Container>
      <Header/>
    </Container>
  );
}

export default App;
