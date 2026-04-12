// --- Dynamic Visual Ticker ---
const tickerData = [
    { text: "MEDICAL INTERVIEWS", icon: "🩺" },
    { text: "TECH INTERVIEWS", icon: "💻" },
    { text: "MARKETING", icon: "📈" },
    { text: "INTERNSHIPS", icon: "🎓" },
    { text: "GRADUATE ADMISSIONS", icon: "🏛️" },
    { text: "BYU ENDORSEMENTS", icon: "📜" },
    { text: "LINKEDIN OPTIMIZATION", icon: "🔗" },
    { text: "JOB SEARCH STRATEGY", icon: "🎯" },
    { text: "INEXPERIENCED APPLICANTS", icon: "🌱" }
];
let tickerIndex = 0;
const tickerElement = document.getElementById("dynamicTicker");
const tickerVisual = document.getElementById("tickerVisual");

if (tickerElement && tickerVisual) {
    setInterval(() => {
        tickerElement.classList.remove("glow");
        tickerVisual.classList.remove("glow");
        tickerElement.style.opacity = "0";
        tickerVisual.style.opacity = "0";
        
        setTimeout(() => {
            tickerIndex = (tickerIndex + 1) % tickerData.length;
            tickerElement.textContent = tickerData[tickerIndex].text;
            tickerVisual.textContent = tickerData[tickerIndex].icon;
            
            tickerElement.style.opacity = "1";
            tickerVisual.style.opacity = "1";
            tickerElement.classList.add("glow");
            tickerVisual.classList.add("glow");
        }, 600); 
    }, 2500); 
}

// --- Question Bank Data ---
const questionBanks = [
    { category: "Medical Interview", questions: ["Why medicine?", "Describe a time you failed.", "How do you handle high-stress situations?", "Discuss a recent medical ethics issue.", "How do you deliver bad news?", "What is your philosophy on patient care?"] },
    { category: "Tech Interview", questions: ["Explain a complex technical concept.", "Describe a time you had a bug you couldn't find.", "What is your favorite programming language?", "How do you stay updated with tech trends?", "Tell me about a successful project.", "How do you handle technical debt?"] },
    { category: "Admissions Interview", questions: ["Why this institution?", "What will you contribute to our campus?", "Describe an academic challenge.", "Who is your role model?", "What are your extracurricular interests?", "Where do you see yourself in 5 years?"] },
    { category: "BYU Endorsement", questions: ["How do you live the Honor Code?", "Discuss a time you served someone else.", "How do you maintain your foundation?", "What does integrity mean?", "How will you contribute to the community?", "Describe a time you faced a moral dilemma."] },
    { category: "General Interview", questions: ["Tell me about yourself.", "What are your greatest strengths?", "What are your weaknesses?", "Why should we hire you?", "Describe a conflict.", "How do you handle changing priorities?"] }
];

// --- Question Interface Logic ---
const container = document.getElementById("questionsContainer");
const questionInterface = document.getElementById("questionInterface");
const interfaceQuestions = document.getElementById("interfaceQuestions");
const interfaceTitle = document.getElementById("interfaceTitle");
const backBtn = document.getElementById("backToCategories");
const selectedCountSpan = document.getElementById("selectedCount");

if (container && questionInterface) {
    // Generate Cards
    questionBanks.forEach(bank => {
        const card = document.createElement("div");
        card.className = "resource-card";
        card.innerHTML = `
            <h3>${bank.category}</h3>
            <p>Click to view and select up to 5 practice questions.</p>
        `;
        
        card.addEventListener("click", () => {
            openQuestionInterface(bank);
        });
        container.appendChild(card);
    });

    // Back Button Logic
    if (backBtn) {
        backBtn.addEventListener("click", () => {
            questionInterface.classList.remove("active");
            container.style.display = "grid";
        });
    }
}

function openQuestionInterface(bank) {
    container.style.display = "none";
    questionInterface.classList.add("active");
    interfaceTitle.textContent = bank.category;
    interfaceQuestions.innerHTML = "";
    selectedCountSpan.textContent = "0";
    
    let selectedCount = 0;

    bank.questions.forEach((q) => {
        const label = document.createElement("label");
        label.className = "checkbox-label";
        
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = q;
        checkbox.style.marginRight = "10px";
        
        checkbox.addEventListener("change", (e) => {
            if (e.target.checked) {
                if (selectedCount >= 5) {
                    e.target.checked = false;
                    alert("You can only select up to 5 questions for practice.");
                } else {
                    selectedCount++;
                }
            } else {
                selectedCount--;
            }
            selectedCountSpan.textContent = selectedCount;
        });

        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(q));
        interfaceQuestions.appendChild(label);
    });
}

// --- LocalStorage & Form Logic (Rubric Requirement 15) ---
const bookingForm = document.getElementById("bookingForm");
const bookingMessage = document.getElementById("bookingMessage");
const nameInput = document.getElementById("fullName");

if (bookingForm) {
    // Pre-fill name if it exists in localStorage on page load
    const savedName = localStorage.getItem("elpoUserName");
    if (savedName && nameInput) {
        nameInput.value = savedName;
    }

    bookingForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        // Save to localStorage
        if (nameInput) {
            localStorage.setItem("elpoUserName", nameInput.value);
        }
        
        // Display success message using template literal (Rubric Requirement 14)
        bookingMessage.innerHTML = `<p style="color: green; font-weight: bold; background: #e8f5e9; padding: 1rem; border-radius: 6px;">Thank you, ${nameInput.value}! Your session request has been confirmed.</p>`;
        
        // Reset form but retain the name
        bookingForm.reset();
        if (nameInput) {
            nameInput.value = localStorage.getItem("elpoUserName");
        }
    });
}

// --- Footer Logic ---
const yearSpan = document.getElementById("currentyear");
const lastModifiedSpan = document.getElementById("lastModified");

if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}
if (lastModifiedSpan) {
    lastModifiedSpan.textContent = `Last Modification: ${document.lastModified}`;
}
