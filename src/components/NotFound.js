import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className="not-found">
            <div className="container">
                <div className="not-found-content">
                    <h1>404</h1>
                    <h2>Page Not Found</h2>
                    <p>The page you're looking for doesn't exist or has been moved.</p>
                    <Link to="/" className="btn">Return Home</Link>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
