import React from 'react'
import {AffairType} from "./HW2";
import styles from './Affair.module.css';

type AffairPropsType = {
  // key не нужно типизировать
  affair: AffairType
  deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {

  const colors: Record<string, string> = {
    high: styles.priority_high,
    low: styles.priority_low,
    middle: styles.priority_middle,
  }

  const deleteCallback = () => {
    props.deleteAffairCallback(props.affair._id)
  }// need to fix
  return (
    <div className={styles.container}>
      <span className={styles.text}>{props.affair.name}</span>
      <span className={colors[props.affair.priority] as string}>[{props.affair.priority}]</span>
      <button className={styles.button} onClick={deleteCallback}>X</button>
    </div>
  )
}

export default Affair
