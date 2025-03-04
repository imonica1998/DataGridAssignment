import { TableRow,TableRowWithCheckbox,Status } from '../types/TableDataType';
import jsonData from './mockData.json';

export const getDataFromMockApi= async () => {
    // return <TableRow[]>jsonData;
    const tableDataWithCheckbox: TableRowWithCheckbox[] = jsonData.map((row) => ({
        ...row,
        status:<Status>row.status,
        checked: false,
      }));
      
        console.log(tableDataWithCheckbox);
      return tableDataWithCheckbox;

}

