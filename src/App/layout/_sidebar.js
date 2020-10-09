import React from "react";
import {
  NavLink, Link
} from "react-router-dom";

const _sidebar = () => {
  return (
    <>
    <div className="main_sidebar">
      <div className="side-overlay" uk-toggle="target: #wrapper ; cls: collapse-sidebar mobile-visible"></div>
      <div className="sidebar-header">
        <h4> Navigation</h4>
        <span className="btn-close" uk-toggle="target: #wrapper ; cls: collapse-sidebar mobile-visible"></span>
      </div>

      <div className="sidebar">
        <div className="sidebar_innr" data-simplebar>
          <div className="sections">
            <ul>
              <li className="active">
                <a href="/"> <img src="assets/icons/health/003-medical.svg" alt="" />
                  <span> Feed </span>
                </a>
              </li>
              <li>
                <NavLink to="#"> <img src="assets/icons/other/doctor-svgrepo-com.svg" alt="" />
                  <span> Doctors </span>
                </NavLink>
              </li>
              <li>
                <a href="/nearest-hospital"> <img src="assets/icons/other/hospital-location-svgrepo-com.svg" alt="" />
                  <span> Nearest Hospitals </span>
                </a>
              </li>
              <li>
                <NavLink to="#"> <img src="assets/icons/other/ambulance-svgrepo-com.svg" alt="" />
                  <span> Emergency </span> </NavLink>
              </li>
              <li>
                <a href="/recipe" exact={true} ><img src="assets/icons/other/health-care-diet-svgrepo-com.svg" alt="" />
                <span> Philia Finder </span>
                </a>
              </li>
              <li>
                <a href="https://umojafunding.com" target="blank"> <img src="assets/icons/other/umoja0.svg" alt="" />
                  <span> Umoja Funding </span>
                </a>
              </li>
              <li id="more-veiw" hidden>
                <NavLink to="#"> <img src="assets/images/icons/friends.png" alt="" />
                  <span> Friends </span>
                </NavLink>
              </li>
              <li id="more-veiw" hidden>
                <NavLink to="#"> <img src="assets/icons/other/blogger-blog-svgrepo-com.svg" alt="" />
                  <span> Blogs </span>
                </NavLink>
              </li>
              <li id="more-veiw" hidden>
                <NavLink to="#"> <img src="assets/icons/other/medical-history-svgrepo-com.svg" alt="" />
                  <span> Medical record </span>
                </NavLink>
              </li>
              <li id="more-veiw" hidden>
                <NavLink to="#"> <img src="assets/icons/other/event.svg" alt="" />
                  <span> Events </span>
                </NavLink>
              </li>
            </ul>

            <NavLink to="#" className="button secondary px-5 btn-more"
              uk-toggle="target: #more-veiw; animation: uk-animation-fade">
              <span id="more-veiw">See More <i className="icon-feather-chevron-down ml-2"></i></span>
              <span id="more-veiw" hidden>See Less<i className="icon-feather-chevron-up ml-2"></i> </span>
            </NavLink>

          </div>


          <div className="sections">
            <h3> Other </h3>
            <ul>
              <li> <NavLink to="/"> <img src="assets/icons/other/hospital-health-clinic-svgrepo-com.svg" alt="" />
                <span> Philia insurance</span> </NavLink>
              </li>
                <li> <NavLink to="/"> <img src="assets/icons/other/robot-svgrepo-com (1).svg" alt="" />
                  <span> Philia AI</span> </NavLink>
                </li>
            </ul>
            <NavLink to="#" className="button secondary px-5 btn-more"
              uk-toggle="target: #more-veiw-2; animation: uk-animation-fade">
              <span id="more-veiw-2">See More <i className="icon-feather-chevron-down ml-2"></i></span>
              <span id="more-veiw-2" hidden>See Less<i className="icon-feather-chevron-up ml-2"></i> </span>
            </NavLink>

          </div>

          <div id="foot">

            <ul>
              <li> <NavLink to="/"> About Us </NavLink></li>
              <li> <NavLink to="/"> Privacy </NavLink></li>
              <li> <NavLink to="/"> Terms </NavLink></li>
            </ul>


            <div className="foot-content">
              <p>© 2020 <a href="https://philodi.com" target="empty"><strong>PHILODI</strong>.</a> All Rights Reserved. </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default _sidebar;
