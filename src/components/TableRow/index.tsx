import { useEffect, useState } from 'react';

export interface ITableRow {
  name: string;
  value: string;
}

export const TableRow = (props: ITableRow) => {
  // eslint-disable-next-line prettier/prettier
  const objKeys = Object.keys(props) as Array<keyof ITableRow>; 
  const cells = objKeys.map((key: keyof ITableRow, i) => {
    const [value, setValue] = useState(props[key]);
    useEffect(()=> {
      setValue(props[key]);
    },[props]);
    return (
      <td key={i} className='cell'> 
        <input type='text' value={value} name={key} onChange={(e) => setValue(e.target.value)}className='cell__input'></input>
      </td>
    );
  });
  return <tr>{cells}</tr>;
};
