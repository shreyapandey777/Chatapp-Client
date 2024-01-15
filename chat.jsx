import React,{useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import {Redirect} from 'react-router-dom';
import './chat.css';
import Infobar from './infobar.jsx';
import Input from './input.jsx';
import Messages from './messages.jsx';
import Users from './users';

let socket;

function Chat({location}) {

  const [name,setName]=useState(queryString.parse(location.search).name);
  const [room,setRoom]=useState('');
  const [message,setMessage]=useState('');
  const [messages,setMessages]=useState([]);
  const [users,setUsers]=useState([]);

  const ENDPOINT = 'https://serverchat-app.herokuapp.com/';
  
  
  useEffect(()=>{
    const {name,room} = queryString.parse(location.search);
    
    socket = io(ENDPOINT, { transports : ['websocket'] });
    
    console.log("Page Started");
    setName(name)
    setRoom(room)

    socket.emit('join',{name, room},()=>{
      return <Redirect to='/'/>
    });
    return function cleanup() {
    };

  },[ENDPOINT, location.search])



  useEffect(() => {
    socket.on('message', (message) => {
      message = {...message,flag:(message.user===name)};
      setMessages(messages => [ ...messages, message ]);
    });
}, [name]);

  useEffect(()=>{
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
    
},[]);



  const sendMessage = (event)=>{
    event.preventDefault();
    if(message)
    {
      socket.emit('sendMessage',message,function(){setMessage('')});
    }

  }

  function disconnect()
  {
    socket.disconnect();
  }

  return (
    <>
      <div className="cbox">
            <div id="chatbox">
                <Infobar room={room} disconnect={disconnect}/>
                <Messages message_list={messages}/>
                <Input setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
            <div id="infosection">
                <h2>    Active Users in the Room:</h2>
                <Users users={users}/>
            </div>
        </div>
    </>
  );
}

export default Chat;