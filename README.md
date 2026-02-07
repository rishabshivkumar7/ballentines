# 💕 ValentineBall - Setup Guide

A personalized Tetris game made with love, featuring photos and sweet messages.

## Quick Start

### 1. Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git
- GitHub account

### 2. Initial Setup

```bash
# Clone or download this project
cd valentineball

# Install dependencies
npm install
```

### 3. Add Your Photos

Create a `photos` folder in the `public` directory:

```bash
mkdir public/photos
```

Add 7 photos of your girlfriend named:
- `photo1.jpg` - Happy/Laughing
- `photo2.jpg` - Thoughtful/Peaceful
- `photo3.jpg` - Playful/Fun
- `photo4.jpg` - Loving/Tender
- `photo5.jpg` - Confident/Strong
- `photo6.jpg` - Surprised/Delighted
- `photo7.jpg` - Sleepy/Cozy

**Tips for photos:**
- Use square format (1:1 aspect ratio)
- Minimum 512x512px
- Clear facial expressions
- Consistent lighting across all photos
- File size <200KB each for faster loading

See `PHOTO_PROMPT.md` for detailed photo guidelines.

### 4. Customize Messages (Optional)

Edit the `MESSAGES` object in `src/App.jsx` to add your own sweet messages:

```javascript
const MESSAGES = {
  single: [
    "Your message here",
    // Add more...
  ],
  double: [
    "Your message here",
    // Add more...
  ],
  triple: [
    "Your message here",
    // Add more...
  ],
  tetris: [
    "Your message here",
    // Add more...
  ]
};
```

### 5. Test Locally

```bash
# Start development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to test the game.

### 6. Deploy to GitHub Pages

#### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `valentineball` (or any name you prefer)
3. **Do NOT initialize with README** (we already have files)

#### Step 2: Update package.json

Edit `package.json` and replace `YOUR-USERNAME` with your GitHub username:

```json
"homepage": "https://YOUR-USERNAME.github.io/valentineball",
```

#### Step 3: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - ValentineBall"

# Add remote (replace YOUR-USERNAME and REPO-NAME)
git remote add origin https://github.com/YOUR-USERNAME/valentineball.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### Step 4: Deploy

```bash
# Install gh-pages if needed
npm install --save-dev gh-pages

# Deploy to GitHub Pages
npm run deploy
```

#### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select `gh-pages` branch
4. Click **Save**

Your game will be live at: `https://YOUR-USERNAME.github.io/valentineball`

⏰ **Note:** It may take 5-10 minutes for the site to go live initially.

## Game Features

### Controls

**Mobile:**
- Swipe left/right to move blocks
- Swipe down for hard drop
- Tap to rotate

**Desktop:**
- Arrow keys to move
- Space bar for hard drop
- Up arrow to rotate

### Scoring
- 1 line = 100 points
- 2 lines = 400 points
- 3 lines = 900 points
- 4 lines (Tetris) = 1,600 points

### Messages
Sweet messages appear when you clear lines:
- 1 line: Short compliments
- 2 lines: Longer sweet messages
- 3 lines: Deep sentiments
- 4 lines (Tetris): Major declarations

## Customization Ideas

### Change Colors
Edit the gradient in `src/App.css`:

```css
body {
  background: linear-gradient(135deg, #YOUR-COLOR-1 0%, #YOUR-COLOR-2 100%);
}
```

### Adjust Game Speed
In `src/App.jsx`, modify:

```javascript
const INITIAL_DROP_SPEED = 800; // Milliseconds (higher = slower)
const SPEED_INCREASE = 50; // Speed increase per 5 lines
```

### Change Board Size
In `src/App.jsx`:

```javascript
const BOARD_WIDTH = 10; // Number of columns
const BOARD_HEIGHT = 15; // Number of rows
```

### Add More Messages
Just add more strings to the message arrays in `src/App.jsx`.

## Troubleshooting

### Photos Not Showing
- Check that photos are in `public/photos/` folder
- Verify file names match exactly: `photo1.jpg` through `photo7.jpg`
- Check file extensions (.jpg not .jpeg)
- Clear browser cache and refresh

### Deployment Failed
- Ensure `homepage` in package.json is correct
- Check that you've pushed all files to GitHub
- Verify gh-pages is installed: `npm install --save-dev gh-pages`

### Game Too Fast/Slow
- Adjust `INITIAL_DROP_SPEED` in App.jsx
- Lower number = faster game
- Higher number = slower game

### Mobile Touch Not Working
- Ensure you're testing on actual mobile device or mobile emulator
- Check that touch events aren't being blocked by browser
- Try in different browser

## File Structure

```
valentineball/
├── public/
│   ├── photos/           # Add your 7 photos here
│   │   ├── photo1.jpg
│   │   ├── photo2.jpg
│   │   └── ...
│   └── index.html
├── src/
│   ├── App.jsx          # Main game logic
│   ├── App.css          # Game styles
│   ├── index.js         # Entry point
│   └── index.css        # Global styles
├── package.json
├── PHOTO_PROMPT.md      # Photo guidelines
└── README.md           # This file
```

## Sharing the Game

Once deployed, share the link with your girlfriend:
```
https://YOUR-USERNAME.github.io/valentineball
```

### Make it Special
- Send the link with a sweet message
- Time it for a special occasion
- Don't tell her beforehand - let it be a surprise
- Record her reaction when she plays it

## Future Ideas

Want to enhance the game? Consider:
- Add background music
- Create difficulty levels
- Add achievements/milestones
- Include a high score system with localStorage
- Add particle effects when clearing lines
- Create themed variations for different occasions

## License

This is a personal project made with love. Feel free to customize and use it to make your special someone smile! ❤️

---

Made with ❤️ for someone special
