
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import UsersList from './components/UsersList'; // Add UsersList component for displaying users
import { UserProvider } from './context/UserContext';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check for existing user in local storage or context (optional)
  }, []); // Empty dependency array for initial render only

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Remove user data from local storage or context
  };

  return (
    <LoginPage />
    // <Router>
    //   <UserProvider>
    //     <div className="App">
    //       <LoginPage />
    //       {/* Navigation bar for login/signup options (optional) */}
    //       {/* <Switch>
    //         <Route exact path="/login"> */}
    //           {/* <LoginPage /> */}
    //         {/* </Route>
    //         <Route exact path="/signup"> */}
    //           {/* <SignupPage /> */}
    //         {/* </Route>
    //         <Route exact path="/users">
    //           {isLoggedIn ? (
    //             <UsersList onLogout={handleLogout} />
    //           ) : (
    //             <p>Please login to view users</p>
    //           )}
    //         </Route>
    //         <Route path="/">{/* Default route (optional) */}</Route>
    //       </Switch> */}
    //     </div>
    //   </UserProvider>
    // </Router>
  );
};

export default App;
