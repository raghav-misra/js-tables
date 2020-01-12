import { Table } from '../src/json-tables.js';

const userDb = new Table(
                   ["email",          "phone"       ], {
    "James Peach": ["james@peach.io", "888-888-9993"],
    "Jane Smith":  ["jane@smith.com", "111-111-2244"]
});

alert(userDb.toJSON());