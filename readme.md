# JSTables
Serverless data tables with JSON.

**!!!!** Please Note: This library is not meant to be used in production. My personal intent was for use in a hackathon (too lazy to setup Mongo). If you do use it in production (WTF), please consider the risks. **!!!!**

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

Or, if you don't want CommonJS (for whatever reason), you can use the following in HTML (you can't really use a backend though):
```html
<script src="https://cdn.jsdelivr.net/gh/raghav-misra/json-tables/lib/json-tables.nomod.js"></script>
```

Regardless of which method you use, you should be able to access the `Table` class.

## Creating/Modifying Tables:
### Initialize a table:
```js
const users = Table.create(
                     ["email",             "phone"], {
    "James Jeffrey": ["jj@james.io",       "+1 123-456-7890"],
    "Ramesh Mondo":  ["rm8976@g00gle.com", "+1 001-002-0012"]
});
```

Now you can visualizes `users` to look like this:

|               | email             | phone           |
|---------------|-------------------|-----------------|
| James Jeffrey | jj@james.io       | +1 123-456-7890 |
| Ramesh Mondo  | rm8976@g00gle.com | +1 001-002-0012 |

### Let's add a row:

```js
users.append(
    "Joe Mama", ["hi@joe.bro", "888-777-1010"]
);
```
Now your table will look like this:

|               | email             | phone           |
|---------------|-------------------|-----------------|
| James Jeffrey | jj@james.io       | +1 123-456-7890 |
| Ramesh Mondo  | rm8976@g00gle.com | +1 001-002-0012 |
| Joe Mama      | hi@joe.bro        | 888-777-1010    |

### Ramesh deleted his account.
Remove his entry (row).

```js
users.delete("Ramesh Mondo");
```

New data table:

|               | email             | phone           |
|---------------|-------------------|-----------------|
| James Jeffrey | jj@james.io       | +1 123-456-7890 |
| Joe Mama      | hi@joe.bro        | 888-777-1010    |

### Joe forgot his phone #, let's help him out!
Get a specific field in the table.

```js
const phoneNumber = users.read("Joe Mama", "phone");
console.log("Joe! We found your phone number: " + phoneNumber);
```

### What if James' email changed? Let's make sure it's up-to-date.
Update a specific field in the table.

```js
users.update(
    "James Jeffrey", "email", "email@lordjoe.cc"
);
```

Table looks like this:

|               | email             | phone           |
|---------------|-------------------|-----------------|
| James Jeffrey | email@lordjoe.cc  | +1 123-456-7890 |
| Ramesh Mondo  | rm8976@g00gle.com | +1 001-002-0012 |
| Joe Mama      | hi@joe.bro        | 888-777-1010    | 

## Permanent Data Storage:
### How it works:
Basically, the `Table.prototype.encode` function allows you to convert a Table instance to an encoded string. Then, you can write this encoded string to file, or do whatever you want with it. Same goes for the opposite direction. You can read your encoded data from file, and use `Table.decode` to initialize a `Table` with it. 

### Encoding `Table => string`:
An example (never use `fs.writeFileSync`):
```js
const fs = require('fs');

const writeData = users.encode();

fs.writeFileSync("./db", writeData);
```
### Decoding `string => Table`:
Another example (never use `fs.writeFileSync`):
```js
const readData = fs.readFileSync("./db", "utf8");

const newUsers = Table.decode(readData); // The new table
```

## Good Luck!
You Finished the README! This is MIT licensed by the way.

