import { useMediaQuery } from 'react-responsive';
import './Numbers.scss';
export const Numbers = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1199px)' });
  return (
    <section className="numbers ">
      <div className="_container">
        <h3 className="numbers__title">Цифры</h3>
        <p className="numbers__subtitle">Cентябрь 2022</p>
        <div className="numbers__container">
          <div className="numbers__block">
            <p className="numbers__block__title">
              Торговой {!isDesktop ? <br /> : ''} прибыли
            </p>
            <p className="numbers__block__digits">2756%</p>
          </div>
          <div className="numbers__block">
            <p className="numbers__block__title">
              фьючерсных и спотовых сделок
            </p>
            <p className="numbers__block__digits">67</p>
          </div>
          <div className="numbers__block">
            <p className="numbers__block__title">прибыль подписчиков</p>
            <p className="numbers__block__digits">375000</p>
          </div>
        </div>
      </div>
    </section>
  );
};
