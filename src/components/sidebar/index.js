import React from 'react'
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <>
     <div className="slim-sidebar">
        <label className="sidebar-label">Navigation</label>

        <ul className="nav nav-sidebar">
          <li className="sidebar-nav-item">
          <NavLink to="/admin/dashboard" exact className="sidebar-nav-link" activeClassName="active">
            <i className="icon fa fa-area-chart fa-1x"></i> Dashboard
          </NavLink>
          </li>
          <li className="sidebar-nav-item">
          <NavLink to="/admin/roles" exact className="sidebar-nav-link" activeClassName="active">
            <i className="icon fa fa-key fa-1x"></i> Roles Management
          </NavLink>
          </li>
          <li className="sidebar-nav-item">
          <NavLink to="/admin/users" exact className="sidebar-nav-link" activeClassName="active"><i className="icon fa fa-users fa-1x"></i> Users Management</NavLink>
          </li>
       
          <li className="sidebar-nav-item">
            <a href="page-messages.html" className="sidebar-nav-link"><i className="icon fa fa-database fa-1x"></i> Data Management</a>
          </li>
          <li className="sidebar-nav-item">
            <a href="page-messages.html" className="sidebar-nav-link"><i className="icon fa fa-wrench fa-1x"></i> Service Listing</a>
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
    </>
  )
}

export default Sidebar;
