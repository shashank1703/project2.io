function toggleContactForm() {
    const contactFormWrapper = document.getElementById('contactFormWrapper');
    contactFormWrapper.style.display = (contactFormWrapper.style.display === 'none' || contactFormWrapper.style.display === '') ? 'flex' : 'none';
}
