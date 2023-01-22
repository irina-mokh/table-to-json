import { TableRow, ITableRow } from '../TableRow';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

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

    const moveRow = (from: number, to: number) => {
      const newTable = [...data];
      const draggable = newTable.splice(from, 1);
      if (to < from) {
        //moving up
        newTable.splice(to, 0, draggable[0]);
      } else {
        //moving down
        newTable.splice(to - 1, 0, draggable[0]);
      }
      setTable(newTable);
    };

    return (
      <TableRow
        key={i}
        {...item}
        setRow={setRow}
        deleteRow={deleteRow}
        moveRow={moveRow}
        index={i}
      />
    );
  });
  return (
    <DndProvider backend={HTML5Backend}>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>{tableData}</tbody>
      </table>
    </DndProvider>
  );
};
