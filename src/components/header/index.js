import React from 'react'

function Header() {
  return (
    <>
    <div className="slim-header with-sidebar">
      <div className="container-fluid">
        <div className="slim-header-left">
          <h2 className="slim-logo"><a href="index.html">NIC<span>.</span></a></h2>
          <a href="#" id="slimSidebarMenu" className="slim-sidebar-menu"><span></span></a>
          <div className="search-box">
            <input type="text" className="form-control" placeholder="Search" />
            <button className="btn btn-primary"><i className="fa fa-search"></i></button>
          </div>
        </div>
        <div className="slim-header-right">
          <div className="dropdown dropdown-a" data-toggle="tooltip" title="Activity Logs">
            <a href="#" className="header-notification" data-toggle="dropdown">
              <i className="icon ion-ios-bolt-outline"></i>
            </a>
            <div className="dropdown-menu">
              <div className="dropdown-menu-header">
                <h6 className="dropdown-menu-title">Activity Logs</h6>
                <div>
                  <a href="#">Filter List</a>
                  <a href="#">Settings</a>
                </div>
              </div>
              <div className="dropdown-activity-list">
                <div className="activity-label">Today, December 13, 2017</div>
                <div className="activity-item">
                  <div className="row no-gutters">
                    <div className="col-2 tx-right">10:15am</div>
                    <div className="col-2 tx-center"><span className="square-10 bg-success"></span></div>
                    <div className="col-8">Purchased christmas sale cloud storage</div>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="row no-gutters">
                    <div className="col-2 tx-right">9:48am</div>
                    <div className="col-2 tx-center"><span className="square-10 bg-danger"></span></div>
                    <div className="col-8">Login failure</div>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="row no-gutters">
                    <div className="col-2 tx-right">7:29am</div>
                    <div className="col-2 tx-center"><span className="square-10 bg-warning"></span></div>
                    <div className="col-8">(D:) Storage almost full</div>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="row no-gutters">
                    <div className="col-2 tx-right">3:21am</div>
                    <div className="col-2 tx-center"><span className="square-10 bg-success"></span></div>
                    <div className="col-8">1 item sold <strong>Christmas bundle</strong></div>
                  </div>
                </div>
                <div className="activity-label">Yesterday, December 12, 2017</div>
                <div className="activity-item">
                  <div className="row no-gutters">
                    <div className="col-2 tx-right">6:57am</div>
                    <div className="col-2 tx-center"><span className="square-10 bg-success"></span></div>
                    <div className="col-8">Earn new badge <strong>Elite Author</strong></div>
                  </div>
                </div>
              </div>
              <div className="dropdown-list-footer">
                <a href="page-activity.html"><i className="fa fa-angle-down"></i> Show All Activities</a>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-b" data-toggle="tooltip" title="Notifications">
            <a href="#" className="header-notification" data-toggle="dropdown">
              <i className="icon ion-ios-bell-outline"></i>
              <span className="indicator"></span>
            </a>
            <div className="dropdown-menu">
              <div className="dropdown-menu-header">
                <h6 className="dropdown-menu-title">Notifications</h6>
                <div>
                  <a href="#">Mark All as Read</a>
                  <a href="#">Settings</a>
                </div>
              </div>
              <div className="dropdown-list">
          
                <a href="#" className="dropdown-link">
                  <div className="media">
                    <img src="../img/img8.jpg" alt="" />
                    <div className="media-body">
                      <p><strong>Suzzeth Bungaos</strong> tagged you and 18 others in a post.</p>
                      <span>October 03, 2017 8:45am</span>
                    </div>
                  </div>
                </a>
                
                <a href="#" className="dropdown-link">
                  <div className="media">
                    <img src="../img/img9.jpg" alt="" />
                    <div className="media-body">
                      <p><strong>Mellisa Brown</strong> appreciated your work <strong>The Social Network</strong></p>
                      <span>October 02, 2017 12:44am</span>
                    </div>
                  </div>
                </a>
                <a href="#" className="dropdown-link read">
                  <div className="media">
                    <img src="../img/img10.jpg" alt="" />
                    <div className="media-body">
                      <p>20+ new items added are for sale in your <strong>Sale Group</strong></p>
                      <span>October 01, 2017 10:20pm</span>
                    </div>
                  </div>
                </a>
                <a href="#" className="dropdown-link read">
                  <div className="media">
                    <img src="../img/img2.jpg" alt="" />
                    <div className="media-body">
                      <p><strong>Julius Erving</strong> wants to connect with you on your conversation with <strong>Ronnie Mara</strong></p>
                      <span>October 01, 2017 6:08pm</span>
                    </div>
                  </div>
                </a>
                <div className="dropdown-list-footer">
                  <a href="page-notifications.html"><i className="fa fa-angle-down"></i> Show All Notifications</a>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-c">
            <a href="#" className="logged-user" data-toggle="dropdown">
              <img src="../img/img1.jpg" alt="" />
              <span>Katherine</span>
              <i className="fa fa-angle-down"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <nav className="nav">
                <a href="page-profile.html" className="nav-link"><i className="icon ion-person"></i> View Profile</a>
                <a href="page-edit-profile.html" className="nav-link"><i className="icon ion-compose"></i> Edit Profile</a>
                <a href="page-activity.html" className="nav-link"><i className="icon ion-ios-bolt"></i> Activity Log</a>
                <a href="page-settings.html" className="nav-link"><i className="icon ion-ios-gear"></i> Account Settings</a>
                <a href="page-signin.html" className="nav-link"><i className="icon ion-forward"></i> Sign Out</a>
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