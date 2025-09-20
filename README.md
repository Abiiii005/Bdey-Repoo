# 🎂 Birthday Web App

A beautiful, interactive birthday celebration web application built with React, featuring multiple animated scenes including countdown timer, celebration animations, photo slideshow, birthday wishes card, and fireworks finale.

## ✨ Features

- **Scene 1: Countdown Timer** - Sparkle animations with countdown to birthday
- **Scene 2: Celebration** - Cake animation, confetti, and floating balloons
- **Scene 3: Photo Slideshow** - 100+ photos with lazy loading and animations
- **Scene 4: Interactive Birthday Card** - Flippable card with typewriter effects
- **Scene 5: Fireworks Finale** - Grand finale with fireworks and final message
- **Bonus Features**: Cursor heart effects, floating animations, responsive design

## 🛠️ Tech Stack

- **React 18** with Vite
- **Framer Motion** for smooth animations
- **TailwindCSS** for styling
- **Canvas Confetti** for particle effects
- **React Type Animation** for typewriter effects

## 🚀 How to Run

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   - Visit `http://localhost:5173/`
   - The app will start with the countdown scene

## ⚙️ Configuration

Edit the configuration in `src/App.jsx`:

```javascript
const config = {
  targetBirthday: '2025-12-25T00:00:00', // Change to actual birthday date
  recipientName: 'Beautiful', // Change to recipient's name
};
```
- Auto-transitions to celebration when countdown reaches zero

### Scene 2: Birthday Celebration
- Animated cake with flickering candles
- Confetti and falling chocolates/stars
- Floating balloons with random sway
- Interactive celebration animations

### Scene 3: Photo Slideshow
- Display 100+ photos in a beautiful slider
- Zoom-in/fade-in animations for each photo
- Lazy loading for performance
- Click photos to show floating hearts and messages
- Auto-play with manual controls

### Scene 4: Interactive Birthday Card
- Elegant card with flip/open animation
- Typewriter effect for birthday message
- Multiple animated wishes with fade-in effects
- Floating hearts and sparkles on interaction

### Scene 5: Surprise Ending
- Spectacular fireworks animation
- Glowing cake with sparkling background
- Final "Love you 😘" message
- Download button for memories

### Extra Features
- Cursor interaction with floating hearts
- Background gradient color shifting
- Smooth scene transitions
- Responsive design for all devices
- Development scene navigator for testing

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd "d:\Abinesh\Ambi\Bdey Project"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:5173
   ```

## 📁 Project Structure

```
birthday-app/
├── public/
│   ├── photos/           # Place 100+ photos here
│   ├── music/            # Background music (optional)
│   └── index.html        # Main HTML file
├── src/
│   ├── components/       # React components
│   │   ├── Countdown.jsx
│   │   ├── Celebration.jsx
│   │   ├── Slideshow.jsx
│   │   ├── WishesCard.jsx
│   │   ├── SurpriseEnding.jsx
│   │   ├── FloatingHearts.jsx
│   │   ├── Sparkles.jsx
│   │   └── Fireworks.jsx
│   ├── utils/            # Helper functions
│   │   ├── calculateTimeLeft.js
│   │   └── photoData.js
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # React entry point
│   └── index.css         # Global styles
├── package.json
└── README.md
```

## 🎨 Customization

### 1. Update Birthday Date and Name
Edit `src/App.jsx`:
```javascript
const config = {
  targetBirthday: '2025-12-25T00:00:00', // Change to actual birthday
  recipientName: 'Beautiful',             // Change to recipient's name
};
```

### 2. Add Your Photos
- Place your photos in the `public/photos/` directory
- Update `src/utils/photoData.js` to reference your actual photos:
```javascript
export const photos = [
  { url: "/photos/photo1.jpg", message: "Your smile is everything 💕" },
  { url: "/photos/photo2.jpg", message: "My favorite moment 😘" },
  // Add more photos...
];
```

### 3. Customize Messages
Edit the `birthdayMessages` array in `src/utils/photoData.js`:
```javascript
export const birthdayMessages = [
  "Happy Birthday to the most amazing person! 🎉",
  "Your custom message here! ✨",
  // Add more personalized messages...
];
```

### 4. Add Background Music (Optional)
- Place audio files in `public/music/`
- Add audio element to components as needed

## 🛠️ Technologies Used

- **React 18** - Frontend framework
- **Framer Motion** - Smooth animations and transitions
- **TailwindCSS** - Styling and responsive design
- **Canvas Confetti** - Confetti and fireworks effects
- **React Type Animation** - Typewriter effects
- **Vite** - Fast build tool and development server

## 📱 Responsive Design

The app is fully responsive and works beautifully on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🎯 Performance Features

- Lazy loading for images
- Optimized animations
- Efficient component rendering
- Minimal bundle size

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Development Features

- Hot module replacement
- Scene navigator for testing (visible in development mode)
- Error boundaries for graceful error handling

## 🎉 Usage Tips

1. **For best experience:** Use on a larger screen first, then share the link for mobile viewing
2. **Testing scenes:** In development mode, use the scene navigator in the top-right corner
3. **Photos:** For best results, use photos with a 3:4 or 4:3 aspect ratio
4. **Performance:** If you have 100+ photos, consider optimizing them for web (compress to ~500KB each)

## 🤝 Contributing

Feel free to customize this app for your own birthday celebrations! Some ideas:
- Add sound effects
- Include video support
- Add more animation types
- Create themed variations (Christmas, Anniversary, etc.)

## 📝 License

This project is created for personal use. Feel free to modify and share!

---

Made with ❤️ for someone special 🎂✨
