import React, { useState } from 'react';

const User = (props) => {
  const { name, email, picture, phone } = props.user;
  const fullName = name.title + ' ' + name.first + ' ' + name.last;
  const  AddMe = props.AddMe;
  const [number, setNumber] = useState('');
  const ShowNumber = () => { setNumber(phone)}

  return (
    <div style={{ border: '2px solid purple', borderRadius: '15px', padding: '15px', margin: '10px', display:'flex',width:'40%'}}>
      <div style={{marginTop:'40px'}}>
        <img src={picture.large} alt="" />
      </div>
      <div style={{padding:'15px'}}>
        <h1>Name: {fullName}</h1>
        <h3>Email : {email}</h3>
        <h5>Phone : {number}</h5>
        <button onClick={ShowNumber}> Show Phone Number</button>
        <button onClick={() => AddMe(fullName)}>Add me</button>
      </div>
    </div>
  );
};

export default User;