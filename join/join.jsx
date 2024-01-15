import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './join.css';

function Join() {

  const [name,setName]=useState('');
  const [room,setRoom]=useState('');

  return (
    <div className="box"> 
      <h1 className="heading">Join</h1>
      <input type='text' className="input" placeholder='UserName' onChange={(event)=>setName(event.target.value)} />
      <input type='text' className="input" placeholder='Room' onChange={(event)=>setRoom(event.target.value)} />
      <Link onClick={(event)=>(!name||!room)?event.preventDefault() : null} to = {`/chat?name=${name}&room=${room}`}>
          <button className="button" type='submit'>Sign In</button>
      </Link>

    </div>
  );
}

export default Join;
