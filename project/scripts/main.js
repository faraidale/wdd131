// 1. Array of Objects
const interviewQuestions = [
    { id: 1, text: "Tell me about a time you failed.", difficulty: "Hard" },
    { id: 2, text: "Why do you want to work here?", difficulty: "Easy" },
    { id: 3, text: "Describe a conflict with a coworker and how you resolved it.", difficulty: "Hard" },
    { id: 4, text: "What are your greatest technical strengths?", difficulty: "Easy" }
];

// 2. DOM Manipulation, Array Methods, Template Literals, and Conditional Branching
function displayQuestions(filterValue) {
    const container = document.getElementById("questionsContainer");
    if (!container) return; // Only runs on questions.html

    container.innerHTML = "";

    const filteredQuestions = interviewQuestions.filter(q => {
        if (filterValue === "All") return true;
        return q.difficulty === filterValue;
    });

    filteredQuestions.forEach(q => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>Question #${q.id}</h3>
            <p><strong>${q.text}</strong></p>
            <p><em>Difficulty: ${q.difficulty}</em></p>
        `;
        container.appendChild(card);
    });
}

// 3. Event Listeners
const difficultyFilter = document.getElementById("difficultyFilter");
if (difficultyFilter) {
    difficultyFilter.addEventListener("change", (e) => {
        displayQuestions(e.target.value);
    });
    displayQuestions("All"); // Load initially
}

// 4. Form Handling & LocalStorage
const bookingForm = document.getElementById("bookingForm");
if (bookingForm) {
    bookingForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        
        const name = document.getElementById("fullName").value;
        const messageDiv = document.getElementById("bookingMessage");

        let bookings = Number(window.localStorage.getItem("elpo-bookings")) || 0;
        bookings++;
        window.localStorage.setItem("elpo-bookings", bookings);

        if (bookings === 1) {
            messageDiv.innerHTML = `<p style="color: green; font-weight: bold;">Thank you, ${name}! This is your first booking. We are excited to help you prepare.</p>`;
        } else {
            messageDiv.innerHTML = `<p style="color: green; font-weight: bold;">Welcome back, ${name}! You have now booked ${bookings} sessions with us.</p>`;
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
