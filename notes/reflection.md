# Lab 2 Reflection

## Why does await only pause the containing function?

`await` pauses the async function that contains it until the Promise settles. It does not block the entire JavaScript runtime, so other work outside that function can continue.

## Why did the incorrect Task return type not trigger a TypeScript error?

TypeScript performs compile-time checking. It does not inspect or validate the actual shape of JSON received from an external API at runtime. Therefore, the declared return type can appear correct to TypeScript even when the real API response has different fields.

## parse vs safeParse

`parse` returns the validated data when validation succeeds, but throws an error when validation fails. `safeParse` instead returns a result object containing either `success: true` with the data or `success: false` with validation errors.

`createTask` uses `safeParse` because invalid external input is an expected possibility and should be handled without throwing an exception.
