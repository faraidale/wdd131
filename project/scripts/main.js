// 1. Ticker Logic for index.html
const tickerItems = [
    "Medical Interview", "Tech Interview", "Marketing", 
    "Internship Interview", "Admissions Interview", 
    "BYU Endorsement Interview", "General Interview", 
    "Inexperienced Candidates", "LinkedIn Profile Optimization", "Job Search Strategy"
];
let tickerIndex = 0;
const tickerElement = document.getElementById("dynamicTicker");

if (tickerElement) {
    setInterval(() => {
        tickerElement.classList.remove("glow");
        setTimeout(() => {
            tickerIndex = (tickerIndex + 1) % tickerItems.length;
            tickerElement.textContent = tickerItems[tickerIndex];
            tickerElement.classList.add("glow");
        }, 500); 
    }, 2000); 
}

// 2. Question Banks Array (Objects) for questions.html
const questionBanks = [
    { category: "Medical Interview", questions: ["Why medicine?", "Describe a time you failed.", "How do you handle high-stress situations?", "Discuss a recent medical ethics issue.", "How do you deliver bad news?"] },
    { category: "Tech Interview", questions: ["Explain a complex technical concept to a non-technical person.", "Describe a time you had a bug you couldn't find.", "What is your favorite programming language and why?", "How do you stay updated with tech trends?", "Tell me about a successful project you deployed."] },
    { category: "Marketing Interview", questions: ["Pitch a new product to me.", "How do you measure campaign success?", "Describe a time a campaign failed.", "How do you handle negative brand feedback?", "What tools do you use for market analysis?"] },
    { category: "Internship Interview", questions: ["Why are you interested in this internship?", "What relevant coursework have you taken?", "Where do you see yourself in 5 years?", "How do you prioritize multiple tasks?", "Give an example of your teamwork skills."] },
    { category: "Admissions Interview", questions: ["Why do you want to attend this institution?", "What will you contribute to our campus?", "Describe an academic challenge you overcame.", "Who is your role model?", "What are your extracurricular interests?"] },
    { category: "BYU Endorsement Interview", questions: ["How do you live the Honor Code?", "Discuss a time you served someone else.", "How do you maintain your spiritual foundation?", "What does integrity mean to you?", "How will you contribute to the BYU-Pathway community?"] },
    { category: "General Interview", questions: ["Tell me about yourself.", "What are your greatest strengths?", "What are your weaknesses?", "Why should we hire you?", "Describe a conflict with a coworker.", "How do you handle changing priorities?", "Tell me about a time you showed leadership.", "What motivates you?", "How do you prefer to be managed?", "Do you have any questions for us?"] }
];

// 3. DOM Manipulation & Template Literals
const container = document.getElementById("questionsContainer");
if (container) {
    questionBanks.forEach(bank => {
        const card = document.createElement("div");
        card.className = "resource-card";
        
        let listHTML = "";
        bank.questions.forEach(q => {
            listHTML += `<li>${q}</li>`;
        });

        card.innerHTML = `
            <h3>${bank.category}</h3>
            <ul class="question-list">
                ${listHTML}
            </ul>
        `;
        container.appendChild(card);
    });
}

// 4. Form Handling & LocalStorage
const bookingForm = document.getElementById("bookingForm");
if (bookingForm) {
    bookingForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        
        const name = document.getElementById("fullName").value;
        const service = document.getElementById("serviceCategory").value;
        const messageDiv = document.getElementById("bookingMessage");

        let bookings = Number(window.localStorage.getItem("elpo-bookings")) || 0;
        bookings++;
        window.localStorage.setItem("elpo-bookings", bookings);

        if (bookings === 1) {
            messageDiv.innerHTML = `<p style="color: green; font-weight: bold; padding: 1rem; background: #e6f4ea; border-radius: 4px;">Thank you, ${name}! Your ${service} session is confirmed. We are excited to help you prepare.</p>`;
        } else {
            messageDiv.innerHTML = `<p style="color: green; font-weight: bold; padding: 1rem; background: #e6f4ea; border-radius: 4px;">Welcome back, ${name}! This is booking number ${bookings} with us. Your ${service} session is confirmed.</p>`;
        }
        
        bookingForm.reset();
    });
}

// 5. Footer Dates
const yearSpan = document.getElementById("currentyear");
const modifiedPara = document.getElementById("lastModified");

if (yearSpan && modifiedPara) {
    yearSpan.textContent = new Date().getFullYear();
    modifiedPara.textContent = `Last Modification: ${document.lastModified}`;
}
