import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.sidebar}>
          <NavLink className={({isActive}) => isActive ? s.active : s.nav} to="/pre-junior">Pre-Junior </NavLink>
          <NavLink className={({isActive}) => isActive ? s.active : s.nav} to="/junior">Junior </NavLink>
          <NavLink className={({isActive}) => isActive ? s.active : s.nav} to="/junior+">Junior+ </NavLink>

        </div>
    )
}

export default Header
