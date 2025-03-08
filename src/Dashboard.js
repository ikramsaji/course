import React from 'react'
import Header from './omoponents/Header'
import Sidebar from './omoponents/Sidebar'
import { Outlet } from 'react-router-dom'
function Dashboard() {
  return (
    <div>
      
        <div>
            <Sidebar/>
            <div>
                <Outlet/>
        
      
            </div>
        
      
        </div>

      
    </div>
  )
}

export default Dashboard
