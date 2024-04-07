import './App.css';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Content/> 
      <Footer/>
    </div>
  );
}

export default App;
