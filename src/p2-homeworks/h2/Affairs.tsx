import React, {MouseEventHandler} from 'react'
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

  const set = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    props.setFilter(e.currentTarget.value as FilterType)
  }

  return (
    <div>

      {mappedAffairs}

      <button className={`${styles.button} ${styles.button_all}`} onClick={set} value={'all'}>All</button>
      <button className={`${styles.button} ${styles.button_high}`} onClick={set} value={'high'}>High</button>
      <button className={`${styles.button} ${styles.button_middle}`} onClick={set} value={'middle'}>Middle</button>
      <button className={`${styles.button} ${styles.button_low}`} onClick={set} value={'low'}>Low</button>
    </div>
  )

}

export default Affairs
