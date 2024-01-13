# next-toggle-menu-ssr

This is a simple project to demonstrate how to create a toggle menu with Next App Router (Next.js 14+).

This app must have the following features:
- [x] Toggle menu using useState.
- [x] The content of menu must be rendered dynamically on server side.
- [x] The content of menu must be shown when view source on browser.
- [x] No warning on console.
- [x] Can apply to any Next.js project or third party library (MUI, Tailwind, etc).

## Why?
You can easily create a toggle menu with useState and useEffect. But it will not work on server side rendering. The menu will be shown on client side only.
You need to show the content of menu on source code of browser. This is important for SEO.

## Explanation
- The server component is rendered dynamically on server side. But cannot be imported on client component.
- We need to import them on parent server component and pass it as props to client component.
- The client component will solve problem with `useEffect` and `useState` to render the menu properly.

## License
MIT
