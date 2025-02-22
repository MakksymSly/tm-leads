import './Home.scss';
export const Home = () => {
  return (
    <section className="home">
      <div className="pair">
        <article className="pair__block">
          <h3 className="pair__title">ETH/USDT</h3>
          <p className="pair__subtext">Short</p>
          <p className="pair__percent">+141%</p>
        </article>
        <article className="pair__block pair__block--split">
          <h3 className="pair__title pair__title--split">ETH/USDT</h3>
          <p className="pair__subtext pair__subtext--split">Short</p>
          <p className="pair__percent pair__percent--split">+116%</p>
        </article>
      </div>
      <article className="deal">
        <h1 className="deal__title">
          моментально Копируй сделки профи трейдеров
        </h1>
        <p className="deal__text">
          Начни копировать сделки с успешной командой профессиональных трейдеров
          в автоматическом режиме.
        </p>
        <article className="deal__form">
          <input
            className="deal__form-input"
            type="text"
            placeholder="ваш e-mail"
          />
          <button className="deal__form-btn">начать</button>
        </article>
        <p className="deal__subtext">5 дней бесплатного пользования</p>
      </article>
    </section>
  );
};
