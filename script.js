        // Initialize Lucide Icons for static elements
        lucide.createIcons();

        // ------------------------------------------
        // CERTIFICATION CARD INJECTION LOGIC (Simplified for static card view)
        // ------------------------------------------
        document.addEventListener('DOMContentLoaded', () => {
            // Check if certifications data exists (defined in the script tag in the HTML)
            if (typeof certifications === 'undefined') {
                console.error('Certification data array is missing.');
                return;
            }
            
            const certs = certifications;
            const container = document.getElementById('cert-cards-container');
            const template = document.getElementById('cert-card-template');

            if (container && template) {
                container.innerHTML = ''; 
                // Ensure the container class is correct
                container.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6';

                certs.forEach(cert => {
                    const clone = template.content.cloneNode(true);
                    const card = clone.querySelector('.glass-card');
                    
                    // Find elements within the card
                    const icon = card.querySelector('i:nth-child(1)');
                    const title = card.querySelector('p:nth-child(2)');
                    const issuer = card.querySelector('p:nth-child(3)');
                    const date = card.querySelector('p:nth-child(4)');
                    
                    // NOTE: The link button element is now removed from the template
                    // so we only focus on displaying the core information.

                    // Set Icon and Color
                    icon.setAttribute('data-lucide', cert.icon);
                    // Use the color property for the icon
                    icon.className = `w-8 h-8 ${cert.color} neon-glow`; 

                    // Set Content
                    title.textContent = cert.title;
                    // Clean up the issuer name by removing text in parentheses
                    issuer.textContent = `Issuer: ${cert.issuer.split('(')[0].trim()}`; 
                    date.textContent = `Date/Expiry: ${cert.date}`;
                    
                    container.appendChild(card);
                });

                // Re-initialize Lucide icons after DOM manipulation to render the new icons
                lucide.createIcons();
            }
        });