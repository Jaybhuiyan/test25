import { useEffect, useState } from 'react';

import Card from '../UI/Card';
//import MealItem from './MealItem/MealItem';
//import classes from './AvailableMeals.module.css';

const AvailableUsers = () => {
  useEffect(() => {
    const fetchUsers = async () => {
    const response = await fetch('https://jalal-s-quiz-website-default-rtdb.firebaseio.com/Users.json')
    const responseUsers = await response.json();
    const loadedUsers = [];

    for (const key in responseUsers) {
      loadedUsers.push({
        id: key,
        name: responseUsers[key].name,
        title: responseUsers[key].title,
      });
    }
    setUsers(loadedUsers);
  };
  fetchUsers();
}, []);
  const usersList = DummyUser.map((user) => (
    <MealItem
      key={user.id}
      id={user.id}
      name={user.name}
      title={user.title}
    />
  ));

  return (
    <section className={classes.users}>
      <Card>
        <ul>{usersList}</ul>
      </Card>
    </section>
  );
};

export default AvailableUsers;
