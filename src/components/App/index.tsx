import { Header } from '../Header';
import { Footer } from '../Footer';
import { Editor } from '../Editor';
import { INITIAL_DATA } from '../../data';
import { useState } from 'react';

export const App = () => {
  const [data, setData] = useState(INITIAL_DATA);
  return (
    <div className='app'>
      <Header />
      <main className='app__main'>
        <div className='container content'>
          <Editor data={data}></Editor>
          <div className='json'>
            <textarea
              defaultValue={JSON.stringify(INITIAL_DATA)}
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
