const chapters = {
    N3: [
        { chapter: "Intermediate Grammar", description: "Complex sentence structures" },
        { chapter: "Reading Skills", description: "Intermediate-level articles" },
        { chapter: "Kanji Essentials", description: "Advanced (~650 characters)" },
        { chapter: "Conversation Practice", description: "Role-play and formal dialogues" },
        { chapter: "Cultural Understanding", description: "Advanced cultural contexts" },
        { chapter: "Listening Comprehension", description: "Intermediate comprehension" },
        { chapter: "Writing Practice", description: "Advanced writing with Kanji" }
    ],
    N4: [
        { chapter: "Basic Grammar", description: "Basic verb conjugation and particles" },
        { chapter: "Intro to Kanji", description: "Introductory (~300 characters)" },
        { chapter: "Reading Practice", description: "Short texts" },
        { chapter: "Listening Basics", description: "Intermediate listening" },
        { chapter: "Verb Conjugation", description: "Basic sentence writing" },
        { chapter: "Particles & Syntax", description: "Understanding grammatical particles and sentence structure" },
        { chapter: "Conversational Practice", description: "Everyday conversation" }
    ],
    N5: [
        { chapter: "Foundational Vocabulary", description: "Basic sentence structure" },
        { chapter: "Basic Phrases", description: "Simple daily phrases" },
        { chapter: "Writing Basics", description: "Hiragana and Katakana basics" },
        { chapter: "Listening Practice", description: "Simple listening exercises" },
        { chapter: "Kanji Basics", description: "Minimal (~50 characters)" },
        { chapter: "Numbers and Time", description: "Learning numbers, days of the week, and time-related phrases" },
        { chapter: "Simple Sentence Structure", description: "Basic sentence construction using nouns and verbs" }
    ]
};


chapters.N5.forEach(chapter => {
    console.log(`${chapter.chapter}: ${chapter.description}`);
});

function openPopup(level) {
    document.getElementById("popup-level").innerText = level;
    const chapterList = document.getElementById("chapter-list");
    
    chapterList.innerHTML = chapters[level].map(chapter => 
        `<li><strong>${chapter.chapter}</strong>: ${chapter.description}</li>`
    ).join("");

    document.getElementById("popup").classList.add("active");
}

function closePopup() {
    document.getElementById("popup").classList.remove("active");
}
