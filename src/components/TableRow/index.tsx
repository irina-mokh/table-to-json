export interface ITableRow {
  name: string;
  value: string;
}

interface TableRowProps extends ITableRow {
  setRow: (newRow: ITableRow) => void;
}

export const TableRow = ({ name, value, setRow }: TableRowProps) => {
  return (
    <tr>
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
    </tr>
  );
};
