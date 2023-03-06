import React from 'react'
import Navbar from './Navbar'

function Welcome() {
  return (
    <div>
      <Navbar />
      <div className="wrapper">
        <div className="form-wrapper">
          <br /> <br />
          <h3 class="margin">WELCOME </h3>
          <br />
          <br />
          <Link to="/dispprop">
            <button type="button" class="btn btn-info margin">
              Go to Properties
            </button>
          </Link>
        </div>
      </div>
    </div>

  )
}

export default Welcome