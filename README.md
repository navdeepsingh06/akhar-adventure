# Akhar Adventure

A playful website that teaches kids aged 5 to 10 the 35 letters of the Gurmukhi ਪੈਂਤੀ (paintee).

For each letter, kids can:

- **See it** with a picture word (ਅ for ਅੰਬ, mango)
- **Hear it** (uses the device's Punjabi voice when it has one)
- **Write it** on a wooden ਫੱਟੀ (takhti) with a finger or mouse to earn a star
- **Play** Balloon Pop, Memory Match or a Quick Quiz for each row of five letters

The 35 letters sit along a road through a Punjab village, one stop per ਪੈਂਤੀ row, with Mor the peacock as a guide.
Winning a game at a stop adds its sticker to the sticker book. Progress is saved in the browser.

## Run locally

It's plain HTML, CSS and JavaScript with no build step:

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploy

Every push to `main` deploys to GitHub Pages through `.github/workflows/pages.yml`.
In the repository's **Settings → Pages**, set **Source** to **GitHub Actions** (one time).

## Roadmap

- Recorded audio from a native speaker
- Stroke-order animations
- ਲਗਾਂ ਮਾਤਰਾਂ (vowel signs) and first words
- Short stories and word-building games
