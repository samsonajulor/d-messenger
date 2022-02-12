import React, {useState, useEffect} from 'react'
import {Avatar, IconButton} from "@material-ui/core"
import SearchOutlined from '@material-ui/icons/SearchOutlined'

import './Chat.css'

function Chat() {
 const [seed, setSeed] = useState('')

 useEffect(() => {
   setSeed(Math.floor(Math.random() * 5000))
 }, [])

 let avatarImage = `https://avatars.dicebear.com/api/human/${seed}.svg`
  return (
    <>
      <div className='chat'>
        <div className='chat__header'>
         <Avatar src={avatarImage}/>
         <div className="chat__headerInfo">
          <h3>Group Name</h3>
          <p>Last seen at ...</p>

          <div className="chat__headerRight">
           <IconButton>
            <SearchOutlined/>
           </IconButton>
          </div>
         </div>
        </div>
        <div className='chat__body'></div>
        <div className="chat__footer"></div>
      </div>
    </>
  )
}

export default Chat