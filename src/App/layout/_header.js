import React from "react";

const _header = () => {
  
  return (
    <>
      <div id="main_header">
        <header>
          <div class="header-innr">

            <div class="header-btn-traiger" uk-toggle="target: #wrapper ; cls: collapse-sidebar mobile-visible">
              <span></span>
            </div>

            <div id="logo">
              <a href="homepage.html"> <img src="assets/images/logo.png" alt="" /></a>
              <a href="homepage.html"> <img src="assets/images/logo-light.png" class="logo-inverse" alt="" /></a>
            </div>

            <div class="head_search">
              <form>
                <div class="head_search_cont">
                  <input value="" type="text" class="form-control"
                    placeholder="Search for Friends , Videos and more.." autocomplete="off" />
                  <i class="s_icon uil-search-alt"></i>
                </div>
                <div uk-dropdown="pos: top;mode:click;animation: uk-animation-slide-bottom-small"
                  class="dropdown-search">

                  <ul class="dropdown-search-list">
                    <li class="list-title"> Recent Searches </li>
                    <li> <a href="#"> <img src="assets/images/avatars/avatar-2.jpg" alt="" /> Erica Jones
                                </a> </li>
                    <li> <a href="#"> <img src="assets/images/group/group-2.jpg" alt="" /> Coffee Addicts</a>
                    </li>
                    <li> <a href="#"> <img src="assets/images/group/group-4.jpg" alt="" /> Mountain Riders
                                </a> </li>
                    <li> <a href="#"> <img src="assets/images/group/group-5.jpg" alt="" /> Property Rent And
                                    Sale </a> </li>
                    <li class="menu-divider"></li>
                    <li class="list-footer"> <a href="your-history.html"> Searches History </a>
                    </li>
                  </ul>

                </div>


              </form>
            </div>

            <div class="head_user">
              <a href="homepage.html" class="opts_icon_link uk-visible@s"> Home </a>
              <a href="timeline.html" class="opts_icon_link uk-visible@s"> Dennis Han </a>

              <a href="#" class="opts_icon uk-visible@s" uk-tooltip="title: Apps ; pos: bottom ;offset:7">
                <img src="assets/images/icons/apps.svg" alt="" />
              </a>
              <div uk-dropdown="mode:click ; pos: bottom-center ; animation: uk-animation-scale-up" class="icon-browse">
                <a href="#" class="icon-menu-item"> <i class="uil-shop"></i> Marketplace </a>
                <a href="#" class="icon-menu-item"> <i class="uil-envelope-alt"></i> Messages </a>
                <a href="#" class="icon-menu-item"> <i class="uil-bookmark"></i> Bookmark </a>
                <a href="#" class="icon-menu-item"> <i class="uil-users-alt"></i> Groups </a>
                <a href="#" class="icon-menu-item"> <i class="uil-calendar-alt"></i> Events </a>
                <a href="#" class="icon-menu-item"> <i class="uil-file-alt"></i> Forum </a>
                <a href="#" class="icon-menu-item"> <i class="uil-question-circle"></i> Questions </a>
                <a href="#" class="icon-menu-item"> <i class="uil-bolt-alt"></i> Upgrade </a>
                <a href="#" class="icon-menu-item"> <i class="uil-user-circle"></i> Account </a>
                <a href="#" class="more-app"> More Apps</a>
              </div>

              <a href="#" class="opts_icon" uk-tooltip="title: Messages ; pos: bottom ;offset:7">
                <img src="assets/images/icons/chat.svg" alt="" /> <span>4</span>
              </a>
              <div uk-dropdown="mode:click ; animation: uk-animation-slide-bottom-small" class="dropdown-notifications">
                <div class="dropdown-notifications-content" data-simplebar>
                  <div class="dropdown-notifications-headline">
                    <h4>Messages</h4>
                    <a href="#">
                      <i class="icon-feather-settings" uk-tooltip="title: Message settings ; pos: left"></i>
                    </a>
                    <input type="text" class="uk-input" placeholder="Search in Messages" />
                  </div>
                  <ul>
                    <li>
                      <a href="#">
                        <span class="notification-avatar status-online">
                          <img src="assets/images/avatars/avatar-2.jpg" alt="" />
                        </span>
                        <div class="notification-text notification-msg-text">
                          <strong>Jonathan Madano</strong>
                          <p>Thanks for The Answer ... <span class="time-ago"> 2 h </span> </p>

                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="notification-avatar">
                          <img src="assets/images/avatars/avatar-3.jpg" alt="" />
                        </span>
                        <div class="notification-text notification-msg-text">
                          <strong>Stella Johnson</strong>
                          <p> Alex will explain you how ... <span class="time-ago"> 3 h </span>
                          </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="notification-avatar status-online">
                          <img src="assets/images/avatars/avatar-1.jpg" alt="" />
                        </span>
                        <div class="notification-text notification-msg-text">
                          <strong>Alex Dolgove</strong>
                          <p> Alia just joined Messenger! <span class="time-ago"> 3 h </span> </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="notification-avatar status-online">
                          <img src="assets/images/avatars/avatar-4.jpg" alt="" />
                        </span>
                        <div class="notification-text notification-msg-text">
                          <strong>Adrian Mohani</strong>
                          <p>Thanks for The Answer ... <span class="time-ago"> 2 h </span> </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="notification-avatar">
                          <img src="assets/images/avatars/avatar-2.jpg" alt="" />
                        </span>
                        <div class="notification-text notification-msg-text">
                          <strong>Jonathan Madano</strong>
                          <p>Thanks for The Answer ... <span class="time-ago"> 2 h </span> </p>

                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="notification-avatar">
                          <img src="assets/images/avatars/avatar-3.jpg" alt="" />
                        </span>
                        <div class="notification-text notification-msg-text">
                          <strong>Stella Johnson</strong>
                          <p> Alex will explain you how ... <span class="time-ago"> 3 h </span>
                          </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="notification-avatar">
                          <img src="assets/images/avatars/avatar-1.jpg" alt="" />
                        </span>
                        <div class="notification-text notification-msg-text">
                          <strong>Alex Dolgove</strong>
                          <p> Alia just joined Messenger! <span class="time-ago"> 3 h </span> </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="notification-avatar">
                          <img src="assets/images/avatars/avatar-4.jpg" alt="" />
                        </span>
                        <div class="notification-text notification-msg-text">
                          <strong>Adrian Mohani</strong>
                          <p>Thanks for The Answer ... <span class="time-ago"> 2 h </span> </p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="dropdown-notifications-footer">
                  <a href="#"> See all in Messages</a>
                </div>
              </div>


              <a href="#" class="opts_icon" uk-tooltip="title: Notifications ; pos: bottom ;offset:7">
                <img src="assets/images/icons/bell.svg" alt="" /> <span>3</span>
              </a>
              <div uk-dropdown="mode:click ; animation: uk-animation-slide-bottom-small" class="dropdown-notifications">
                <div class="dropdown-notifications-content" data-simplebar>
                  <div class="dropdown-notifications-headline">
                    <h4>Notifications </h4>
                    <a href="#">
                      <i class="icon-feather-settings" uk-tooltip="title: Notifications settings ; pos: left"></i>
                    </a>
                  </div>
                  <ul>
                    <li>
                      <a href="#">
                        <span class="notification-avatar">
                          <img src="assets/images/avatars/avatar-2.jpg" alt="" />
                        </span>
                        <span class="notification-icon bg-gradient-primary">
                          <i class="icon-feather-thumbs-up"></i>
                        </span>
                        <span class="notification-text">
                          <strong>Adrian Moh.</strong> Like Your Comment On Video
                          <span class="text-primary">Learn Prototype Faster</span>
                          <br /> <span class="time-ago"> 9 hours ago </span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="notification-avatar">
                          <img src="assets/images/avatars/avatar-3.jpg" alt="" />
                        </span>
                        <span class="notification-icon bg-gradient-danger">
                          <i class="icon-feather-star"></i></span>
                        <span class="notification-text">
                          <strong>Alex Dolgove</strong> Added New Review In Video
                                <span class="text-primary"> Full Stack PHP Developer</span>
                          <br /> <span class="time-ago"> 19 hours ago </span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="notification-avatar">
                          <img src="assets/images/avatars/avatar-4.jpg" alt="" />
                        </span>
                        <span class="notification-icon bg-gradient-success">
                          <i class="icon-feather-message-circle"></i></span>
                        <span class="notification-text">
                          <strong>Stella John</strong> Replay Your Comment in
                                <span class="text-primary"> Adobe XD Tutorial</span>
                          <br /> <span class="time-ago"> 12 hours ago </span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="notification-avatar">
                          <img src="assets/images/avatars/avatar-2.jpg" alt="" />
                        </span>
                        <span class="notification-icon bg-gradient-primary">
                          <i class="icon-feather-thumbs-up"></i></span>
                        <span class="notification-text">
                          <strong>Adrian Moh.</strong> Like Your Comment On Video
                                <span class="text-primary"> Learn Prototype Faster</span>
                          <br /> <span class="time-ago"> 9 hours ago </span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="notification-avatar">
                          <img src="assets/images/avatars/avatar-3.jpg" alt="" />
                        </span>
                        <span class="notification-icon bg-gradient-warning">
                          <i class="icon-feather-star"></i></span>
                        <span class="notification-text">
                          <strong>Alex Dolgove</strong> Added New Review In Video
                                <span class="text-primary"> Full Stack PHP Developer</span>
                          <br /> <span class="time-ago"> 19 hours ago </span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="notification-avatar">
                          <img src="assets/images/avatars/avatar-4.jpg" alt="" />
                        </span>
                        <span class="notification-icon bg-gradient-success">
                          <i class="icon-feather-message-circle"></i></span>
                        <span class="notification-text">
                          <strong>Stella John</strong> Replay Your Comment in
                          <span class="text-primary"> Adobe XD Tutorial</span>
                          <br /> <span class="time-ago"> 12 hours ago </span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <a class="opts_account" href="#"> <img src="assets/images/avatars/avatar-2.jpg" alt="" /></a>
              <div uk-dropdown="mode:click ; animation: uk-animation-slide-bottom-small" class="dropdown-notifications rounded">
                <a href="timeline.html">
                  <div class="dropdown-user-details">
                    <div class="dropdown-user-avatar">
                      <img src="assets/images/avatars/avatar-1.jpg" alt="" />
                    </div>
                    <div class="dropdown-user-name"> Dennis Han <span>See your profile</span> </div>
                  </div>
                </a>
                <hr class="m-0" />
                <ul class="dropdown-user-menu">
                  <li><a href="page-setting.html"> <i class="uil-user"></i> My Account </a> </li>
                  <li><a href="group-feed.html"> <i class="uil-thumbs-up"></i> Liked Pages </a></li>
                  <li><a href="page-setting.html"> <i class="uil-cog"></i> Account Settings</a></li>
                  <li>
                    <a href="#" id="night-mode" class="btn-night-mode">
                      <i class="uil-moon"></i> Night mode
                          <span class="btn-night-mode-switch">
                        <span class="uk-switch-button"></span>
                      </span>
                    </a>
                  </li>
                  <li><a href="form-login.html"> <i class="uil-sign-out-alt"></i>Log Out</a>
                  </li>
                </ul>

                <hr class="m-0" />
                <ul class="dropdown-user-menu">
                  <li><a href="page-setting.html" class="bg-secondery"> <i class="uil-bolt"></i>
                    <div> Upgrade To Premium <span> Pro features give you complete control </span> </div>
                  </a>
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
