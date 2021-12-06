import s from './Rightside.module.css'
import React from 'react';
import Departure from '../Departure/Departure';
import Calendar from '../Calendar/Calendar';


function Rightside() {


  const takeData = (event) => {
    event.preventDefault()
    console.log(123)
  }


  return (
    <section className={s.rightside}>
      <h1> Заказ билетов </h1>

      <form onSubmit={takeData}>
        <div className={s.city}>
          <Departure city={'Откуда'} />
          <Departure city={'Куда'} />
        </div>

        <div className={s.find}>
          <Calendar />
          {/* <NavLink to="/find"> <button> Найти </button></NavLink> */}
          <button> Найти </button>
        </div>
      </form>




    </section >
  );
}

export default Rightside;
