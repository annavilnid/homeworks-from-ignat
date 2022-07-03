import React from 'react'
import style from './Message.module.css'

type messageDataType = {
  avatar: string
  name: string
  message: string
  time: string
}

let wrapper = style.message_wrapper + ' ' + style.message_wrapper_;
let avatar = style.message_avatar + ' ' + style.message_avatar_;
let wallpaper = style.message_wallpaper + ' ' + style.message_wallpaper_
let title = style.message_title + ' ' + style.message_title_;
let text = style.message_text + ' ' + style.message_text_;
let time = style.message_time + ' ' + style.message_time_;

function AlternativeMessage(props: messageDataType) {
  return (
    <div className={wrapper}>
      <img className={avatar} src={props.avatar} alt="аватар"/>
      <div className={wallpaper}>
        <h3 className={title}>{props.name}</h3>
        <div className={style.message_container}>
          <p className={text}>{props.message}</p>
          <span className={time}>{props.time}</span>
        </div>
      </div>
    </div>
  )
}

export default AlternativeMessage
