import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AllUsers from './components/AllUsers';
import AddUsers from './components/AddUsers';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EditUser from './components/EditUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
       <Routes>
          <Route path="/" element={ <Home/>}/>
          <Route path="/allUsers" element={<AllUsers/>}/>
          <Route path="/addUsers" element={<AddUsers/>}/>
          <Route path="/edit/:id" element={<EditUser/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
