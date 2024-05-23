// App.jsx
import './App.css';
import NavBar from './components/NavBar';
import Home from './views/Home';
import ShowOne from './views/ShowOne';
import New from './views/New';
import Edit from './views/Edit';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipe/:id' element={<ShowOne />} />
        <Route path='/create' element={<New />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
