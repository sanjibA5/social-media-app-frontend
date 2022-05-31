import React from 'react'
import {UilSearch} from '@iconscout/react-unicons'
import style from './LogoSearch.module.css'
import logo from '../../img/logo.png'
export default function LogoSearch() {
  return (
    <div className={style.LogoSearch}>
      <img src={logo} alt="logo-pic" />
      <div className={style.search}>
        <input type="text"  placeholder='Search Here ....'/>
        <div className={style['search-icon']}>
          <UilSearch />
        </div>
      </div>
    </div>
  )
}
