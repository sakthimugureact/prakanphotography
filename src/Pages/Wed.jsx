import React from 'react'
import { Link } from 'react-router-dom'

function Wed() {
  return (
    <div>
         <div className="container mx-auto mt-5 pt-4">
        <h2 className="text-center mb-5 fw-bold">LATEST PHOTOGRAPHY</h2>
        <div className="row pt-4">
          <div className="col-md-4">
         <Link to="/photography"><img src="/images/image5.png" className="d-block mx-auto img-fluid p-3"></img></Link>  
          </div>
          <div className="col-md-4">
          <Link to="/photography"><img src="/images/image6.png" className="d-block mx-auto img-fluid p-3"></img></Link>
          </div>
          <div className="col-md-4">
          <Link to="/photography"><img src="/images/image7.png" className="d-block mx-auto img-fluid p-3"></img></Link>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4"><Link to="/photography"><img src="/images/image8.png" className="d-block mx-auto img-fluid p-3"></img></Link></div>
          <div className="col-md-4"><Link to="/photography"><img src="/images/image9.png" className="d-block mx-auto img-fluid p-3"></img></Link></div>
          <div className="col-md-4"><Link to="/photography"><img src="/images/image5.png" className="d-block mx-auto img-fluid p-3"></img></Link></div>
        </div>
      </div>
    </div>
  )
}

export default Wed