# Contributor Guide

## Dev Environment Tips
- Use pnpm dlx turbo run where <bex-oli-vite> to jump to a package instead of scanning with ls.
- Run pnpm install --filter <bex-oli-vite> to add the package to your workspace so Vite, ESLint, and TypeScript can see it.
- Use pnpm create vite@latest <bex-oli-vite> -- --template react-ts to spin up a new React + Vite package with TypeScript checks ready.
- Check the name field inside each package's package.json to confirm the right name—skip the top-level one.

## Testing Instructions
- Find the CI plan in the .github/workflows folder.
- Run pnpm turbo run test --filter <bex-oli-vite> to run every check defined for that package.
- From the package root you can just call pnpm test. The commit should pass all tests before you merge.
- To focus on one step, add the Vitest pattern: pnpm vitest run -t "<test name>".
- Fix any test or type errors until the whole suite is green.
- After moving files or changing imports, run pnpm lint --filter <bex-oli-vite> to be sure ESLint and TypeScript rules still pass.
- Add or update tests for the code you change, even if nobody asked.

## PR instructions
Title format: [<bex-oli-vite>] <Title>