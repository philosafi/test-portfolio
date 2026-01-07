# Tashfeen Ahmed Portfolio Clone

A pixel-perfect clone of [tashfeen.me](https://www.tashfeen.me) - the portfolio website of Tashfeen Ahmed, Senior Product Designer at Microsoft. Built with modern web technologies featuring smooth animations, dark/light theme support, and fully responsive design.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0055?style=flat-square&logo=framer)

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This project is a comprehensive portfolio website showcasing the work of a Senior Product Designer. It serves as both a functional portfolio template and a demonstration of modern web development practices.

### Purpose

- Showcase professional work and case studies
- Demonstrate expertise in product design
- Provide contact information and professional background
- Serve as a template for other designers/developers

### Scope

The website includes:
- **Homepage**: Hero section with animated text and project showcase
- **Project Pages**: Individual case study pages for each project
- **Bio Page**: Professional background, experience timeline, education, and recognition
- **Interactive Elements**: Theme toggle, animations, and hover effects

## Features

### Core Features

| Feature | Description |
|---------|-------------|
| **Dark/Light Theme** | System-aware theme with manual toggle, smooth transitions |
| **Responsive Design** | Fully responsive from mobile to 4K displays |
| **Animations** | Smooth page transitions, scroll animations, hover effects |
| **SEO Optimized** | Meta tags, Open Graph, Twitter cards |
| **Accessibility** | Keyboard navigation, focus states, semantic HTML |

### Interactive Components

- **Navigation**: Sticky header with scroll detection, mobile hamburger menu
- **Hero Section**: Animated cycling text with typewriter effect
- **Project Cards**: Hover effects with image zoom and arrow reveal
- **Custom Cursor**: Desktop cursor follower that scales on interactive elements
- **Theme Toggle**: Animated sun/moon icon with rotation effect

### Pages

1. **Home (`/`)** - Landing page with hero and project grid
2. **Bio (`/bio`)** - About page with experience, education, recognition
3. **Work (`/work/[id]`)** - Dynamic project case study pages

### Projects Showcased

1. Microsoft 365 Copilot - AI-Powered Writing Assistance
2. Bayut Mobile App - Real Estate Platform Redesign
3. Makerarm - Desktop Fabrication System (Kickstarter)
4. KeepTruckin Developer Platform - Fleet Management APIs
5. pyReality - Mixed Reality Data Visualization
6. Fidget Digits - Self-Tracking Wearable
7. COVID in Pixels - News Analysis Visualization
8. Custom MIDI Controller - Hardware Music Interface
9. Expressive Lamp - Physical Distancing Design

## Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js 15](https://nextjs.org/) | React framework with App Router |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe JavaScript |
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first CSS framework |
| [Framer Motion](https://www.framer.com/motion/) | Animation library |
| [next-themes](https://github.com/pacocoursey/next-themes) | Theme management |
| [Lucide React](https://lucide.dev/) | Icon library |

## Project Structure

```
test-portfolio/
├── public/                    # Static assets
│   └── images/
│       └── projects/          # Project images
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── bio/
│   │   │   └── page.tsx       # Bio/About page
│   │   ├── work/
│   │   │   └── [id]/
│   │   │       └── page.tsx   # Dynamic project pages
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Homepage
│   ├── components/            # React components
│   │   ├── ClientLayout.tsx   # Client-side layout wrapper
│   │   ├── CursorFollower.tsx # Custom cursor effect
│   │   ├── Footer.tsx         # Site footer
│   │   ├── Hero.tsx           # Homepage hero section
│   │   ├── LoadingScreen.tsx  # Loading animation
│   │   ├── Navigation.tsx     # Header navigation
│   │   ├── PageTransition.tsx # Animation wrappers
│   │   ├── ProjectCard.tsx    # Project card components
│   │   ├── SmoothScroll.tsx   # Smooth scroll behavior
│   │   ├── ThemeProvider.tsx  # Theme context provider
│   │   ├── ThemeToggle.tsx    # Dark/light toggle button
│   │   └── index.ts           # Component exports
│   └── data/
│       └── projects.ts        # Project data and types
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify installation: `node --version`
- **npm** (v9.0.0 or higher, comes with Node.js)
  - Verify installation: `npm --version`
- **Git** (optional, for cloning)
  - Download from [git-scm.com](https://git-scm.com/)

### Installation

#### Option 1: Clone with Git

```bash
# Clone the repository
git clone https://github.com/philosafi/test-portfolio.git

# Navigate to project directory
cd test-portfolio

# Switch to the main development branch
git checkout claude/clone-portfolio-website-bhdgK

# Install dependencies
npm install
```

#### Option 2: Download ZIP

1. Go to the [repository page](https://github.com/philosafi/test-portfolio)
2. Click the branch dropdown and select `claude/clone-portfolio-website-bhdgK`
3. Click the green "Code" button
4. Click "Download ZIP"
5. Extract the ZIP file
6. Open terminal in the extracted folder
7. Run `npm install`

### Running Locally

```bash
# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality |

## Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy this Next.js app:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign up/login with GitHub
4. Click "New Project"
5. Import your repository
6. Vercel will auto-detect Next.js settings
7. Click "Deploy"

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/philosafi/test-portfolio)

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" > "Import an existing project"
4. Connect to GitHub and select repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy"

### Deploy to Other Platforms

#### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

#### Self-Hosted

```bash
# Build for production
npm run build

# Start production server
npm run start

# Or use PM2 for process management
npm install -g pm2
pm2 start npm --name "portfolio" -- start
```

### Environment Variables

No environment variables are required for basic deployment. For customization:

```env
# .env.local (optional)
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Contributing

We welcome contributions! Here's how you can help:

### Getting Started as a Contributor

1. **Fork the repository**
2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/test-portfolio.git
   ```
3. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make your changes**
5. **Test your changes**
   ```bash
   npm run build
   npm run lint
   ```
6. **Commit your changes**
   ```bash
   git commit -m "feat: add your feature description"
   ```
7. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```
8. **Open a Pull Request**

### Contribution Guidelines

#### Code Style

- Use TypeScript for all new files
- Follow existing code formatting (Prettier/ESLint)
- Use meaningful variable and function names
- Add comments for complex logic

#### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting)
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

#### Areas for Contribution

- **Bug Fixes**: Check issues labeled `bug`
- **New Features**: Check issues labeled `enhancement`
- **Documentation**: Improve README, add JSDoc comments
- **Accessibility**: Improve keyboard navigation, ARIA labels
- **Performance**: Optimize images, reduce bundle size
- **Testing**: Add unit/integration tests
- **Internationalization**: Add multi-language support

### Project Architecture

#### Component Guidelines

```tsx
// Components should be:
// 1. Single responsibility
// 2. Properly typed with TypeScript
// 3. Use Tailwind for styling
// 4. Include proper accessibility attributes

"use client"; // Only if using client-side features

import { motion } from "framer-motion";

interface ComponentProps {
  title: string;
  children: React.ReactNode;
}

export function Component({ title, children }: ComponentProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-4"
    >
      <h2>{title}</h2>
      {children}
    </motion.div>
  );
}
```

#### Adding New Projects

To add a new project, edit `src/data/projects.ts`:

```typescript
{
  id: "project-slug",
  title: "Project Title",
  subtitle: "Short tagline",
  description: "Longer description for cards",
  image: "/images/projects/project.jpg",
  category: "Product Design",
  tags: ["Tag1", "Tag2"],
  year: "2024",
  featured: true, // Show in featured section
  color: "#HexColor",
  details: {
    overview: "Full project overview...",
    role: "Your Role",
    team: "Team size/description",
    tools: ["Tool1", "Tool2"],
    sections: [
      {
        title: "Section Title",
        content: "Section content..."
      }
    ]
  }
}
```

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Support

If you have questions or need help:

- Open an [Issue](https://github.com/philosafi/test-portfolio/issues)
- Check existing issues for solutions

## Acknowledgments

- Original design inspiration: [tashfeen.me](https://www.tashfeen.me)
- Icons: [Lucide](https://lucide.dev/)
- Animations: [Framer Motion](https://www.framer.com/motion/)
