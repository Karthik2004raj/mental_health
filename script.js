class MentalHealthChatbot {
    constructor() {
        this.chatMessages = document.getElementById('chatMessages');
        this.messageInput = document.getElementById('messageInput');
        this.sendButton = document.getElementById('sendButton');
        this.quickReplies = document.getElementById('quickReplies');
        
        // Theme configurations for different mental health states
        this.themes = {
            depression: {
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                headerBg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                primaryColor: '#667eea',
                secondaryColor: '#764ba2',
                accentColor: '#ff6b6b',
                name: 'Calm Blue'
            },
            anxiety: {
                background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
                headerBg: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
                primaryColor: '#a8edea',
                secondaryColor: '#fed6e3',
                accentColor: '#ff9a9e',
                name: 'Soothing Mint'
            },
            loss: {
                background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
                headerBg: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
                primaryColor: '#ffecd2',
                secondaryColor: '#fcb69f',
                accentColor: '#ff9a9e',
                name: 'Warm Sunset'
            },
            motivation: {
                background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
                headerBg: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
                primaryColor: '#f6d365',
                secondaryColor: '#fda085',
                accentColor: '#ff6b6b',
                name: 'Sunny Boost'
            },
            stress: {
                background: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
                headerBg: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
                primaryColor: '#d299c2',
                secondaryColor: '#fef9d7',
                accentColor: '#a8edea',
                name: 'Lavender Calm'
            },
            loneliness: {
                background: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
                headerBg: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
                primaryColor: '#89f7fe',
                secondaryColor: '#66a6ff',
                accentColor: '#ffecd2',
                name: 'Ocean Breeze'
            },
            default: {
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                headerBg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                primaryColor: '#667eea',
                secondaryColor: '#764ba2',
                accentColor: '#ff6b6b',
                name: 'Default Blue'
            }
        };
        
        this.currentTheme = 'default';
        
        // Age-group tailored responses
        this.responses = {
            depression: {
                kid: [
                    "It's okay to feel sad sometimes. Try drawing how you feel or talking to a grown-up you trust!",
                    "Feeling down can be tough. Maybe cuddle with a favorite toy or watch a fun show to cheer up a little?",
                    "Sad feelings come and go. How about doing something you love, like playing a game?"
                ],
                teen: [
                    "Feeling depressed can be really hard, and it's okay to feel this way sometimes. Have you talked to a friend or a counselor about how you're feeling?",
                    "It's tough when things feel heavy. Maybe listen to music you like or write down what's on your mind?",
                    "You're not alone in feeling down. Try doing one small thing you enjoy, like gaming or texting a friend."
                ],
                adult: [
                    "Depression can feel overwhelming, but your feelings are valid. Have you considered talking to a mental health professional for support?",
                    "It takes courage to acknowledge depression. Small steps matter—like a short walk or a warm drink. What's one thing you could try today?",
                    "Be gentle with yourself; depression can make things feel heavy. Have you found any activities that bring a bit of comfort?"
                ],
                senior: [
                    "Feeling down can be hard at any age, and it's okay to feel this way. Have you shared how you're feeling with someone close or a doctor?",
                    "Depression can make days feel long. Maybe try a favorite hobby or calling a friend to lift your spirits?",
                    "Your feelings matter. Small moments, like enjoying a cup of tea or a memory, can help. What's something you enjoy?"
                ]
            },
            anxiety: {
                kid: [
                    "Feeling worried is okay! Try taking slow breaths like you're blowing bubbles. What's making you feel this way?",
                    "When you're nervous, try squeezing a squishy toy or counting to 10 slowly. Want to tell me more?",
                    "It's normal to feel anxious. Maybe hug a pet or tell a grown-up what's on your mind?"
                ],
                teen: [
                    "Anxiety can make your mind race. Try breathing in for 4, holding for 4, and out for 6. What's got you worried?",
                    "Feeling anxious sucks, but you're not alone. Maybe try a playlist or a quick TikTok break to relax?",
                    "Anxiety can be tough. Ground yourself by naming 5 things you see around you. Want to share what's up?"
                ],
                adult: [
                    "Anxiety can feel intense. Try a 4-4-6 breathing technique to calm your mind. What's triggering your anxiety today?",
                    "Ground yourself with the 5-4-3-2-1 technique: name 5 things you see, 4 you can touch, etc. What's on your mind?",
                    "Anxiety doesn't define you. Have you tried relaxation techniques or talking to someone about what's causing it?"
                ],
                senior: [
                    "Anxiety can feel overwhelming, but small steps help. Try slow breathing or a calming tea. What's worrying you?",
                    "Worries can grow big, but you're stronger than them. Maybe chat with a friend or try a quiet activity?",
                    "It's okay to feel anxious. Try focusing on one thing you enjoy, like reading or gardening, to ease your mind."
                ]
            },
            loss: {
                kid: [
                    "Missing someone is really hard. It's okay to cry or talk about them. Want to share a fun memory?",
                    "When you feel sad about someone, try drawing a picture for them. What's something you loved doing with them?",
                    "It's okay to miss someone a lot. Maybe tell a grown-up how you feel or hug your favorite toy?"
                ],
                teen: [
                    "Losing someone hurts a lot, and it's okay to feel sad or mad. Have you talked to anyone about it, like a friend?",
                    "Grief can feel heavy. Maybe write about your favorite memory or listen to music that reminds you of them?",
                    "It's tough to lose someone. Take it one day at a time and share how you feel with someone you trust."
                ],
                adult: [
                    "I'm so sorry for your loss. Grief is personal, and all your feelings are valid. What would help you feel supported?",
                    "Losing someone leaves a void. Healing takes time. What's a memory of them that brings you comfort?",
                    "Grief can be unpredictable. Be kind to yourself. Have you tried writing about your feelings or sharing memories?"
                ],
                senior: [
                    "Losing someone is deeply painful. Your feelings are valid. Would talking about them or a memory help?",
                    "Grief can feel heavy at times. Maybe share a story about them or do something they loved?",
                    "I'm sorry for your loss. Take your time with these feelings. What's a special memory you hold dear?"
                ]
            },
            motivation: {
                kid: [
                    "You can do it! Try one small thing, like picking up your toys, and give yourself a high-five!",
                    "Feeling stuck? Do something fun, like jumping or coloring, to get moving again!",
                    "You're awesome! Try one little step, like smiling or helping someone, to feel great!"
                ],
                teen: [
                    "Feeling unmotivated is normal. Start with something small, like 5 minutes of homework or a quick walk.",
                    "Motivation can be hard to find. Try a song that pumps you up or a quick chat with a friend!",
                    "One small step can kickstart things. What's something tiny you could do, like texting a friend?"
                ],
                adult: [
                    "Motivation ebbs and flows. Start with a small task, like making your bed, to build momentum. What's one step you could take?",
                    "Action often sparks motivation. What's a 5-minute task you could tackle to feel accomplished?",
                    "It's okay to feel unmotivated. Revisit something you enjoy to reignite your spark. What's that for you?"
                ],
                senior: [
                    "Some days feel harder to get going. Try a small task, like a short walk or a call, to feel good.",
                    "Motivation can start with one step. What's something you love, like a hobby, to get moving?",
                    "You don't need to rush. Pick one small thing, like reading a page, to feel proud today."
                ]
            },
            stress: {
                kid: [
                    "Feeling stressed? Take slow breaths like you're smelling a flower. What's making you feel this way?",
                    "Stress can be yucky. Try playing with a toy or telling a grown-up what's up!",
                    "It's okay to feel stressed. Maybe draw a picture or snuggle up to feel calmer?"
                ],
                teen: [
                    "Stress can pile up fast. Try breathing slowly or watching a funny video to chill. What's stressing you?",
                    "When things feel too much, take a break with music or a quick game. Want to talk about it?",
                    "Stress is rough. Try writing down what's bugging you or texting a friend to feel lighter."
                ],
                adult: [
                    "Stress can be overwhelming. Try the 4-7-8 breathing technique to relax. What's causing your stress?",
                    "Take a moment for yourself—maybe a walk or music. What's one thing you can do to ease stress today?",
                    "Stress is tough but manageable. Have you found small ways to unwind, like a hobby or talking it out?"
                ],
                senior: [
                    "Stress can weigh heavy. Try slow breathing or a favorite activity, like knitting, to relax.",
                    "You've handled stress before. Maybe a quiet moment or a chat with a friend can help?",
                    "It's okay to feel stressed. What's one small thing, like a cup of tea, that could calm you?"
                ]
            },
            loneliness: {
                kid: [
                    "Feeling lonely is hard. Try playing with a pet or calling a friend to feel better!",
                    "It's okay to miss friends. Maybe draw a picture for someone you love or talk to a grown-up?",
                    "You're never really alone! Try doing something fun, like reading a story, to cheer up."
                ],
                teen: [
                    "Loneliness can hit hard. Try texting a friend or joining an online group you like. What's up?",
                    "Feeling alone is tough. Maybe watch a favorite show or message someone to connect?",
                    "You deserve connection. Try reaching out to someone or doing something you enjoy, like gaming."
                ],
                adult: [
                    "Loneliness can be painful, but you're not alone in feeling this way. What's something you enjoy that could lift your spirits?",
                    "Connection takes time, but small steps help. Have you considered joining a group or reaching out to someone?",
                    "It's okay to feel lonely. Try an activity you love or contacting someone you trust to feel less alone."
                ],
                senior: [
                    "Loneliness can creep in, but you're valued. Maybe call a friend or try a community activity?",
                    "Feeling alone is hard. Try a favorite hobby or sharing a memory with someone to feel connected.",
                    "Your need for connection is natural. What's one thing, like a phone call, that could help today?"
                ]
            },
            default: {
                kid: [
                    "I'm here to listen! Tell me what's on your mind or how you're feeling today.",
                    "You're super brave for sharing! What's something fun or tough you want to talk about?",
                    "I'm your buddy! Want to share what's making you happy or sad right now?"
                ],
                teen: [
                    "I'm here for you. What's going on—feeling stressed, happy, or something else?",
                    "You're not alone. Want to talk about what's on your mind, like school or friends?",
                    "I'm listening. What's something you're dealing with or excited about today?"
                ],
                adult: [
                    "I'm here to support you. What's on your mind—any challenges or thoughts you want to share?",
                    "Your feelings matter. Is there something specific you'd like to talk about or work through?",
                    "I'm listening. What would be most helpful for you right now—a chat or some advice?"
                ],
                senior: [
                    "I'm here to listen. What's on your heart today—memories, worries, or joys?",
                    "Your thoughts are important. Want to share what's going on or something you enjoy?",
                    "I'm here for you. What would feel good to talk about today, big or small?"
                ]
            }
        };
        
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        this.sendButton.addEventListener('click', () => this.sendMessage());
        this.messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });
        
        this.quickReplies.addEventListener('click', (e) => {
            if (e.target.classList.contains('quick-reply')) {
                const message = e.target.dataset.message;
                this.messageInput.value = message;
                this.sendMessage();
            }
        });
    }
    
    changeTheme(themeName) {
        const theme = this.themes[themeName];
        if (!theme) return;
        this.currentTheme = themeName;
        document.body.style.background = theme.background;
        const chatHeader = document.querySelector('.chat-header');
        if (chatHeader) chatHeader.style.background = theme.headerBg;
        const sendButton = document.getElementById('sendButton');
        if (sendButton) sendButton.style.background = theme.headerBg;
        const quickReplies = document.querySelectorAll('.quick-reply');
        quickReplies.forEach(button => {
            button.style.borderColor = theme.primaryColor;
            button.style.color = theme.primaryColor;
        });
        const resourceIcons = document.querySelectorAll('.resource-item i');
        resourceIcons.forEach(icon => {
            icon.style.color = theme.primaryColor;
        });
        const logoHeart = document.querySelector('.logo i');
        if (logoHeart) logoHeart.style.color = theme.accentColor;
        document.body.style.transition = 'background 0.8s ease';
        if (chatHeader) chatHeader.style.transition = 'background 0.8s ease';
        if (sendButton) sendButton.style.transition = 'background 0.8s ease';
        this.showThemeNotification(theme.name);
    }
    
    showThemeNotification(themeName) {
        const existingNotification = document.querySelector('.theme-notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        const notification = document.createElement('div');
        notification.className = 'theme-notification';
        notification.innerHTML = `
            <i class="fas fa-palette"></i>
            <span>Theme changed to: ${themeName}</span>
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            .theme-notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: rgba(255, 255, 255, 0.95);
                padding: 12px 20px;
                border-radius: 25px;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 14px;
                color: #495057;
                z-index: 1000;
                animation: slideInRight 0.5s ease;
            }
            
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            .theme-notification i {
                color: ${this.themes[this.currentTheme].primaryColor};
            }
        `;
        
        document.head.appendChild(style);
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.5s ease';
            setTimeout(() => notification.remove(), 500);
        }, 3000);
    }
    
    sendMessage() {
        const message = this.messageInput.value.trim();
        if (!message) return;
        
        this.addMessage(message, 'user');
        this.messageInput.value = '';
        
        this.showTypingIndicator();
        
        setTimeout(() => {
            this.hideTypingIndicator();
            const response = this.generateResponse(message);
            this.addMessage(response, 'bot');
        }, 1000 + Math.random() * 1000);
    }
    
    addMessage(text, sender) {
        const sanitizedText = text.replace(/[<>]/g, '');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        messageDiv.setAttribute('role', 'log');
        messageDiv.setAttribute('aria-live', 'polite');
        
        const avatar = sender === 'bot' ? 'fas fa-user-md' : 'fas fa-user';
        const avatarBg = sender === 'bot' ? this.themes[this.currentTheme].headerBg : 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)';
        
        messageDiv.innerHTML = `
            <div class="message-content">
                <div class="avatar" style="background: ${avatarBg}">
                    <i class="${avatar}"></i>
                </div>
                <div class="text">
                    <p>${sanitizedText}</p>
                </div>
            </div>
            <div class="message-time">${this.getCurrentTime()}</div>
        `;
        
        this.chatMessages.appendChild(messageDiv);
        this.scrollToBottom();
    }
    
    showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message typing-indicator';
        typingDiv.id = 'typingIndicator';
        typingDiv.innerHTML = `
            <div class="message-content">
                <div class="avatar" style="background: ${this.themes[this.currentTheme].headerBg}">
                    <i class="fas fa-user-md"></i>
                </div>
                <div class="typing-indicator">
                    <div class="typing-dot" style="background: ${this.themes[this.currentTheme].primaryColor}"></div>
                    <div class="typing-dot" style="background: ${this.themes[this.currentTheme].primaryColor}"></div>
                    <div class="typing-dot" style="background: ${this.themes[this.currentTheme].primaryColor}"></div>
                </div>
            </div>
        `;
        
        this.chatMessages.appendChild(typingDiv);
        this.scrollToBottom();
    }
    
    hideTypingIndicator() {
        const typingIndicator = document.getElementById('typingIndicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }
    
    generateResponse(userMessage) {
        const message = userMessage.toLowerCase();
        const profile = getUserProfile() || { ageGroup: 'adult' }; // Default to adult if no profile
        const ageGroup = profile.ageGroup || 'adult';
        
        let category = 'default';
        
        if (message.includes('depress') || message.includes('sad') || message.includes('hopeless') || message.includes('worthless')) {
            category = 'depression';
        } else if (message.includes('anxious') || message.includes('worry') || message.includes('panic') || message.includes('nervous')) {
            category = 'anxiety';
        } else if (message.includes('lost') || message.includes('breakup') || message.includes('girlfriend') || message.includes('boyfriend') || message.includes('death') || message.includes('grief')) {
            category = 'loss';
        } else if (message.includes('motivation') || message.includes('unmotivated') || message.includes('lazy') || message.includes('procrastinate')) {
            category = 'motivation';
        } else if (message.includes('stress') || message.includes('overwhelm') || message.includes('pressure')) {
            category = 'stress';
        } else if (message.includes('lonely') || message.includes('alone') || message.includes('isolated')) {
            category = 'loneliness';
        }
        
        if (category !== this.currentTheme) {
            this.changeTheme(category);
        }
        
        const responses = this.responses[category][ageGroup];
        return responses[Math.floor(Math.random() * responses.length)];
    }
    
    getCurrentTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }
    
    scrollToBottom() {
        clearTimeout(this.scrollTimeout);
        this.scrollTimeout = setTimeout(() => {
            this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
        }, 100);
    }
}

function getTodayDate() {
    return new Date().toISOString().slice(0, 10);
}

function moodToScore(mood) {
    switch (mood) {
        case 'happy': return 4;
        case 'neutral': return 3;
        case 'anxious': return 2;
        case 'sad': return 1;
        case 'angry': return 0;
        default: return null;
    }
}

function saveMood(mood) {
    try {
        let moodLog = JSON.parse(localStorage.getItem('moodLog') || '[]');
        moodLog = moodLog.filter(entry => entry.date !== getTodayDate());
        moodLog.push({ date: getTodayDate(), mood, score: moodToScore(mood) });
        localStorage.setItem('moodLog', JSON.stringify(moodLog));
    } catch (e) {
        alert('Error saving mood. Please try again.');
    }
}

function setupMoodLogger() {
    const moodSelect = document.getElementById('moodSelect');
    const logMoodBtn = document.getElementById('logMoodBtn');
    logMoodBtn.addEventListener('click', () => {
        const mood = moodSelect.value;
        if (!mood) {
            alert('Please select your mood!');
            return;
        }
        saveMood(mood);
        alert('Mood logged for today!');
        moodSelect.value = '';
    });
}

function getMoodLog() {
    return JSON.parse(localStorage.getItem('moodLog') || '[]');
}

function renderMoodChart() {
    const moodLog = getMoodLog();
    const moodChartElem = document.getElementById('moodChart');
    if (!moodChartElem) return;
    const ctx = moodChartElem.getContext('2d');
    if (window.moodChartInstance) window.moodChartInstance.destroy();
    const labels = moodLog.map(entry => entry.date);
    const data = moodLog.map(entry => entry.score);
    window.moodChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels,
            datasets: [{
                label: 'Mood Score',
                data,
                borderColor: '#667eea',
                backgroundColor: 'rgba(102,126,234,0.1)',
                fill: true,
                tension: 0.3,
                pointRadius: 5
            }]
        },
        options: {
            scales: {
                y: {
                    min: 0,
                    max: 4,
                    ticks: {
                        stepSize: 1,
                        callback: v => ['Angry','Sad','Anxious','Neutral','Happy'][v]
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: context => `Mood: ${['Angry', 'Sad', 'Anxious', 'Neutral', 'Happy'][context.raw]}`
                    }
                }
            }
        }
    });
}

function renderMoodStats() {
    const moodLog = getMoodLog();
    const moodStatsElem = document.getElementById('moodStats');
    if (!moodStatsElem) return;
    if (moodLog.length === 0) {
        moodStatsElem.textContent = 'No mood data yet.';
        return;
    }
    const freq = {};
    moodLog.forEach(e => freq[e.mood] = (freq[e.mood] || 0) + 1);
    const mode = Object.entries(freq).sort((a,b) => b[1]-a[1])[0][0];
    const avg = (moodLog.reduce((sum, e) => sum + e.score, 0) / moodLog.length).toFixed(2);
    let streak = 1, maxStreak = 1, last = moodLog[0].mood;
    for (let i=1; i<moodLog.length; ++i) {
        if (moodLog[i].mood === last) { streak++; maxStreak = Math.max(maxStreak, streak);}
        else { streak = 1; last = moodLog[i].mood; }
    }
    moodStatsElem.innerHTML =
        `<b>Most common mood:</b> ${mode} <br>
         <b>Average mood score:</b> ${avg} <br>
         <b>Longest streak:</b> ${maxStreak} days`;
}

function updateMoodAnalytics() {
    renderMoodChart();
    renderMoodStats();
}

function showProfileModal() {
    document.getElementById('profileModal').hidden = false;
}

function hideProfileModal() {
    document.getElementById('profileModal').hidden = true;
}

function getUserProfile() {
    return JSON.parse(localStorage.getItem('userProfile') || 'null');
}

function saveUserProfile(profile) {
    localStorage.setItem('userProfile', JSON.stringify(profile));
}

function setupProfileModal() {
    const modal = document.getElementById('profileModal');
    const form = document.getElementById('profileForm');
    const profile = getUserProfile();
    if (profile && profile.ageGroup && profile.gender && profile.employment) {
        modal.hidden = true;
        if (profile.ageGroup === 'kid') addKidBgOverlay();
        return;
    }
    modal.hidden = false;
    form.onsubmit = function(e) {
        e.preventDefault();
        const ageGroup = document.getElementById('ageGroup').value;
        const gender = document.getElementById('gender').value;
        const employment = document.getElementById('employment').value;
        if (!ageGroup || !gender || !employment) {
            alert('Please fill out all fields.');
            return;
        }
        saveUserProfile({ ageGroup, gender, employment });
        modal.hidden = true;
        if (ageGroup === 'kid') addKidBgOverlay();
    };
}

function addKidBgOverlay() {
    if (document.querySelector('.kid-bg-overlay')) return;
    const overlay = document.createElement('div');
    overlay.className = 'kid-bg-overlay';
    overlay.innerHTML = `
        <style>
            .kid-bg-overlay circle {
                animation: float 6s ease-in-out infinite;
            }
            @keyframes float {
                0% { transform: translateY(0); }
                50% { transform: translateY(-20px); }
                100% { transform: translateY(0); }
            }
        </style>
        <svg viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="300" cy="200" rx="180" ry="80" fill="#ffe066" opacity="0.5"/>
            <ellipse cx="1600" cy="180" rx="140" ry="60" fill="#b2f2ff" opacity="0.5"/>
            <ellipse cx="900" cy="900" rx="220" ry="100" fill="#ffd6e0" opacity="0.5"/>
            <ellipse cx="1700" cy="900" rx="100" ry="40" fill="#c3fae8" opacity="0.5"/>
            <ellipse cx="200" cy="900" rx="120" ry="50" fill="#e7c6ff" opacity="0.5"/>
            <circle cx="600" cy="300" r="40" fill="#fff3bf" opacity="0.7"/>
            <circle cx="1400" cy="300" r="30" fill="#d0ebff" opacity="0.7"/>
            <circle cx="1000" cy="200" r="25" fill="#ffd6e0" opacity="0.7"/>
        </svg>
    `;
    document.body.prepend(overlay);
}

document.addEventListener('DOMContentLoaded', () => {
    new MentalHealthChatbot();
    setupMoodLogger();
    setupProfileModal();
    document.getElementById('messageInput').focus();
    const chatMessages = document.getElementById('chatMessages');
    chatMessages.style.scrollBehavior = 'smooth';
    const body = document.body;
    body.style.backgroundSize = '400% 400%';
    body.style.animation = 'gradientShift 15s ease infinite';
    const style = document.createElement('style');
    style.textContent = `
        @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    updateMoodAnalytics();
    document.getElementById('logMoodBtn').addEventListener('click', () => {
        setTimeout(updateMoodAnalytics, 100);
    });
});