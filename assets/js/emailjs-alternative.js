// ===== EMAILJS ALTERNATIVE =====
// Add this script tag to your HTML head section:
// <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

// Initialize EmailJS
emailjs.init("YOUR_USER_ID");

// Alternative form submission function using EmailJS
async function submitWithEmailJS(data) {
    const templateParams = {
        from_name: data.name,
        from_email: data.email,
        from_phone: data.phone,
        package: data.package,
        date: data.date,
        time: data.time,
        location: data.location || 'Not specified',
        message: data.message || 'No additional details provided'
    };

    try {
        const response = await emailjs.send(
            'service_goj4z1e', // EmailJS service ID
            'template_jbvepzo',  // EmailJS template ID
            templateParams
        );
        
        return response;
    } catch (error) {
        throw new Error('Email sending failed: ' + error.text);
    }
}

// Usage: Replace submitToFormspree(data) with submitWithEmailJS(data) in main.js
