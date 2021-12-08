import s from './Ticket.module.css'
// import store from '../../../mock/Data.js'
// import tickets from '../../../mock/ticket.json'

function Ticket(props) {

  if (props.data.length === 0) {
    return (
      <div>
        <h3> Увы, но таких билетов нет.</h3>
        <img src="https://acegif.com/wp-content/uploads/2021/4fh5wi/pepefrg-4.gif" />
      </div>
    )
  }



  return (
    <div сlassName={s.ticket}>
      {props.data.map((e, i) => {
        return (
          <div className={s.ticket} key={i}>
            <div className={s.title}>
              <div className={s.blockImg}>
                <img src='../ticket.png' className={s.imgTicket} />
                <h3 className={s.ticketNumber}> Билет №{i + 1}</h3>
              </div>
              <div className={s.changeBlock}>
                <img src='../change.png' className={s.change} />
                <p>Колличесвто пересадок: {e.stops}</p>
              </div>
            </div>
            <div className={s.aeroport}>
              <p>Рейс: <i>{e.origin_name} - {e.destination_name} </i> </p>
              <img src="../exchange.png" className={s.changed} />
              <p>Из аэропорта: {e.origin}  в аэропорт: {e.destination}</p>
            </div>
            <div className={s.flying}>
              <div>
                <div className={s.upDown}>
                  <img src="../up.png" />
                  <h4 className={s.fly}>Вылет</h4>
                </div>
                <p><img src="../calendar.png" className={s.calendar} /> <b>Дата</b> - {e.departure_date} <img src="../clock.png" className={s.calendar} /> <b>Время</b> - {e.departure_time}</p>
              </div>
              <div className={s.upDown}>
                <img src="../down.png" />
                <h4 className={s.fly}>Прилёт</h4>
                <p> <img src="../calendar.png" className={s.calendar} /> <b>Дата</b> - {e.arrival_date}  <img src="../clock.png" className={s.calendar} /> <b>Время</b> - {e.arrival_time}</p>
              </div>
            </div>
            <div className={s.footerTicket}>
            <h3>Стоимость: {e.price} ₽</h3>
            <button className={s.button}>Заказать</button>
         </div>
            </div>
        )
      })}
    </div>
  );

}

export default Ticket;
