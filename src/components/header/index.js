import React from 'react'

function Header() {
  return (
    <>
    <div className="slim-header with-sidebar">
      <div className="container-fluid">
        <div className="slim-header-left">
          <h2 className="slim-logo"><a href="index.html">CATELOG<span>.</span></a></h2>
          <a href="#" id="slimSidebarMenu" className="slim-sidebar-menu"><span></span></a>
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
    </>
  )
}

export default Header;