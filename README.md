# Storybook Interaction testing demo

This is a demo project to show how to use [Storybook](https://storybook.js.org/) to test your components interactions.

## How to run

1. Install dependencies

```bash
pnpm i
```

2. Run Storybook

```bash
npx nx storybook my-app
```

3. Test Storybook for `my-app`

On a new terminal run:

```bash
npx nx test-storybook my-app
```

## See the files

- [`apps/my-app/src/app/sample-text/sample-text.stories.tsx`](apps/my-app/src/app/sample-text/sample-text.stories.tsx)
- [`apps/my-app/src/app/button/button.stories.tsx`](apps/my-app/src/app/button/button.stories.tsx)
- [`apps/my-app/src/app/app.stories.tsx`](apps/my-app/src/app/app.stories.tsx)
