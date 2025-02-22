import './Numbers.scss';
export const Numbers = () => {
  return (
    <section className="numbers">
      <h3>Цифры</h3>
      <p>Cентябрь 2022</p>
      <div className="numbers__container">
        <div className="numbers__block">
          <p>Торговой прибыли</p>
          <p>2756%</p>
        </div>
        <div className="numbers__block">
          <p>фьючерсных и спотовых сделок</p>
          <p>67</p>
        </div>
        <div className="numbers__block">
          <p>прибыль подписчиков</p>
          <p>375000</p>
        </div>
      </div>
    </section>
  );
};
