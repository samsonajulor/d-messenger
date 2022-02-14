import React, { useEffect, useState } from 'react'
import { Avatar } from '@material-ui/core'
import firebase from './Firebase'
import './SidebarChat.css'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
const db = firebase.firestore()

function SidebarChat({ id, name, addNewChat }) {
  const [seed, setSeed] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    if (id) {
      db.collection('groups')
        .doc(id)
        .collection('messages')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        )
    }
  }, [id])

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  }, [])

  let avatarImage = `https://avatars.dicebear.com/api/human/${seed}.svg`

  const createChat = () => {
    const groupName = prompt('please enter a name for the chat')

    if (groupName) {
      db.collection('groups').add({
        name: groupName,
      })
    }
  }
  return !addNewChat ? (
    <Link to={`/groups/${id}`}>
      <div className='sidebarChat'>
        <Avatar src={avatarImage} />
        <div className='sidebarChat__info'>
          <h2>{name}</h2>
          <p>{messages[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className='sidebarChat'>
      <h2>Add new chat </h2>
    </div>
  )
}

export default SidebarChat
