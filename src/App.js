import './App.css';
import { Container } from 'react-bootstrap';
import Navigation from './views/Navigation';
import { Routes, Route } from 'react-router-dom';
import Signup from './views/Signup';
import Home from './views/Home';
import Loader from './component/loader';
import Users from './views/Users';
import Navigate from './component/navigate';

function App() {
  return (
    <div className="App">
        <Navigation />
        <Container className='py-2'>
          <Routes>
          <Route path="home" element={<Home />} />
            <Route path="signup" element={<Signup />} />
            <Route path="users" element={<Users />} />
            {/* <Route path="users" element={<Users />} /> */}
          </Routes>
        </Container>
        <Loader />
        <Navigate />
    </div>
  );
}

export default App;
