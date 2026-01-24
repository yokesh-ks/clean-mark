# CleanMark - Markdown Cleaner

A Next.js application for cleaning and formatting Markdown content with OpenNext deployment support.

## Features

- Clean and format Markdown content
- Preview functionality
- Responsive design
- Theme toggle (light/dark mode)
- Cloudflare deployment ready

## Project Structure

```
src/
├── app/              # Main application pages
├── components/       # Reusable UI components
├── context/          # React context providers
└── lib/              # Utility functions
```

## Getting Started

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and configured for OpenNext deployment on Cloudflare.

### Prerequisites

- Node.js (v18 or later)
- pnpm (recommended) or npm/yarn
- Cloudflare account (for deployment)

## Installation

```bash
pnpm install
# or
npm install
# or
yarn install
```

## Development

Run the Next.js development server:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The application supports hot reloading - changes to files in `src/` will automatically update the browser.

## Preview

Preview the application locally with Cloudflare runtime:

```bash
pnpm preview
# or
npm run preview
# or
yarn preview
```

## Deployment

Deploy to Cloudflare using OpenNext:

```bash
pnpm deploy
# or
npm run deploy
# or
yarn deploy
```

## Configuration

Key configuration files:

- `next.config.ts` - Next.js configuration
- `open-next.config.ts` - OpenNext specific configuration

## Available Scripts

- `dev` - Start development server
- `build` - Build production application
- `start` - Start production server
- `preview` - Local Cloudflare preview
- `deploy` - Deploy to Cloudflare
- `lint` - Run ESLint

## Technologies Used

- Next.js 14+
- React 18+
- TypeScript
- Tailwind CSS
- shadcn/ui components
- OpenNext for Cloudflare deployment

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [OpenNext Documentation](https://opennext.js.org)
- [Cloudflare Workers](https://workers.cloudflare.com)
- [shadcn/ui](https://ui.shadcn.com)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on the [GitHub repository](https://github.com/yokesh-ks/clean-mark.git).

## License

MIT
