# AI Image Generation Prompt - ValentineBall

## Quick Copy-Paste Prompts

Use these with any AI image generator (Midjourney, DALL-E, Stable Diffusion, etc.)

### Base Template
```
Portrait photo of a [age] woman, [expression], natural warm lighting, soft bokeh background, professional headshot, square format 1:1, 512x512px, warm color palette, centered composition, high quality
```

---

## 7 Optimized Prompts

### 1. Happy/Laughing (I-Block)
```
Portrait photo of a young woman genuinely laughing, eyes crinkled with joy, bright smile, candid moment, natural warm lighting, soft bokeh background, professional headshot, square 1:1 format, warm color palette, centered composition, 512x512px
```

### 2. Thoughtful/Peaceful (O-Block)
```
Portrait photo of a young woman with calm serene expression, gentle contemplative gaze, peaceful mood, soft relaxed features, natural warm lighting, soft bokeh background, professional headshot, square 1:1 format, warm color palette, centered composition, 512x512px
```

### 3. Playful/Fun (T-Block)
```
Portrait photo of a young woman with playful cheeky smile, animated expression, lighthearted energy, fun vibe, natural warm lighting, soft bokeh background, professional headshot, square 1:1 format, warm color palette, centered composition, 512x512px
```

### 4. Loving/Tender (S-Block)
```
Portrait photo of a young woman with warm affectionate gaze, soft tender smile, gentle loving expression, eyes showing warmth, natural warm lighting, soft bokeh background, professional headshot, square 1:1 format, warm color palette, centered composition, 512x512px
```

### 5. Confident/Strong (Z-Block)
```
Portrait photo of a young woman with direct confident eye contact, assured poised expression, empowered presence, self-assured demeanor, natural warm lighting, soft bokeh background, professional headshot, square 1:1 format, warm color palette, centered composition, 512x512px
```

### 6. Surprised/Delighted (J-Block)
```
Portrait photo of a young woman with pleasantly surprised expression, eyes wide with delight, mouth slightly open in joy, genuine excitement, spontaneous reaction, natural warm lighting, soft bokeh background, professional headshot, square 1:1 format, warm color palette, centered composition, 512x512px
```

### 7. Sleepy/Cozy (L-Block)
```
Portrait photo of a young woman with relaxed sleepy expression, drowsy peaceful face, comfortable cozy vibe, soft gentle features, morning light, natural warm lighting, soft bokeh background, professional headshot, square 1:1 format, warm color palette, centered composition, 512x512px
```

---

## Advanced Customization

### Add Specific Features
Append to any prompt above:
- `, brown eyes, long dark hair`
- `, curly blonde hair, green eyes`
- `, wearing cozy sweater`
- `, golden hour lighting`
- `, indoor natural window light`

### Style Modifiers
Add these for different aesthetics:
- `, cinematic photography style`
- `, film grain, analog photography`
- `, soft focus, dreamy aesthetic`
- `, sharp focus, crystal clear`
- `, intimate close-up portrait`

### Negative Prompts (what to avoid)
If your generator supports negative prompts:
```
ugly, distorted, blurry, low quality, stock photo, overly posed, artificial, harsh lighting, heavy makeup, filters, unrealistic, multiple people, text, watermark
```

---

## Platform-Specific Tips

### Midjourney
```
/imagine [prompt above] --ar 1:1 --style raw --v 6
```

### DALL-E 3
- Use prompts as-is
- Select square format (1024x1024)
- Download and crop if needed

### Stable Diffusion
- Model: Realistic Vision or DreamShaper
- Steps: 30-50
- CFG Scale: 7-9
- Sampler: DPM++ 2M Karras
- Size: 512x512

### Leonardo.ai
- Use PhotoReal mode
- Select 1:1 aspect ratio
- Guidance scale: 7

---

## Consistency Tips

To keep all 7 images of the same person:

1. **Generate one base image first**
2. **Use img2img** with the base image for variations
3. **Keep the same seed** (if your generator supports it)
4. **Add description**: "same person as previous image"
5. **Use reference image** feature if available

### Example Workflow
```
1. Generate Photo 1 (save the seed number if possible)
2. For Photo 2-7: Use same seed + change only the expression words
   - Change: "laughing" → "thoughtful"
   - Keep everything else identical
```

---

## Post-Processing

After generating images:

1. **Crop to perfect square** (1:1 ratio)
2. **Resize to 512x512px** minimum
3. **Adjust brightness/contrast** for consistency
4. **Color correct** to match temperature across all 7
5. **Compress** to <200KB per image
6. **Name properly**: photo1.png through photo7.png

### Free Tools
- **Photopea.com** - Free Photoshop alternative
- **Squoosh.app** - Image compression
- **Remove.bg** - Background removal if needed
- **Pixlr.com** - Quick edits

---

## Alternative: Using Real Photos

If you have real photos of your girlfriend:

### Selection Criteria
✅ Clear face, good lighting
✅ Different expressions/moods
✅ Similar framing (head & shoulders)
✅ High enough resolution

❌ Avoid group photos
❌ Skip heavily filtered images
❌ Avoid extreme angles

### Quick Edit Steps
1. Crop to square (1:1)
2. Adjust brightness to match
3. Ensure face is centered
4. Resize to 512x512px
5. Save as JPG, compress to <200KB

---

## Testing

Before deploying:
1. Add all 7 photos to `public/photos/`
2. Run `npm start`
3. Play the game
4. Check if photos look good at small size (30x30px)
5. Verify all 7 different photos appear
6. Ensure expressions are distinguishable

---

## Quality Checklist

Before finalizing photos:
- [ ] All 7 photos are square format
- [ ] Same person in all images (or consistent AI style)
- [ ] Different clear expressions
- [ ] Good contrast for small display
- [ ] Similar lighting across all
- [ ] Files named photo1.png through photo7.png
- [ ] All images <200KB each
- [ ] Face is centered in frame
- [ ] Background not distracting
- [ ] Resolution at least 512x512px

---

**Pro Tip:** Test on actual mobile device to ensure photos look good when scaled down to 30x30px game blocks!
