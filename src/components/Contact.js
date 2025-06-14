import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState({
        submitting: false,
        submitted: false,
        error: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus({ submitting: true, submitted: false, error: false });
        
        // Simulate form submission - in a real app, use Formspree or another form handling service
        setTimeout(() => {
            setFormStatus({ submitting: false, submitted: true, error: false });
            // Reset form after successful submission
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 1500);
    };

    return (
        <>
            <section className="hero">
                <h2>Let's Create Your Next Application</h2>
                <p>Reach out to discuss your application development needs across any platform: Windows, Web, Mobile, Game, Three.js or Web3.</p>
            </section>
            
            <section>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', maxWidth: '1200px', margin: '0 auto' }}>
                    <div>
                        <h2 className="section-title">Contact Us</h2>
                        {formStatus.submitted ? (
                            <div className="success-message" style={{ padding: '2rem', backgroundColor: '#f0f7ef', borderRadius: '4px', marginBottom: '2rem' }}>
                                <h3>Thank you for reaching out!</h3>
                                <p>We've received your message and will get back to you as soon as possible.</p>
                                <button 
                                    className="btn" 
                                    onClick={() => setFormStatus({ submitting: false, submitted: false, error: false })}
                                    style={{ marginTop: '1rem' }}
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                                    <label htmlFor="name">Name</label>
                                    <input 
                                        type="text" 
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name" 
                                        required 
                                        style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }}
                                    />
                                </div>
                                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                                    <label htmlFor="email">Email</label>
                                    <input 
                                        type="email" 
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your Email" 
                                        required 
                                        style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }}
                                    />
                                </div>
                                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                                    <label htmlFor="subject">Subject</label>
                                    <input 
                                        type="text" 
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="What's this about?" 
                                        required 
                                        style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }}
                                    />
                                </div>
                                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                                    <label htmlFor="message">Message</label>
                                    <textarea 
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your project or inquiry" 
                                        required
                                        rows="5"
                                        style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }}
                                    ></textarea>
                                </div>
                                <button 
                                    type="submit" 
                                    className="btn"
                                    disabled={formStatus.submitting}
                                    style={{ width: '100%' }}
                                >
                                    {formStatus.submitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        )}
                    </div>
                    
                    <div>
                        <h2 className="section-title">Support Our Work</h2>
                        <div className="donate-section" style={{ marginBottom: '2rem' }}>
                            <p>If you'd like to support our ongoing projects and initiatives, consider making a donation. Your contribution helps us continue developing innovative applications and solutions.</p>
                            
                            <div style={{ background: '#f5f5f5', padding: '2rem', borderRadius: '4px', marginTop: '2rem' }}>
                                <h3 style={{ marginTop: 0 }}>Donation Options</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
                                    <a href="#paypal" className="btn">Donate via PayPal</a>
                                    <a href="#crypto" className="btn btn-outline">Donate via Cryptocurrency</a>
                                    <a href="#bank" className="btn btn-outline">Bank Transfer</a>
                                </div>
                            </div>
                        </div>
                        
                        <h3>Connect With Us</h3>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                            <a href="https://twitter.com/orgstudio" className="social-icon" aria-label="Twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://linkedin.com/company/orgstudio" className="social-icon" aria-label="LinkedIn">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/ForstvalStudio" className="social-icon" aria-label="GitHub">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://instagram.com/orgstudio" className="social-icon" aria-label="Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            
            <section>
                <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className="section-title">Where to Find Us</h2>
                    <p style={{ marginBottom: '2rem' }}>Our team works remotely and collaboratively across the globe, but you can always reach us online.</p>
                    <p>Email: <a href="mailto:hello@orgstudio.com">hello@orgstudio.com</a></p>
                </div>
            </section>
        </>
    );
};

export default Contact;
