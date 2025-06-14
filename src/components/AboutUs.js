import React from 'react';

const AboutUs = () => {
    // Sample team data - replace with actual team info
    const teamMembers = [
        {
            name: 'Alex Johnson',
            role: 'Founder & CEO',
            bio: 'Expert in Windows application architecture with over 15 years of experience in enterprise software development.',
            backgroundColor: '#e9f5ff'
        },
        {
            name: 'Morgan Chen',
            role: 'Technical Lead',
            bio: 'Full-stack developer specializing in web applications and responsive design, with a focus on performance optimization.',
            backgroundColor: '#f0f7ef'
        },
        {
            name: 'Sam Rivera',
            role: 'Mobile Developer',
            bio: 'iOS and Android specialist with expertise in creating seamless cross-platform mobile experiences.',
            backgroundColor: '#fff5f5'
        },
        {
            name: 'Taylor Kim',
            role: 'Game Developer',
            bio: 'Unity expert with a background in creating immersive gaming experiences across multiple platforms.',
            backgroundColor: '#f5f0ff'
        },
        {
            name: 'Jordan Smith',
            role: '3D Visualization Expert',
            bio: 'Three.js specialist focused on creating interactive 3D experiences for web and mobile platforms.',
            backgroundColor: '#fffdf0'
        },
        {
            name: 'Casey Wong',
            role: 'Blockchain Developer',
            bio: 'Web3 innovator with expertise in smart contracts, decentralized applications, and blockchain architecture.',
            backgroundColor: '#f0ffff'
        }
    ];

    return (
        <>
            <section className="hero">
                <h2>Meet Our Team of Application Development Specialists</h2>
                <p>We combine technical expertise, creative thinking, and a passion for innovation to deliver exceptional digital solutions.</p>
            </section>
            
            <section>
                <h2 className="section-title">Our Mission</h2>
                <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '3rem'}}>
                    <p>We are dedicated to creating powerful, intuitive applications that solve real-world problems and drive business growth across all digital platforms.</p>
                    <p>Our mission is to transform ideas into impactful digital experiences through technical excellence, innovative design, and a deep understanding of user needs.</p>
                </div>
                
                <div style={{maxWidth: '800px', margin: '0 auto', marginBottom: '3rem'}}>
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem'}}>
                        <div>
                            <h3>Our Vision</h3>
                            <p>To be recognized as the leading application development studio that consistently delivers innovative, high-quality software solutions across all platforms.</p>
                        </div>
                        <div>
                            <h3>Our Values</h3>
                            <ul style={{paddingLeft: '1.5rem'}}>
                                <li>Technical Excellence</li>
                                <li>User-Centered Design</li>
                                <li>Continuous Innovation</li>
                                <li>Collaborative Problem Solving</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            
            <section>
                <h2 className="section-title">Our Team</h2>
                <div className="project-gallery">
                    {teamMembers.map((member, index) => (
                        <div className="project-card" key={index}>
                            <div className="project-image" style={{backgroundColor: member.backgroundColor, height: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '20px'}}>
                                <h3 style={{margin: '0', textAlign: 'center'}}>{member.name}</h3>
                                <span>{member.role}</span>
                            </div>
                            <div className="project-overlay">
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                                <p>{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            
            <section>
                <div style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
                    <h2 className="section-title">Join Our Team</h2>
                    <p style={{marginBottom: '2rem'}}>We're always looking for talented individuals who are passionate about application development and innovation.</p>
                    <a href="/contact" className="btn">Get in Touch</a>
                </div>
            </section>
        </>
    );
};

export default AboutUs;
