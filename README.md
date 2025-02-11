# Harry Potter Listing

A modern web application showcasing Hogwarts characters, staff, and spells with real-time favoriting system and house customization. Built with Next.js 15.1 and React 19, implementing hybrid static/server-rendered pages with TypeScript type safety.

## How to run the project

1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`

## Testing

To run the tests, run `npm run test`.

## Notable Techniques

- **Context API** for global state management of favorites
- **Dynamic Route Segments** with Next.js App Router (`/characters/[id]`)
- **CSS Safelisting** for Tailwind house color variants
- **Composite Pagination** using render props pattern
- **SVG Transform Mocking** in Jest tests

## Key Technologies

- [Next.js 15.1](https://nextjs.org/) App Router
- [react-tiny-popover](https://www.npmjs.com/package/react-tiny-popover) popover navigation
- [Lucide React](https://lucide.dev/) icons
- [Tailwind CSS 3.4](https://tailwindcss.com/) styling
- [Jest 29](https://jestjs.io/) + Testing Library for testing

## Project Structure

```
├── app/
│ ├── api/ # Next.js route handlers
│ ├── characters/ # ISR dynamic routes
│ ├── houses/ # House-specific pages
│ └── [navigation]/ # Staff/students/spells
├── components/ # Interactive client components
├── constants/ # Constants values
├── contexts/ # Favorite state management
├── public/ # Static assets
│ └── houses/ # SVG crests
├── services/ # API client abstraction
├── types/ # TS type definitions
└── utils/ # Utility functions
```

## Key Decisions

### Why only create two tests?

I only created two tests because, since I only had 4 hours to complete the technical test, I decided to focus on better developing the components and the overall architecture of the project. In a real project, I would create tests for ALL my components, but in this case, I was racing against time to ensure the test was delivered within the proposed timeframe fairly.

### Why use a context to manage the favorites?

I used a context to manage the favorites because it's a simple and effective way to manage the favorites state across the application.

## Improvements

If we had more time, I would improve the following:

- Add more tests to the project
- Apply Harry Potter aesthetics to the project
- Add a proper error handling for the API, pagination, search, etc.