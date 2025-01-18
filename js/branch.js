const branchDetails = {
    "Dhaka": {
        address: "House-620-22, Road 09, Mirpur DOHS, Dhaka 1216,Bangladesh",
        phone: "+880 19 9488 4302",
        email: "info@matservicesbd.com"
    },
    "Chattogram": {
        address: "Mim Villa, 40/A, Katalganj Residential Area, Road No-4, Panchlaish, Chittagong,Bangladesh",
        phone: "+880 18 1933 1429",
        email: "info@matservicesbd.com"
    },
    "Japan": {
        address: "JP office: 1-8-23-203 Maizuru, Chuo ku, Fukuoka 810-0073 Japan",
        phone: "+81 92 123 4567",
        email: "info@matservicesbd.com"
    }
};

function showBranch(branch) {
    const contactInfoDiv = document.getElementById("office-contact-info");
    const { address, phone, email } = branchDetails[branch];

    contactInfoDiv.innerHTML = `
<p><i class="fas fa-map-marker-alt branch-icon"></i> ${address}</p>
<p><i class="fas fa-phone-alt branch-icon"></i> ${phone}</p>
<p><i class="fas fa-envelope branch-icon"></i> ${email}</p>
`;
    document.querySelectorAll(".branch-button").forEach(button => button.classList.remove("active"));
    document.querySelectorAll(".branch-button").forEach(button => {
        if (button.textContent.includes(branch)) {
            button.classList.add("active");
        }
    });
}
window.onload = function () {
    showBranch('Dhaka');
};
