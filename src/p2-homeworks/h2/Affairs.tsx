import React, {MouseEventHandler} from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import styles from './Affairs.module.css';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

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

  const handlerFilter = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    props.setFilter(e.currentTarget.value as FilterType)
  }

  return (
    <div>

      {mappedAffairs}

      <SuperButton
        className={`${styles.button} ${styles.button_all}`}
        onClick={handlerFilter}
        value={'all'}
      >
        All {/*// название кнопки попадёт в children*/}
      </SuperButton>
      <SuperButton
        className={`${styles.button} ${styles.button_high}`}
        onClick={handlerFilter}
        value={'high'}
      >
        High {/*// название кнопки попадёт в children*/}
      </SuperButton>
      <SuperButton
        className={`${styles.button} ${styles.button_middle}`}
        onClick={handlerFilter}
        value={'middle'}
      >
        Middle {/*// название кнопки попадёт в children*/}
      </SuperButton>
      <SuperButton
        className={`${styles.button} ${styles.button_low}`}
        onClick={handlerFilter}
        value={'low'}
      >
        Low
      </SuperButton>
    </div>
  )

}

export default Affairs
