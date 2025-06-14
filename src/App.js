import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Projects from './components/Projects';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Debug from './components/Debug';
import './App.css';
import './styles.css';

function App() {
    const [isSticky, setIsSticky] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [debugEnabled, setDebugEnabled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
            setShowBackToTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    useEffect(() => {
        const handleKeyDown = (e) => {
            // Toggle debug mode with Ctrl+Shift+D
            if (e.ctrlKey && e.shiftKey && e.key === 'D') {
                e.preventDefault();
                setDebugEnabled(prev => !prev);
                console.log(`[Debug] Debug mode ${!debugEnabled ? 'enabled' : 'disabled'}`);
            }
        };
        
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [debugEnabled]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Get the base URL from the environment or use the root path
    const basename = process.env.PUBLIC_URL || '/';
    
    return (
        <Router basename={basename}>
            <div className="App">
                <header className={`header ${isSticky ? 'sticky' : ''}`}>
                    <div className="container header-container">
                        <div className="logo">
                            <Link to="/">ORGSTUDIO</Link>
                        </div>
                        <div className="status-indicator">
                            <span className="status-dot"></span>
                            <span>Available for new projects</span>
                        </div>
                        <nav>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/projects">Projects</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li className="sign-in"><Link to="/">Partner sign in</Link></li>
                                <li className="search-icon">
                                    <button aria-label="Search">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="11" cy="11" r="8"></circle>
                                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>

                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>

                <footer>
                    <div className="footer-top">
                        <div className="grid-container">
                            <div className="footer-tagline">
                                Let's create amazing applications together
                            </div>
                            
                            <div className="footer-contact">
                                <h3>Contact</h3>
                                <div className="footer-email">
                                    <p>General inquiries</p>
                                    <a href="mailto:hello@orgstudio.dev" className="btn-text">hello@orgstudio.dev</a>
                                </div>
                                <div className="footer-partner">
                                    <p>Business development</p>
                                    <a href="mailto:partners@orgstudio.dev" className="btn-text">partners@orgstudio.dev</a>
                                </div>
                            </div>
                            
                            <div className="footer-account">
                                <h3>Account</h3>
                                <Link to="/" className="btn-text">Partner sign in</Link>
                                <div className="footer-partner">
                                    <p>Don't have an account?</p>
                                    <Link to="/contact" className="btn-text">Become a partner</Link>
                                </div>
                            </div>
                            
                            <div className="footer-social">
                                <a href="https://twitter.com/orgstudio" className="social-icon" aria-label="Twitter">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                    </svg>
                                </a>
                                <a href="https://linkedin.com/company/orgstudio" className="social-icon" aria-label="LinkedIn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                        <rect x="2" y="9" width="4" height="12"></rect>
                                        <circle cx="4" cy="4" r="2"></circle>
                                    </svg>
                                </a>
                                <a href="https://github.com/ForstvalStudio" className="social-icon" aria-label="GitHub">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="footer-bottom">
                        <div className="footer-nav">
                            <Link to="/services">Services</Link>
                            <Link to="/projects">Work</Link>
                            <Link to="/about">About</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                        <div className="footer-legal">
                            <p>&copy; {new Date().getFullYear()} ORGSTUDIO</p>
                            <Link to="/">Privacy Policy</Link>
                            <Link to="/">Terms of Service</Link>
                        </div>
                    </div>
                </footer>
                
                {showBackToTop && (
                    <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 15l-6-6-6 6"/>
                        </svg>
                    </button>
                )}
                
                {/* Debug panel that can be toggled with Ctrl+Shift+D */}
                <Debug enabled={debugEnabled} />
            </div>
        </Router>
    );
}

export default App;
