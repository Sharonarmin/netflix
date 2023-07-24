import './App.css';
import RowPost from './components/RowPost/RowPost';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';



function App() {
  return (
    <div className="App">
       <Navbar/>      
       <Banner/>
       <RowPost/>
    </div>
  );
}

export default App;
