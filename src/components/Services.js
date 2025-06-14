import React from 'react';

const Services = () => {
    return (
        <>
            <section className="hero">
                <h2>Specialized Application Development Across All Platforms</h2>
                <p>We create powerful, custom applications for every platform and technology — from Windows desktop to Web3 blockchain solutions.</p>
            </section>
            
            <section>
                <h2 className="section-title">What We Offer</h2>
                <div className="services-grid">
                    <div className="service-card">
                        <h3>Windows Applications</h3>
                        <p>Custom desktop applications for business management, data analysis, and enterprise solutions using modern frameworks and technologies.</p>
                    </div>
                    
                    <div className="service-card">
                        <h3>Web Applications</h3>
                        <p>Responsive and dynamic web applications with intuitive user interfaces, robust backends, and seamless user experiences.</p>
                    </div>
                    
                    <div className="service-card">
                        <h3>Mobile Applications</h3>
                        <p>Native and cross-platform mobile applications for iOS and Android that deliver exceptional performance and user engagement.</p>
                    </div>
                    
                    <div className="service-card">
                        <h3>Game Development</h3>
                        <p>Immersive and engaging gaming experiences across multiple platforms, leveraging cutting-edge game engines and technologies.</p>
                    </div>
                    
                    <div className="service-card">
                        <h3>Three.js & 3D Solutions</h3>
                        <p>Interactive 3D visualizations and experiences for web and applications, perfect for product showcases and virtual experiences.</p>
                    </div>
                    
                    <div className="service-card">
                        <h3>Web3 & Blockchain</h3>
                        <p>Next-generation decentralized applications and blockchain solutions for finance, security, authentication, and digital assets.</p>
                    </div>
                </div>
            </section>
            
            <section>
                <h2 className="section-title">Our Development Process</h2>
                <div className="services-grid">
                    <div className="service-card">
                        <h3>1. Discovery</h3>
                        <p>We start by understanding your business goals, target audience, and specific requirements.</p>
                    </div>
                    
                    <div className="service-card">
                        <h3>2. Planning</h3>
                        <p>Our team creates a detailed roadmap, including architecture design, technology selection, and timeline.</p>
                    </div>
                    
                    <div className="service-card">
                        <h3>3. Development</h3>
                        <p>We build your application using agile methodologies, with regular updates and testing throughout.</p>
                    </div>
                    
                    <div className="service-card">
                        <h3>4. Testing</h3>
                        <p>Rigorous quality assurance ensures your application is robust, secure, and works flawlessly.</p>
                    </div>
                    
                    <div className="service-card">
                        <h3>5. Deployment</h3>
                        <p>We handle the deployment process, ensuring a smooth transition to production environments.</p>
                    </div>
                    
                    <div className="service-card">
                        <h3>6. Maintenance</h3>
                        <p>Ongoing support and updates keep your application running optimally and evolving with your needs.</p>
                    </div>
                </div>
            </section>
            
            <section className="service-packages" style={{background: '#f8f8f8'}}>
                <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
                    <h2 className="section-title" style={{textAlign: 'center'}}>Development Partnerships</h2>
                    <p style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto', marginBottom: '3rem'}}>Choose the right development approach for your project needs.</p>
                    
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
                        <div className="package-card" style={{background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: 'var(--shadow-md)', transition: 'var(--transition)'}}>
                            <div style={{padding: '2rem'}}>
                                <span style={{color: 'var(--primary-color)', fontWeight: '500'}}>Windows Applications</span>
                                <h3 style={{fontSize: '1.75rem', marginTop: '0.5rem'}}>Desktop Solutions</h3>
                                <p style={{marginBottom: '2rem'}}>Custom desktop applications for business, productivity, and specialized needs.</p>
                                <ul style={{listStyle: 'none', marginBottom: '2rem'}}>
                                    <li style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
                                        <span style={{color: 'var(--primary-color)', marginRight: '0.75rem'}}>✓</span> Enterprise resource planning
                                    </li>
                                    <li style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
                                        <span style={{color: 'var(--primary-color)', marginRight: '0.75rem'}}>✓</span> Desktop productivity tools
                                    </li>
                                    <li style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
                                        <span style={{color: 'var(--primary-color)', marginRight: '0.75rem'}}>✓</span> Data analysis applications
                                    </li>
                                    <li style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
                                        <span style={{color: 'var(--primary-color)', marginRight: '0.75rem'}}>✓</span> Custom business software
                                    </li>
                                </ul>
                                <a href="/contact" className="btn" style={{width: '100%', textAlign: 'center'}}>Start a Project</a>
                            </div>
                        </div>
                        
                        <div className="package-card" style={{background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: 'var(--shadow-md)', transition: 'var(--transition)'}}>
                            <div style={{padding: '2rem'}}>
                                <span style={{color: 'var(--primary-color)', fontWeight: '500'}}>Web & Mobile</span>
                                <h3 style={{fontSize: '1.75rem', marginTop: '0.5rem'}}>Digital Experiences</h3>
                                <p style={{marginBottom: '2rem'}}>Responsive websites and mobile applications for all devices and platforms.</p>
                                <ul style={{listStyle: 'none', marginBottom: '2rem'}}>
                                    <li style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
                                        <span style={{color: 'var(--primary-color)', marginRight: '0.75rem'}}>✓</span> Interactive web applications
                                    </li>
                                    <li style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
                                        <span style={{color: 'var(--primary-color)', marginRight: '0.75rem'}}>✓</span> iOS & Android development
                                    </li>
                                    <li style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
                                        <span style={{color: 'var(--primary-color)', marginRight: '0.75rem'}}>✓</span> Cross-platform solutions
                                    </li>
                                    <li style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
                                        <span style={{color: 'var(--primary-color)', marginRight: '0.75rem'}}>✓</span> Progressive web apps
                                    </li>
                                </ul>
                                <a href="/contact" className="btn" style={{width: '100%', textAlign: 'center'}}>Start a Project</a>
                            </div>
                        </div>
                        
                        <div className="package-card" style={{background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: 'var(--shadow-md)', transition: 'var(--transition)'}}>
                            <div style={{padding: '2rem'}}>
                                <span style={{color: 'var(--primary-color)', fontWeight: '500'}}>Immersive & Web3</span>
                                <h3 style={{fontSize: '1.75rem', marginTop: '0.5rem'}}>Next-Gen Development</h3>
                                <p style={{marginBottom: '2rem'}}>Three.js visualization, gaming, and blockchain application development.</p>
                                <ul style={{listStyle: 'none', marginBottom: '2rem'}}>
                                    <li style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
                                        <span style={{color: 'var(--primary-color)', marginRight: '0.75rem'}}>✓</span> 3D product experiences
                                    </li>
                                    <li style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
                                        <span style={{color: 'var(--primary-color)', marginRight: '0.75rem'}}>✓</span> Game development
                                    </li>
                                    <li style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
                                        <span style={{color: 'var(--primary-color)', marginRight: '0.75rem'}}>✓</span> NFT & DeFi applications
                                    </li>
                                    <li style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
                                        <span style={{color: 'var(--primary-color)', marginRight: '0.75rem'}}>✓</span> Smart contracts & dApps
                                    </li>
                                </ul>
                                <a href="/contact" className="btn" style={{width: '100%', textAlign: 'center'}}>Start a Project</a>
                            </div>
                        </div>
                    </div>
                    
                    <div style={{textAlign: 'center', marginTop: '3rem'}}>
                        <h3>Need a custom solution?</h3>
                        <p style={{maxWidth: '600px', margin: '1rem auto 2rem'}}>We create tailored application development packages for businesses of all sizes. Contact us for a personalized quote.</p>
                        <a href="/contact" className="btn btn-outline">Get a Custom Quote</a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;
