# Mental Health Support Chatbot

A beautiful, responsive mental health support chatbot that provides compassionate responses and dynamically changes its visual theme based on the user's mental health concerns.

## Features

### 🎨 Dynamic Theme System
The chatbot automatically changes its color scheme and visual theme based on the user's mental health concern:

- **Depression**: Calm Blue theme with soothing gradients
- **Anxiety**: Soothing Mint theme with gentle colors
- **Loss/Grief**: Warm Sunset theme with comforting tones
- **Motivation**: Energetic Mint theme to inspire action
- **Stress**: Lavender Calm theme for relaxation
- **Loneliness**: Ocean Breeze theme for connection

### 💬 Intelligent Responses
The chatbot provides supportive, empathetic responses for various mental health topics:

- Depression and sadness
- Anxiety and worry
- Loss and grief
- Lack of motivation
- Stress and overwhelm
- Loneliness and isolation

### 🎯 Quick Reply Buttons
Pre-configured quick reply buttons for common mental health concerns:
- "I'm feeling depressed"
- "I'm anxious"
- "I lost someone important"
- "I need motivation"

### 📱 Responsive Design
Fully responsive design that works on desktop, tablet, and mobile devices.

### 🎭 Smooth Animations
Beautiful transitions and animations that create a calming, professional experience.

## How to Use

1. **Open the Application**: Simply open `index.html` in any modern web browser.

2. **Start a Conversation**: 
   - Type your message in the input field
   - Use the quick reply buttons for common concerns
   - Press Enter or click the send button

3. **Experience Dynamic Themes**: The interface will automatically change colors and theme based on your mental health concern.

4. **Get Support**: Receive compassionate, supportive responses designed to help you feel heard and supported.

## File Structure

```
Helpdesk/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Technical Details

### Technologies Used
- **HTML5**: Semantic structure
- **CSS3**: Modern styling with gradients, animations, and responsive design
- **JavaScript (ES6+)**: Dynamic functionality and theme management
- **Font Awesome**: Icons for better visual experience
- **Google Fonts**: Inter font family for clean typography

### Key Features
- **Theme Management**: Dynamic color scheme changes
- **Message Processing**: Intelligent response generation
- **Animation System**: Smooth transitions and effects
- **Accessibility**: Focus states and keyboard navigation
- **Mobile Responsive**: Works on all device sizes

## Mental Health Resources

The application includes helpful resources:
- National Suicide Prevention Lifeline: 988
- Crisis Text Line: Text HOME to 741741
- Reminder that this is not a substitute for professional help

## Important Note

This chatbot is designed to provide emotional support and a safe space for users to express their feelings. However, it is **not a substitute for professional mental health care**. If you're experiencing severe mental health issues, please contact a mental health professional or crisis hotline.

## Customization

### Adding New Themes
To add a new theme, modify the `themes` object in `script.js`:

```javascript
newTheme: {
    background: 'linear-gradient(135deg, #color1 0%, #color2 100%)',
    headerBg: 'linear-gradient(135deg, #color1 0%, #color2 100%)',
    primaryColor: '#color1',
    secondaryColor: '#color2',
    accentColor: '#accent',
    name: 'Theme Name'
}
```

### Adding New Responses
To add new response categories, add to the `responsponses` object in `script.js`:

```javascript
newCategory: [
    "Response 1",
    "Response 2",
    "Response 3"
]
```

### Modifying Keywords
Update the keyword detection in the `generateResponse` method to recognize new mental health concerns.

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Getting Started

1. Download all files to a folder
2. Open `index.html` in your web browser
3. Start chatting and experience the dynamic theme changes!

## Support

This is a demonstration project. For real mental health support, please contact:
- Your local mental health professional
- National Suicide Prevention Lifeline: 988
- Crisis Text Line: Text HOME to 741741

---

*Built with care for mental health awareness and support.* 