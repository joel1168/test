import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar"
import Startcall from "./pages/startcall/StartCall"
import CallManagement from "./pages/CallManagement/CallManagement";
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


function App() {
  return (
    <Router>
      <Topbar />

      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Startcall />
          </Route>
          <Route exact path="/CallManagement">
            <CallManagement />
          </Route>
          
        </Switch>

      </div>



    </Router>
  );
}

export default App;
