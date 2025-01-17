// Styles and Bootstrap
import "./App.scss";
import { Container, Row, Col } from "react-bootstrap";

// React router and components
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/Nav";
import Feed from "./components/Feed";
import Login from "./components/Users/Login";
import NewUser from "./components/Users/New";
import NewSpace from "./components/Spaces/New";
import ShowSpace from "./components/Spaces/Show";

function App() {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <NavBar />
        </Col>
      </Row>
      <Switch>
        <Route path="/" exact>
          <Feed />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/users/new" exact>
          <NewUser />
        </Route>
        <Route path="/spaces/new" exact>
          <NewSpace />
        </Route>
        <Route path="/spaces/:id" exact>
          <ShowSpace />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
