import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Initialize Firebase with your Firebase project config
    const firebaseConfig = {
      apiKey: 'AIzaSyAf4cSycWmVJu_K3Tc-T1VdrTa8KBX5cyk',
      authDomain: 'jalal-s-quiz-website.firebaseapp.com',
      databaseURL: 'https://jalal-s-quiz-website-default-rtdb.firebaseio.com',
      projectId: 'jalal-s-quiz-website',
      storageBucket: 'jalal-s-quiz-website.appspot.com',
      appId: 'jalal-s-quiz-website',
    };

    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    // Reference to your Firebase database
    const db = firebase.database();

    // Reference to the "Users" node in the database
    const usersRef = db.ref('Users');

    // Fetch data from Firebase
    usersRef.once('value')
      .then(snapshot => {
        // Convert Firebase data to an array
        const data = snapshot.val();
        const usersArray = [];

        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            usersArray.push({ id: key, ...data[key] });
          }
        }

        // Set the state with the fetched data
        setUsers(usersArray);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.Name}</td>
              <td>{user.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
