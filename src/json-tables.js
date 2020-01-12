export class Table {
    /* Create */
    constructor(columns, rows = {}) {
        this.columns = columns;
        this.rows = rows;
    }

    static create(columns, rows = {}) {
        return new Table(columns, rows);
    }

    /* Read */
    read(row, column) {
        return this.rows[row][this.columns.indexOf(column)];
    }

    /* Update */
    update(row, column, data) {
        this.rows[row][this.columns.indexOf(column)] = data;
    }

    /* Append */
    append(row, data) {
        this.rows[row] = data;
    }

    /* Delete */
    remove(row) {
        delete this.rows[row];
    }

    /* JSON Interactions */
    toJSON() {
        return JSON.stringify({
            rows: this.rows, columns: this.columns
        });
    }
    

    static fromJSON(jsonString) {
        const { rows, columns } = JSON.parse(jsonString);
        return new Table(columns, rows);
    }
}