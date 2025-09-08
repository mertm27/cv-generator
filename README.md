# CV Generator

A modern, responsive CV generator built with React, TypeScript, and TailwindCSS. Create professional CVs with a live preview and export them as PDF.

## Features

- 📝 **Live Preview**: See your CV update in real-time as you type
- 🎨 **5 Professional Themes**: Choose from Modern, Classic, Minimal, Creative, and Professional designs
- 📁 **Image Upload**: Upload profile photos directly from your device or use URLs
- 📱 **Responsive**: Works on desktop, tablet, and mobile devices
- 📄 **PDF Export**: Download your CV as a high-quality PDF
- ⚡ **Fast & Lightweight**: Built with modern React and TypeScript
- 🎯 **User-Friendly**: Intuitive form interface with validation

## Sections

- **Basic Information**: Name, job title, contact details, profile photo
- **Professional Summary**: Brief description of your background
- **Skills**: Add skills with proficiency levels and progress bars
- **Work Experience**: Multiple entries with job details and descriptions
- **Education**: Academic background with degrees and institutions

## Tech Stack

- **React 18** with TypeScript
- **TailwindCSS** for styling
- **React Context** for state management
- **react-to-print** for PDF generation
- **Vite** for fast development and building

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cv-generator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Usage

1. **Fill in your information**: Use the form on the left to enter your details
2. **Upload your photo**: Click "Upload from Gallery" to select an image from your device, or enter a URL
3. **Choose a theme**: Select from 5 different professional themes (Modern, Classic, Minimal, Creative, Professional)
4. **Add sections**: Click "Add" buttons to create multiple entries for skills, experience, and education
5. **Live preview**: Watch your CV update in real-time on the right side with your selected theme
6. **Export PDF**: Click "Download CV as PDF" to save your CV

## Project Structure

```
src/
├── components/
│   ├── CVForm.tsx          # Main form component
│   ├── CVPreview.tsx       # CV preview component
│   ├── SummarySection.tsx  # Basic information form
│   ├── SkillsSection.tsx   # Skills management
│   ├── ExperienceSection.tsx # Work experience form
│   ├── EducationSection.tsx # Education form
│   ├── DownloadButton.tsx  # PDF export functionality
│   ├── ThemeSelector.tsx   # Theme selection component
│   └── themes/
│       ├── ModernTheme.tsx     # Modern theme design
│       ├── ClassicTheme.tsx    # Classic theme design
│       ├── MinimalTheme.tsx    # Minimal theme design
│       ├── CreativeTheme.tsx   # Creative theme design
│       └── ProfessionalTheme.tsx # Professional theme design
├── context/
│   └── CVContext.tsx       # State management
├── App.tsx                 # Main application component
├── main.tsx               # Application entry point
└── index.css              # Global styles
```

## Customization

### Styling
The application uses TailwindCSS for styling. You can customize the appearance by:
- Modifying the `tailwind.config.js` file
- Adding custom CSS in `src/index.css`
- Updating component styles directly

### Adding New Sections
To add new CV sections:
1. Create a new component in `src/components/`
2. Add the section to the CV data type in `CVContext.tsx`
3. Include the component in `CVForm.tsx`
4. Update the preview in `CVPreview.tsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
