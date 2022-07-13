import './App.css';
import { Container } from 'react-bootstrap';
import Navigation from './views/Navigation';
import { Routes, Route } from 'react-router-dom';
import Signup from './views/Signup';

function App() {
  return (
    <div className="App">
        <Navigation />
        <Container >
          <Routes>
            <Route path="signup" element={<Signup />} />
            {/* <Route path="users" element={<Users />} /> */}
          </Routes>
        </Container>
    </div>
  );
}

export default App;
