import { Header } from '../Header';
import { Footer } from '../Footer';
import { Table } from '../Table';
import { INITIAL_DATA } from '../../data';
import React, { useState } from 'react';
import { ITableRow } from '../TableRow';

export const App = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  return (
    <div className='app'>
      <h1 className='visually-hidden'>TABLE-JSON editor</h1>
      <Header />
      <main className='app__main'>
        <div className='container content'>
          <div className='editor'>
            <h2 className='app__heading'>Edit data in a table or in JSON:</h2>
            <form
              onChange={() => setIsSubmitDisabled(false)}
              onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                const newData: Array<ITableRow> = [];
                const formData = new FormData(e.currentTarget);
                const names = formData.getAll('name');
                names.forEach((name) => {
                  newData.push({
                    name: String(name),
                    value: '',
                  });
                });
                const values = formData.getAll('value');
                for (let i = 0; i < values.length; i++) {
                  newData[i].value = String(values[i]);
                }

                setData(newData);
              }}
            >
              <Table data={data}></Table>
              <button type='submit' className='btn' disabled={isSubmitDisabled}>
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
