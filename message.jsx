import React from 'react'

import ReactEmoji from 'react-emoji';

const Message = (prop) => {
    return (
        <div className={(prop.flag)?"message-right":"message-left"}>
            <div style={(!prop.flag)?{background:'#dee2e6',border:'2px solid gray',color:'black',borderRadius:'20px',padding:'10px',overflowWrap:'break-word',width:'max-content',maxWidth:'100%'}:{background:'#2d72ee',border:'2px solid #1757ce',color:'white',borderRadius:'20px',padding:'10px',overflowWrap:'break-word',width:'max-content',maxWidth:'100%'}}>{ReactEmoji.emojify(prop.message)}</div>
            <span style={(prop.flag)?{fontSize:'x-small',display:'block',marginRight:'2%',marginLeft:'auto',width:'max-content'}:{fontSize:'x-small',display:'block',marginRight:'auto',marginLeft:'2%',width:'max-content'}}>{prop.sender}</span>
        </div>
    )
}


export default Message;