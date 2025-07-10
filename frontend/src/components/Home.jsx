import React from 'react'
import Sidebar from './Sidebar'
import Chats from './Chats'

const Home = () => {
  return (
    <div className='Home-container'>
      <Sidebar/>
      <Chats/>
    </div>
  )
}

export default Home
