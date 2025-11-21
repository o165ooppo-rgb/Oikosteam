import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const calendarGrid = document.getElementById("calendarGrid");
const monthName = document.getElementById("monthName");

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();

const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
monthName.innerText = monthNames[month] + " " + year;

// Load job IDs (dates)
const jobsRef = collection(db, "jobs");
const docsSnap = await getDocs(jobsRef);

let jobDates = {};

docsSnap.forEach(doc => {
    jobDates[doc.id] = true;
});

// Build calendar
const firstDay = new Date(year, month, 1).getDay();
const daysInMonth = new Date(year, month + 1, 0).getDate();

for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement("div");
    calendarGrid.appendChild(empty);
}

for (let d = 1; d <= daysInMonth; d++) {
    const dateKey = `${year}-${month+1}-${d}`;

    const div = document.createElement("div");
    div.classList.add("calendar-day");

    if (jobDates[dateKey]) div.classList.add("has-job");

    div.innerText = d;

    div.onclick = () => {
        window.location.href = `view.html?id=${dateKey}`;
    };

    calendarGrid.appendChild(div);
}
