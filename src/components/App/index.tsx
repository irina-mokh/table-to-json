import { Header } from '../Header';
import { Footer } from '../Footer';

export const App = () => {
  return (
    <div className='app'>
      <Header />
      <main className='app__main'>
        <table></table>
        <textarea></textarea>
      </main>
      <Footer />
    </div>
  );
};
