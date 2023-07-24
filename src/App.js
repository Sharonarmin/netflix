import './App.css';
import RowPost from './components/RowPost/RowPost';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import ApiTest from './ApiTest';



function App() {
  return (
    <div className="App">
       <Navbar/>      
       <Banner/>
       <RowPost/>
       <ApiTest/>
    </div>
  );
}

export default App;
