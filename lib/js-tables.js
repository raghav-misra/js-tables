var Table = /** @class */ (function () {
    /* Create */
    function Table(columns, rows) {
        this.$columns = columns;
        this.$rows = rows;
    }
    Table.create = function (columns, rows) {
        return new Table(columns, rows);
    };
    /* Read */
    Table.prototype.read = function (row, column) {
        return this.$rows[row][this.$columns.indexOf(column)];
    };
    /* Update */
    Table.prototype.update = function (row, column, data) {
        this.$rows[row][this.$columns.indexOf(column)] = data;
    };
    /* Append */
    Table.prototype.append = function (row, data) {
        this.$rows[row] = data;
    };
    /* Delete */
    Table.prototype.remove = function (row) {
        delete this.$rows[row];
    };
    Object.defineProperty(Table.prototype, "rows", {
        /* Row Getter WIP */
        get: function () {
            var calculatedRows = [];
            return calculatedRows;
        },
        enumerable: true,
        configurable: true
    });
    /* Stringify/Parse Interactions */
    Table.prototype.encode = function () {
        return btoa(JSON.stringify({
            rows: this.$rows, columns: this.$columns
        }));
    };
    Table.decode = function (dataString) {
        var _a = JSON.parse(atob(dataString)), rows = _a.rows, columns = _a.columns;
        return new Table(columns, rows);
    };
    return Table;
}());
module.exports = Table;
