import Navbar from "./Navbar"
import Chats from "./Chats"
import Search from "./Search"
import React from 'react'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
      <Chats />
  </div>
  )
}

export default Sidebar
