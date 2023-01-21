import { TableRow, ITableRow } from '../TableRow';

type TableProps = {
  data: ITableRow[],
};

export const Table = (props: TableProps) => {
  const tableData = props.data.map((item, i) => <TableRow key={i} {...item}></TableRow>);
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>{tableData}</tbody>
    </table>
  );
};
