import Navbar from "./components/Nabvar";
import {Switch,Route} from 'react-router-dom'
import AddStock from "./components/AddStock";
import EditStock from "./components/EditStock";
import { ToastContainer } from "react-toastify";
import Share from "./components/Share";
import Portfolio from "./components/Portfolio";
function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Portfolio}/>
        <Route path="/share" component={Share}/>
        <Route  path="/addstock" component={AddStock}/>
        <Route  path="/editstock/:id" component={EditStock}/>
      </Switch>
    </div>
  );
}

export default App;
