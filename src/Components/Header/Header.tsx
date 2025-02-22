import { useMediaQuery } from 'react-responsive';
import './Header.scss';
import { navigationLinks } from '../../utils/constants/navigation';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { useEffect, useState } from 'react';
export const Header = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1199px)' });

  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };
  useEffect(() => {
    if (isBurgerOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll'); // Чистим при размонтировании
    };
  }, [isBurgerOpen]);
  return (
    <>
      <header className="header">
        <a href="#">
          <img src="/logo.svg" alt="tradeBlade logo" />
        </a>
        <ul className="header__nav">
          {isDesktop ? (
            navigationLinks.map((link) => (
              <li key={link} className="header__nav-item">
                <a href="#">{link}</a>
              </li>
            ))
          ) : (
            <div className="header__burger-menu" onClick={handleMenuToggle}>
              {isBurgerOpen ? (
                <img src="/burger-close-icon.svg" alt="close menu"></img>
              ) : (
                <img src="/burger-open-icon.svg" alt="open menu"></img>
              )}
            </div>
          )}
        </ul>
        {isBurgerOpen && <BurgerMenu handleMenuToggle={handleMenuToggle} />}
      </header>
    </>
  );
};
