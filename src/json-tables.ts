interface IRowStorage {
    [key: string]: any[];
}

export class Table<TColumn = string> {
    private $columns: TColumn[];
    private $rows: IRowStorage;

    /* Create */
    constructor(columns: TColumn[], rows: IRowStorage) {
        this.$columns = columns;
        this.$rows = rows;
    }

    static create<TColumn = string>(columns: TColumn[], rows: IRowStorage) {
        return new Table<TColumn>(columns, rows);
    }

    /* Read */
    read(row: string, column: TColumn) {
        return this.$rows[row][this.$columns.indexOf(column)];
    }

    /* Update */
    update(row: string, column: TColumn, data: any) {
        this.$rows[row][this.$columns.indexOf(column)] = data;
    }

    /* Append */
    append(row: string, data: any) {
        this.$rows[row] = data;
    }

    /* Delete */
    remove(row: string) {
        delete this.$rows[row];
    }

    /* Row Getter WIP */
    get rows() {
        let calculatedRows = [];

        return calculatedRows;
    }

    /* Stringify/Parse Interactions */
    encode() {
        return btoa(JSON.stringify({
            rows: this.$rows, columns: this.$columns
        }));
    }
    

    static decode(dataString: string) {
        const { rows, columns } = JSON.parse(atob(dataString));
        return new Table(columns, rows);
    }
}