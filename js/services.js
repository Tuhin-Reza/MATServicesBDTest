function showServiceSection() {
    const urlParams = new URLSearchParams(window.location.search);
    const service = urlParams.get('service');
    console.log("URL Parameter 'service':", service); // Debugging

    const buttons = document.querySelectorAll('.service-btn');
    const details = document.querySelectorAll('.service-details');

    const serviceMap = {
        languageCourse: 'service-1',
        AdmissionSupport: 'service-2',
        jobPlacement: 'service-3',
        careerCounselling: 'service-4'
    };

    const targetId = serviceMap[service] || 'service-1';

    buttons.forEach(button => {
        button.classList.remove('active');
        if (button.getAttribute('data-target') === targetId) {
            button.classList.add('active');
        }
    });

    details.forEach(detail => {
        detail.classList.remove('active');
        if (detail.id === targetId) {
            detail.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    showServiceSection();

    const buttons = document.querySelectorAll('.service-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');

            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            document.querySelectorAll('.service-details').forEach(detail => {
                detail.classList.remove('active');
                if (detail.id === targetId) {
                    detail.classList.add('active');
                }
            });
        });
    });
});
