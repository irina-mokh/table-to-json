import { TableRow, ITableRow } from '../TableRow';

type EditorProps = {
  data: ITableRow[],
};

export const Editor = (props: EditorProps) => {
  const tableData = props.data.map((item, i) => <TableRow key={i} {...item}></TableRow>);
  return (
    <div className='editor'>
      <h2>Edit data:</h2>
      <form className='editor__form'>
        <table className='editor__table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>{tableData}</tbody>
        </table>
        <input type='editor__submit'></input>
      </form>
    </div>
  );
};
