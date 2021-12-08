import s from './Rightside.module.css'
import Departure from '../Departure/Departure';
import Calendar from '../Calendar/Calendar';
import store from '../../../mock/Data.js'
import Arrival from '../Arrival/Arrival';
import { NavLink } from 'react-router-dom'
import React, { useState } from 'react';




function Rightside() {

  function setterD(value) {
    store.depature.from = value
    console.log(store.depature.from)
  }

  function setterA(value) {
    store.depature.to = value
    console.log(store.depature.to)
  }

  function date(value) {
    store.depature.date = value;
    console.log(store.depature.date)
  }


  
  return (
    <section className={s.rightside}>
      <h1> Заказ билетов </h1>

      <form>
        <div className={s.city}>
          <Departure city={'Откуда'} onChange={setterD} />
          <Arrival city={'Куда'} onChange={setterA}/>
        </div>
        
        <div className={s.find}>
          <Calendar onChange={date}/>
          <NavLink to="/find"> <button className={s.button}> Найти </button></NavLink>
         
        </div>
      </form>

    
    </section >
  );
}

export default Rightside;
