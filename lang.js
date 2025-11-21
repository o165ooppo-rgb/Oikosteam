// ===============================
//   DICTIONARY
// ===============================

const dictionary = {
    ru: {
        menu_calendar: "Календарь",
        menu_add: "Добавить работу",
        menu_team: "Команда",

        team_java_role: "Установщик",
        team_stefano_role: "Директор",
        team_cristian_role: "Старший установщик",
        team_dilshod_role: "Установщик"
    },

    en: {
        menu_calendar: "Calendar",
        menu_add: "Add Work",
        menu_team: "Team",

        team_java_role: "Installer",
        team_stefano_role: "Director",
        team_cristian_role: "Senior Installer",
        team_dilshod_role: "Installer"
    },

    it: {
        menu_calendar: "Calendario",
        menu_add: "Aggiungi lavoro",
        menu_team: "Team",

        team_java_role: "Installatore",
        team_stefano_role: "Direttore",
        team_cristian_role: "Installatore Senior",
        team_dilshod_role: "Installatore"
    }
};

// ===============================
//   APPLY LANGUAGE
// ===============================
function applyLanguage(lang) {
    document.querySelector("[data-text='menu_calendar']").textContent = dictionary[lang].menu_calendar;
    document.querySelector("[data-text='menu_add']").textContent = dictionary[lang].menu_add;
    document.querySelector("[data-text='menu_team']").textContent = dictionary[lang].menu_team;

    document.querySelector("[data-text='team_java_role']").textContent = dictionary[lang].team_java_role;
    document.querySelector("[data-text='team_stefano_role']").textContent = dictionary[lang].team_stefano_role;
    document.querySelector("[data-text='team_cristian_role']").textContent = dictionary[lang].team_cristian_role;
    document.querySelector("[data-text='team_dilshod_role']").textContent = dictionary[lang].team_dilshod_role;

    // Active class
    document.querySelectorAll(".lang-switch span").forEach(el => el.classList.remove("active-lang"));
    document.querySelector(`.lang-switch span[data-lang='${lang}']`).classList.add("active-lang");

    localStorage.setItem("siteLanguage", lang);
}

// ===============================
//   LANGUAGE INIT
// ===============================
window.onload = () => {
    const saved = localStorage.getItem("siteLanguage") || "en";
    applyLanguage(saved);

    document.querySelectorAll(".lang-switch span").forEach(el => {
        el.addEventListener("click", () => applyLanguage(el.dataset.lang));
    });
};
