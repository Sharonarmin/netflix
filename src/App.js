import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import { originals, action } from './urls'
import RowPost from './components/RowPost/RowPost';



function App() {
  return (
    <div className="App">
       <Navbar/>      
       <Banner/>
       <RowPost url={originals} title='Netflix Originals'/>
       <RowPost url={action}  title='Action' isSmall/>

    </div>
  );
}

export default App;
