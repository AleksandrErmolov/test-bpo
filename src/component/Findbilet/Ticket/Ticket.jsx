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
            <h3 className={s.ticketNumber}> Билет №{i + 1}</h3>
            <p>Колличесвто пересадок: {e.stops}</p>
            <div className={s.aeroport}>
              <p>Рейс: <i>{e.origin_name} - {e.destination_name} </i> </p>
              <p>Из аэропорта: {e.origin}  в аэропорт: {e.destination}</p>
            </div>
            <div className={s.aeroport}>
              <div>
                <h4 className={s.fly}>Вылет</h4>
                <p><b>Дата</b> - {e.departure_date} <b>Время</b> - {e.departure_time}</p>
              </div>
              <div>
                <h4 className={s.fly}>Прилёт</h4>
                <p> <b>Дата</b> - {e.arrival_date}  <b>Время</b> - {e.arrival_time}</p>
              </div>
            </div>
            <button>Заказать</button>
          </div>
        )
      })}
    </div>
  );

}

export default Ticket;
