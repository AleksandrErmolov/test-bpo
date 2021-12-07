import s from './Leftside.module.css'
function Leftside() {
  return (
    <section className={s.leftside}>
      <img className={s.picture}src="plane.jpg" alt="plane" />
    </section>
  );
}

export default Leftside;
