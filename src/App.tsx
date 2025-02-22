import './App.scss';
import { Header } from './Components/Header/Header';
import { Home } from './Components/Home/Home';
import { Numbers } from './Components/Numbers/Numbers';
import { PrevDeals } from './Components/PrevDeals/PrevDeals';
import { TradeCard } from './Components/TradeCard/TradeCard';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="main">
        <Home />
        <div className="separator"></div>
        <Numbers />
        <PrevDeals />
      </main>
    </>
  );
}

export default App;
