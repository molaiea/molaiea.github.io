import logo from './logo.svg';
import './App.css';
import { Container, Grid } from '@mui/material';
import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Resume from './pages/Resume/Resume'
import Portfolio from './pages/Portfolio/Portfolio';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Container style={{'marginTop': '2rem'}}>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs >
          <Router>
          <Header />
            <div className="main__contents containe__shadow">
            <Routes>
              {/* <Route path='/portfolio' element={<Portfolio />} /> */}
              <Route  path='https://molaiea.github.io/myresume' element={<Resume />} />
              <Route  path='https://molaiea.github.io/myresume/contact_me' element={<Contact />} />
            </Routes>
            </div>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
