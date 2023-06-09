import React from 'react';

const User = (props) => {
  const {name,email,picture,phone} = props.user;

  return (
    <div style={{ border: '2px solid purple', borderRadius: '15px', padding: '15px', margin: '10px', display:'flex',width:'40%'}}>
      <div style={{marginTop:'40px'}}>
        <img src={picture.large} alt="" />
      </div>
      <div style={{padding:'15px'}}>
        <h1> {name.title +' '+ name.first +' '+ name.last}</h1>
        <h3>Email : {email}</h3>
        <h5>Phone : {phone}</h5>
        <button>Add me</button>
      </div>
    </div>
  );
};

export default User;