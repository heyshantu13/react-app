import React from 'react'
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <>
     <div className="slim-sidebar">
        <label className="sidebar-label">Navigation</label>

      
 
    <ul className="nav nav-sidebar">
      <li className="sidebar-nav-item with-sub">
        <a href="#" className="sidebar-nav-link active">
          <i className="icon ion-ios-people-outline" /> User Management
        </a>
        <ul className="nav sidebar-nav-sub">
        <li className="nav-sub-item">
        <NavLink to="/admin/users" activeClassName="active" >
            <a href="" className="nav-sub-link active">
            Manage Users
            </a>
            </NavLink>
          </li>
          <li className="nav-sub-item">
          <NavLink to="/admin/roles" activeClassName="active" >
            <a href="" className="nav-sub-link active">
              Manage Roles
            </a>
            </NavLink>
          </li>
          <li className="nav-sub-item">
            <a href="index3.html" className="nav-sub-link">
              User Role Mapping
            </a>
          </li>
        
        </ul>
      </li>
      <li className="sidebar-nav-item">
        <a href="page-messages.html" className="sidebar-nav-link">
          <i className="icon ion-ios-chatboxes-outline" /> Data Management
        </a>
      </li>
      <li className="sidebar-nav-item">
        <a href="page-messages.html" className="sidebar-nav-link"><i className="icon fa fa-book fa-1x"></i> Logs</a>
      </li>
      <li className="sidebar-nav-item">
        <a href="page-messages.html" className="sidebar-nav-link"><i className="icon fa fa-question-circle fa-1x"></i>Help/Documentation</a>
      </li>
      <li className="sidebar-nav-item">
        <a href="" className="sidebar-nav-link"><i className="icon fa fa fa-code fa-1x"></i>APIs</a>
      </li>
    </ul>
  </div>
  {/* slim-sidebar */}
    </>
  )
}

export default Sidebar;
