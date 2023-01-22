import { Header } from '../Header';
import { Footer } from '../Footer';
import { Table } from '../Table';
import { INITIAL_DATA } from '../../data';
import React, { useEffect, useState } from 'react';
import { ITableRow } from '../TableRow';

export const App = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const [table, setTable] = useState(data);
  useEffect(() => {
    setTable(data);
  }, [data]);
  const [error, setError] = useState('');

  function isValid(e: React.FormEvent<HTMLFormElement>) {
    const formData = new FormData(e.currentTarget);
    const names = formData.getAll('name');
    const values = formData.getAll('value');
    if (names.includes('') || values.includes('')) {
      setError(`fields can not be empty`);
      return false;
    } else {
      setError(``);
      return true;
    }
  }
  return (
    <div className='app'>
      <h1 className='visually-hidden'>TABLE-JSON editor</h1>
      <Header />
      <main className='app__main'>
        <div className='container content'>
          <div className='editor'>
            <h2 className='app__heading'>Edit data in a table or in JSON:</h2>
            <form
              className='form'
              onChange={(e: React.FormEvent<HTMLFormElement>) => {
                isValid(e) && setError('');
              }}
              onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                const newData: Array<ITableRow> = [];
                const formData = new FormData(e.currentTarget);
                const names = formData.getAll('name');
                const values = formData.getAll('value');
                if (!isValid(e)) {
                  setError(`fields can not be empty`);
                  return;
                } else {
                  names.forEach((name) => {
                    newData.push({
                      name: String(name),
                      value: '',
                    });
                  });
                  for (let i = 0; i < values.length; i++) {
                    newData[i].value = String(values[i]);
                  }
                  setData(newData);
                }
              }}
            >
              <Table data={table} setTable={setTable}></Table>
              <p className='error'>{error}</p>

              <button
                className='btn btn_add'
                aria-label='add new item'
                onClick={(e) => {
                  e.preventDefault();
                  setTable([...table, { name: '', value: '' }]);
                }}
              >
                +
              </button>
              <button type='submit' className='btn' disabled={!!error}>
                Save to JSON &#8594;
              </button>
            </form>
          </div>
          <div className='json'>
            <h2 className='app__heading'>JSON:</h2>
            <textarea
              value={JSON.stringify(data)}
              className='json__textarea'
              onChange={(e) => setData(JSON.parse(e.target.value))}
            ></textarea>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
