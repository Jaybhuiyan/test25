import React from "react";

function Dashboard(props) {
  const userType = props.userType;

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {userType}!</p>
      {/* Render different components based on user type */}
      {/* For instructor: */}
      {userType === "instructor" && (
        <>
          <button>Create Quiz</button>
          <button>View Quiz Results</button>
          <button>View Student List</button>
        </>
      )}
      {/* For student: */}
      {userType === "student" && (
        <>
          <button>Take Quiz</button>
          <button>View Grades</button>
        </>
      )}
    </div>
  );
}

export default Dashboard;
