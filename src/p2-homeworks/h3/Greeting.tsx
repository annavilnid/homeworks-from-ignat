import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './../h4/common/c1-SuperInputText/SuperInputText.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import style from './Greeting.module.css'

type GreetingPropsType = {
  name: string // need to fix any
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
  addUser: () => void // need to fix any
  onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
  error: string // need to fix any
  totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  {name, setNameCallback, addUser, onEnter, error, totalUsers} // деструктуризация пропсов
) => {
  const inputClass = error ? s.errorInput : s.input// need to fix with (?:)
  console.log(name)
  return (
    <div className={style.container}>
      <SuperInputText value={name}
                      error={error}
                      type={'text'}
                      onChange={setNameCallback}
                      onKeyPress={onEnter}
                      className={s.someClass}
        //className={finalInputClassName}
                      spanClassName={s.testSpanError}
      />
      <SuperButton disabled={name ? false : true}
                   onClick={addUser}
                   className={style.button}
      >
        add
      </SuperButton>
      <span>{totalUsers}</span>
    </div>
  )
}

export default Greeting
