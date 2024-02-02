import React from 'react'

function Navigation() {
  return (
    <div>
         <nav>
        <div className="logo">
            <img src="/images/brand_logo.png" alt="logo" />
        </div>
        <ul>
            <li href="#">Manu</li>
            <li href="#">About</li>
            <li href="#">Logo</li>
            <li href="#">Service</li>
        </ul>

        <button>Login</button>
       </nav>
    </div>
  )
}

export default Navigation

