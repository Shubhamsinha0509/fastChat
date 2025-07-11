import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef, useState } from 'react'
import './Style.scss'
const Chats = () => {
  const [searchValue,setsearchValue] = useState('');
  const searchRef = useRef(null);
  function handleChange(e){
    setsearchValue(e.target.value);
    searchRef.current.classList.toggle('active');

  }
  return (
    <div className='chats-container'>
      <div className='chats-header'>
        <FontAwesomeIcon icon={faSearch} className='search-icon'/>
        <input className='searchBar' ref={searchRef} placeholder='search chat..' value={searchValue} onChange={(e)=>handleChange(e)}/>
        <div className='profile-icon'><FontAwesomeIcon icon={faUser} className='user-icon'/></div>
      </div>
    </div>
  )
}

export default Chats
