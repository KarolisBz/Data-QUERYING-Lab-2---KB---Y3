// importing router for navigation capabilities
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// importing components
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

// Added Navbar which uses Reacts ROUTER LINK to navigate to different
// pages which we have set as components and js xml tags
function App() {
  return (
    <Router>
      <NavigationBar />
      <Header />
      <Routes>
        <Route path="/home" element={<Content />} />
        <Route path="/read" element={<h1>Read Component</h1>} />
        <Route path="/create" element={<h1>Create Component</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;