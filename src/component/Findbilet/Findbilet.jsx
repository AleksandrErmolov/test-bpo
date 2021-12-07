import s from './Findbilet.module.css'
import store from '../../mock/Data.js'
import { useEffect } from 'react';



function Findbilet() {

  const getBilet = async () = {

    const response = await fetch('../../mock/ticket.json')
    const data = await response.json()

  }

  useEffect(() => {
    getBilet()
  }, [])




  return (
    <div className={s.findbilet}>
      <div className={s.maintitle}>
        <h1>Ваши билеты</h1>
        <p>Вы летите из города <span>{store.depature.from}</span> в  город <span>{store.depature.to}</span></p>
        <p><span>{store.depature.date.toString()}</span></p>
      </div>

      <div className={s.biletinfo}>
        <div className={s.filter}>
          <div>
            <p>Колличесвто пересадок</p>
            <div>
              <label>
                <input type='checkbox' />
                Все
              </label>
            </div>
            <div>
              <div>
                <label>
                  <input type='checkbox' />
                  Без пересадок
                </label>
              </div>
              <label>
                <input type='checkbox' />
                1 пересадка
              </label>
            </div>
            <div>
              <label>
                <input type='checkbox' />
                2 пересадки
              </label>
            </div>
            <div>
              <label>
                <input type='checkbox' />
                3 пересадки
              </label>
            </div>
          </div>
        </div>



        <div className={s.renderBilet}>
          <h2>Ваши билеты</h2>
        </div>
      </div>

    </div>
  );
}

export default Findbilet;
