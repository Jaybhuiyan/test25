import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home';
// //import Launchpad from './pages/Launchpad';
import RootLayout from './pages/Root';
// import EditEventPage from './pages/EditEvent';
//import Instructor from './pages/Instructor';
import InstructorSignUp from './pages/InstructorSignUp';
import InstructorSignIn from './pages/InstructorSignIn';
import QuizList from './pages/QuizList';
import Gradebook from './pages/Gradebook';
import Login from './pages/Login';
import UserSignUp from './pages/UserSignUp';
//import UserList from './pages/UserList';
//import DummyUser from './pages/DummyUser';
//import DummyUserDetail from './pages/DummyUserDetail';



/*adding all new files from Quiz project in this file*/

const router = createBrowserRouter([
    {path: '/', element: <RootLayout />, 
    children: [
    {path: '', element: <HomePage /> },
    {path: 'instructor/instructorSignUp', element: <InstructorSignUp />},
    {path: 'instructor/instructorSignIn', element: <InstructorSignIn />},
    {path: 'quizlist', element: <QuizList />},
    {path: 'gradebook', element: <Gradebook />},
    {path: 'login', element: <Login /> },
    {path: 'userSignUp', element: <UserSignUp /> },
    /*{path: 'userList', element: <UserList /> },*/

    ],
    },
   ]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
