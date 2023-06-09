import React, { useState } from "react";
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Navbar from './components/Navbar';
import NavbarFunc from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './style.css'

function App() {

    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About ') {
          return <About />;
        }
        if (currentPage === 'Contact') {
          return <Contact />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
          }
        if (currentPage === 'Portfolio') {
          return <Portfolio />;
        }
        return <About />;
      };

      const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header />
            <NavbarFunc currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>

    );

}


export default App;