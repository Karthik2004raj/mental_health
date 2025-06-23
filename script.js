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
                background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
                headerBg: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
                primaryColor: '#a8edea',
                secondaryColor: '#fed6e3',
                accentColor: '#ffd89b',
                name: 'Energetic Mint'
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
        
        this.responses = {
            depression: [
                "I hear you, and I want you to know that your feelings are valid. Depression can feel overwhelming, but you're not alone in this. Have you considered talking to a mental health professional? They can provide the support and tools you need to work through these feelings.",
                "It takes courage to acknowledge when you're feeling depressed. Remember that this feeling won't last forever, even though it might feel that way right now. Small steps matter - even getting out of bed or taking a shower is a victory. What's one small thing you could do for yourself today?",
                "Your feelings matter, and it's okay to not be okay. Depression can make everything feel heavy and hopeless. Try to be gentle with yourself - you're doing the best you can. Have you tried any activities that usually bring you comfort or joy?"
            ],
            anxiety: [
                "Anxiety can feel like your mind is racing and your body is on high alert. Take a moment to breathe deeply - in through your nose for 4 counts, hold for 4, and out for 6. This simple technique can help calm your nervous system. What's causing you to feel anxious right now?",
                "Anxiety often makes us worry about things that haven't happened yet. Try to ground yourself in the present moment. Name 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell, and 1 thing you can taste. This can help bring you back to the here and now.",
                "Your anxiety doesn't define you, and it's not a sign of weakness. Many people experience anxiety, and there are effective ways to manage it. Have you tried any relaxation techniques or talked to someone about what's triggering your anxiety?"
            ],
            loss: [
                "I'm so sorry for your loss. Grief is a deeply personal journey, and there's no right or wrong way to feel. It's okay to be sad, angry, confused, or numb - all of these emotions are normal. Be patient with yourself as you process this loss.",
                "Losing someone important can leave a huge void in your life. It's natural to feel lost and unsure of how to move forward. Remember that healing takes time, and it's okay to take things one day at a time. What would help you feel supported right now?",
                "Your feelings of loss are real and valid. Grief can be overwhelming and unpredictable. Try to be kind to yourself during this difficult time. Sometimes talking about the person you lost or writing down your memories can help. What's your favorite memory of them?"
            ],
            motivation: [
                "It's completely normal to feel unmotivated sometimes. Instead of trying to tackle everything at once, start with something small. What's one tiny step you could take today that would make you feel a little bit better? Even if it's just making your bed or taking a short walk.",
                "Motivation often follows action, not the other way around. Sometimes you have to start before you feel ready. Break down what you want to accomplish into the smallest possible steps. What's one thing you could do in the next 5 minutes?",
                "You don't have to have it all figured out right now. It's okay to take things slowly and be patient with yourself. What's something that used to bring you joy or excitement? Sometimes revisiting old interests can help reignite your spark."
            ],
            stress: [
                "Stress can feel overwhelming, but remember that you've gotten through difficult times before. Try to identify what's causing your stress and see if there are any aspects you can control or change. Sometimes just acknowledging what's stressing you can help.",
                "When stress feels too much, try the 4-7-8 breathing technique: breathe in for 4 counts, hold for 7, and exhale for 8. Repeat this a few times. It can help activate your body's natural relaxation response. What's one thing you could do to take care of yourself today?",
                "Stress is your body's way of responding to challenges, but too much can be overwhelming. Try to find small moments of calm throughout your day - maybe a few minutes of deep breathing, a short walk, or listening to music you love."
            ],
            loneliness: [
                "Feeling lonely can be really painful, and it's something many people experience. Remember that being alone doesn't mean you're unlovable or unworthy of connection. What's something you enjoy doing that could help you feel more connected to yourself?",
                "Loneliness can make us feel isolated, but you're not alone in feeling this way. Many people struggle with loneliness, even when surrounded by others. Have you considered reaching out to someone you trust, or joining a group or activity that interests you?",
                "It's okay to feel lonely, and it's also okay to want connection. Sometimes the first step is being kind to yourself and recognizing that your need for connection is natural and valid. What would help you feel less alone right now?"
            ],
            default: [
                "I'm here to listen and support you. Whatever you're going through, your feelings are valid and important. What would be most helpful for you right now - someone to listen, practical advice, or just a safe space to share?",
                "Thank you for sharing that with me. It takes courage to open up about difficult feelings. I want you to know that you're not alone, and there are people who care about you and want to help. What's on your mind?",
                "I hear you, and I want you to know that your feelings matter. Sometimes just talking about what's troubling us can help us feel a bit lighter. Is there anything specific you'd like to discuss or work through together?"
            ]
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
        
        // Quick reply buttons
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
        
        // Update body background
        document.body.style.background = theme.background;
        
        // Update chat header
        const chatHeader = document.querySelector('.chat-header');
        chatHeader.style.background = theme.headerBg;
        
        // Update send button
        const sendButton = document.getElementById('sendButton');
        sendButton.style.background = theme.headerBg;
        
        // Update quick reply buttons
        const quickReplies = document.querySelectorAll('.quick-reply');
        quickReplies.forEach(button => {
            button.style.borderColor = theme.primaryColor;
            button.style.color = theme.primaryColor;
        });
        
        // Update resource panel icons
        const resourceIcons = document.querySelectorAll('.resource-item i');
        resourceIcons.forEach(icon => {
            icon.style.color = theme.primaryColor;
        });
        
        // Update logo heart color
        const logoHeart = document.querySelector('.logo i');
        logoHeart.style.color = theme.accentColor;
        
        // Add theme transition animation
        document.body.style.transition = 'background 0.8s ease';
        chatHeader.style.transition = 'background 0.8s ease';
        sendButton.style.transition = 'background 0.8s ease';
        
        // Show theme change notification
        this.showThemeNotification(theme.name);
    }
    
    showThemeNotification(themeName) {
        // Remove existing notification
        const existingNotification = document.querySelector('.theme-notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create new notification
        const notification = document.createElement('div');
        notification.className = 'theme-notification';
        notification.innerHTML = `
            <i class="fas fa-palette"></i>
            <span>Theme changed to: ${themeName}</span>
        `;
        
        // Add styles for notification
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
        
        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.5s ease';
            setTimeout(() => notification.remove(), 500);
        }, 3000);
    }
    
    sendMessage() {
        const message = this.messageInput.value.trim();
        if (!message) return;
        
        // Add user message
        this.addMessage(message, 'user');
        this.messageInput.value = '';
        
        // Show typing indicator
        this.showTypingIndicator();
        
        // Generate and show bot response
        setTimeout(() => {
            this.hideTypingIndicator();
            const response = this.generateResponse(message);
            this.addMessage(response, 'bot');
        }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
    }
    
    addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const avatar = sender === 'bot' ? 'fas fa-user-md' : 'fas fa-user';
        const avatarBg = sender === 'bot' ? this.themes[this.currentTheme].headerBg : 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)';
        
        messageDiv.innerHTML = `
            <div class="message-content">
                <div class="avatar" style="background: ${avatarBg}">
                    <i class="${avatar}"></i>
                </div>
                <div class="text">
                    <p>${text}</p>
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
        
        // Determine the category of the message
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
        
        // Change theme based on category
        if (category !== this.currentTheme) {
            this.changeTheme(category);
        }
        
        // Get a random response from the appropriate category
        const responses = this.responses[category];
        return responses[Math.floor(Math.random() * responses.length)];
    }
    
    getCurrentTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }
    
    scrollToBottom() {
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }
}

// --- Mood Logging ---
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
    let moodLog = JSON.parse(localStorage.getItem('moodLog') || '[]');
    // Remove today's entry if exists
    moodLog = moodLog.filter(entry => entry.date !== getTodayDate());
    moodLog.push({ date: getTodayDate(), mood, score: moodToScore(mood) });
    localStorage.setItem('moodLog', JSON.stringify(moodLog));
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
    const ctx = document.getElementById('moodChart').getContext('2d');
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
            }
        }
    });
}

function renderMoodStats() {
    const moodLog = getMoodLog();
    if (moodLog.length === 0) {
        document.getElementById('moodStats').textContent = 'No mood data yet.';
        return;
    }
    // Mode (most common mood)
    const freq = {};
    moodLog.forEach(e => freq[e.mood] = (freq[e.mood] || 0) + 1);
    const mode = Object.entries(freq).sort((a,b) => b[1]-a[1])[0][0];
    // Average
    const avg = (moodLog.reduce((sum, e) => sum + e.score, 0) / moodLog.length).toFixed(2);
    // Streak (longest run of same mood)
    let streak = 1, maxStreak = 1, last = moodLog[0].mood;
    for (let i=1; i<moodLog.length; ++i) {
        if (moodLog[i].mood === last) { streak++; maxStreak = Math.max(maxStreak, streak);}
        else { streak = 1; last = moodLog[i].mood; }
    }
    document.getElementById('moodStats').innerHTML =
        `<b>Most common mood:</b> ${mode} <br>
         <b>Average mood score:</b> ${avg} <br>
         <b>Longest streak:</b> ${maxStreak} days`;
}

// Re-render chart and stats after logging mood
function updateMoodAnalytics() {
    renderMoodChart();
    renderMoodStats();
}

// --- User Profile Modal and Kid Background ---
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
    // If already set, hide modal
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
        if (!ageGroup || !gender || !employment) return;
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

    // Auto-focus on input
    document.getElementById('messageInput').focus();

    // Add smooth scrolling
    const chatMessages = document.getElementById('chatMessages');
    chatMessages.style.scrollBehavior = 'smooth';

    // Add some calming background animation
    const body = document.body;
    body.style.backgroundSize = '400% 400%';
    body.style.animation = 'gradientShift 15s ease infinite';

    // Add the gradient animation
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
        setTimeout(updateMoodAnalytics, 100); // Wait for localStorage update
    });
});