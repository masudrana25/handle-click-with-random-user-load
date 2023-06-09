import React, { useEffect, useState } from 'react';
import User from '../User/User';


const Home = () => {
  const [user, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=12')
      .then(res => res.json())
      .then(data => setUsers(data.results))
  },[]);
  return (
    <div>
      <h1>home</h1>
      {
        user.map( pd => <User user={pd}></User>)
      }
    </div>
  );
};

export default Home;