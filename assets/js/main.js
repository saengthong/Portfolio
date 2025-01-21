document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // หยุดการรีเฟรชหน้า

    // ข้อมูลฟอร์ม
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

    // ใช้ EmailJS ในการส่งอีเมล
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
        .then(function (response) {
            alert('Email sent successfully!');
        })
        .catch(function (error) {
            alert('Failed to send email. Please try again later.');
            console.error('Error:', error);
        });
});
