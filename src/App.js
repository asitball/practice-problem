import './App.css';
import usersData from './data/data.json';
import { useEffect, useState } from 'react';
import UserInfo from './components/UserInfo/UserInfo';

function App() {
 const [users, setUserData] = useState([]);
  useEffect(() => {
    setUserData(usersData);
  },[])

   return (
    <div>
        <h2>User name:{usersData.length}</h2>
        <ul>
          {
            usersData.map(user => <UserInfo user={user}></UserInfo>)
          }
        </ul>
    </div>
  );
}

export default App;
