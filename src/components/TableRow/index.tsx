export interface ITableRow {
  name: string;
  value: string;
}

interface TableRowProps extends ITableRow {
  setRow: (newRow: ITableRow) => void;
  deleteRow: () => void;
}

export const TableRow = ({ name, value, setRow, deleteRow }: TableRowProps) => {
  return (
    <tr className='row'>
      <td className='cell'>
        <input
          type='text'
          value={name}
          name='name'
          className='cell__input'
          onChange={(e) => setRow({ name: e.target.value, value: value })}
        ></input>
      </td>
      <td className='cell'>
        <input
          type='text'
          value={value}
          name='value'
          className='cell__input'
          onChange={(e) => setRow({ name: name, value: e.target.value })}
        ></input>
      </td>
      <td className='cell_delete'>
        <button onClick={deleteRow} className='row__delete'>
          🗙
        </button>
      </td>
    </tr>
  );
};
