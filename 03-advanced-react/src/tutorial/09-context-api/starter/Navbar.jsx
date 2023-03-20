import React, { useState } from 'react'
import NavLinks from './NavLinks';

function Navbar() {

     const [user, setUser] = useState({name:'Bobby'});

    function logout(){
        setUser(null)
    }

  return (<>
    <div className='navbar'>Context API</div>
    <NavLinks user={user} setUser={setUser} logout={logout}/>
    </>)
}

export default Navbar