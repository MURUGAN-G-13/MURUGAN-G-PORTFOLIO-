document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Logic
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeBtn = document.querySelector('.close-btn');
    const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });

    // Dynamic AOS (Animate On Scroll) Attribute Initialization
    const aosElements = [
        { selector: '.section-title', animation: 'fade-up' },
        { selector: '.section-subtitle', animation: 'fade-up', delay: 100 },
        { selector: '.project-card', animation: 'fade-up', stagger: 150 },
        { selector: '.skill-category-block', animation: 'fade-up' },
        { selector: '.skill-icon-card', animation: 'zoom-in', stagger: 100 },
        { selector: '.tool-card', animation: 'flip-up', stagger: 100 },
        { selector: '.award-card', animation: 'zoom-in-up', stagger: 150 },
        { selector: '.contact-info-card .info-item', animation: 'fade-right', stagger: 150 },
        { selector: '.contact-form', animation: 'fade-left', delay: 200 },
        { selector: '.home-left', animation: 'fade-right' },
        { selector: '.home-right', animation: 'fade-left' }
    ];

    aosElements.forEach(config => {
        const elements = document.querySelectorAll(config.selector);
        elements.forEach((el, index) => {
            el.setAttribute('data-aos', config.animation);
            el.setAttribute('data-aos-duration', '800');
            if (config.stagger) {
                el.setAttribute('data-aos-delay', (index % 10) * config.stagger);
            } else if (config.delay) {
                el.setAttribute('data-aos-delay', config.delay);
            }
        });
    });

    // Initialize AOS Library
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: false, // whether animation should happen only once - while scrolling down
            offset: 50, // offset (in px) from the original trigger point
        });
    }
});

// Dual Option Form Submit Handlers
function sendToWhatsApp() {
    const name = document.getElementById('senderName').value;
    const email = document.getElementById('senderEmail').value;
    const message = document.getElementById('senderMessage').value;

    if (!name || !message) {
        alert('Please fill out at least your Name and Message to send via WhatsApp.');
        return;
    }

    const text = `Hi Murugan,\n\nMy name is ${name}.\nEmail: ${email}\n\nMessage:\n${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/919345475466?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
}

function sendToEmail() {
    const name = document.getElementById('senderName').value;
    const email = document.getElementById('senderEmail').value;
    const message = document.getElementById('senderMessage').value;

    if (!name || !message) {
        alert('Please fill out at least your Name and Message to send via Email.');
        return;
    }

    const subject = `Portfolio Inquiry from ${name}`;
    const body = `Hi Murugan,\n\nMy name is ${name}.\nMy Email: ${email}\n\nHere is my message:\n${message}`;
    const mailtoUrl = `mailto:murugankgm25@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
}
