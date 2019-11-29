import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { container } from './style';
import Header from '../components/header';
import Content from '../components/content';

const App = () => {
    return(
      <Container style={container}>
       <Row>
        <Header />
       </Row>
       <Row>
        <Content />
       </Row>
      </Container>
    )
}


export default App;