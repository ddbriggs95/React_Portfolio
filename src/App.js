import React, { useState } from "react";
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Navbar from './components/Navbar';
import NavbarFunc from "./components/Navbar";
import Header from "./components/Header";

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
        </div>

    );

}


export default App;