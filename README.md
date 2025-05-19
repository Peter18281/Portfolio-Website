# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive
- 🌙 Dark mode support
- ⚡ Fast performance
- 🔍 SEO optimized
- 📝 Blog section (optional)
- 📬 Contact form
- 🔗 Social media integration

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [React](https://reactjs.org/) - UI library
- [Vercel](https://vercel.com/) - Deployment (recommended)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
portfolio-website/
├── public/             # Static files
├── src/
│   ├── app/           # App router pages
│   ├── components/    # React components
│   └── styles/        # Global styles
├── package.json
└── README.md
```

## Customization

1. Update personal information:
   - Edit the content in `src/app/page.tsx`
   - Modify the About section in `src/app/about/page.tsx`
   - Update projects in `src/app/projects/page.tsx`

2. Customize styling:
   - Modify Tailwind configuration in `tailwind.config.js`
   - Update global styles in `src/app/globals.css`

3. Add your own images:
   - Place images in the `public` directory
   - Update image paths in components

## Deployment

The easiest way to deploy your portfolio is using [Vercel](https://vercel.com/):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will detect Next.js and deploy automatically

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://reactjs.org/docs) 