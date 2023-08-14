# @local/tsconfig

Add typescript configuration to each project.

## Installation

Add the following to each application's `package.json` file:

```json
{
  "devDependencies": {
    "@local/tsconfig": "workspace:*",
    "typescript": "^5.0.4"
  }
}
```

## Usage

Add the following to each application's `tsconfig.json` file:

```json
{
  "extends": "@local/tsconfig"
}
```

| Rule              | extension                          |
| ----------------- | ---------------------------------- |
| base              | @local/tsconfig                    |
| react             | @local/tsconfig/react-library.json |
| nextjs with pages | @local/tsconfig/next.json          |
| nextjs with app   | @local/tsconfig/next-edge.json     |
