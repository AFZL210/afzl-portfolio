# [afzl210](https://afzl-portfolio.vercel.app/)

## Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: [MDX](https://github.com/mdx-js/mdx) and [contentlayer](https://contentlayer.dev)
- **Database**: [Supabase](https://supabase.com/)
- **Deployment**: [Vercel](https://vercel.com)

## Project Structure

```bash
.
|____public
|____src
| |____app
| |____assets
| |____components
| | |____ui
| | |____social-icons
| | |____styled
| | |____Navbar
| | |____Projects
| |____data
| |____hooks
| |____types
| |____utils
```

- **`public/*`** - Static assets including images, fonts, audios, files, etc.
- **`src/app/*`** - Every page and api route in the website. Uses the new [App Router](https://beta.nextjs.org/docs/getting-started#introducing-the-app-router) from [Next.js](https://nextjs.org/) `13.+`
- **`src/assets/*`** - Fonts and static images used in different components
- **`src/components/social-icons/*`** - SVG icon paths. Icons come from [Material Icons](https://mui.com/material-ui/material-icons/)
- **`src/components/ui/*`** - This contain all the common ui components
- **`src/data/*`** - JSON files containing data for projects
- **`src/hooks/*`** - A couple hooks used throughout the app
- **`src/types/*`** - Some types definitions
- **`src/utils/*`** - More utilities functions but less complex than the ones in `lib`

## Running Locally

This application requires Node.js v16.20+.

```bash
git clone https://github.com/AFZL210/afzl-portfolio
cd afzl-portfolio
pnpm install
npm run dev # Remove all of my personal content and files
```



## Cloning / Forking

Do not copy it directly, remove all of my personal content and files (resume, blog posts, images, etc.) and please change the styling and colors to match your personal brand. You are free to use this code as inspiration or learning reference but this is not really intended to be a template.
