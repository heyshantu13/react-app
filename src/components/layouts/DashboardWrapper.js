import React from 'react'
import Sidebar from '../sidebar'
import Header from '../header'
import { Toaster } from 'react-hot-toast';

function DashboardWrapper({ childComponent }) {
  return (
    <>
     <Header/>
     <div className="slim-body">
        <Sidebar/>   
        <div className="slim-mainpanel">
           <Toaster/>
            {childComponent}
        </div>
     </div>

    </>
  )
}

export default DashboardWrapper;