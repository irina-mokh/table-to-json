import { useDrag, useDrop, DragSourceMonitor, DropTargetMonitor } from 'react-dnd';
import { useRef, MutableRefObject } from 'react';

export interface ITableRow {
  name: string;
  value: string;
}
 interface IndexedTableRow extends ITableRow{
  index: number;
 }
interface TableRowProps extends IndexedTableRow {
  setRow: (newRow: ITableRow) => void;
  deleteRow: () => void;
  moveRow: (from: number, to: number) => void;
}

export const TableRow = ({ name, value, setRow, deleteRow, moveRow, index }: TableRowProps) => {
  const item = {
    name, value, index
  };
  // ref for DnD task
  // eslint-disable-next-line prettier/prettier
  const ref = useRef() as MutableRefObject<HTMLTableRowElement>;

  // Drop task
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: 'item',
      drop: async (drag: IndexedTableRow) => {
        if (drag.index === item.index) {
          return;
        }
        moveRow(drag.index, item.index);
      },
      collect: (monitor: DropTargetMonitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [item]
  );

  // Drag task
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: 'item',
      item: item,
      collect: (monitor: DragSourceMonitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [item]
  );
  // task Ref
  drag(drop(ref));

  const opacity = isDragging ? 0.1 : 1;
  const boxShadow = isOver ? 'inset 0 8px 10px -7px #339989' : 'none';

  return (
    <tr className='row' ref={ref} style={{opacity: opacity, boxShadow}} >
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
