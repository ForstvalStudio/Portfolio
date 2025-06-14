import React from 'react';

const Projects = () => {
    // Sample project data with images
    const projects = [
        {
            title: 'Enterprise Management System',
            category: 'Windows App',
            description: 'A comprehensive ERP system for manufacturing businesses with inventory management, production planning, and financial reporting.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
            tags: ['C#', '.NET', 'WPF', 'SQL Server']
        },
        {
            title: 'E-commerce Platform',
            category: 'Web App',
            description: 'A scalable e-commerce solution with integrated payment gateways, inventory management, and customer analytics.',
            image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop&q=80',
            tags: ['React', 'Node.js', 'MongoDB', 'Stripe']
        },
        {
            title: 'Health Tracking Solution',
            category: 'Mobile App',
            description: 'A health and fitness mobile application with workout tracking, nutrition planning, and progress analytics.',
            image: 'https://images.unsplash.com/photo-1510440777527-38815cfc6cc2?w=800&auto=format&fit=crop&q=80',
            tags: ['Flutter', 'Firebase', 'iOS', 'Android']
        },
        {
            title: 'Virtual Reality Experience',
            category: 'Game Development',
            description: 'An immersive VR game that allows users to explore historical landmarks and learn about different cultures.',
            image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&auto=format&fit=crop&q=80',
            tags: ['Unity', 'C#', 'Blender', 'Oculus']
        },
        {
            title: '3D Product Showcase',
            category: 'Three.js Experience',
            description: '3D product visualization platform allowing users to interact with and customize products before purchase.',
            image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&auto=format&fit=crop&q=80',
            tags: ['Three.js', 'WebGL', 'JavaScript', 'GLSL']
        },
        {
            title: 'Decentralized Finance Platform',
            category: 'Web3 Solution',
            description: 'A blockchain-based platform for managing digital assets, tracking investments, and participating in DeFi protocols.',
            image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=80',
            tags: ['Ethereum', 'Solidity', 'Web3.js', 'React']
        }
    ];

    return (
        <>
            <section className="hero projects-hero">
                <div className="container">
                    <h1>Our Portfolio</h1>
                    <p>Explore our diverse range of successful applications built across multiple platforms and technologies.</p>
                </div>
            </section>
            
            <section className="featured-projects">
                <div className="container">
                    <h2 className="section-title">Featured Projects</h2>
                    <div className="project-gallery">
                        {projects.map((project, index) => (
                            <div className="project-card" key={index}>
                                <div className="project-image">
                                    <img src={project.image} alt={project.title} />
                                    <div className="project-category">{project.category}</div>
                                </div>
                                <div className="project-info">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="project-tags">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span className="tag" key={tagIndex}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="project-overlay">
                                    <div className="overlay-content">
                                        <h3>{project.title}</h3>
                                        <span className="category">{project.category}</span>
                                        <p>{project.description}</p>
                                        <button className="btn btn-outline">View Details</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
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
