import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { container } from './style';
import Header from '../components/header';
import Content from '../components/content';
import TrackContent from '../components/trackContent';
import { GlobalStateProvider } from '../state/useGlobalState';
 
const App = () => {
    return(
      <Router>
        <GlobalStateProvider>
          <Container style={container}>
          <Row>
            <Header />
          </Row>
          <Row>
            <Switch>
              <Route exact path="/">
                <Content />
              </Route>
              <Route path="/track">
                <TrackContent />
              </Route>
            </Switch>
          </Row>
          </Container>
        </GlobalStateProvider>
      </Router>
    )
}


export default App;