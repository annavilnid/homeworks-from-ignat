import React from 'react'
import style from './Message.module.css'

type messageDataType = {
  avatar: string
  name: string
  message: string
  time: string
}

function Message(props: messageDataType) {
  return (
    <div className={style.message_wrapper}>
      <img className={style.message_avatar} src={props.avatar} alt="аватар"/>
      <div className={style.message_wallpaper}>
        <div className={style.message_corner}></div>
        <h3 className={style.message_title}>{props.name}</h3>
        <div className={style.message_container}>
          <p className={style.message_text}>{props.message}</p>
          <span className={style.message_time}>{props.time}</span>
        </div>
      </div>
    </div>
  )
}

export default Message
