import React, { useEffect, useState } from 'react';
import User from '../User/User';


const Home = () => {
  const [user, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=12')
      .then(res => res.json())
      .then(data => setUsers(data.results))
  }, []);
  const [team, setTeam] = useState([]);
  // const parent = document.getElementById('showMember');
  const AddMe = (fullName) => {
    setTeam([...team, fullName]);
    // const list = document.createElement('ul');
    // list.innerHTML = '<li>' + fullName + '</li>';
    // parent.appendChild(list);
    // console.log(fullName);
  };
  return (
    <div>
      <h1>Handle Click on Different Components</h1>
      {
        team?.map(pd => <li> {pd}</li>)
      }
      {/* <div id="showMember">
      </div> */}
      {
        user.map( pd => <User user={pd} AddMe={AddMe}></User>)
      }
    </div>
  );
};

export default Home;