import React, { useState, useEffect } from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import AttachFile from '@material-ui/icons/AttachFile'
import MoreVert from '@material-ui/icons/MoreVert'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'
import { useParams } from 'react-router-dom'
import firebase from './Firebase'
import { useAuth0 } from '@auth0/auth0-react'
// import firebase from 'firebase'
import './Chat.css'

const db = firebase.firestore()

function Chat() {
  const [input, setInput] = useState('')
  const [seed, setSeed] = useState('')
  const { groupId } = useParams()
  const [groupName, setGroupName] = useState('')
  const [messages,setMessages] = useState([])
    const { isAuthenticated, user } = useAuth0()
    const isUser = isAuthenticated && user
    console.log(user, 'this is the user from chat')

  useEffect(() => {
    if (groupId) {
      db.collection('groups')
        .doc(groupId)
        .onSnapshot((snapshot) => (setGroupName(snapshot.data().name)))

        db.collection('groups').doc(groupId).collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot=>(
          setMessages(snapshot.docs.map(doc => doc.data()))
        ))
    }
  }, [groupId])

  const sendMessage = (e) => {
    e.preventDefault()

    db.collection('groups').doc(groupId).collection('messages').add({
      message: input,
      name: user.name,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  }, [])

  let avatarImage = `https://avatars.dicebear.com/api/human/${seed}.svg`
  return (
    <>
      <div className='chat'>
        <div className='chat__header'>
          <Avatar src={avatarImage} />
          <div className='chat__headerInfo'>
            <h3>{groupName}</h3>
            <p>Last seen at ...</p>
          </div>

          <div className='chat__headerRight'>
            <IconButton>
              <SearchOutlined />
            </IconButton>
            <IconButton>
              <AttachFile />
            </IconButton>
            <IconButton>
              <MoreVert />
            </IconButton>
          </div>
        </div>
        <div className='chat__body'>
          {messages.map((message) => (
            <p className={`chat__message ${true && 'chat__sender'}`}>
              <span className='chat__name'>{message.name}</span>
              {message.message}
              <span className='chat__timestamp'>{new Date(message.timestamp?.toDate()).toUTCString()}</span>
            </p>
          ))}
          <p className='chat__message'>
            <span className='chat__name'>Samson Ajulor</span>
            this is a message
            <span className='chat__timestamp'>3:52pm</span>
          </p>
          <p className={`chat__message ${true && 'chat__sender'}`}>
            <span className='chat__name'>Samson Ajulor</span>
            this is a message sent by moi I want to make this as long as
            possible do not be afraid to break that is why we do not send very
            long messages sef because we are the best music
            <span className='chat__timestamp'>3:52pm</span>
          </p>
        </div>
        <div className='chat__footer'>
          <InsertEmoticonIcon />
          <form action=''>
            <input
              value={input}
              placeholder='Type a message'
              type='text'
              onChange={(e) => {
                console.log(e.target.value)
                setInput(e.target.value)
              }}
            />
            <button onClick={sendMessage} type='submit'>
              Send a message
            </button>
          </form>
          <MicIcon />
        </div>
      </div>
    </>
  )
}

export default Chat
