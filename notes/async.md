# Async, Runtime Validation, and Zod

## Async/Await

When `await fetch(...)` is waiting for the network response, the rest of the program can continue running outside the async function. The `await` pauses only the async function that contains it; it does not block the entire JavaScript runtime.

## Runtime vs Compile-Time

TypeScript checks types at compile time, but it does not automatically validate data received from an external API at runtime.

The API returned `completed`, while our Task type expected `done`. TypeScript did not detect this because the actual JSON data is only known when the program runs.

## Zod Validation

Zod validates data at runtime.

The API response failed `TaskSchema` validation because the API returned:

- `completed: false`

while the schema expected:

- `done: boolean`

The validation error was:

- path: `done`
- code: `invalid_type`
- message: `Invalid input: expected boolean, received undefined`

## Why safeParse?

`safeParse` was used because it returns a result object instead of throwing an exception when validation fails. This allows the program to check `result.success` and handle invalid data safely.
