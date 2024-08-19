import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './AdminPage.css';

import AssignPage from './AssignPage';
import ReportPage from './ReportPage';
import StatusPage from './StatusPage';
import GenerateCodePage from './GenerateCodePage';

const AdminPage = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <Router>
      <div className="admin-container">
        <div className="top-bar">
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            <div className={`hamburger ${sidebarVisible ? '' : 'active'}`} />
          </button>
          <h2 className="top-bar-title">BIT - Wiki Page Generation</h2>
        </div>
        <div className="main-content">
          {sidebarVisible && (
            <div className="sidebar">
              <nav className="sidebar-nav">
                <ul className="sidebar-nav-list">
                  <li className="sidebar-nav-item">
                    <Link to="/admin/assign" className="sidebar-nav-link">Faculty Assign</Link>
                  </li>
                  <li className="sidebar-nav-item">
                    <Link to="/admin/report" className="sidebar-nav-link">Report</Link>
                  </li>
                  <li className="sidebar-nav-item">
                    <Link to="/admin/status" className="sidebar-nav-link">Status</Link>
                  </li>
                  <li className="sidebar-nav-item">
                    <Link to="/admin/generate-code" className="sidebar-nav-link">Generate Code</Link>
                  </li>
                </ul>
              </nav>
            </div>
          )}
          <div className="content">
            <Routes>
              <Route path='/admin/assign' element={<AssignPage />} />
              <Route path='/admin/report' element={<ReportPage />} />
              <Route path='/admin/status' element={<StatusPage />} />
              <Route path='/admin/generate-code' element={<GenerateCodePage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default AdminPage;
