import React, { use } from 'react';
import { NavLink } from 'react-router';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../firebase/firebase.config';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const {user,setUser}=use(AuthContext);
    const logOut = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        toast.success("Signed out!");
        setUser(null);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }
    return (
        <div>
            <NavLink to={'/'}>Home </NavLink>
            {user ? (
  <>
    <div>YES!</div>
    <button onClick={logOut}>Log out</button>
  </>
) : (
  <div>NO!</div>
)}
<NavLink to={'/add-challenge'}>Add challenge </NavLink>
                <NavLink to={"/my-added-challenges"}>
                  My Added Challenges
                </NavLink>
                <NavLink to={"/participants"}>
                  My participations
                </NavLink>
        </div>
    );
};

export default Navbar;