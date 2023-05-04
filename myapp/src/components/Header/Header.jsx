import s from './Header.module.css';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

const Header = () => {
  const burgerMenuStyles = {
    bmMenuWrap: {
      width: '100%',
      background: '#edf7fa',
      height: '18%',
    },

    bmBurgerButton: {
      position: 'absolute',
      width: '38px',
      height: '22px',
      right: '18px',
      top: '20px',
    },
    bmBurgerBars: {
      background: '#21243D',
    },
    bmCrossButton: {
      height: '24px',
      width: '24px',
    },
    bmCross: {
      background: '#21243D',
      width: '3px',
      height: '24px',
    },
    bmMenu: {
      background: '#edf7fa',
      padding: '10px',
      fontSize: '22px',
    },

    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em',
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      textAlign: 'center',
      gap: '10px',
    },
  };
  return (
    <div className={s.header__container}>
      <div className={s.desktop__menu}>
        <Link to={'/'}>Home</Link>
        <Link to={'/works'}>Works</Link>
        <Link to={'/blog'}>Blog</Link>
        <Link to={'/contacts'}>Contacts</Link>
      </div>
      <div className={s.burger__menu}>
        <Menu right styles={burgerMenuStyles}>
          <Link to={'/'}>Home</Link>
          <Link to={'/works'}>Works</Link>
          <Link to={'/blog'}>Blog</Link>
          <Link to={'/contacts'}>Contacts</Link>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
