document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#input").addEventListener("keydown", function (e) {
        if (e.code === "Enter") {
            let input = document.getElementById("input").value;
            document.getElementById("input").value = "";
            let response = compare(input);
            addChatEntry(input, response);
        }
    });
});

// Listen for input event to suggest questions
document.getElementById("input").addEventListener("input", function (e) {
    const inputText = e.target.value.toLowerCase().trim();
    suggestQuestions(inputText);
});

function suggestQuestions(input) {
    console.log("Input:", input); // Check if input is received
    const dropdownContent = document.getElementById("dropdownContent");
    // Clear previous suggestions
    dropdownContent.innerHTML = "";

    // Keywords and corresponding suggested questions
    const suggestions = {
        "wha": [
            "What is the menstrual cycle?",
            "What is menstruation?",
            "What is ovulation?",
            "What are menstrual cramps?",
            "What is PMS (Premenstrual Syndrome)?"
        ],
        "can": [
            "Can stress affect my menstrual cycle?",
            "Can exercise affect my menstrual cycle?",
            "Can diet affect my menstrual cycle?",
            "Can hormonal changes during menstruation affect my mood?",
            "Can I swim whilst on my period?"

        ],
        "do": [
            "Does my period cause change in mood?",
            "Does eating unhealthy affect my period?",
        ],
        "ho": [
            "How to relieve period cramps?",
            "How can I relieve period-related headaches?",
            "How can I address period-related mood swings?",
            "How can I track my menstrual cycle?"
        ],
        
        // Add more keywords and suggestions as needed
    };

    // Check if input contains any keyword
    for (const keyword in suggestions) {
        if (input.includes(keyword)) {
            console.log("Keyword found:", keyword); // Check if keyword is found
            const questions = suggestions[keyword];
            questions.forEach(question => {
                const suggestionDiv = document.createElement("div");
                suggestionDiv.textContent = question;
                suggestionDiv.addEventListener("click", function () {
                    document.getElementById("input").value = question;
                    clearDropdown(); // Clear suggestions after selection
                });
                dropdownContent.appendChild(suggestionDiv);
            });
        }
    }

    // Show or hide the dropdown based on suggestions
    if (dropdownContent.children.length > 0) {
        console.log("Suggestions available:", dropdownContent.children.length); // Check if suggestions are available
        dropdownContent.style.display = "block";
    } else {
        console.log("No suggestions available");
        dropdownContent.style.display = "none";
    }
}

function clearDropdown() {
    document.getElementById("dropdownContent").innerHTML = "";
    document.getElementById("dropdownContent").style.display = "none";
};

function compare(input) {
    input = input.toLowerCase().trim();
    const responses = {
        "what is the menstrual cycle?": [
            "The menstrual cycle is the monthly series of changes a woman's body goes through in preparation for the possibility of pregnancy. It involves the shedding of the uterine lining (menstruation) and the release of an egg (ovulation)."
        ],
        "what is menstruation?": [
            "Menstruation, commonly known as a period, is the shedding of the uterine lining. It usually lasts around 3 to 7 days and occurs approximately every 28 days for most women."
        ],
        "what is ovulation?" : [
            "Ovulation is the release of an egg from the ovary. It typically occurs around the middle of the menstrual cycle, approximately 14 days before the start of the next period.",
        ],
        "what are menstrual cramps?": [
            "Menstrual cramps, also known as dysmenorrhea, are abdominal pains that occur before and during menstruation. They are caused by contractions of the uterus as it sheds its lining."
        ],
        "what is PMS (Premenstrual Syndrome)?": [
            "PMS refers to a group of physical and emotional symptoms that many women experience in the days leading up to menstruation. Symptoms can include mood swings, irritability, bloating, and breast tenderness"
        ],
        "can stress affect my menstrual cycle?": [
          "Yes, stress can affect the menstrual cycle. High levels of stress can disrupt hormone balance, leading to irregular periods or changes in the length and intensity of menstrual cycles."
        ],
        "can exercise affect my menstrual cycle?": [
            "Yes, regular exercise can have an impact on your menstrual cycle. Moderate exercise is generally beneficial and may help regulate your cycle, but excessive exercise or sudden changes in activity level can sometimes lead to irregular periods or amenorrhea (absence of menstruation)."
          ],
        "can diet affect my menstrual cycle?": [
            "Yes, diet can influence your menstrual cycle. Eating a balanced diet rich in nutrients, vitamins, and minerals can support overall reproductive health. Some research suggests that certain dietary factors, such as caffeine and alcohol intake, may affect menstrual regularity and symptoms."
          ],
          
        "does eating unhealthy affect my period?": [
            "Yes, diet can influence your menstrual cycle. Eating a balanced diet rich in nutrients, vitamins, and minerals can support overall reproductive health. Some research suggests that certain dietary factors, such as caffeine and alcohol intake, may affect menstrual regularity and symptoms."
          ],
        "can hormonal changes during menstruation affect my mood?": [
            "Yes, hormonal fluctuations during the menstrual cycle can affect mood and emotional well-being. Some women may experience mood swings, irritability, or changes in energy levels in the days leading up to their period."
          ],
        "does my period cause change in mood?": [
            "Yes, hormonal fluctuations during the menstrual cycle can affect mood and emotional well-being. Some women may experience mood swings, irritability, or changes in energy levels in the days leading up to their period."
          ],
        "can I swim whilst on my period?": [
            "Yes, you can use tampons, menstrual cups, or other menstrual products while swimming. They are designed to absorb menstrual flow and can be worn while swimming without any adverse effects."
          ],
        "how to relieve period cramps?": [
            "To relieve period cramps, try taking over-the-counter pain relievers like ibuprofen and applying a heating pad to your abdomen for 15-20 minutes at a time. Additionally, practicing relaxation techniques such as deep breathing or gentle exercise like walking can help alleviate discomfort."
          ],
        "how can I relieve period-related headaches?": [
            "To relieve period-related headaches, try applying a cold compress to your forehead or neck, taking over-the-counter pain relievers like ibuprofen or acetaminophen, and staying hydrated. Avoiding triggers such as caffeine, alcohol, and certain foods may also help prevent headaches during menstruation"
            ],
        "how can I address period-related mood swings?": [
            "To address period-related mood swings, prioritize self-care practices such as getting enough sleep, eating a balanced diet, exercising regularly, and managing stress through relaxation techniques like deep breathing or meditation. Talking to a trusted friend or healthcare provider about your emotions can also provide support during this time."        ],
        "how to relieve period cramps?": [
            "To relieve period cramps, try taking over-the-counter pain relievers like ibuprofen and applying a heating pad to your abdomen for 15-20 minutes at a time. Additionally, practicing relaxation techniques such as deep breathing or gentle exercise like walking can help alleviate discomfort."
          ],
        "how can I track my menstrual cycle?": [
            "You can track your menstrual cycle by marking the start and end dates of your period on a calendar or using a menstrual cycle tracking app. Additionally, you can monitor changes in cervical mucus, basal body temperature, or other physical symptoms to predict ovulation and fertility."
          ],
        // Add more questions and answers as needed
    };

    if (responses.hasOwnProperty(input)) {
        const answers = responses[input];
        return answers[Math.floor(Math.random() * answers.length)];
    } else {
        return "I'm not sure how to respond to that.";
    }
}

function addChatEntry(input, product) {
    const messagesContainer = document.getElementById("messages");
    
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.className = "user response";
    userDiv.innerHTML = `${input}`;
    messagesContainer.appendChild(userDiv);
   
    let botDiv = document.createElement("div");
    let botText = document.createElement("span");
    botDiv.id = "bot";
    botDiv.className = "bot response";
    botText.innerText = "Typing...";
    botDiv.appendChild(botText);
    messagesContainer.appendChild(botDiv);
   
    setTimeout(() => {
        botText.innerText = `${product}`;
    }, 2000);
}