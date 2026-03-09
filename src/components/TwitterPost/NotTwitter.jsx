import React from 'react';
import TextbookView from './TextbookView';
import { textbookContent } from './TextbookContent';
import './NotTwitter.css';

const NotTwitter = () => {
    return (
        <div className="nt-container">
            <div className="nt-glass-card">
                <header className="nt-header">
                    <h1 className="nt-title">
                        The Physics of Quantum Mechanics
                    </h1>
                    <div className="nt-divider"></div>
                    <p className="nt-subtitle">
                        James Binney & David Skinner
                    </p>
                </header>

                <TextbookView content={textbookContent} />

                <footer className="nt-footer">
                    © 2008–2013 James Binney and David Skinner. All rights reserved.
                </footer>
            </div>
        </div>
    );
};

export default NotTwitter;
