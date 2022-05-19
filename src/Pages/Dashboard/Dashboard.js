import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="my-12">
            <div class="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    {/* Page content here */}
                    <h1 className='text-2xl lg:text-5xl text-secondary text-center'>Dashboard</h1>
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label for="dashboard-drawer" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                        {/* Sidebar content here  */}
                        <li><Link to="/dashboard">My Appointment</Link></li>
                        <li><Link to="/dashboard/review">My Review</Link></li>
                        <li><Link to="/dashboard/review">My History</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;