import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { signOut } from 'firebase/auth';
import {auth} from '../../firebase/firebaseConfg'

function UserAccount({ user }) {
  let username = user.email.split('@gmail.com');
  
  const handleLogOut = async () => {
    try {
      await signOut(auth);
      console.log("user logout")
    } catch (error) {
      console.log(error)
    }
  }

  return (
      <>
          <div className='d-flex'>
              <p className='m-0'>Signed :</p>{ " " }
          <NavDropdown id="nav-dropdown-dark-example" className='' title={username} menuVariant="dark">
              <NavDropdown.Item href="#action/3.1" onClick={handleLogOut} className='text-danger'>Logout</NavDropdown.Item>
            </NavDropdown>
          </div>
      </>
  )
}

export default UserAccount