// Dynamic Ticker with Glow Effect
const tickerItems = [
    "MEDICAL INTERVIEWS", "TECH INTERVIEWS", "MARKETING", 
    "INTERNSHIPS", "GRADUATE ADMISSIONS", "BYU ENDORSEMENTS",
    "LINKEDIN OPTIMIZATION", "JOB SEARCH STRATEGY", "INEXPERIENCED APPLICANTS"
];
let tickerIndex = 0;
const tickerElement = document.getElementById("dynamicTicker");

if (tickerElement) {
    setInterval(() => {
        tickerElement.classList.remove("glow");
        tickerElement.style.opacity = "0"; // Fade out
        
        setTimeout(() => {
            tickerIndex = (tickerIndex + 1) % tickerItems.length;
            tickerElement.textContent = tickerItems[tickerIndex];
            tickerElement.style.opacity = "1"; // Fade in
            tickerElement.classList.add("glow");
        }, 600); 
    }, 2500); 
}

// Question Bank Data
const questionBanks = [
    { category: "Medical Interview", questions: ["Why medicine?", "Describe a time you failed.", "How do you handle high-stress situations?", "Discuss a recent medical ethics issue.", "How do you deliver bad news?"] },
    { category: "Tech Interview", questions: ["Explain a complex technical concept.", "Describe a time you had a bug you couldn't find.", "What is your favorite programming language?", "How do you stay updated with tech trends?", "Tell me about a successful project."] },
    { category: "Admissions Interview", questions: ["Why this institution?", "What will you contribute to our campus?", "Describe an academic challenge.", "Who is your role model?", "What are your extracurricular interests?"] },
    { category: "BYU Endorsement", questions: ["How do you live the Honor Code?", "Discuss a time you served someone else.", "How do you maintain your foundation?", "What does integrity mean?", "How will you contribute to the community?"] },
    { category: "General Interview", questions: ["Tell me about yourself.", "What are your greatest strengths?", "What are your weaknesses?", "Why should we hire you?", "Describe a conflict.", "How do you handle changing priorities?", "Tell me about leadership.", "What motivates you?", "How do you prefer to be managed?", "Do you have any questions?"] }
];

// Build Question Cards
const container = document.getElementById("questionsContainer");
if (container) {
    questionBanks.forEach(bank => {
        const card = document.createElement("div");
        card.className = "resource-card";
        
        let listHTML = bank.questions.map(q => `<li>${q}</li>`).join('');

        card.innerHTML = `
            <h3>${bank.category}</h3>
            <ul class="question-list">
                ${listHTML}
            </ul>
        `;
        container.appendChild(card);
    });
}

// Footer Logic
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;
