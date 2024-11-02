import { BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './pages/LandigPage.jsx';
import  Navbar  from './components/features/Navbar.jsx';
import  Footer  from './components/features/footer.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <LandingPage />  
      <Footer />
    </Router>
  );
}

export default App;
