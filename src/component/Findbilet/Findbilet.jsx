import s from './Findbilet.module.css'
import store from '../../mock/Data.js'

function Findbilet() {
  return (
    <div>
      <h1>Ваши билеты</h1>
      <p>Вы летите из <span>{store.depature.from}</span> в <span>{store.depature.to}</span></p>
      <p><span>{store.depature.date.toString()}</span></p>
    </div>
  );
}

export default Findbilet;
