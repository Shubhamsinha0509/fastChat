import React from 'react'
import Sidebar from './Sidebar'
import Chats from './Chats'
import './Style.scss'
const Home = () => {
  return (
    <div className='Home-container'>
      <Sidebar/>
      <Chats/>
    </div>
  )
}

export default Home
