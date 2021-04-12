
import './App.css';
import NavBar from './Components/NavBar'
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";

import Catalogo from './Pages/Catalogo'
import Inicio from './Pages/Inicio'
import Producto from './Pages/Producto'



var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  
function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>

        <Route path="/" exact component={Inicio}/> 
        <Route path="/catalogo" exact component={Catalogo}/>
        <Route path="/prueba" exact />
        <Route path='/producto/:idprod' component={Producto} /> 
      
        <Route path="?f"exact />
        
      
      </Switch>
  </Router>
  );
}

export default App;
