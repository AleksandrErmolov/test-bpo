import s from './Findbilet.module.css'
import store from '../../mock/Data.js'
import Ticket from './Ticket/Ticket';
import tickets from '../../mock/ticket.json'
import { useState } from 'react';


let array = []

function Findbilet() {

  var options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timezone: 'UTC'
  };


  let tkts = [...tickets].filter((e) => {
    if (e.origin_name === store.depature.from && e.destination_name === store.depature.to && e.departure_date === store.depature.date.toLocaleString("ru", options))
      return true;
  })


  const [state, setState] = useState(tkts)
  const [posts, setPosts] = useState([])
  const [button, setButton] = useState("url(../01.png)")
  const [buttonState, setButtonState] = useState(true)


  const pushArray = (event) => {
    // store.checkFiltr.push(event)
    // setPosts(store.checkFiltr)
    // console.log("posts", posts)
  }

  const changeBox = (event) => {

    const currentIndex = array.indexOf(Number(event.target.value));

    console.log(event.target.value)

    if (currentIndex == -1) {
      array.push(Number(event.target.value))
    } else {
      array.splice(currentIndex, 1)
    }
    if (array.length !== 0) {
      setState([...tkts.filter(e => (array.includes(e.stops)))])
    } else {
      setState([...tkts])
    }
  }


  const sortChange = (ticket) => {


    if (buttonState === true) {
      ticket.sort(function (a, b) {
        return a.stops - b.stops
      })
      setState([...ticket])
      setButtonState(false)
    } else { 
      ticket.sort(function (a, b) {
        return b.stops - a.stops
      })
      setState([...ticket])
      setButtonState(true)
    }
    
    

    if (button === "url(../01.png)" ) {
      setButton("url(../10.png)")
    } else { 
      setButton("url(../01.png)")
    }

  }

  return (

    <div className={s.findbilet}>
      <div className={s.maintitle}>
        <h1>Ваш маршрут</h1>
        <p>Вы летите из города <span>{store.depature.from}</span> в  город <span>{store.depature.to}</span></p>
        <p><span>{store.depature.date.toLocaleString("ru", options)}</span></p>
      </div>

      <div className={s.biletinfo}>
        <div className={s.filter}>
          <div>
            <p>Колличесвто пересадок</p>
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
            <button onClick={() => sortChange(state)}
              style={{
                width: "32px", height: "32px", border: "0px", backgroundImage: `${button}`}}
              

            ></button><span>По пересадкам</span>
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
