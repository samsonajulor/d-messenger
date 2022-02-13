import React, { useEffect, useState } from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import SidebarChat from './SidebarChat'
// import db from './Firebase'
import firebase from './Firebase'
import './Sidebar.css'


const db = firebase.firestore()



function Sidebar() {
  const [rooms, setRooms] = useState([])

    useEffect(() => {
    const unsubscribe =  db.collection('groups').onSnapshot((snapshot) => {
        setRooms(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      })

      return () => {
        unsubscribe() //optimisation or clean up when the component unmounts which detaches the user when the user logs out.
      }
    }, [])


  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <IconButton>
          <Avatar />
        </IconButton>
        <div className='sidebar__headerRight'>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className='sidebar__search'>
        <div className='sidebar__searchContainer'>
          <SearchOutlined />
          <input type='text' placeholder='Search or start a new chat' />
        </div>
      </div>
      <div className='sidebar__chats'>
       <SidebarChat addNewChat/>
       {rooms.map(room=>
       (
         <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
       )
        )}
      </div>
    </div>
  )
}

export default Sidebar
