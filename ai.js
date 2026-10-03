import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";

import {
    getAI,
    getGenerativeModel,
    GoogleAIBackend
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-ai.js";


const firebaseConfig = {
   apiKey: "AIzaSyDtBlb8MJFyzeKeQ7dSbrD3ZcU0gxl6ftE",
    authDomain: "tri-performing-arts.firebaseapp.com",
    projectId: "tri-performing-arts",
    storageBucket: "tri-performing-arts.firebasestorage.app",
    messagingSenderId: "669491192577",
    appId: "1:669491192577:web:a6313310ef28efcec4f100",
    measurementId: "G-4MPJFJRRW0"
};


const firebaseApp = initializeApp(firebaseConfig);


const ai = getAI(firebaseApp, {
    backend: new GoogleAIBackend()
});


const model = getGenerativeModel(ai, {
    model: "gemini-3.5-flash-lite"
});


export async function askTRIAssistant(question) {

    const prompt = `
You are TRI Assistant for TRI School of Performing Arts.

TRI information:
- TRI School of Performing Arts is located in Gadhinglaj.
- It offers Music, Dance and Theatre.
- Diviyan School of Kathak is part of TRI.
- Abhivyakti School of Film & Theatre is part of TRI.
- GABHA School of Semi-Classical & Bollywood Dance is part of TRI.

Your behavior:
1. For TRI-related questions, answer using the TRI information provided above.
2. You can also answer normal general questions such as Python, Excel, AI, technology, etc.
3. For unrelated or inappropriate questions, politely redirect the visitor back to TRI.
4. Never invent TRI information such as fees, timings, courses, contact details or events.
5. If a TRI-related detail is not provided, say that the information is not available.
6. Keep every answer short and simple.
7. Answer in maximum 2 short sentences unless the visitor asks for more details.

Visitor question:
${question}
`;

    const result = await model.generateContent(prompt);

    return result.response.text();
}