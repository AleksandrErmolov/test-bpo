import Leftside from './Leftside/Leftside';
import s from './Main.module.css'
import Rightside from './Rightside/Rightside';
function Main() {
  return (
    <main className={s.main}>
      <Leftside />
      <Rightside />
    </main>
  );
}

export default Main;
