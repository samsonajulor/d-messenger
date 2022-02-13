import React, { useEffect, useState } from 'react'
import {Avatar} from '@material-ui/core'

import './SidebarChat.css'



function SidebarChat({id, name, addNewChat}) {

const [seed, setSeed] = useState("")

 useEffect(()=>{
setSeed(Math.floor(Math.random()*5000)) 
 }, [])

 let avatarImage = `https://avatars.dicebear.com/api/human/${seed}.svg`

 const createChat = () => {
  const groupName = prompt('please enter a name for the chat')

  if(groupName) {
   
  }
 }
  return !addNewChat ? (
    <div className='sidebarChat'>
      <Avatar src={avatarImage}/>
      <div className='sidebarChat__info'>
        <h2>Groups</h2>
        <p>Last message...</p> 
      </div>
    </div>
  ):(
   <div onClick={createChat} className="sidebarChat">
    <h2>Add new chat </h2>
   </div>
  )
}

export default SidebarChat