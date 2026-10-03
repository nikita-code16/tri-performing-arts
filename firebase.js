
import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";

import { getAnalytics }
from "https://www.gstatic.com/firebasejs/12.19.0/firebase-analytics.js";

import { getDatabase, ref, set }
from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";
const firebaseConfig = {

    apiKey: "AIzaSyDtBlb8MJFyzeKeQ7dSbrD3ZcU0gxl6ftE",

    authDomain: "tri-performing-arts.firebaseapp.com",

    projectId: "tri-performing-arts",

    storageBucket: "tri-performing-arts.firebasestorage.app",

    messagingSenderId: "669491192577",

    appId: "1:669491192577:web:a6313310ef28efcec4f100",

    measurementId: "G-4MPJFJRRW0"

};


export const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const db = getDatabase(app);


set(ref(db, "websiteData"), {

    about: {

        name: "TRI School of Performing Arts",

        type: "Performing Arts School",

        activities: "Music | Dance | Theatre",

        location: "Gadhinglaj"

    },

    diviyan: {

        name: "Diviyan School of Kathak",

        type: "School of Kathak",

        logo: "diviyan-logo.png"

    },

    abhivyakti: {

        name: "Abhivyakti School of Film & Theatre",

        location: "Gadhinglaj",

        brochure: "abhivyakti-brochure.pdf"

    },

    gabha: {

        name: "GABHA",

        type: "School of Semi-Classical & Bollywood Dance",

        logo: "gabha-logo.png"

    },

    payment: {

        available: true

    },

    whatsapp: {

        number: "919356769743"

    },

    email: {

        available: true

    },

    instagram: {

        available: true

    },

    facebook: {

        available: true

    }

})

.then(() => {

    console.log("Website data saved to Firebase!");

})

.catch((error) => {

    console.error("Firebase error:", error);

});