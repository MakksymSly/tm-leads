import { navigationLinks } from '../../utils/constants/navigation';
import './BurgerMenu.scss';
interface Props {
  handleMenuToggle: () => void;
}

export const BurgerMenu: React.FC<Props> = (props) => {
  const { handleMenuToggle } = props;
  return (
    <aside className="menu">
      <div className="menu__top-bar">
        <div onClick={handleMenuToggle}>
          <img src="/burger-close-icon.svg" alt="close menu"></img>
        </div>
      </div>
      <nav className="menu__nav">
        <ul className="menu__nav-list">
          {navigationLinks.map((link) => (
            <li key={link} className="menu__nav-item">
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
        <div className="menu__nav-footer">
          <button className="menu__nav-footer-btn">Регистрация</button>
          <button className="menu__nav-footer-btn">Войти</button>
        </div>
      </nav>
    </aside>
  );
};
