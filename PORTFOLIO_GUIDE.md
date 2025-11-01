# Portfolio Customization Guide

Welcome to your new portfolio website! This guide will help you customize it with your personal information.

## 🎨 Quick Start

### 1. Update Your Personal Information

#### Hero Section (`src/components/sections/hero.tsx`)

Replace the placeholder text with your information:

```tsx
<h1 className="...">
  Timothy Nguyen  // ← Your name here
</h1>
<p className="...">
  Full-Stack Developer & Designer  // ← Your title here
</p>
<p className="...">
  Crafting elegant digital experiences...  // ← Your tagline here
</p>
```

#### Projects Section (`src/components/sections/projects.tsx`)

Update the projects array with your actual projects:

```tsx
const projects = [
  {
    title: "Your Project Name",
    description: "Brief description of what the project does",
    image: "/projects/your-image.jpg",  // Add your screenshot
    link: "https://your-live-demo.com",
    github: "https://github.com/yourusername/project",
    tags: ["React", "TypeScript", "etc."],
  },
  // Add more projects...
];
```

#### Skills Section (`src/components/sections/skills.tsx`)

Customize your skills:

```tsx
const skills = {
  "Frontend": ["React", "Next.js", ...],  // Your frontend skills
  "Backend": ["Node.js", "Python", ...],   // Your backend skills
  "Tools & Platforms": ["Git", "Docker", ...],
  "Soft Skills": ["Problem Solving", ...],
};
```

#### Timeline Section (`src/components/sections/timeline.tsx`)

Add your work experience and education:

```tsx
const timeline = [
  {
    type: "work",  // or "education"
    title: "Your Job Title",
    organization: "Company Name",
    period: "2022 - Present",
    description: "What you did in this role...",
  },
  // Add more entries...
];
```

#### Contact Section (`src/components/sections/contact.tsx`)

Update your social links:

```tsx
const socials = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/YOUR-USERNAME",
    username: "@YOUR-USERNAME",
  },
  // Update other social links...
];
```

### 2. Add Your Images

#### Profile Photo
- Save your headshot as `public/headshot.jpg`
- Recommended size: 400x400px
- Should be a professional, clear photo

#### Project Screenshots
- Save project images in `public/projects/`
- Recommended size: 800x400px or 16:9 aspect ratio
- Use descriptive filenames matching your project data

#### Social Preview Image
- Save as `public/og-image.jpg`
- Size: 1200x630px
- This appears when sharing your site on social media

### 3. Update SEO Metadata (`src/pages/index.tsx`)

```tsx
<Head>
  <title>Your Name - Your Title</title>
  <meta name="description" content="Your professional summary..." />
  <meta property="og:title" content="Your Name - Your Title" />
  // Update other meta tags...
</Head>
```

### 4. Update Footer (`src/components/footer.tsx`)

```tsx
<span>© {currentYear} Your Name. Built with...</span>
```

## 🎨 Customization Options

### Colors

The site uses CSS custom properties defined in `src/styles/globals.css`.

To change colors, modify the `@theme` block:

```css
@theme {
  --color-primary: 240 5.9% 10%;  /* Main color */
  --color-accent: 240 4.8% 95.9%;  /* Accent color */
  /* More colors... */
}
```

### Fonts

Fonts are defined in `src/pages/_app.tsx`:

```tsx
import { Geist, Geist_Mono } from "next/font/google";
// or import different Google Fonts
```

### Layout & Spacing

Adjust spacing in each section component:
- Padding: `py-24` (vertical), `px-6` (horizontal)
- Gaps: `space-y-12`, `gap-6`, etc.
- Max width: `max-w-6xl`, `max-w-4xl`, etc.

## 🚀 Deployment

### Build Locally

```bash
npm run build
```

This generates a static site in the `out/` directory.

### Preview Locally

```bash
# After building
python3 -m http.server 3000 --directory out
```

Visit `http://localhost:3000`

### Deploy to GitHub Pages

1. Push your changes to the `master` branch:
```bash
git add .
git commit -m "Update portfolio content"
git push origin master
```

2. GitHub Actions will automatically:
   - Build your site
   - Deploy to `gh-pages` branch
   - Make it live at `https://YOUR-USERNAME.github.io`

3. If needed, configure GitHub Pages:
   - Go to repository Settings → Pages
   - Source: Deploy from branch `gh-pages`
   - Folder: `/ (root)`

## 📱 Testing Checklist

Before deploying, test these features:

- [ ] All links work correctly
- [ ] Images load properly
- [ ] Dark/light mode toggle works
- [ ] Mobile responsive design looks good
- [ ] Smooth scroll to sections works
- [ ] Hover animations work
- [ ] Social links go to correct profiles
- [ ] SEO meta tags are correct

## 💡 Tips

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Import and add it to `src/pages/index.tsx`
3. Add navigation link in `src/components/navigation.tsx`

### Changing Animation Speed

In `src/styles/globals.css`:

```css
.animate-fade-up {
  animation: fade-up 0.6s ease-out;  /* Change 0.6s to your preference */
}
```

### Adding More Projects

Just add more objects to the `projects` array - the grid will automatically adjust!

### Mobile Testing

Test on different screen sizes:
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px

## 🆘 Troubleshooting

**Build fails:**
- Run `npm install` to ensure all dependencies are installed
- Check for TypeScript errors: `npm run build`

**Images don't show:**
- Ensure images are in `public/` directory
- Check file names match exactly (case-sensitive)
- Use correct paths (e.g., `/headshot.jpg` not `public/headshot.jpg`)

**Dark mode not working:**
- Clear browser cache
- Check theme provider is wrapping app in `_app.tsx`

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)
- [ShadCN UI](https://ui.shadcn.com/)

---

Happy coding! 🎉
