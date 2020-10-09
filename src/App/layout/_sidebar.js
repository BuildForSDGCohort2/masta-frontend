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
                <a href="/recipe" exact={true} activeClassName="selected"><img src="assets/icons/other/health-care-diet-svgrepo-com.svg" alt="" />
                <span> Philia Finder </span>
                </a>
              </li>
              <li>
                <NavLink to="#"> <img src="assets/icons/other/umoja0.svg" alt="" />
                  <span> Umoja Funding </span>
                </NavLink>
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
            <h3> Shortcut </h3>
            <ul>
              <li> <NavLink to="timeline.html"> <img src="assets/images/avatars/avatar-1.jpg" alt="" />
                <span> Stella Johnson </span> <span className="dot-notiv"></span></NavLink></li>
              <li> <NavLink to="timeline.html"> <img src="assets/images/avatars/avatar-2.jpg" alt="" />
                <span> Alex Dolgove </span> <span className="dot-notiv"></span></NavLink></li>
              <li> <NavLink to="timeline.html"> <img src="assets/images/avatars/avatar-7.jpg" alt="" />
                <span> Adrian Mohani </span> </NavLink>
              </li>
              <li id="more-veiw-2" hidden> <NavLink to="timeline.html">
                <img src="assets/images/avatars/avatar-4.jpg" alt="" />
                <span> Erica Jones </span> <span className="dot-notiv"></span></NavLink>
              </li>
              <li> <NavLink to="group-feed.html"> <img src="assets/images/group/group-3.jpg" alt="" />
                <span> Graphic Design </span> </NavLink>
              </li>
              <li> <NavLink to="group-feed.html"> <img src="assets/images/group/group-4.jpg" alt="" />
                <span> Mountain Riders </span> </NavLink>
              </li>
              <li id="more-veiw-2" hidden> <NavLink to="timeline.html"> <img
                src="assets/images/avatars/avatar-5.jpg" alt="" />
                <span> Alex Dolgove </span> <span className="dot-notiv"></span></NavLink>
              </li>
              <li id="more-veiw-2" hidden> <NavLink to="timeline.html"> <img
                src="assets/images/avatars/avatar-7.jpg" alt="" />
                <span> Adrian Mohani </span> </NavLink>
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
              <li> <NavLink to="page-term.html"> About Us </NavLink></li>
              <li> <NavLink to="page-privacy.html"> Privacy Policy </NavLink></li>
              <li> <NavLink to="page-term.html"> Terms - Conditions </NavLink></li>
            </ul>


            <div className="foot-content">
              <p>© 2020 <strong>PHILODI</strong>. All Rights Reserved. </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default _sidebar;
