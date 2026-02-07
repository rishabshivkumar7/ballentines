# Photo Generation Prompt for ValentineBall Game

## Overview
Generate 7 unique portrait photos for a mobile Tetris game. Each photo will be used as a texture for different Tetris pieces (I, O, T, S, Z, J, L blocks).

## Technical Requirements
- **Aspect Ratio**: Square (1:1)
- **Resolution**: 512x512px minimum
- **Format**: PNG or JPG
- **Style**: Consistent across all 7 images
- **Subject**: Same person in all photos (consistency is critical)

## Photo Variations Needed

### Photo 1 (I-Block) - Happy/Laughing
- Genuine smile or laugh
- Bright, energetic expression
- Eyes crinkled with joy
- Natural, candid moment

### Photo 2 (O-Block) - Thoughtful/Peaceful
- Calm, serene expression
- Gentle smile or neutral face
- Contemplative mood
- Soft, relaxed features

### Photo 3 (T-Block) - Playful/Fun
- Cheeky smile or grin
- Playful energy
- Animated expression
- Lighthearted vibe

### Photo 4 (S-Block) - Loving/Tender
- Warm, affectionate gaze
- Soft smile
- Intimate, gentle expression
- Eyes showing warmth

### Photo 5 (Z-Block) - Confident/Strong
- Direct eye contact
- Assured expression
- Poised and self-assured
- Empowered presence

### Photo 6 (J-Block) - Surprised/Delighted
- Eyes wide with pleasant surprise
- Mouth slightly open in joy
- Genuine excitement
- Spontaneous reaction

### Photo 7 (L-Block) - Sleepy/Cozy
- Relaxed, drowsy expression
- Peaceful, comfortable
- Soft, gentle face
- Morning or bedtime vibe

## Consistency Guidelines
- **Same person** in all 7 photos
- **Similar lighting**: Natural, soft lighting preferred
- **Same general framing**: Head and shoulders, portrait style
- **Background**: Soft blur or solid color (not distracting)
- **Age**: Young adult (20s-30s)
- **Hair**: Consistent style and color across photos
- **Clothing**: Simple, not distracting (solid colors work best)

## Style Preferences
- **Photography style**: Natural, authentic portraits
- **Mood**: Warm, intimate, genuine
- **Quality**: High-quality, professional-looking
- **Color palette**: Warm tones, soft colors
- **Avoid**: Overly posed, stock photo aesthetic, harsh shadows

## Example Prompt Structure
```
Portrait photo of [description], [expression], natural lighting, soft focus background, warm color palette, professional photography, 512x512px, square format, headshot style, [mood/emotion]
```

## Usage Context
These photos will be displayed in small blocks (30x30px on mobile) in a Tetris game, so:
- **Clear facial features** are important even when scaled down
- **High contrast** between subject and background helps visibility
- **Centered framing** ensures face remains visible when cropped
- **Distinct expressions** help differentiate between blocks

## Alternative: Using Real Photos
If using actual photos of your girlfriend:
1. Select 7 photos with different expressions/moods
2. Crop to square format (1:1 aspect ratio)
3. Ensure consistent lighting and quality
4. Edit for similar color temperature if needed
5. Compress to reasonable file size (<200KB each)
6. Name files: photo1.png through photo7.png

## File Naming Convention
- photo1.png → I-Block (Happy/Laughing)
- photo2.png → O-Block (Thoughtful/Peaceful)
- photo3.png → T-Block (Playful/Fun)
- photo4.png → S-Block (Loving/Tender)
- photo5.png → Z-Block (Confident/Strong)
- photo6.png → J-Block (Surprised/Delighted)
- photo7.png → L-Block (Sleepy/Cozy)

## Placement Instructions
Place generated/selected photos in:
```
/public/photos/
```

Update the `PHOTO_SETS` object in `App.jsx` if using different file names or paths.
