import './App.css';
  import Bmfive from './component/bmfive'
 import Max from './component/max10000'
import StartM from './component/startM'
import Bmwaudimer from './component/bmwaudimer';
import Toptencities from './component/toptenciti';
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Listalldata from './component/listalldata'

function App() {
  return (
   
      <BrowserRouter>
      <h1 className='App'> Assignment</h1>
      <h3 className='App'> Clicked the below Linked to show give data </h3>
        <Routes>
          <Route path='/' element={<Listalldata />} />
          <Route path='/startm' element={<StartM />} />
          <Route path='/max' element={<Max />} />
          <Route path='/toptencities' element={<Toptencities />} />
          <Route path='/bmwaudimer' element={<Bmwaudimer />} />
          <Route path='/bmfive' element={<Bmfive />} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;
