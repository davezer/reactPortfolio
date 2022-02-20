import React, { useState } from 'react';
import Navigation from '../Nav/nav';
import About from '../About/about';
import Experience from '../Experience/experience';
import Featured from '../Featured/featured';
import Contact from '../Contact/contact';
import Resume from '../Resume/index'


function Portfolio() {
    const [currentPage, handlePageChange] = useState('About');

    const renderPage = () => {
        switch(currentPage) {
            case "About":
                return <About></About>
            case "Experience":
                return <Experience></Experience>
            case "Projects":
                return <Featured></Featured>
            case "Contact":
                return <Contact></Contact>
            case "Resume":
                return <Resume></Resume>
            default:
                return <About></About>
        }
    };

    return (
        <div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            <div>
                {
                    renderPage()
                }
            </div>
        </div>
    );
}

export default Portfolio;