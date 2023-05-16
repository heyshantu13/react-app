import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';

function Sidebar() {
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuOpen(!isSubMenuOpen);
  };
  return (
    <>
     <div className="slim-sidebar">
        <label className="sidebar-label">Navigation</label>

      
 
        <ul className="nav nav-sidebar">
      <li className={`sidebar-nav-item with-sub ${isSubMenuOpen ? 'open' : ''}`}>
        <a href="#" className="sidebar-nav-link active" onClick={toggleSubMenu}>
          <i className="icon ion-ios-people-outline" /> User Management
        </a>
        <ul className={`nav sidebar-nav-sub ${isSubMenuOpen ? 'open' : ''}`}>
          <li className="nav-sub-item">
            <NavLink to="/admin/users" activeClassName="active">
              <a href="#" className="nav-sub-link">
                Manage Users
              </a>
            </NavLink>
          </li>
          <li className="nav-sub-item">
            <NavLink to="/admin/roles" activeClassName="active">
              <a href="#" className="nav-sub-link">
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
        <a href="page-messages.html" className="sidebar-nav-link">
          <i className="icon fa fa-book fa-1x" /> Logs
        </a>
      </li>
      <li className="sidebar-nav-item">
        <a href="page-messages.html" className="sidebar-nav-link">
          <i className="icon fa fa-question-circle fa-1x" /> Help/Documentation
        </a>
      </li>
      <li className="sidebar-nav-item">
        <a href="" className="sidebar-nav-link">
          <i className="icon fa fa fa-code fa-1x" /> APIs
        </a>
      </li>
    </ul>
  </div>
  {/* slim-sidebar */}
    </>
  )
}

export default Sidebar;
