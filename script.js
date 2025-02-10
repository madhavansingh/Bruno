let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.lang = "en-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe() {
    let day = new Date()
    let hours = day.getHours()
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Sir")
    }
    else if (hours >= 12 && hours < 16) {
        speak("Good afternoon Sir")
    } else {
        speak("Good Evening Sir")
    }
}

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click", () => {
    recognition.start()
    voice.style.display = "block"
    btn.style.display = "none"
})

function takeCommand(message) {
    voice.style.display = "none"
    btn.style.display = "flex"
    if (message.includes("hello") || message.includes("hey")) {
        speak("hello sir, what can I help you?")
    }
    else if (message.includes("who are you")) {
        speak("I am a virtual assistant, created by Team Zero")
    }
    else if (message.includes("open youtube")) {
        speak("Opening YouTube...")
        window.open("https://youtube.com/", "_blank")
    }
    else if (message.includes("open google")) {
        speak("Opening Google...")
        window.open("https://google.com/", "_blank")
    }
    else if (message.includes("open facebook")) {
        speak("Opening Facebook...")
        window.open("https://facebook.com/", "_blank")
    }
    else if (message.includes("open instagram")) {
        speak("Opening Instagram...")
        window.open("https://instagram.com/", "_blank")
    }
    else if (message.includes("open calculator")) {
        speak("Opening Calculator...")
        window.open("calculator://")
    }
    else if (message.includes("open whatsapp")) {
        speak("Opening WhatsApp...")
        window.open("whatsapp://")
    }
    else if (message.includes("open spotify")) {
        speak("Opening Spotify...")
        window.open("spotify://")
    }
    else if (message.includes("open zoom")) {
        speak("Opening Zoom...")
        window.open("zoom://")
    }
    else if (message.includes("open gmail")) {
        speak("Opening Gmail...")
        window.open("https://mail.google.com", "_blank")
    }
    else if (message.includes("open calendar")) {
        speak("Opening Google Calendar...")
        window.open("https://calendar.google.com", "_blank")
    }
    else if (message.includes("open skype")) {
        speak("Opening Skype...")
        window.open("skype://")
    }
    else if (message.includes("open google maps")) {
        speak("Opening Google Maps...")
        window.open("https://maps.google.com", "_blank")
    }
    else if (message.includes("open chat gpt")) {
        speak("Opening ChatGPT...")
        window.open("https://chat.openai.com/", "_blank")
    }
    else if (message.includes("open teams")) {
        speak("Opening Microsoft Teams...")
        window.open("https://teams.microsoft.com/", "_blank")
    }
    else if (message.includes("open netflix")) {
        speak("Opening netflix...")
        window.open("https://netflix.com", "_blank")
    }
    else if (message.includes("open mail")) {
        speak("Opening Mail app...")
        window.open("mailto:") // This will open the default email client
    }
    else if (message.includes("time")) {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" })
        speak(time)
    }
    else if (message.includes("open among us")) {
        speak("Opening Among Us...")
        window.location.href = "open -a 'Among Us'"
    }
    
    else if (message.includes("date")) {
        let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short" })
        speak(date)
    }
    else {
        let finalText = "This is what I found: " + message.replace("bruno", "") || message.replace("bruno", "")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("bruno", "")}`, "_blank")
    }
}
