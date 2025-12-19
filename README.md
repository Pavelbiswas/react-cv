# React CV with QR Code

A modern, interactive CV application built with React, TypeScript, and Tailwind CSS featuring QR code generation and multi-language support.

## Features

- 📄 **Full CV View** - Comprehensive resume display with all sections
- 🎫 **Card View** - Compact single-page card format  
- 🔲 **QR Code** - Generate QR codes that link to your CV
- 🌙 **Dark Mode** - Toggle between light and dark themes
- 🌍 **Multi-language** - Auto-detect language (English/Russian) and region (Russia/UAE)
- 🎨 **Tailwind CSS** - Fully styled with Tailwind v3
- 📱 **Responsive** - Optimized for desktop, tablet, and mobile
- 🖨️ **Print-friendly** - Generate PDF from browser print
- ♿ **ATS-optimized** - Semantic HTML for applicant tracking systems

## Quick Start

### Development

```bash
npm install
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```

### Deploy to GitHub Pages

1. **Install Git** from [git-scm.com](https://git-scm.com/download/win)

2. **Initialize git repository**
   ```bash
   git init
   git config user.name "Pavel Biswas"
   git config user.email "pavelbiswas@gmail.com"
   ```

3. **Create repository on GitHub**
   - Go to https://github.com/new
   - Create repository named `react-cv`
   - Copy the HTTPS URL

4. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/pavelbiswas/react-cv.git
   git add .
   git commit -m "Initial commit: React CV with QR code"
   git branch -M main
   git push -u origin main
   ```

5. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: GitHub Actions
   - The workflow automatically deploys on every push

6. **Your CV is live at:** `https://pavelbiswas.github.io/react-cv`

## Update QR Code URL

After GitHub Pages deployment, update in `src/pages/QRLandingPage.tsx`:

```typescript
const cvUrl = `https://pavelbiswas.github.io/react-cv?region=${region}&lang=${lang}`;
```

## Project Structure

```
react-cv/
├── src/
│   ├── components/
│   │   ├── Header.tsx           # Personal info header
│   │   ├── Skills.tsx           # Skills section
│   │   ├── Experience.tsx       # Work experience
│   │   ├── Education.tsx        # Education section
│   │   ├── Certifications.tsx   # Certifications
│   │   ├── Publications.tsx     # Publications
│   │   ├── Contact.tsx          # Contact links
│   │   ├── QR.tsx              # QR code generator
│   │   ├── PrintButton.tsx     # Print functionality
│   │   ├── LangToggle.tsx      # Language switcher
│   │   └── RegionToggle.tsx    # Region switcher
│   ├── pages/
│   │   ├── CVPage.tsx          # Full CV page
│   │   └── CardPage.tsx        # Card view page
│   ├── data/
│   │   ├── pavel.ru.json       # Russian CV data
│   │   └── pavel.uae.json      # UAE CV data
│   ├── styles/
│   │   └── theme.css           # Global styles
│   ├── App.tsx                 # Main app component
│   └── main.tsx                # Entry point
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Configuration

Edit the data files to customize your CV:

- **Russian CV**: `src/data/pavel.ru.json`
- **UAE CV**: `src/data/pavel.uae.json`

Update the `cvUrl` in `src/pages/CVPage.tsx` and `src/pages/CardPage.tsx` with your GitHub repository URL.

## QR Code Integration

The project includes QR code functionality using the `qrcode` library. It's already installed and configured in the `src/components/QR.tsx` component.

## Deployment

### GitHub Pages

```bash
# Build the project
npm run build

# The dist folder is ready to deploy to GitHub Pages
```

## Customization

### Colors and Theme

Edit CSS variables in `src/styles/theme.css`:

```css
:root {
  --primary-color: #2c3e50;
  --secondary-color: #3498db;
  --accent-color: #e74c3c;
  /* ... more variables */
}
```

### Adding New Sections

1. Create a new component in `src/components/`
2. Import it in the page components
3. Add corresponding data to JSON files
4. Style using CSS classes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own CV

## Author

Pavel
