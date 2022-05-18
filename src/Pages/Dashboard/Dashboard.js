import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                {/* Page content here */}
                <h1 className='text-2xl lg:text-5xl text-secondary text-center my-5'>Dashboard</h1>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-drawer" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* Sidebar content here  */}
                    <li><Link to="/dashboard">Appointment</Link></li>
                    <li><Link to="/dashboard/review">Review</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;