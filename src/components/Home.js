import React from 'react';

const Home = () => {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <h1>Application Development Studio For <span className="highlight">Solutions That Drive Results</span></h1>
                        <p className="hero-description">We design and develop innovative applications across multiple platforms, from Windows and web to mobile, games, 3D experiences, and blockchain solutions.</p>
                        <div className="hero-buttons">
                            <a href="/contact" className="btn">Become a Partner</a>
                            <a href="/projects" className="btn-outline">Start a Sprint</a>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="grid-showcase">
                <div className="grid-container">
                    <div className="grid-item services" onClick={() => window.location.href='/services'}>
                        <div className="grid-content">
                            <h3>Services</h3>
                        </div>
                    </div>
                    <div className="grid-item benefits" onClick={() => window.location.href='/about'}>
                        <div className="grid-content">
                            <h3>Benefits</h3>
                        </div>
                    </div>
                    <div className="grid-item partnership" onClick={() => window.location.href='/contact'}>
                        <div className="grid-content">
                            <h3>Partnership?</h3>
                        </div>
                    </div>
                    <div className="grid-item questions" onClick={() => window.location.href='/contact'}>
                        <div className="grid-content">
                            <h3>Questions?</h3>
                        </div>
                    </div>
                    <div className="grid-item logo-mark">
                        <div className="grid-content">
                            <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
            
            <section>
                <h2 className="section-title">Featured Projects</h2>
                <div className="project-gallery">
                    <div className="project-card">
                        <div className="project-image" style={{backgroundColor: '#f0f0f0', height: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <span>Windows App</span>
                        </div>
                        <div className="project-overlay">
                            <h3>Enterprise Management System</h3>
                            <p>Windows Application</p>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="project-image" style={{backgroundColor: '#f0f0f0', height: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <span>Mobile App</span>
                        </div>
                        <div className="project-overlay">
                            <h3>Health Tracking Solution</h3>
                            <p>Mobile Application</p>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="project-image" style={{backgroundColor: '#f0f0f0', height: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <span>Web3 Project</span>
                        </div>
                        <div className="project-overlay">
                            <h3>Decentralized Finance Platform</h3>
                            <p>Web3 Solution</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section>
                <h2 className="section-title">Why Choose Us?</h2>
                <div className="services-grid">
                    <div className="service-card">
                        <h3>Technical Excellence</h3>
                        <p>Our team of experts delivers high-quality, scalable solutions using the latest technologies.</p>
                    </div>
                    <div className="service-card">
                        <h3>Cross-Platform Expertise</h3>
                        <p>From Windows applications to Web3 solutions, we create seamless experiences across all platforms.</p>
                    </div>
                    <div className="service-card">
                        <h3>Innovative Approach</h3>
                        <p>We stay at the forefront of technology to deliver cutting-edge applications that meet your needs.</p>
                    </div>
                </div>
            </section>
            
            <section style={{backgroundColor: '#f8f8f8', padding: '5rem 2rem'}}>
                <div style={{maxWidth: '1000px', margin: '0 auto'}}>
                    <h2 className="section-title" style={{textAlign: 'center', marginBottom: '3rem'}}>Frequently Asked Questions</h2>
                    
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '2rem'}}>
                        <div>
                            <h3 style={{marginBottom: '1rem'}}>What types of applications can you develop?</h3>
                            <p>We specialize in the full spectrum of application development: Windows desktop applications, web applications, mobile apps for iOS and Android, game development, Three.js-powered 3D experiences, and Web3/blockchain solutions.</p>
                        </div>
                        
                        <div>
                            <h3 style={{marginBottom: '1rem'}}>How do you approach cross-platform development?</h3>
                            <p>We carefully select the right technologies for each project, using native development when performance is critical and cross-platform frameworks when broader compatibility is needed. Our expertise spans the entire development ecosystem.</p>
                        </div>
                        
                        <div>
                            <h3 style={{marginBottom: '1rem'}}>What makes your Windows applications stand out?</h3>
                            <p>Our Windows applications combine powerful functionality with intuitive interfaces. We use modern frameworks like WPF, UWP, or .NET MAUI to create desktop solutions that leverage the full capabilities of the Windows platform.</p>
                        </div>
                        
                        <div>
                            <h3 style={{marginBottom: '1rem'}}>Do you provide ongoing support for applications?</h3>
                            <p>Yes, we offer comprehensive support packages for all our applications. From regular updates and feature enhancements to security patches and performance optimization, we ensure your application continues to perform at its best.</p>
                        </div>
                        
                        <div>
                            <h3 style={{marginBottom: '1rem'}}>What technologies do you use for Web3 development?</h3>
                            <p>We work with Ethereum, Solana, and other blockchain platforms, developing smart contracts, DApps, NFT platforms, and DeFi solutions using languages like Solidity and frameworks like web3.js and ethers.js.</p>
                        </div>
                        
                        <div>
                            <h3 style={{marginBottom: '1rem'}}>Can you integrate my application with existing systems?</h3>
                            <p>Absolutely. We specialize in creating applications that communicate seamlessly with your existing infrastructure, databases, APIs, and third-party services, ensuring a unified ecosystem for your business operations.</p>
                        </div>
                    </div>
                    
                    <div style={{textAlign: 'center', marginTop: '3rem'}}>
                        <a href="/contact" className="btn">Ask Us More</a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
