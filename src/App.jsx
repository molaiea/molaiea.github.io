import logo from './logo.svg';
import './App.css';
import { Container, Grid } from '@mui/material';
import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Resume from './pages/Resume/Resume'
import Portfolio from './pages/Portfolio/Portfolio';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs>
          <Router>
          <Header />
            <Routes>
              <Route path='/portfolio' element={<Portfolio />} />
              <Route  path='/' element={<Resume />} />
            </Routes>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
