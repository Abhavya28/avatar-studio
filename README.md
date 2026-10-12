# 🎨 Avatar Studio

A customizable avatar generator built with React, Tailwind CSS, and the DiceBear API. Create unique characters, personalize their appearance, experiment with colors, and download your avatar as an SVG.

---

## ✨ Features
- Generate random avatars
- Customize facial features, hairstyles, and clothing
- Change colors and accessories
- Preview avatars in real time
- Download avatars as SVG

---

## 🛠️ Tech Stack

- React
- JavaScript (ES6+)
- Tailwind CSS
- DiceBear HTTP API

---

## 🎭 How It Works

Avatar Studio uses the DiceBear HTTP API to generate SVG avatars.

The application builds a URL using a seed and customization options, then displays the generated avatar in an image element. Updating the options changes the URL and refreshes the preview.

Example API URL:

```text
https://api.dicebear.com/10.x/avataaars/svg?seed=Abhavya&eyesVariant=happy&mouthVariant=smile&backgroundColor=b6e3f4
```

- **Seed:** Determines the generated character.
- **Variants:** Customize facial features, hairstyles, and clothing.
- **Colors:** Change the appearance using hexadecimal color values.
- **Probability options:** Control the appearance of optional features.

Avatar generation does not require a custom backend or API key.

---

## - Abhavya Gupta :)
