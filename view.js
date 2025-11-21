import { db } from "./firebase.js";
import {
    doc, getDoc, getDocs, collection
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const urlParams = new URLSearchParams(window.location.search);
const jobID = urlParams.get("id");

// DOM
const videoElement = document.getElementById("workVideo");
const carouselTrack = document.getElementById("carouselTrack");

const installerText = document.getElementById("installer");
const addressText = document.getElementById("address");
const modelText = document.getElementById("model");
const typeText = document.getElementById("type");
const descriptionText = document.getElementById("description");

// Load INFO
const infoDoc = await getDoc(doc(db, "jobs", jobID, "info", "main"));
if (infoDoc.exists()) {
    const data = infoDoc.data();

    installerText.innerText = "Installer: " + data.installer;
    addressText.innerText = "Address: " + data.address;
    modelText.innerText = "Model: " + data.model;
    typeText.innerText = "Door Type: " + data.type;
    descriptionText.innerText = "Description: " + data.description;
}

// Load VIDEO
const videoDoc = await getDoc(doc(db, "jobs", jobID, "video", "main"));
if (videoDoc.exists()) {
    const v = videoDoc.data();
    videoElement.src = v.videoUrl;
}

// Load PHOTOS
const photosRef = collection(db, "jobs", jobID, "photos");
const photosSnap = await getDocs(photosRef);

let photos = [];

photosSnap.forEach(doc => {
    photos.push(doc.data().photoUrl);
});

// IF NO PHOTOS → USE YOUR DEMO PHOTO
if (photos.length === 0) {
    photos.push("/mnt/data/synua_granada.jpg");
}

// Build carousel slides
photos.forEach(url => {
    let slide = document.createElement("div");
    slide.classList.add("carousel-slide");
    slide.style.backgroundImage = `url('${url}')`;

    carouselTrack.appendChild(slide);
});

// ===== CAROUSEL LOGIC =====
let index = 0;

document.getElementById("nextBtn").onclick = () => {
    if (index < photos.length - 1) {
        index++;
        carouselTrack.style.transform = `translateX(-${index * 100}%)`;
    }
};

document.getElementById("prevBtn").onclick = () => {
    if (index > 0) {
        index--;
        carouselTrack.style.transform = `translateX(-${index * 100}%)`;
    }
};
