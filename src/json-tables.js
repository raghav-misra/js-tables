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

    /* Stringify/Parse Interactions */
    encode() {
        return btoa(JSON.stringify({
            rows: this.rows, columns: this.columns
        }));
    }
    

    static decode(dataString) {
        const { rows, columns } = JSON.parse(atob(dataString));
        return new Table(columns, rows);
    }
}