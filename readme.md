# JSTables
Serverless data tables with JSON.

## What is JSTables?
JSTables is a super-tiny library that creates a table-like data structure using JS objects. You can use it for temporary and permanent storage. For permanent storage, JSTables allows you to 'convert' a table into an encoded string to write to file, and then convert back.

## Include JSTables:
Install the module:
```
npm i js-tables
```

Then, you can use it like this:
```js
const Table = require('js-tables');
```

Or, if you don't want CommonJS (for whatever reason), you can use the following in HTML:
```html
<script src="https://cdn.jsdelivr.net/gh/raghav-misra/json-tables/lib/json-tables.nomod.js">
</script>
```