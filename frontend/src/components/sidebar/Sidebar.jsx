import React from 'react'
import "./Sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            Menu
                        </li>
                        <li className="sidebarListItem">
                            Météo
                        </li>
                        <li className="sidebarListItem">
                            Train
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}