import React from 'react';
import './NotTwitter.css';

const TextbookView = ({ content }) => {
    // A simple parser to make the content look beautiful
    const formatContent = (text) => {
        const rawLines = text.split('\n');
        const processedItems = [];

        rawLines.forEach((line) => {
            const trimmed = line.trim();
            if (!trimmed) {
                processedItems.push({ type: 'spacer' });
                return;
            }

            // Split line if it contains multiple bullets (e.g., "• Item 1 • Item 2")
            // We use a regex that matches the start of a bullet but not inside a word
            const subItems = trimmed.split(/(?=[•⊲])/);

            subItems.forEach((subItem) => {
                const item = subItem.trim();
                if (!item) return;

                // Helper to extract trailing page number
                const extractPage = (str) => {
                    const match = str.match(/\s+(\d+)$/);
                    if (match) {
                        return {
                            text: str.substring(0, match.index).trim(),
                            page: match[1]
                        };
                    }
                    return { text: str, page: null };
                };

                // Filter out junk: 
                // 1. "Problems" lines
                // 2. "Contents" lines (e.g., "vi Contents", "Contents vii")
                // 3. Lines that are purely numeric (page numbers)
                if (item.toLowerCase().startsWith('problems') ||
                    item.toLowerCase().includes('contents') ||
                    /^\d+$/.test(item)) {
                    return;
                }

                // Chapter titles (e.g., "1 Probability...")
                if (/^\d+\s+[A-Za-z]/.test(item) && item.length > 8 && !item.includes('.')) {
                    const { text } = extractPage(item);
                    processedItems.push({ type: 'chapter', text });
                }
                // Section titles (e.g., "1.1 The laws...")
                else if (/^\d+\.\d+\s+/.test(item)) {
                    const { text } = extractPage(item);
                    processedItems.push({ type: 'section', text });
                }
                // Bullets
                else if (item.startsWith('•') || item.startsWith('⊲')) {
                    const { text } = extractPage(item);
                    // Strip the symbol from the rendered text
                    const cleanText = text.replace(/^[•⊲]\s*/, '');
                    processedItems.push({ type: 'bullet', text: cleanText });
                }
                // Regular paragraph
                else {
                    processedItems.push({ type: 'paragraph', text: item });
                }
            });
        });

        return processedItems.map((item, index) => {
            switch (item.type) {
                case 'spacer':
                    return <div key={index} className="nt-spacer" />;
                case 'chapter':
                    return (
                        <div key={index} className="nt-chapter-container">
                            <div className="nt-chapter-title-row">
                                <span className="nt-chapter-num">{item.text.split(' ')[0]}</span>
                                <span className="nt-chapter-title-text">{item.text.split(' ').slice(1).join(' ')}</span>
                            </div>
                        </div>
                    );
                case 'section':
                    return (
                        <div key={index} className="nt-section-container">
                            <div className="nt-section-text">{item.text}</div>
                        </div>
                    );
                case 'bullet':
                    return (
                        <div key={index} className="nt-bullet-container">
                            <div className="nt-bullet-line">{item.text}</div>
                        </div>
                    );
                case 'problems':
                    return <div key={index} className="nt-problems-header">{item.text}</div>;
                case 'paragraph':
                    return <div key={index} className="nt-paragraph">{item.text}</div>;
                default:
                    return null;
            }
        });
    };

    return (
        <div className="nt-reader-content">
            {formatContent(content)}
        </div>
    );
};

export default TextbookView;
