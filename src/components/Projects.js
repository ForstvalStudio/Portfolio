import React from 'react';

const Projects = () => {
    // Sample project data
    const projects = [
        {
            title: 'Enterprise Resource Management',
            category: 'Windows Application',
            description: 'A comprehensive ERP system for manufacturing businesses with inventory management, production planning, and financial reporting.',
            backgroundColor: '#e9f5ff'
        },
        {
            title: 'E-commerce Platform',
            category: 'Web Application',
            description: 'A scalable e-commerce solution with integrated payment gateways, inventory management, and customer analytics.',
            backgroundColor: '#f0f7ef'
        },
        {
            title: 'Fitness Tracker',
            category: 'Mobile Application',
            description: 'A health and fitness mobile application with workout tracking, nutrition planning, and progress analytics.',
            backgroundColor: '#fff5f5'
        },
        {
            title: 'Virtual Reality Experience',
            category: 'Game Development',
            description: 'An immersive VR game that allows users to explore historical landmarks and learn about different cultures.',
            backgroundColor: '#f5f0ff'
        },
        {
            title: 'Interactive Product Showcase',
            category: 'Three.js Solution',
            description: '3D product visualization platform allowing users to interact with and customize products before purchase.',
            backgroundColor: '#fffdf0'
        },
        {
            title: 'Decentralized Finance Dashboard',
            category: 'Web3 Solution',
            description: 'A blockchain-based platform for managing digital assets, tracking investments, and participating in DeFi protocols.',
            backgroundColor: '#f0ffff'
        }
    ];

    return (
        <>
            <section className="hero">
                <h2>Our Portfolio of Innovative Projects</h2>
                <p>Explore our diverse range of successful applications built across multiple platforms and technologies.</p>
            </section>
            
            <section>
                <h2 className="section-title">Featured Projects</h2>
                <div className="project-gallery">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className="project-image" style={{backgroundColor: project.backgroundColor, height: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '20px'}}>
                                <h3 style={{margin: '0', textAlign: 'center'}}>{project.title}</h3>
                                <span>{project.category}</span>
                            </div>
                            <div className="project-overlay">
                                <h3>{project.title}</h3>
                                <p>{project.category}</p>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            
            <section>
                <div style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
                    <h2 className="section-title">Have a Project in Mind?</h2>
                    <p style={{marginBottom: '2rem'}}>We're ready to help you bring your vision to life with our expertise in application development across all platforms.</p>
                    <a href="/contact" className="btn">Discuss Your Project</a>
                </div>
            </section>
        </>
    );
};

export default Projects;
