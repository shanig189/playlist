import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { container } from './style';
import Header from '../components/header';
import Content from '../components/content';
import { GlobalStateProvider } from '../store/useGlobalState';
 
const App = () => {
    return(
      <GlobalStateProvider>
        <Container style={container}>
        <Row>
          <Header />
        </Row>
        <Row>
          <Content />
        </Row>
        </Container>
      </GlobalStateProvider>
    )
}


export default App;