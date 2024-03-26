import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './FilterInput.scoped.css'

export default function FilterInput(props) {
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      props.onFilter(keyword);
    }, 1000)

    return ()=> {
      clearTimeout(timer)
    }
  },[keyword, props])

  const inputChangeHandler = (e) => {
    const keyword = e.target.value.trim();
    setKeyword(keyword)
    // props.onFilter(keyword)
  }
  return (
    <div className='filterwrapper'>
        <div className='inputBox'>
            <input onChange={inputChangeHandler} value={keyword} type='text' placeholder='请输入关键字'></input>
            <FontAwesomeIcon className='searchicon' icon={faSearch} />
        </div>
    </div>
  )
}
