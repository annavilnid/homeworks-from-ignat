import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import styles from './Affairs.module.css';

type AffairsPropsType = {
  data: Array<AffairType>
  setFilter: (filter: FilterType) => void
  deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
  const mappedAffairs = props.data.map((a: AffairType) => (
    <Affair
      key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
      affair={a}
      deleteAffairCallback={props.deleteAffairCallback}
    />
  ))

  const setAll = () => {
    props.setFilter("all")
  } // need to fix
  const setHigh = () => {
    props.setFilter("high")
  }
  const setMiddle = () => {
    props.setFilter("middle")
  }
  const setLow = () => {
    props.setFilter("low")
  }

  return (
    <div>

      {mappedAffairs}

      <button className={`${styles.button} ${styles.button_all}`} onClick={setAll}>All</button>
      <button className={`${styles.button} ${styles.button_high}`} onClick={setHigh}>High</button>
      <button className={`${styles.button} ${styles.button_middle}`} onClick={setMiddle}>Middle</button>
      <button className={`${styles.button} ${styles.button_low}`} onClick={setLow}>Low</button>
    </div>
  )

}

export default Affairs
