import s from './Checkbox.module.css'
import store from '../../../mock/Data.js'
import { Checkbox, Collapse } from 'antd';
import { useState } from 'react';

const Panel = Collapse;


function CheckBox(props) {

  
  const [Checked, setChecked] = useState([]) // Обяъявляю стейт для чекбокса
console.log(Checked)

  const handleToggle = (value) => {

    const currentIndex = Checked.indexOf(value);
    const newChecked = [...Checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
    props.handleFiltres(newChecked)
    

  }


  return (
    <Collapse defaultActiveKey={['0']}>
      <Panel header key='1'>
        {store.checkFiltr.map((value, index) => {
          return (<div key={index}>
            <Checkbox
              onChange={() => handleToggle(value.id)}
              type="checkbox"
              checked={Checked.indexOf(value.id) === -1 ? false : true}
            />
            <span>{value.name}</span>
          </div>
          )
        })}
      </Panel>
    </Collapse>
  );
}

export default CheckBox;
