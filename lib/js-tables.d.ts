interface IRowStorage {
    [key: string]: any[];
}
declare class Table<TColumn = string> {
    private $columns;
    private $rows;
    constructor(columns: TColumn[], rows: IRowStorage);
    static create<TColumn = string>(columns: TColumn[], rows: IRowStorage): Table<TColumn>;
    read(row: string, column: TColumn): any;
    update(row: string, column: TColumn, data: any): void;
    append(row: string, data: any): void;
    remove(row: string): void;
    get rows(): any[];
    encode(): string;
    static decode(dataString: string): Table<string>;
}
