import './App.scss';
import { Header } from './Components/Header/Header';
import { Home } from './Components/Home/Home';
import { Numbers } from './Components/Numbers/Numbers';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="_container main">
        <Home />
        <Numbers />
      </main>
    </>
  );
}

export default App;
