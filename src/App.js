
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from './components/SearchPage';
import Footer from './components/Footer';


function App() {
  return (

    // BEM
    <div className="app">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route exact path="/search" element={<SearchPage />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />

      </ BrowserRouter>
    </div>
  );
}

export default App;
