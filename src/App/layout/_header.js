import React from "react";
import {
  NavLink,
  Link
} from "react-router-dom";

const _header = () => {
  return (
    <>
      <div id="main_header">
        <header>
          <div className="header-innr">

            <div className="header-btn-traiger" uk-toggle="target: #wrapper ; cls: collapse-sidebar mobile-visible">
              <span></span>
            </div>

            <div id="logo">
              <Link  to="/home"> <img src="assets/images/logo.png" alt="" /></Link>
              <Link  to="/home"> <img src="assets/images/logo-light.png" className="logo-inverse" alt="" /></Link>
            </div>

            <div className="head_search">
              <form>
                <div className="head_search_cont">
                  <input value="" type="text" className="form-control"
                    placeholder="Search for Doctors , Recipes and more..." autoComplete="off" onChange={()=> "test"}/>
                  <i className="s_icon uil-search-alt"></i>
                </div>
                <div uk-dropdown="pos: top;mode:click;animation: uk-animation-slide-bottom-small"
                  className="dropdown-search">

                  <ul className="dropdown-search-list">
                    <li className="list-title"> Recent Searches </li>
                    <li> <Link  to="#"> <img src="assets/images/avatars/avatar-2.jpg" alt="" /> Erica Jones
                                </Link> </li>
                    <li> <Link  to="#"> <img src="assets/images/group/group-2.jpg" alt="" /> Coffee Addicts</Link>
                    </li>
                    <li> <Link  to="#"> <img src="assets/images/group/group-4.jpg" alt="" /> Mountain Riders
                                </Link> </li>
                    <li> <Link  to="#"> <img src="assets/images/group/group-5.jpg" alt="" /> Property Rent And
                                    Sale </Link> </li>
                    <li className="menu-divider"></li>
                    <li className="list-footer"> <Link  to="#"> Searches History </Link>
                    </li>
                  </ul>

                </div>


              </form>
            </div>

            <div className="head_user">
              <Link  to="/home" className="opts_icon_link uk-visible@s"> Home </Link>
              <Link  to="#" className="opts_icon_link uk-visible@s"> Phil Odinga </Link>

              <Link  to="#" className="opts_icon uk-visible@s" uk-tooltip="title: Apps ; pos: bottom ;offset:7">
                <img src="assets/icons/other/apps-svgrepo-com.svg" alt="" />
              </Link>
              <div uk-dropdown="mode:click ; pos: bottom-center ; animation: uk-animation-scale-up" className="icon-browse">
                <Link  to="#" className="icon-menu-item"> <i className="uil-shop"></i> Marketplace </Link>
                <Link  to="#" className="icon-menu-item"> <i className="uil-envelope-alt"></i> Messages </Link>
                <Link  to="#" className="icon-menu-item"> <i className="uil-bookmark"></i> Bookmark </Link>
                <Link  to="#" className="icon-menu-item"> <i className="uil-users-alt"></i> Groups </Link>
                <Link  to="#" className="icon-menu-item"> <i className="uil-calendar-alt"></i> Events </Link>
                <Link  to="#" className="icon-menu-item"> <i className="uil-file-alt"></i> Forum </Link>
                <Link  to="#" className="icon-menu-item"> <i className="uil-question-circle"></i> Questions </Link>
                <Link  to="#" className="icon-menu-item"> <i className="uil-bolt-alt"></i> Upgrade </Link>
                <Link  to="#" className="icon-menu-item"> <i className="uil-user-circle"></i> Account </Link>
                <Link  to="#" className="more-app"> More Apps</Link>
              </div>

              <Link  to="#" className="opts_icon" uk-tooltip="title: Messages ; pos: bottom ;offset:7">
                <img src="assets/icons/other/chat-svgrepo-com.svg" alt="" /> <span>4</span>
              </Link>
              <div uk-dropdown="mode:click ; animation: uk-animation-slide-bottom-small" className="dropdown-notifications">
                <div className="dropdown-notifications-content" data-simplebar>
                  <div className="dropdown-notifications-headline">
                    <h4>Messages</h4>
                    <Link  to="#">
                      <i className="icon-feather-settings" uk-tooltip="title: Message settings ; pos: left"></i>
                    </Link>
                    <input type="text" className="uk-input" placeholder="Search in Messages" />
                  </div>
                  <ul>
                    <li>
                      <Link  to="#">
                        <span className="notification-avatar status-online">
                          <img src="assets/images/avatars/avatar-2.jpg" alt="" />
                        </span>
                        <div className="notification-text notification-msg-text">
                          <strong>Jonathan Madano</strong>
                          <p>Thanks for The Answer ... <span className="time-ago"> 2 h </span> </p>

                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link  to="#">
                        <span className="notification-avatar">
                          <img src="assets/images/avatars/avatar-3.jpg" alt="" />
                        </span>
                        <div className="notification-text notification-msg-text">
                          <strong>Stella Johnson</strong>
                          <p> Alex will explain you how ... <span className="time-ago"> 3 h </span>
                          </p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link  to="#">
                        <span className="notification-avatar status-online">
                          <img src="assets/images/avatars/avatar-1.jpg" alt="" />
                        </span>
                        <div className="notification-text notification-msg-text">
                          <strong>Alex Dolgove</strong>
                          <p> Alia just joined Messenger! <span className="time-ago"> 3 h </span> </p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link  to="#">
                        <span className="notification-avatar status-online">
                          <img src="assets/images/avatars/avatar-4.jpg" alt="" />
                        </span>
                        <div className="notification-text notification-msg-text">
                          <strong>Adrian Mohani</strong>
                          <p>Thanks for The Answer ... <span className="time-ago"> 2 h </span> </p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link  to="#">
                        <span className="notification-avatar">
                          <img src="assets/images/avatars/avatar-2.jpg" alt="" />
                        </span>
                        <div className="notification-text notification-msg-text">
                          <strong>Jonathan Madano</strong>
                          <p>Thanks for The Answer ... <span className="time-ago"> 2 h </span> </p>

                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link  to="#">
                        <span className="notification-avatar">
                          <img src="assets/images/avatars/avatar-3.jpg" alt="" />
                        </span>
                        <div className="notification-text notification-msg-text">
                          <strong>Stella Johnson</strong>
                          <p> Alex will explain you how ... <span className="time-ago"> 3 h </span>
                          </p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link  to="#">
                        <span className="notification-avatar">
                          <img src="assets/images/avatars/avatar-1.jpg" alt="" />
                        </span>
                        <div className="notification-text notification-msg-text">
                          <strong>Alex Dolgove</strong>
                          <p> Alia just joined Messenger! <span className="time-ago"> 3 h </span> </p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link  to="#">
                        <span className="notification-avatar">
                          <img src="assets/images/avatars/avatar-4.jpg" alt="" />
                        </span>
                        <div className="notification-text notification-msg-text">
                          <strong>Adrian Mohani</strong>
                          <p>Thanks for The Answer ... <span className="time-ago"> 2 h </span> </p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="dropdown-notifications-footer">
                  <Link  to="#"> See all in Messages</Link>
                </div>
              </div>


              <Link  to="#" className="opts_icon" uk-tooltip="title: Notifications ; pos: bottom ;offset:7">
                <img src="assets/icons/other/notification-svgrepo-com.svg" alt="" /> <span>3</span>
              </Link>
              <div uk-dropdown="mode:click ; animation: uk-animation-slide-bottom-small" className="dropdown-notifications">
                <div className="dropdown-notifications-content" data-simplebar>
                  <div className="dropdown-notifications-headline">
                    <h4>Notifications </h4>
                    <Link  to="#">
                      <i className="icon-feather-settings" uk-tooltip="title: Notifications settings ; pos: left"></i>
                    </Link>
                  </div>
                  <ul>
                    <li>
                      <Link  to="#">
                        <span className="notification-avatar">
                          <img src="assets/images/avatars/avatar-2.jpg" alt="" />
                        </span>
                        <span className="notification-icon bg-gradient-primary">
                          <i className="icon-feather-thumbs-up"></i>
                        </span>
                        <span className="notification-text">
                          <strong>Adrian Moh.</strong> Like Your Comment On Video
                          <span className="text-primary">Learn Prototype Faster</span>
                          <br /> <span className="time-ago"> 9 hours ago </span>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link  to="#">
                        <span className="notification-avatar">
                          <img src="assets/images/avatars/avatar-3.jpg" alt="" />
                        </span>
                        <span className="notification-icon bg-gradient-danger">
                          <i className="icon-feather-star"></i></span>
                        <span className="notification-text">
                          <strong>Alex Dolgove</strong> Added New Review In Video
                                <span className="text-primary"> Full Stack PHP Developer</span>
                          <br /> <span className="time-ago"> 19 hours ago </span>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link  to="#">
                        <span className="notification-avatar">
                          <img src="assets/images/avatars/avatar-4.jpg" alt="" />
                        </span>
                        <span className="notification-icon bg-gradient-success">
                          <i className="icon-feather-message-circle"></i></span>
                        <span className="notification-text">
                          <strong>Stella John</strong> Replay Your Comment in
                                <span className="text-primary"> Adobe XD Tutorial</span>
                          <br /> <span className="time-ago"> 12 hours ago </span>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link  to="#">
                        <span className="notification-avatar">
                          <img src="assets/images/avatars/avatar-2.jpg" alt="" />
                        </span>
                        <span className="notification-icon bg-gradient-primary">
                          <i className="icon-feather-thumbs-up"></i></span>
                        <span className="notification-text">
                          <strong>Adrian Moh.</strong> Like Your Comment On Video
                                <span className="text-primary"> Learn Prototype Faster</span>
                          <br /> <span className="time-ago"> 9 hours ago </span>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link  to="#">
                        <span className="notification-avatar">
                          <img src="assets/images/avatars/avatar-3.jpg" alt="" />
                        </span>
                        <span className="notification-icon bg-gradient-warning">
                          <i className="icon-feather-star"></i></span>
                        <span className="notification-text">
                          <strong>Alex Dolgove</strong> Added New Review In Video
                                <span className="text-primary"> Full Stack PHP Developer</span>
                          <br /> <span className="time-ago"> 19 hours ago </span>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link  to="#">
                        <span className="notification-avatar">
                          <img src="assets/images/avatars/avatar-4.jpg" alt="" />
                        </span>
                        <span className="notification-icon bg-gradient-success">
                          <i className="icon-feather-message-circle"></i></span>
                        <span className="notification-text">
                          <strong>Stella John</strong> Replay Your Comment in
                          <span className="text-primary"> Adobe XD Tutorial</span>
                          <br /> <span className="time-ago"> 12 hours ago </span>
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <Link  className="opts_account" to="#"> <img src="assets/icons/other/IMG_4714.png" alt="" /></Link>
              <div uk-dropdown="mode:click ; animation: uk-animation-slide-bottom-small" className="dropdown-notifications rounded">
                <Link  to="timeline.html">
                  <div className="dropdown-user-details">
                    <div className="dropdown-user-avatar">
                      <img src="assets/icons/other/IMG_4714.png" alt="" />
                    </div>
                    <div className="dropdown-user-name"> Phil Odinga <span>See your profile</span> </div>
                  </div>
                </Link>
                <hr className="m-0" />
                <ul className="dropdown-user-menu">
                  <li><Link  to="#"> <i className="uil-user"></i> My Account </Link> </li>
                  <li><Link  to="#"> <i className="uil-thumbs-up"></i> Liked Pages </Link></li>
                  <li><Link  to="#"> <i className="uil-cog"></i> Account Settings</Link></li>
                  <li>
                    <Link  to="#" id="night-mode" className="btn-night-mode">
                      <i className="uil-moon"></i> Night mode
                          <span className="btn-night-mode-switch">
                        <span className="uk-switch-button"></span>
                      </span>
                    </Link>
                  </li>
                  <li><Link  to="#"> <i className="uil-sign-out-alt"></i>Log Out</Link>
                  </li>
                </ul>

                <hr className="m-0" />
                <ul className="dropdown-user-menu">
                  <li><Link  to="#" className="bg-secondery"> <i className="uil-bolt"></i>
                    <div> Upgrade To Premium <span> Pro features give you complete control </span> </div>
                  </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default _header;
