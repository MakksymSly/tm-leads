import './TradeCard.scss';

export const TradeCard = () => {
  return (
    <article className="trade-card">
      <div className="trade-card__header">
        <h3 className="trade-card__header--title">NEAR/USDT</h3>
        <p className="trade-card__header--subtitle">SPOT · 1 мин. назад</p>
      </div>
      <div className="trade-card__content">
        <p className="trade-card__content--profit">Прибыль</p>
        <p className="trade-card__content--percent">
          58.6206% <img src="./arrow-up-icon.svg" alt="arrow up" />
        </p>
      </div>
      <div className="trade-card__footer">
        <p>Цель 4</p>
        <p>Дата входа 06.10.2022</p>
      </div>
    </article>
  );
};
