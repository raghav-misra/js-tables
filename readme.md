# JSONTables
Serverless data tables with JSON.

## What is JSONTables?
JSONTables is a super-tiny library that creates a table-like data structure using JS objects. You can use it for temporary and permanent storage. For permanent storage, JSONTables allows you to 'convert' a table into an encoded string to write to file, and then convert back.

## Include JSONTables:
Drop the following **ES Module** into your JavaScript (make sure to specify `type='module'` in your HTML file):
```js
import { Table } from 'https://cdn.jsdelivr.net/gh/raghav-misra/json-tables/lib/json-tables.js';
```
Or, if your target doesnt support **ESM**, you can use the following in your HTML:
```html
<script src="https://cdn.jsdelivr.net/gh/raghav-misra/json-tables/lib/json-tables.es5.js">
</script>
```

## For TypeScript users:
Declaration file [**HERE**](https://cdn.jsdelivr.net/gh/raghav-misra/json-tables/lib/json-tables.d.ts):

`https://cdn.jsdelivr.net/gh/raghav-misra/json-tables/lib/json-tables.d.ts
`