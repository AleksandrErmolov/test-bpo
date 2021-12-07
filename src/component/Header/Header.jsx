import s from './Header.module.css'
function Header() {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <h1> Header </h1>
      </div>
    </header>
  );
}

export default Header;
