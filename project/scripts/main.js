// --- Dynamic Visual Ticker ---
const tickerData = [
    { text: "MEDICAL INTERVIEWS", icon: "🩺" },
    { text: "TECH INTERVIEWS", icon: "💻" },
    { text: "ADMINISTRATION", icon: "📁" },
    { text: "GRADUATE ADMISSIONS", icon: "🏛️" },
    { text: "BYU ENDORSEMENTS", icon: "📜" },
    { text: "SALES & CUSTOMER SERVICE", icon: "🤝" },
    { text: "ENGINEERING", icon: "⚙️" },
    { text: "LEGAL AFFAIRS", icon: "⚖️" }
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

// --- Question Bank Data (From Career Interview Blueprint) ---
const questionBanks = [
    { 
        category: "Administration & Management", 
        desc: "Practice situational and behavioral questions for Receptionists, Administrative Assistants, and Management roles.",
        questions: [
            "Tell me about a time you had to deal with someone angry on the phone.",
            "Can you tell me about a time you were overwhelmed at work and how you handled that?",
            "Have you ever received a call from an upset client? How did you handle the situation in a professional manner?",
            "Tell me about a situation in which you needed to maintain discretion and did so successfully?",
            "How do you deal with someone in the office you don't get along with?",
            "Tell me about a time you made a mistake. How did you handle it?",
            "A high-performing employee has recently been under-performing. How would you deal with the situation?",
            "How do you deal with conflict between team members?",
            "What is the toughest decision you ever had to make?",
            "What steps would you take to terminate an employee who is not performing adequately?",
            "Are you comfortable reprimanding employees for negative behaviours? Provide your approach to discipline.",
            "Tell me about a time you led by example."
        ] 
    },
    { 
        category: "Customer Service & Sales", 
        desc: "Questions focusing on client interaction, de-escalation, and sales strategy.",
        questions: [
            "Tell me about a time you had to deal with an irate or angry customer.",
            "Would you ever put the customer’s needs over company policies? What is your take on the ethics of rule-breaking to solve a problem?",
            "How would you deal with a colleague who is behaving unethically to secure customer satisfaction?",
            "Tell me what would you do if a customer wants to return a package of food that is open and half gone?",
            "How do you usually respond to negative feedback or criticism, be it from customers or teammates?",
            "Sell me this chair/stapler on my desk right now.",
            "Tell me about a mistake you made in sales?",
            "What is your method of handling customer objections?",
            "How do you keep yourself motivated after facing rejection?",
            "In your last position, how did you balance maintaining current relationships with generating more leads?",
            "Explain to me what this company does as if I am a prospective customer.",
            "What would you consider to be your most significant sales deal, and why?"
        ] 
    },
    { 
        category: "Medical & Healthcare", 
        desc: "Situational questions for Nurses, Doctors, and Pharmacists dealing with high-stress scenarios.",
        questions: [
            "Tell me about a time you had to handle a difficult patient?",
            "Describe a situation with a family which you had issues with poor communication. How did you resolve it?",
            "How would you deal with a family member who isn't happy with your care of the patient?",
            "How do you deal with a family that isn't following care instructions?",
            "How do you handle a family's questions that are outside of your purview?",
            "What's your approach for dealing with families who want to talk about death?",
            "Sometimes a patient might not want medical information given to family members. How do you handle that?",
            "How would you handle a patient who complains constantly of pain?",
            "How do you handle family members that are disruptive in the vicinity (e.g. yelling, arguing, smoking)?",
            "How would you handle an emergency that comes up while you are consulting another patient?",
            "How do you react to highly stressful situations or deal effectively with personal stress in your job?",
            "Would you dispense an Emergency Contraceptive to a female under the age of 16 years?"
        ] 
    },
    { 
        category: "Engineering & Technology", 
        desc: "Technical and problem-solving questions for IT Specialists, Technicians, and Engineers.",
        questions: [
            "How do you rate your skills when it comes to communicating something technical to a non-technical audience?",
            "Would you block an unsavoury site that you know an employee is repeatedly visiting or take other measures?",
            "Can you tell me about a time that a project did not go as planned and what you did to fix the problem?",
            "Describe a time when you used your technical skills in a practical way to solve a problem?",
            "What would you do if there was a maintenance issue you couldn't solve?",
            "How do you handle the many complexities of this job?",
            "Describe a time you were able to improve upon the design that was originally suggested.",
            "What is the most challenging engineering project you've worked on, and how did you overcome the difficulties?",
            "How do you manage your time during a fast-paced engineering project?",
            "As an IT support professional, you know it's vital that you troubleshoot problems quickly. What's your process?",
            "Tell me about the project you are most proud of, and what your contribution was?",
            "Do you prefer on-site or cloud-based solutions for IT software in the business environment? Why?"
        ] 
    },
    { 
        category: "Legal & Education", 
        desc: "Ethics, conflict resolution, and classroom management for Lawyers and Teachers.",
        questions: [
            "If a student in your class has a serious behaviour problem how will you manage it?",
            "What would you do If you felt that a student of yours is being neglected or abused at home?",
            "How would you deal with an angry parent?",
            "What is it that frustrates you the most about the classroom?",
            "Why did you leave your last teaching job?",
            "How do you handle disagreements with a superior over a legal matter?",
            "Can you elaborate on a situation where you were unsuccessful and how you handled it?",
            "What is the toughest case you have handled? What was the result?",
            "What is your greatest weakness as a lawyer?",
            "How do you handle students who are underperforming?",
            "What must a Teacher NOT do?",
            "Can you give an example of where you have chosen to involve yourself in the broader legal community?"
        ] 
    },
    { 
        category: "BYU Endorsement Interview", 
        desc: "NOTE: This is designed to kill your nerves. It is not a job interview; it is designed for you to speak with the chaplain fluently and without anxiety about the Honor Code.",
        questions: [
            "How do you live the Honor Code on a daily basis?",
            "Discuss a time you served someone else in your community.",
            "How do you maintain your foundation and faith?",
            "What does integrity mean to you personally?",
            "How do you handle situations involving the avoidance of alcohol and coffee?",
            "What is your understanding of the Law of Chastity and avoiding premarital sex?",
            "How will you contribute to the community on campus?",
            "Describe a time you faced a moral dilemma.",
            "How do you strive to be honest in your academic work?",
            "How do you resolve conflicts with roommates or peers?",
            "Why is the ecclesiastical endorsement important to you?",
            "How do you plan to uplift those around you while studying?"
        ] 
    },
    { 
        category: "General Interview", 
        desc: "Standard behavioral questions applicable to any industry or inexperienced applicant.",
        questions: [
            "Tell me about yourself.",
            "What are your greatest strengths?",
            "What are your weaknesses?",
            "Why should we hire you?",
            "Describe a conflict you had with a coworker and how you resolved it.",
            "How do you handle changing priorities?",
            "Tell me about a time you demonstrated leadership.",
            "What motivates you to do your best work?",
            "How do you prefer to be managed?",
            "Where do you see yourself in five years?",
            "Tell me about a time you failed and what you learned.",
            "Do you have any questions for us?"
        ] 
    }
];

// --- Interface Logic ---
const container = document.getElementById("questionsContainer");
const questionInterface = document.getElementById("questionInterface");
const interfaceQuestions = document.getElementById("interfaceQuestions");
const interfaceTitle = document.getElementById("interfaceTitle");
const interfaceDescription = document.getElementById("interfaceDescription");
const backBtn = document.getElementById("backToCategories");
const selectedCountSpan = document.getElementById("selectedCount");
const startPracticeBtn = document.getElementById("startPracticeBtn");
const bookInterface = document.getElementById("bookInterface");
const closeBooksBtn = document.getElementById("closeBooksBtn");

// Array to store selected questions
let selectedQuestionsArray = [];

if (container) {
    // Generate Resource Cards from Array
    questionBanks.forEach(bank => {
        const card = document.createElement("div");
        card.className = "resource-card";
        card.innerHTML = `
            <h3>${bank.category}</h3>
            <p>Select to practice situational and behavioral questions.</p>
        `;
        card.addEventListener("click", () => openQuestionInterface(bank));
        container.appendChild(card);
    });

    // Add Manual Book Card
    const bookCard = document.createElement("div");
    bookCard.className = "resource-card";
    bookCard.style.borderLeft = "4px solid var(--primary)";
    bookCard.innerHTML = `
        <h3>Book Recommendations</h3>
        <p>Explore our published interview manuals tailored for specific careers.</p>
    `;
    bookCard.addEventListener("click", openBookInterface);
    container.appendChild(bookCard);

    // Back Button Logic
    if (backBtn) {
        backBtn.addEventListener("click", () => {
            questionInterface.classList.remove("active");
            container.style.display = "grid";
        });
    }
    if (closeBooksBtn) {
        closeBooksBtn.addEventListener("click", () => {
            bookInterface.classList.remove("active");
            closeBooksBtn.style.display = "none";
            container.style.display = "grid";
        });
    }
}

function openQuestionInterface(bank) {
    container.style.display = "none";
    bookInterface.classList.remove("active");
    questionInterface.classList.add("active");
    
    interfaceTitle.textContent = bank.category;
    interfaceDescription.textContent = bank.desc;
    interfaceQuestions.innerHTML = "";
    selectedCountSpan.textContent = "0";
    startPracticeBtn.style.display = "none";
    selectedQuestionsArray = [];
    
    bank.questions.forEach((q) => {
        const label = document.createElement("label");
        label.className = "checkbox-label";
        
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = q;
        checkbox.style.marginRight = "10px";
        
        checkbox.addEventListener("change", (e) => {
            if (e.target.checked) {
                if (selectedQuestionsArray.length >= 5) {
                    e.target.checked = false;
                    alert("You have reached the maximum of 5 questions. Please start your session.");
                } else {
                    selectedQuestionsArray.push(e.target.value);
                }
            } else {
                selectedQuestionsArray = selectedQuestionsArray.filter(item => item !== e.target.value);
            }
            
            selectedCountSpan.textContent = selectedQuestionsArray.length;
            
            // Show start button only if exactly 5 questions are selected
            if (selectedQuestionsArray.length === 5) {
                startPracticeBtn.style.display = "inline-block";
            } else {
                startPracticeBtn.style.display = "none";
            }
        });

        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(q));
        interfaceQuestions.appendChild(label);
    });
}

function openBookInterface() {
    container.style.display = "none";
    questionInterface.classList.remove("active");
    bookInterface.classList.add("active");
    closeBooksBtn.style.display = "inline-block";
}

// --- LocalStorage Logic (Rubric Requirement 15 & 14) ---

// 1. Save Practice Questions to LocalStorage
if (startPracticeBtn) {
    startPracticeBtn.addEventListener("click", () => {
        if (selectedQuestionsArray.length === 5) {
            localStorage.setItem("elpoPracticeQuestions", JSON.stringify(selectedQuestionsArray));
            alert(`Success! Your 5 questions for ${interfaceTitle.textContent} have been saved to your session. Proceed to "Book a Session" to finalize your mock interview.`);
        }
    });
}

// 2. Booking Form Logic
const bookingForm = document.getElementById("bookingForm");
const bookingMessage = document.getElementById("bookingMessage");
const nameInput = document.getElementById("fullName");

if (bookingForm) {
    const savedName = localStorage.getItem("elpoUserName");
    if (savedName && nameInput) {
        nameInput.value = savedName;
    }

    bookingForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        if (nameInput) {
            localStorage.setItem("elpoUserName", nameInput.value);
        }
        
        bookingMessage.innerHTML = `<p style="color: green; font-weight: bold; background: #e8f5e9; padding: 1rem; border-radius: 6px;">Thank you, ${nameInput.value}! Your session request has been confirmed.</p>`;
        
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
