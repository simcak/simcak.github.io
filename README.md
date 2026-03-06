# Multiple Page Portfolio

A personal blog theme template that includes automatic recognition of Markdown content and generates configuration accordingly.

## Features

- 🎨 Modern and clean design with dark/light mode support
- 📱 Fully responsive layout
- 📝 Blog system with Markdown support
- 🚀 Project showcase
- 🔍 Pagination for blog posts
- 🎯 SEO optimized
- 🌙 Dark/Light theme toggle
- 📦 Static site generation

## Tech Stack

- **Framework**: Astro 5.x
- **Styling**: Tailwind CSS
- **Content**: Markdown with Astro Content Collections
- **Syntax Highlighting**: Tailwind Typography plugin
- **Language**: TypeScript
- **Build Tool**: Vite

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```
or
```bash
npm run start
```

3. Build && Preview = for final version check

```bash
npm run build && npm run preview
```

## Project Structure

```
├── src/
│   ├── components/        # Reusable components
│   ├── config/            # Configuration files
│   ├── content/           # Markdown blog posts
│   └── pages/             # Astro pages
└── public/                # Static assets
```

## Customization

You can customize the content of different pages by modifying `src/config/content.ts`:

1. Add new blog posts by creating Markdown files in the `src/content/posts` directory
2. Update project information in `src/config/content.ts`
3. Modify site configuration in `src/config/content.ts`
