import { TableRow, ITableRow } from '../TableRow';

type TableProps = {
  data: ITableRow[],
  setTable: (data: ITableRow[]) => void,
};

export const Table = ({ data, setTable }: TableProps) => {
  const tableData = data.map((item, i) => {
    const setRow = (newRow: ITableRow) => {
      const newTable = [...data];
      newTable[i] = newRow;
      setTable(newTable);
    };

    const deleteRow = () => {
      const newTable = [...data];
      newTable.splice(i, 1);
      setTable(newTable);
    };
    return <TableRow key={i} {...item} setRow={setRow} deleteRow={deleteRow} />;
  });
  return (
    <>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>{tableData}</tbody>
      </table>
    </>
  );
};
