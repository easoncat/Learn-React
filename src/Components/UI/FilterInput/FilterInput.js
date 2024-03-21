import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './FilterInput.scoped.css'

export default function FilterInput(props) {
  const inputChangeHandler = (e) => {
    const keyword = e.target.value;
    props.onFilter(keyword)
  }
  return (
    <div className='filterwrapper'>
        <div className='inputBox'>
            <input onChange={inputChangeHandler} type='text' placeholder='请输入关键字'></input>
            <FontAwesomeIcon className='searchicon' icon={faSearch} />
        </div>
    </div>
  )
}
