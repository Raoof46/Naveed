import logo from './logo.svg';
import './App.css';
import Homepage from './component/Homepage';
import NewPage from './component/NewPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Learn from './component/Learn';

function App() {
  return (
    <div>
      <Learn/>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Homepage/>}></Route>
        <Route exact path='/nextPage' element={<NewPage/>}></Route>
      </Routes>
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
