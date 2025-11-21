// MEMBER DATA
const members = {
    java: {
        name: "Java",
        role: "Installer — Oikos Team Dubai",
        flag: "flags/uzb.png",
        phone: "+971 55 000 0000",
        exp: "3 years experience in Oikos",
        img: "photos/java.jpg" // Full Card Photo
    },

    stefano: {
        name: "Stefano Neri",
        role: "Director — Oikos Dubai",
        flag: "flags/italy.png",
        phone: "+971 50 000 0000",
        exp: "12 years experience",
        img: "photos/stefano.jpg"
    },

    cristian: {
        name: "Cristian",
        role: "Senior Installer",
        flag: "flags/italy.png",
        phone: "+971 50 000 0000",
        exp: "7 years experience",
        img: "photos/cristian.jpg"
    },

    dilshod: {
        name: "Dilshod",
        role: "Installer",
        flag: "flags/uzb.png",
        phone: "+971 55 000 0000",
        exp: "2 years experience",
        img: "photos/dilshod.jpg"
    },

    nurjan: {
        name: "Nurjan",
        role: "Logistics & Warehouse",
        flag: "flags/kz.png",
        phone: "+971 55 000 0000",
        exp: "4 years experience",
        img: "photos/nurjan.jpg"
    }
};


// SHOW MEMBER FUNCTION
function showMember(id) {
    const m = members[id];
    const right = document.getElementById("rightPanel");

    right.innerHTML = `
        <div class="profile-card">

            <div class="profile-banner" style="background-image: url('${m.img}')"></div>

            <div class="profile-content">
                <div class="profile-name">${m.name}</div>
                <div class="profile-role">${m.role}</div>

                <div class="profile-info">
                    <img src="${m.flag}" style="width:30px; border-radius:4px; vertical-align:middle;">
                    &nbsp; <b>Nationality:</b> 
                    ${m.flag.includes("uzb") ? "Uzbekistan" : m.flag.includes("kz") ? "Kazakhstan" : "Italy"}
                </div>

                <div class="profile-info">
                    <b>Experience:</b> ${m.exp}
                </div>

                <div class="profile-info">
                    <b>Phone/WhatsApp:</b> ${m.phone}
                </div>

                <a class="contact-btn" href="https://wa.me/971000000000" target="_blank">Contact</a>
            </div>

        </div>
    `;

    right.classList.add("show");
}
