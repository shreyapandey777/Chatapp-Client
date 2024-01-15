import React from 'react'


const User = (prop)=>{
    return (
        <div style={{display:'flex',alignItems:'center'}}>
            <div className="activeIcon"></div>
            <div style={{fontFamily:'cursive',fontSize:'larger',color:'white',display:'inline-block'}}>{prop.name}</div>
        </div>
    )
}


const Users = (prop) => {
    return (
        <div>
            {prop.users.map((val,idx)=>(<User key={idx} name={val.name}/>))}
        </div>
    )
}

export default Users;
