import s from './Findbilet.module.css'
import store from '../../mock/Data.js'
import Ticket from './Ticket/Ticket';
import tickets from '../../mock/ticket.json'
import { useState } from 'react';


function Findbilet() {


  let tkts = [...tickets].filter((e) => {
    if (e.origin_name === store.depature.from && e.destination_name === store.depature.to)
      return true;
  })


  const [state, setState] = useState(tkts)

  const changeBox = (event) => {
    if (event.target.value > -1)
      setState([...tkts.filter(e => event.target.value == e.stops)])
    else if (event.target.value == 'all')
      setState([...tkts])
  }

  return (

    <div className={s.findbilet}>
      <div className={s.maintitle}>
        <h1>Ваш маршрут</h1>
        <p>Вы летите из города <span>{store.depature.from}</span> в  город <span>{store.depature.to}</span></p>
        <p><span>{store.depature.date.toString()}</span></p>
      </div>

      <div className={s.biletinfo}>
        <div className={s.filter}>
          <div>
            <p>Колличесвто пересадок</p>
            <div>
              <label>
                <input type='checkbox' value="all" onChange={changeBox} />
                Все
              </label>
            </div>
            <div>
              <div>
                <label>
                  <input type='checkbox' value="0" onChange={changeBox} />
                  Без пересадок
                </label>
              </div>
              <label>
                <input type='checkbox' value="1" onChange={changeBox} />
                1 пересадка
              </label>
            </div>
            <div>
              <label>
                <input type='checkbox' value="2" onChange={changeBox} />
                2 пересадки
              </label>
            </div>
            <div>
              <label>
                <input type='checkbox' value="3" onChange={changeBox} />
                3 пересадки
              </label>
            </div>
          </div>
        </div>


        <div className={s.renderBilet}>
          {/* <h2>Ваши билеты</h2> */}
          <Ticket data={state} />
        </div>
      </div>


    </div>
  );
}

export default Findbilet;
