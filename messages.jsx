import React from 'react'
import Message from './message'
import ScrollToBottom from 'react-scroll-to-bottom';

const Messages = (prop) => {
    // console.log(prop.message_list)
    // .map((val,idx)=>(console.log(val,idx)))
    return (
            <ScrollToBottom  className="messages">
                {prop.message_list.map((val,idx)=>(<Message key = {idx} message={val.text} flag = {val.flag} sender={val.user}/>))}
            </ScrollToBottom>
    )
}


export default Messages;