import { db, storage } from "./firebase.js";
import {
    doc, setDoc, collection
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import {
    ref, uploadBytes, getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const submitBtn = document.getElementById("submitBtn");
const status = document.getElementById("status");

submitBtn.onclick = async () => {
    status.innerText = "Uploading...";

    const date = document.getElementById("dateInput").value;
    const installer = document.getElementById("installerInput").value;
    const address = document.getElementById("addressInput").value;
    const model = document.getElementById("modelInput").value;
    const type = document.getElementById("typeInput").value;
    const description = document.getElementById("descriptionInput").value;

    const videoFile = document.getElementById("videoFile").files[0];
    const photoFiles = document.getElementById("photoFiles").files;

    if (!date) {
        status.innerText = "Date is required";
        return;
    }

    const jobID = date;

    // Save info document
    await setDoc(doc(db, "jobs", jobID, "info", "main"), {
        date,
        installer,
        address,
        model,
        type,
        description
    });

    // Upload VIDEO
    let videoUrl = "";
    if (videoFile) {
        const videoRef = ref(storage, `jobs/${jobID}/video/${videoFile.name}`);
        await uploadBytes(videoRef, videoFile);
        videoUrl = await getDownloadURL(videoRef);

        await setDoc(doc(db, "jobs", jobID, "video", "main"), {
            videoUrl
        });
    }

    // Upload PHOTOS
    for (let i = 0; i < photoFiles.length; i++) {
        const file = photoFiles[i];
        const photoRef = ref(storage, `jobs/${jobID}/photos/${file.name}`);

        await uploadBytes(photoRef, file);
        const photoUrl = await getDownloadURL(photoRef);

        await setDoc(doc(db, "jobs", jobID, "photos", file.name), {
            photoUrl
        });
    }

    status.innerText = "Uploaded successfully!";
};
