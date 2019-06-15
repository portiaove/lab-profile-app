import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Iron Profile</h1>
      <p>Adipisicing est exercitation cillum sint tempor consectetur. Sunt Lorem est qui ipsum sunt irure aliquip duis magna. Mollit qui amet voluptate consequat eu irure voluptate ipsum sit enim est dolore. Sit laboris minim labore esse minim.</p>
    <Link to="/login">Log in</Link>
    <br></br>
    <Link to="/register">Sign up</Link>
    </div>
  )
}

export default HomePage;
