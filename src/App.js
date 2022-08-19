import './App.css';
import Pic from './components/pic';

function App() {
  return (
    <div className="App">
    <div className='hey'>
    <h1 className="m-5 text-decoration-underline title"> Astronomy Picture of The Day</h1>
    </div>
   <div className='hey'>
   <Pic className="pic"/>
   </div>
  
   </div>
  );
}

export default App;
