import React from 'react'
import { useNavigate } from 'react-router-dom'

function Choose() {
  const navigate = useNavigate();

  return (
    <>
      <div className="slim-header with-sidebar">
        <div className="container-fluid">
          <div className="slim-header-left">
            <h2 className="slim-logo"><a href="index.html">CATELOG<span>.</span></a></h2>

            {/* <div className="search-box">
            <input type="text" className="form-control" placeholder="Search" />
            <button className="btn btn-primary"><i className="fa fa-search"></i></button>
          </div> */}
          </div>
          <div className="slim-header-right">

            <div className="dropdown dropdown-c">
              <a href="#" className="logged-user" data-toggle="dropdown">
                <img src="https://picsum.photos/45" alt="" />
                <span>Katherine</span>
                <i className="fa fa-angle-down"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <nav className="nav">
                  <a href="/profile" className="nav-link"><i className="icon ion-compose"></i> Edit Profile</a>
                  <a href="/logout" className="nav-link"><i className="icon ion-forward"></i> Sign Out</a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slim-body">

        <div className="slim-mainpanel">
          <div className="container">
            <div className="slim-pageheader">
              <h6 className="slim-pagetitle">Select What Page to View</h6>
            </div>
            <div className="section-wrapper mg-t-20">
              {/* <label className="section-title">Gradient Color Card Header</label> */}
             
              <div className="row">
               
                {/* col */}
                <div className="col-md-6 mg-t-20 mg-md-t-0">
                  <div className="card bd-0 ">
                    <div className="card-header tx-medium bd-0 tx-white bg-dance">
                      Administration Page
                    </div>
                    {/* card-header */}
                    <div className="card-body bd bd-t-0">
                      <p className="mg-b-0 text-center">
                       <button className="btn btn-md btn-success mx-auto" onClick={() => navigate("/admin/dashboard")}>Go To Admin Page</button>
                      </p>
                    </div>
                    {/* card-body */}
                  </div>
                  {/* card */}
                </div>
                {/* col */}
                <div className="col-md-6 mg-t-20 mg-md-t-0">
                  <div className="card bd-0">
                    <div className="card-header tx-medium bd-0 tx-white bg-transfile">
                     Viewer Page
                    </div>
                    {/* card-header */}
                    <div className="card-body bd bd-t-0">
                      <p className="mg-b-0 text-center">
                      <button className="btn btn-md btn-success mx-auto">Go To Viewer Page</button>
                      </p>
                    </div>
                    {/* card-body */}
                  </div>
                  {/* card */}
                </div>
                {/* col */}
              </div>
              {/* row */}
            </div>
          </div>
          {/* container */}

        </div>
        {/* slim-mainpanel */}
      </div>

    </>
  )
}

export default Choose