import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import RowPost from './components/RowPost/RowPost';
import {org, action} from './urls'
import './App.css'



function App() {
  return (
    <div className="App">
       <Navbar/>      
       <Banner/>
       <RowPost url={org} title='Netflix Originals'/>
       <RowPost  url={action} title='Action' isSmall/>

    </div>
  );
}

export default App;
