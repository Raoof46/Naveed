import logo from './logo.svg';
import './App.css';
import Homepage from './component/Homepage';
import NewPage from './component/NewPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
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
