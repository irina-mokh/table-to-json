export interface ITableRow {
  name: string;
  value: string;
}

export const TableRow = (props: ITableRow) => {
  // eslint-disable-next-line prettier/prettier
  const objKeys = Object.keys(props) as Array<keyof ITableRow>; 
  
  const cells = objKeys.map((key: keyof ITableRow, i) => (
    <td key={i}> 
      <input type='text' defaultValue={props[key]}></input>
    </td>
  ));
  return <tr>{cells}</tr>;
};
