import { Navbar } from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
