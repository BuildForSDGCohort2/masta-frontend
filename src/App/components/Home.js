import React from "react";

const Home = () => {
  return (
    <>
      <div className="main_content">

        <div className="main_content_inner">

          <div className="uk-grid-large" uk-grid="true">

            <div className="uk-width-2-3@m fead-area">

              <div className="section-small pt-0">
                <div className="uk-position-relative" uk-slider="finite: true">

                  <div className="uk-slider-container pb-3">

                    <ul
                      className="uk-slider-items uk-child-width-1-5@m uk-child-width-1-3@s uk-child-width-1-3 story-slider uk-grid">
                      <li>
                        <a href="#" uk-toggle="target: body ; cls: is-open">
                          <div className="story-card" data-src="assets/images/avatars/avatar-lg-1.jpg" uk-img="true">
                            <i className="uil-plus"></i>
                            <div className="story-card-content">
                              <h4> Dennis </h4>
                            </div>
                          </div>
                        </a>

                      </li>
                      <li>
                        <a href="#" uk-toggle="target: body ; cls: is-open">
                          <div className="story-card" data-src="assets/images/events/listing-5.jpg" uk-img="true">
                            <img src="assets/images/avatars/avatar-5.jpg" alt="" />
                            <div className="story-card-content">
                              <h4> Jonathan </h4>
                            </div>
                          </div>
                        </a>

                      </li>
                      <li>
                        <a href="#" uk-toggle="target: body ; cls: is-open">
                          <div className="story-card" data-src="assets/images/avatars/avatar-lg-3.jpg" uk-img="true">
                            <img src="assets/images/avatars/avatar-6.jpg" alt="" />
                            <div className="story-card-content">
                              <h4> Stella </h4>
                            </div>
                          </div>
                        </a>

                      </li>
                      <li>

                        <a href="#" uk-toggle="target: body ; cls: is-open">
                          <div className="story-card" data-src="assets/images/avatars/avatar-lg-4.jpg" uk-img="true">
                            <img src="assets/images/avatars/avatar-4.jpg" alt="" />
                            <div className="story-card-content">
                              <h4> Alex </h4>
                            </div>
                          </div>
                        </a>

                      </li>
                      <li>

                        <a href="#" uk-toggle="target: body ; cls: is-open">
                          <div className="story-card" data-src="assets/images/avatars/avatar-lg-2.jpg" uk-img="true">
                            <img src="assets/images/avatars/avatar-2.jpg" alt="" />
                            <div className="story-card-content">
                              <h4> Adrian </h4>
                            </div>
                          </div>
                        </a>

                      </li>
                      <li>

                        <a href="#" uk-toggle="target: body ; cls: is-open">
                          <div className="story-card" data-src="assets/images/avatars/avatar-lg-5.jpg" uk-img="true">
                            <img src="assets/images/avatars/avatar-5.jpg" alt="" />
                            <div className="story-card-content">
                              <h4> Dennis </h4>
                            </div>
                          </div>
                        </a>

                      </li>

                    </ul>

                    <div className="uk-visible@m">
                      <a className="uk-position-center-left-out slidenav-prev" href="#" uk-slider-item="previous"></a>
                      <a className="uk-position-center-right-out slidenav-next" href="#" uk-slider-item="next"></a>
                    </div>
                    <div className="uk-hidden@m">
                      <a className="uk-position-center-left slidenav-prev" href="#" uk-slider-item="previous"></a>
                      <a className="uk-position-center-right slidenav-next" href="#" uk-slider-item="next"></a>
                    </div>

                  </div>
                </div>
              </div>

              <div className="post-newer">

                <div className="post-new" uk-toggle="target: body ; cls: post-focus">
                  <div className="post-new-media">
                    <div className="post-new-media-user">
                      <img src="assets/images/avatars/avatar-2.jpg" alt="" />
                    </div>
                    <div className="post-new-media-input">
                      <input type="text" className="uk-input" placeholder="What's Your Mind ? Hamse!" />
                    </div>
                  </div>
                  <hr />
                  <div className="post-new-type">

                    <a href="#">
                      <img src="assets/images/icons/photo.png" alt="" />
                  Photo/Video
                </a>

                    <a href="#" className="uk-visible@s">
                      <img src="assets/images/icons/tag-friend.png" alt="" />
                  Tag Friend
                </a>

                    <a href="#"><img src="assets/images/icons/reactions_wow.png" alt="" />
                  Fealing /Activity
                </a>

                  </div>
                </div>

                <div className="post-pop">

                  <div className="post-new-overyly" uk-toggle="target: body ; cls: post-focus"></div>

                  <div className="post-new uk-animation-slide-top-small">


                    <div className="post-new-header">

                      <h4> Create new post</h4>


                      <span className="post-new-btn-close" uk-toggle="target: body ; cls: post-focus"
                        uk-tooltip="title:Close; pos: left "></span>

                    </div>

                    <div className="post-new-media">
                      <div className="post-new-media-user">
                        <img src="assets/images/avatars/avatar-2.jpg" alt="" />
                      </div>
                      <div className="post-new-media-input">
                        <input type="text" className="uk-input" placeholder="What's Your Mind ? Dennis!" />
                      </div>
                    </div>
                    <div className="post-new-tab-nav">
                      <a href="#" uk-tooltip="title:Close"> <i className="uil-image"></i> </a>
                      <a href="#"> <i className="uil-user-plus"></i> </a>
                      <a href="#"> <i className="uil-video"></i> </a>
                      <a href="#"> <i className="uil-record-audio"></i> </a>
                      <a href="#"> <i className="uil-file-alt"></i> </a>
                      <a href="#"> <i className="uil-emoji"></i> </a>
                      <a href="#"> <i className="uil-gift"></i> </a>
                      <a href="#"> <i className="uil-shopping-basket"></i> </a>
                      <a href="#"> <i className="uil-check"></i> </a>
                      <a href="#"> <i className="uil-graph-bar"></i> </a>
                    </div>
                    <div className="uk-flex uk-flex-between">

                      <button className="button outline-light circle" type="button" id="id1">Public</button>
                      <div  uk-dropdown="true">
                        <ul className="uk-nav uk-dropdown-nav">
                          <li className="uk-active"><a href="#">Only me</a></li>
                          <li><a href="#">Every one</a></li>
                          <li><a href="#"> People I Follow </a></li>
                          <li><a href="#">I People Follow Me</a></li>
                        </ul>
                      </div>

                      <a href="#" className="button primary px-6"> Share </a>
                    </div>
                  </div>

                </div>

              </div>


              <div className="post">
                <div className="post-heading">
                  <div className="post-avature">
                    <img src="assets/images/avatars/avatar-6.jpg" alt="" />
                  </div>
                  <div className="post-title">
                    <h4> Mariah Ali </h4>
                    <p> 5 <span> hrs</span> <i className="uil-users-alt"></i> </p>
                  </div>
                  <div className="post-btn-action">
                    <span className="icon-more uil-ellipsis-h"></span>
                    <div className="mt-0 p-2" uk-dropdown="pos: bottom-right;mode:hover ">
                      <ul className="uk-nav uk-dropdown-nav">
                        <li><a href="#"> <i className="uil-share-alt mr-1"></i> Share</a> </li>
                        <li><a href="#"> <i className="uil-edit-alt mr-1"></i> Edit Post </a></li>
                        <li><a href="#"> <i className="uil-comment-slash mr-1"></i> Disable comments
                      </a></li>
                        <li><a href="#"> <i className="uil-favorite mr-1"></i> Add favorites </a></li>
                        <li><a href="#" className="text-danger"> <i className="uil-trash-alt mr-1"></i>
                        Delete </a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="post-description">
                  <div className="fullsizeimg">
                    <img src="assets/images/post/img-1.jpg" alt="" />
                  </div>

                  <div className="post-state-details">
                    <div>
                      <img src="assets/images/icons/reactions_like.png" alt="" />
                      <img src="assets/images/icons/reactions_love.png" alt="" />
                      <p> 13 </p>
                    </div>
                    <p> 24 Comments</p>
                  </div>

                </div>

                <div className="post-state">
                  <div className="post-state-btns"> <i className="uil-thumbs-up"></i> 126<span> Liked </span>
                  </div>
                  <div className="post-state-btns"> <i className="uil-heart"></i> 18 <span> Coments</span>
                  </div>
                  <div className="post-state-btns"> <i className="uil-share-alt"></i> 193 <span> Shared </span>
                  </div>
                  <div className="post-state-btns"> <i className="uil-bookmark"></i> 13 <span> Saved </span>
                  </div>
                </div>


                <div className="post-comments">
                  <a href="#" className="view-more-comment"> Veiw 8 more Comments</a>
                  <div className="post-comments-single">
                    <div className="post-comment-avatar">
                      <img src="assets/images/avatars/avatar-5.jpg" alt="" />
                    </div>
                    <div className="post-comment-text">
                      <div className="post-comment-text-inner">
                        <h6> Alex Dolgove</h6>
                        <p> Ut wisi enim ad minim laoreet dolore magna aliquam erat </p>
                      </div>
                      <div className="uk-text-small">
                        <a href="#" className="text-danger mr-1"> <i className="uil-heart"></i> Love </a>
                        <a href="#" className=" mr-1"> Replay </a>
                        <span> 1d</span>
                      </div>
                    </div>
                    <a href="#" className="post-comment-opt"></a>
                  </div>
                  <div className="post-comments-single">
                    <div className="post-comment-avatar">
                      <img src="assets/images/avatars/avatar-2.jpg" alt="" />
                    </div>
                    <div className="post-comment-text">
                      <div className="post-comment-text-inner">
                        <h6>Stella Johnson</h6>
                        <p> Ut wisi enim ad minim laoreet dolore <strong> David !</strong> </p>
                      </div>
                      <div className="uk-text-small">
                        <a href="#" className="text-primary mr-1"> <i className="uil-thumbs-up"></i> Like
                    </a>
                        <a href="#" className=" mr-1"> Replay </a>
                        <span> 2d</span>
                      </div>
                    </div>
                    <a href="#" className="post-comment-opt"></a>
                  </div>
                  <div className="post-comments-single">
                    <div className="post-comment-avatar">
                      <img src="assets/images/avatars/avatar-3.jpg" alt="" />
                    </div>
                    <div className="post-comment-text">
                      <div className="post-comment-text-inner">
                        <h6> Jonathan Madano </h6>
                        <p> sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                        erat
                      volutpat.<strong> David !</strong> </p>
                      </div>
                      <div className="uk-text-small">
                        <a href="#" className="text-danger mr-1"> <i className="uil-heart"></i> Love </a>
                        <a href="#" className=" mr-1"> Replay </a>
                        <span> 3d</span>
                      </div>
                    </div>
                    <a href="#" className="post-comment-opt"></a>
                  </div>


                  <a href="#" className="view-more-comment"> Veiw 8 more Comments</a>

                  <div className="post-add-comment">
                    <div className="post-add-comment-avature">
                      <img src="assets/images/avatars/avatar-2.jpg" alt="" />
                    </div>
                    <div className="post-add-comment-text-area">
                      <input type="text" placeholder="Write your comment..." />
                      <div className="icons">
                        <span className="uil-link-alt"></span>
                        <span className="uil-grin"></span>
                        <span className="uil-image"></span>
                      </div>
                    </div>

                  </div>

                </div>



              </div>

              <div className="post">
                <div className="post-heading">
                  <div className="post-avature">
                    <img src="assets/images/avatars/avatar-3.jpg" alt="" />
                  </div>
                  <div className="post-title">
                    <h4> Erica Jones </h4>
                    <p> 5 <span> hrs</span> <i className="uil-users-alt"></i> </p>
                  </div>
                  <div className="post-btn-action">
                    <span className="icon-more uil-ellipsis-h"></span>
                    <div className="mt-0 p-2" uk-dropdown="pos: bottom-right;mode:hover ">
                      <ul className="uk-nav uk-dropdown-nav">
                        <li><a href="#"> <i className="uil-share-alt mr-1"></i> Share</a> </li>
                        <li><a href="#"> <i className="uil-edit-alt mr-1"></i> Edit Post </a></li>
                        <li><a href="#"> <i className="uil-comment-slash mr-1"></i> Disable comments
                      </a></li>
                        <li><a href="#"> <i className="uil-favorite mr-1"></i> Add favorites </a></li>
                        <li><a href="#" className="text-danger"> <i className="uil-trash-alt mr-1"></i>
                        Delete </a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="post-description">
                  <div className="uk-grid-small" uk-grid="true">
                    <div className="uk-width-1-1@m">
                      <img src="assets/images/post/img-4.jpg" className="rounded" alt="" />
                    </div>
                    <div className="uk-width-1-2@m uk-width-1-2">
                      <img src="assets/images/post/img-2.jpg" className="rounded" alt="" />
                    </div>
                    <div className="uk-width-1-2@m uk-width-1-2 uk-position-relative">
                      <img src="assets/images/post/img-3.jpg" className="rounded" alt="" />
                      <div className="uk-position-center uk-light">
                        <a href="#">
                          <h3> + 15 more </h3>
                        </a></div>
                    </div>
                  </div>

                  <div className="post-state-details">
                    <div>
                      <img src="assets/images/icons/reactions_like.png" alt="" />
                      <img src="assets/images/icons/reactions_love.png" alt="" />
                      <p> 13 </p>
                    </div>
                    <p> <span className="mr-2"> <i className="uil-eye"></i> Veiws </span> 212 Comments </p>
                  </div>

                </div>

                <div className="post-state">
                  <div className="post-state-btns"> <i className="uil-thumbs-up"></i> 126<span> Liked </span>
                  </div>
                  <div className="post-state-btns"> <i className="uil-heart"></i> 18 <span> Coments</span>
                  </div>
                  <div className="post-state-btns"> <i className="uil-share-alt"></i> 193 <span> Shared </span>
                  </div>
                  <div className="post-state-btns"> <i className="uil-bookmark"></i> 13 <span> Saved </span>
                  </div>
                </div>



                <div className="post-comments">
                  <a href="#" className="view-more-comment"> Veiw 8 more Comments</a>
                  <div className="post-comments-single">
                    <div className="post-comment-avatar">
                      <img src="assets/images/avatars/avatar-5.jpg" alt="" />
                    </div>
                    <div className="post-comment-text">
                      <div className="post-comment-text-inner">
                        <h6> Alex Dolgove</h6>
                        <p> Ut wisi enim ad minim laoreet dolore magna aliquam erat </p>
                      </div>
                      <div className="uk-text-small">
                        <a href="#" className="text-danger mr-1"> <i className="uil-heart"></i> Love </a>
                        <a href="#" className=" mr-1"> Replay </a>
                        <span> 3d</span>
                      </div>
                    </div>
                    <a href="#" className="post-comment-opt"></a>
                  </div>
                  <div className="post-comments-single">
                    <div className="post-comment-avatar">
                      <img src="assets/images/avatars/avatar-2.jpg" alt="" />
                    </div>
                    <div className="post-comment-text">
                      <div className="post-comment-text-inner">
                        <h6>Stella Johnson</h6>
                        <p> Ut wisi enim ad minim laoreet dolore <strong> David !</strong> </p>
                      </div>
                      <div className="uk-text-small">
                        <a href="#" className="text-primary mr-1"> <i className="uil-thumbs-up"></i> Like
                    </a>
                        <a href="#" className=" mr-1"> Replay </a>
                        <span> 3d</span>
                      </div>
                    </div>
                    <a href="#" className="post-comment-opt"></a>
                  </div>
                  <div className="post-comments-single">
                    <div className="post-comment-avatar">
                      <img src="assets/images/avatars/avatar-3.jpg" alt="" />
                    </div>
                    <div className="post-comment-text">
                      <div className="post-comment-text-inner">
                        <h6> Jonathan Madano </h6>
                        <p> sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                        erat
                      volutpat.<strong> David !</strong> </p>
                      </div>
                      <div className="uk-text-small">
                        <a href="#" className="text-danger mr-1"> <i className="uil-heart"></i> Love </a>
                        <a href="#" className=" mr-1"> Replay </a>
                        <span> 3d</span>
                      </div>
                    </div>
                    <a href="#" className="post-comment-opt"></a>
                  </div>


                  <a href="#" className="view-more-comment"> Veiw 8 more Comments</a>

                  <div className="post-add-comment">
                    <div className="post-add-comment-avature">
                      <img src="assets/images/avatars/avatar-2.jpg" alt="" />
                    </div>
                    <div className="post-add-comment-text-area">
                      <input type="text" placeholder="Write your comment..." />
                      <div className="icons">
                        <span className="uil-link-alt"></span>
                        <span className="uil-grin"></span>
                        <span className="uil-image"></span>
                      </div>
                    </div>

                  </div>

                </div>



              </div>


              <div className="post">
                <div className="post-heading">
                  <div className="post-avature">
                    <img src="assets/images/avatars/avatar-4.jpg" alt="" />
                  </div>
                  <div className="post-title">
                    <h4> Stella Johnson </h4>
                    <p> 5 <span> hrs</span> <i className="uil-users-alt"></i> </p>
                  </div>
                  <div className="post-btn-action">
                    <span className="icon-more uil-ellipsis-h"></span>
                    <div className="mt-0 p-2" uk-dropdown="pos: bottom-right;mode:hover ">
                      <ul className="uk-nav uk-dropdown-nav">
                        <li><a href="#"> <i className="uil-share-alt mr-1"></i> Share</a> </li>
                        <li><a href="#"> <i className="uil-edit-alt mr-1"></i> Edit Post </a></li>
                        <li><a href="#"> <i className="uil-comment-slash mr-1"></i> Disable comments
                      </a></li>
                        <li><a href="#"> <i className="uil-favorite mr-1"></i> Add favorites </a></li>
                        <li><a href="#" className="text-danger"> <i className="uil-trash-alt mr-1"></i>
                        Delete </a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="post-description">

                  <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                  euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                Ut wisi enim ad minim laoreet dolore magna aliquam erat volutpat</p>
                  <div className="post-state-details">
                    <div>
                      <img src="assets/images/icons/reactions_like.png" alt="" />
                      <img src="assets/images/icons/reactions_love.png" alt="" />
                      <p> 13 </p>
                    </div>
                    <p> 24 Comments</p>
                  </div>

                </div>

                <div className="post-state">
                  <div className="post-state-btns"> <i className="uil-thumbs-up"></i> 126<span> Liked </span>
                  </div>
                  <div className="post-state-btns"> <i className="uil-heart"></i> 18 <span> Coments</span>
                  </div>
                  <div className="post-state-btns"> <i className="uil-share-alt"></i> 193 <span> Shared </span>
                  </div>
                  <div className="post-state-btns"> <i className="uil-bookmark"></i> 13 <span> Saved </span>
                  </div>
                </div>

                <div className="post-comments">
                  <a href="#" className="view-more-comment"> Veiw 8 more Comments</a>
                  <div className="post-comments-single">
                    <div className="post-comment-avatar">
                      <img src="assets/images/avatars/avatar-5.jpg" alt="" />
                    </div>
                    <div className="post-comment-text">
                      <div className="post-comment-text-inner">
                        <h6> Alex Dolgove</h6>
                        <p> Ut wisi enim ad minim laoreet dolore magna aliquam erat </p>
                      </div>
                      <div className="uk-text-small">
                        <a href="#" className="text-danger mr-1"> <i className="uil-heart"></i> Love </a>
                        <a href="#" className=" mr-1"> Replay </a>
                        <span> 1d</span>
                      </div>
                    </div>
                    <a href="#" className="post-comment-opt"></a>
                  </div>
                  <div className="post-comments-single">
                    <div className="post-comment-avatar">
                      <img src="assets/images/avatars/avatar-2.jpg" alt="" />
                    </div>
                    <div className="post-comment-text">
                      <div className="post-comment-text-inner">
                        <h6>Stella Johnson</h6>
                        <p> Ut wisi enim ad minim laoreet dolore <strong> David !</strong> </p>
                      </div>
                      <div className="uk-text-small">
                        <a href="#" className="text-primary mr-1"> <i className="uil-thumbs-up"></i> Like
                    </a>
                        <a href="#" className=" mr-1"> Replay </a>
                        <span> 2d</span>
                      </div>
                    </div>
                    <a href="#" className="post-comment-opt"></a>
                  </div>

                  <div className="post-add-comment">
                    <div className="post-add-comment-avature">
                      <img src="assets/images/avatars/avatar-2.jpg" alt="" />
                    </div>
                    <div className="post-add-comment-text-area">
                      <input type="text" placeholder="Write your comment..." />
                      <div className="icons">
                        <span className="uil-link-alt"></span>
                        <span className="uil-grin"></span>
                        <span className="uil-image"></span>
                      </div>
                    </div>

                  </div>

                </div>


              </div>

              <div className="post">
                <div className="post-heading">
                  <div className="post-avature">
                    <img src="assets/images/avatars/avatar-2.jpg" alt="" />
                  </div>
                  <div className="post-title">
                    <h4> Dennis Han </h4>
                    <p> 5 <span> hrs</span> <i className="uil-users-alt"></i> </p>
                  </div>
                  <div className="post-btn-action">
                    <span className="icon-more uil-ellipsis-h"></span>
                    <div className="mt-0 p-2" uk-dropdown="pos: bottom-right;mode:hover ">
                      <ul className="uk-nav uk-dropdown-nav">
                        <li><a href="#"> <i className="uil-share-alt mr-1"></i> Share</a> </li>
                        <li><a href="#"> <i className="uil-edit-alt mr-1"></i> Edit Post </a></li>
                        <li><a href="#"> <i className="uil-comment-slash mr-1"></i> Disable comments
                      </a></li>
                        <li><a href="#"> <i className="uil-favorite mr-1"></i> Add favorites </a></li>
                        <li><a href="#" className="text-danger"> <i className="uil-trash-alt mr-1"></i>
                        Delete </a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="post-description">

                  <div className="fullsizevid">
                    <div className="embed-video">
                      <iframe src="https://www.youtube.com/embed/pQN-pnXPaV g " frameBorder="0" uk-video="automute: true"
                      allowFullScreen={true} uk-responsive="true"></iframe>
                    </div>
                  </div>

                  <div className="post-state-details">
                    <div>
                      <img src="assets/images/icons/reactions_like.png" alt="" />
                      <img src="assets/images/icons/reactions_love.png" alt="" />
                      <p> 13 </p>
                    </div>
                    <p> <span className="mr-2"> <i className="uil-eye"></i> 38 Veiws </span> 212 Comments </p>
                  </div>

                </div>

                <div className="post-state">
                  <div className="post-state-btns"> <i className="uil-thumbs-up"></i> 126<span> Liked </span>
                  </div>
                  <div className="post-state-btns"> <i className="uil-heart"></i> 18 <span> Coments</span>
                  </div>
                  <div className="post-state-btns"> <i className="uil-share-alt"></i> 193 <span> Shared </span>
                  </div>
                  <div className="post-state-btns"> <i className="uil-bookmark"></i> 13 <span> Saved </span>
                  </div>
                </div>



                <div className="post-comments">
                  <a href="#" className="view-more-comment"> Veiw 8 more Comments</a>
                  <div className="post-comments-single">
                    <div className="post-comment-avatar">
                      <img src="assets/images/avatars/avatar-5.jpg" alt="" />
                    </div>
                    <div className="post-comment-text">
                      <div className="post-comment-text-inner">
                        <h6> Alex Dolgove</h6>
                        <p> Ut wisi enim ad minim laoreet dolore magna aliquam erat </p>
                      </div>
                      <div className="uk-text-small">
                        <a href="#" className="text-danger mr-1"> <i className="uil-heart"></i> Love </a>
                        <a href="#" className=" mr-1"> Replay </a>
                        <span> 3d</span>
                      </div>
                    </div>
                    <a href="#" className="post-comment-opt"></a>
                  </div>
                  <div className="post-comments-single">
                    <div className="post-comment-avatar">
                      <img src="assets/images/avatars/avatar-2.jpg" alt="" />
                    </div>
                    <div className="post-comment-text">
                      <div className="post-comment-text-inner">
                        <h6>Stella Johnson</h6>
                        <p> Ut wisi enim ad minim laoreet dolore <strong> David !</strong> </p>
                      </div>
                      <div className="uk-text-small">
                        <a href="#" className="text-primary mr-1"> <i className="uil-thumbs-up"></i> Like
                    </a>
                        <a href="#" className=" mr-1"> Replay </a>
                        <span> 3d</span>
                      </div>
                    </div>
                    <a href="#" className="post-comment-opt"></a>
                  </div>

                  <div className="post-add-comment">
                    <div className="post-add-comment-avature">
                      <img src="assets/images/avatars/avatar-2.jpg" alt="" />
                    </div>
                    <div className="post-add-comment-text-area">
                      <input type="text" placeholder="Write your comment..." />
                      <div className="icons">
                        <span className="uil-link-alt"></span>
                        <span className="uil-grin"></span>
                        <span className="uil-image"></span>
                      </div>
                    </div>

                  </div>

                </div>



              </div>


            </div>



            <div className="uk-width-expand">


              <h3 className="mb-2"> Birthdays</h3>

              <a href="#" className="uk-link-reset">
                <div className="uk-flex uk-flex-top py-2 pb-0 pl-2 mb-2 bg-secondary-hover rounded">
                  <img src="assets/images/icons/gift-icon.png" width="35px" className="mr-3" alt="" />
                  <p> <strong> Jessica Erica </strong> and <strong> two others </strong>
                have a birthdays to day .</p>
                </div>
              </a>


              <div className="p-5 mb-3 rounded uk-background-cover uk-light" id="id2" data-src="assets/images/events/img-2.jpg"
                uk-img="true">
                <div className="uk-width-4-5">
                  <h3 className="mb-2">
                    <i className="uil-users-alt p-1 text-dark bg-white circle icon-small"></i>
                Groups </h3>
                  <p> New ways to find and join communications .</p>
                  <a href="#" className="button white small"> Find your groups</a>
                </div>
              </div>

              <h3 className="mb-1"> Contacts </h3>

              <div uk-sticky="offset:70 ; media : @m">

                <ul className="uk-child-width-expand tab-small my-2 uk-tab">
                  <li className="uk-active"><a href="#">Friends</a></li>
                  <li><a href="#">Groups</a></li>
                </ul>


                <div id="id3">

                  <a href="#">
                    <div className="contact-list">
                      <div className="contact-list-media"> <img src="assets/images/avatars/avatar-2.jpg" alt="" />
                        <span className="online-dot"></span> </div>
                      <h5> Dennis Han</h5>
                    </div>
                  </a>
                  <div uk-drop="pos: left-center ;animation: uk-animation-slide-left-small">
                    <div className="contact-list-box">
                      <div className="contact-list-box-media">
                        <img src="assets/images/avatars/avatar-2.jpg" alt="" />
                        <span className="online-dot"></span>
                      </div>
                      <h4> Dennis Han</h4>
                      <p> <i className="uil-users-alt icon-small"></i> Become friends with <strong> Stella
                      Johnson </strong> and <strong> 14 Others</strong>
                      </p>
                      <div className="contact-list-box-btns">
                        <a href="#" className="button primary block mr-2">
                          <i className="uil-envelope mr-1"></i> Send message</a>
                        <a href="#" className="button secondary button-icon mr-2">
                          <i className="uil-list-ul"> </i> </a>
                        <a href="#" className="button secondary button-icon"> <i className="uil-ellipsis-h">
                        </i> </a>
                      </div>
                    </div>
                  </div>

                  <a href="#">
                    <div className="contact-list">
                      <div className="contact-list-media"> <img src="assets/images/avatars/avatar-1.jpg" alt="" />
                        <span className="online-dot"></span> </div>
                      <h5> Erica Jones </h5>
                    </div>
                  </a>
                  <div uk-drop="pos: left-center ;animation: uk-animation-slide-left-small">
                    <div className="contact-list-box">
                      <div className="contact-list-box-media">
                        <img src="assets/images/avatars/avatar-3.jpg" alt="" />
                        <span className="online-dot"></span>
                      </div>
                      <h4> Erica Jones </h4>
                      <p> <i className="uil-users-alt icon-small"></i> Become friends with <strong> Stella
                      Johnson </strong> and
                    <strong> 14 Others</strong>
                      </p>
                      <div className="contact-list-box-btns">
                        <a href="#" className="button primary block mr-2"> <i className="uil-envelope mr-1"></i>
                      Send message</a>
                        <a href="#" className="button secondary button-icon mr-2"> <i className="uil-list-ul">
                        </i> </a>
                        <a href="#" className="button secondary button-icon"> <i className="uil-ellipsis-h">
                        </i> </a>
                      </div>
                    </div>
                  </div>

                  <a href="#">
                    <div className="contact-list">
                      <div className="contact-list-media"> <img src="assets/images/avatars/avatar-7.jpg" alt="" />
                        <span className="offline-dot"></span> </div>
                      <h5> Stella Johnson </h5>
                    </div>
                  </a>

                  <a href="#">
                    <div className="contact-list">
                      <div className="contact-list-media"> <img src="assets/images/avatars/avatar-5.jpg" alt="" />
                        <span className="offline-dot"></span> </div>
                      <h5> Alex Dolgove </h5>
                    </div>
                  </a>
                  <a href="#">
                    <div className="contact-list">
                      <div className="contact-list-media"> <img src="assets/images/avatars/avatar-2.jpg" alt="" />
                        <span className="online-dot"></span> </div>
                      <h5> Dennis Han</h5>
                    </div>
                  </a>
                  <a href="#">
                    <div className="contact-list">
                      <div className="contact-list-media"> <img src="assets/images/avatars/avatar-4.jpg" alt="" />
                        <span className="online-dot"></span> </div>
                      <h5> Erica Jones </h5>
                    </div>
                  </a>
                  <a href="#">
                    <div className="contact-list">
                      <div className="contact-list-media"> <img src="assets/images/avatars/avatar-3.jpg" alt="" />
                        <span className="offline-dot"></span> </div>
                      <h5> Stella Johnson </h5>
                    </div>
                  </a>
                  <a href="#">
                    <div className="contact-list">
                      <div className="contact-list-media"> <img src="assets/images/avatars/avatar-5.jpg" alt="" />
                        <span className="offline-dot"></span> </div>
                      <h5> Alex Dolgove </h5>
                    </div>
                  </a>
                  <a href="#">
                    <div className="contact-list">
                      <div className="contact-list-media"> <img src="assets/images/avatars/avatar-2.jpg" alt="" />
                        <span className="online-dot"></span> </div>
                      <h5> Dennis Han</h5>
                    </div>
                  </a>
                  <a href="#">
                    <div className="contact-list">
                      <div className="contact-list-media"> <img src="assets/images/avatars/avatar-4.jpg" alt="" />
                        <span className="online-dot"></span> </div>
                      <h5> Erica Jones </h5>
                    </div>
                  </a>
                  <a href="#">
                    <div className="contact-list">
                      <div className="contact-list-media"> <img src="assets/images/avatars/avatar-3.jpg" alt="" />
                        <span className="offline-dot"></span> </div>
                      <h5> Stella Johnson </h5>
                    </div>
                  </a>
                  <a href="#">
                    <div className="contact-list">
                      <div className="contact-list-media"> <img src="assets/images/avatars/avatar-5.jpg" alt="" />
                        <span className="offline-dot"></span> </div>
                      <h5> Alex Dolgove </h5>
                    </div>
                  </a>


                </div>
              </div>



            </div>

          </div>

        </div>
      </div>

      <div className="story-pop uk-animation-slide-bottom-small">
        <div className="story-side uk-width-1-4@s">


          <div className="story-side-search">
            <input type="text" className="uk-input" placeholder="Search user...." />
            <i className="submit uil-search-alt"></i>
          </div>

          <div className="uk-flex uk-flex-between uk-flex-middle mb-2">
            <h2 className="mb-0" id="id4">All Story</h2>
            <a href="#" className="text-primary"> Setting</a>
          </div>

          <div className="story-side-innr" data-simplebar>
            <h4 className="mb-1"> Your Story</h4>
            <ul className="story-side-list">
              <li>
                <a href="#">
                  <div className="story-user-media">
                    <img src="assets/images/avatars/avatar-1.jpg" alt="" />
                  </div>
                  <div className="story-user-innr">
                    <h5> Stella Johnson </h5>
                    <p> Share a photo or video</p>
                  </div>
                  <div className="add-story-btn">
                    <i className="uil-plus"></i>
                  </div>
                </a>

              </li>
            </ul>

            <div className="uk-flex uk-flex-between uk-flex-middle my-3">
              <h4 className="m-0"> Friends Story</h4>
              <a href="#" className="text-primary"> See all</a>
            </div>
            <ul className="story-side-list"
              uk-switcher="connect: #story-slider-switcher ; animation: uk-animation-slide-right-medium, uk-animation-slide-left-medium">

              <li>
                <a href="#">
                  <div className="story-user-media">
                    <img src="assets/images/avatars/avatar-1.jpg" alt="" />
                  </div>
                  <div className="story-user-innr">
                    <h5> Dennis Han </h5>
                    <p> <span className="story-count"> 2 new </span> <span className="story-time-ago"> 4hr ago
                  </span></p>
                  </div>
                </a>

              </li>
              <li>
                <a href="#">
                  <div className="story-user-media">
                    <img src="assets/images/avatars/avatar-2.jpg" alt="" />
                  </div>
                  <div className="story-user-innr">
                    <h5> Stella Johnson </h5>
                    <p> <span className="story-count"> 3 new </span> <span className="story-time-ago"> 1hr ago
                  </span></p>
                  </div>
                </a>

              </li>
              <li>
                <a href="#">
                  <div className="story-user-media">
                    <img src="assets/images/avatars/avatar-4.jpg" alt="" />
                  </div>
                  <div className="story-user-innr">
                    <h5> Erica Jones </h5>
                    <p> <span className="story-count"> 2 new </span> <span className="story-time-ago"> 3hr ago
                  </span></p>
                  </div>
                </a>

              </li>
              <li>
                <a href="#">
                  <div className="story-user-media">
                    <img src="assets/images/avatars/avatar-7.jpg" alt="" />
                  </div>
                  <div className="story-user-innr">
                    <h5> Adrian Mohani </h5>
                    <p> <span className="story-count"> 1 new </span> <span className="story-time-ago"> 4hr ago
                  </span></p>
                  </div>
                </a>

              </li>
              <li>
                <a href="#">
                  <div className="story-user-media">
                    <img src="assets/images/avatars/avatar-5.jpg" alt="" />
                  </div>
                  <div className="story-user-innr">
                    <h5> Alex Dolgove </h5>
                    <p> <span className="story-count"> 3 new </span> <span className="story-time-ago"> 7hr ago
                  </span></p>
                  </div>
                </a>

              </li>
              <li>
                <a href="#">
                  <div className="story-user-media">
                    <img src="assets/images/avatars/avatar-1.jpg" alt="" />
                  </div>
                  <div className="story-user-innr">
                    <h5> Stella Johnson </h5>
                    <p> <span className="story-count"> 2 new </span> <span className="story-time-ago"> 8hr ago
                  </span></p>
                  </div>
                </a>

              </li>
              <li>
                <a href="#">
                  <div className="story-user-media">
                    <img src="assets/images/avatars/avatar-2.jpg" alt="" />
                  </div>
                  <div className="story-user-innr">
                    <h5> Erica Jones </h5>
                    <p> <span className="story-count"> 3 new </span> <span className="story-time-ago"> 10hr ago
                  </span></p>
                  </div>
                </a>

              </li>
              <li>
                <a href="#">
                  <div className="story-user-media">
                    <img src="assets/images/avatars/avatar-5.jpg" alt="" />
                  </div>
                  <div className="story-user-innr">
                    <h5> Alex Dolgove </h5>
                    <p> <span className="story-count"> 3 new </span> <span className="story-time-ago"> 14hr ago
                  </span></p>
                  </div>
                </a>

              </li>

            </ul>

          </div>

        </div>
        <div className="story-content">


          <span className="story-btn-close" uk-toggle="target: body ; cls: is-open"
            uk-tooltip="title:Close story ; pos: left "></span>

          <div className="story-content-innr">

            <ul id="story-slider-switcher" className="uk-switcher">

              <li>

                <a href="#" uk-switcher-item="previous"
                  className="uk-position-center-left-out uk-position-medium slidenav-prev"></a>
                <a href="#" uk-switcher-item="next" className="uk-position-center-right-out uk-position-medium slidenav-next"></a>

                <div className="uk-position-relative uk-visible-toggle" uk-slider="true">


                  <ul className="uk-slider-nav uk-dotnav story-slider-nav"></ul>


                  <ul className="uk-slider-items uk-child-width-1-1 story-slider">
                    <li>
                      <div
                        className="story-slider-image uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                        <img src="assets/images/post/img-1.jpg" alt="" />
                      </div>
                    </li>
                    <li>
                      <div
                        className="story-slider-image uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                        <img src="assets/images/avatars/avatar-lg-1.jpg" alt="" />
                      </div>
                    </li>
                  </ul>


                </div>


              </li>

              <li>


                <a href="#" uk-switcher-item="previous"
                  className="uk-position-center-left-out uk-position-medium slidenav-prev"></a>
                <a href="#" uk-switcher-item="next" className="uk-position-center-right-out uk-position-medium slidenav-next"></a>

                <div className="uk-position-relative uk-visible-toggle" uk-slider="true">


                  <ul className="uk-slider-nav uk-dotnav story-slider-nav"></ul>


                  <ul className="uk-slider-items uk-child-width-1-1 story-slider">
                    <li>
                      <div className="story-slider-image">
                        <img src="assets/images/post/img-3.jpg" alt="" />
                      </div>
                    </li>
                    <li>
                      <div className="story-slider-image">
                        <img src="assets/images/avatars/avatar-lg-3.jpg" alt="" />
                      </div>
                    </li>
                    <li>
                      <div className="story-slider-image">
                        <img src="assets/images/avatars/avatar-lg-2.jpg" alt="" />
                      </div>
                    </li>
                  </ul>

                </div>

              </li>

              <li>



                <a href="#" uk-switcher-item="previous"
                  className="uk-position-center-left-out uk-position-medium slidenav-prev"></a>
                <a href="#" uk-switcher-item="next" className="uk-position-center-right-out uk-position-medium slidenav-next"></a>

                <div className="uk-position-relative uk-visible-toggle" uk-slider="true">

                  <ul className="uk-slider-nav uk-dotnav story-slider-nav"></ul>


                  <ul className="uk-slider-items uk-child-width-1-1 story-slider">
                    <li>
                      <div
                        className="story-slider-image uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                        <img src="assets/images/avatars/avatar-lg-4.jpg" alt="" />
                      </div>

                    </li>
                  </ul>
                </div>

              </li>

              <li>



                <a href="#" uk-switcher-item="previous"
                  className="uk-position-center-left-out uk-position-medium slidenav-prev"></a>
                <a href="#" uk-switcher-item="next" className="uk-position-center-right-out uk-position-medium slidenav-next"></a>

                <div className="uk-position-relative uk-visible-toggle" uk-slider="true">
                  <ul className="uk-slider-nav uk-dotnav story-slider-nav"></ul>
                  <ul className="uk-slider-items uk-child-width-1-1 story-slider">
                    <li>
                      <div
                        className="story-slider-image uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                        <img src="assets/images/avatars/avatar-lg-4.jpg" alt="" />
                      </div>

                    </li>
                  </ul>
                </div>

              </li>

              <li>

                <a href="#" uk-switcher-item="previous"
                  className="uk-position-center-left-out uk-position-medium slidenav-prev"></a>
                <a href="#" uk-switcher-item="next" className="uk-position-center-right-out uk-position-medium slidenav-next"></a>

                <div className="uk-position-relative uk-visible-toggle" uk-slider="true">
                  <ul className="uk-slider-nav uk-dotnav story-slider-nav"></ul>
                  <ul className="uk-slider-items uk-child-width-1-1 story-slider">
                    <li>
                      <div
                        className="story-slider-image uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                        <img src="assets/images/avatars/avatar-lg-4.jpg" alt="" />
                      </div>

                    </li>
                  </ul>
                </div>

              </li>

              <li>


                <a href="#" uk-switcher-item="previous"
                  className="uk-position-center-left-out uk-position-medium slidenav-prev"></a>
                <a href="#" uk-switcher-item="next" className="uk-position-center-right-out uk-position-medium slidenav-next"></a>

                <div className="uk-position-relative uk-visible-toggle" uk-slider="true">

                  <ul className="uk-slider-nav uk-dotnav story-slider-nav"></ul>
                  <ul className="uk-slider-items uk-child-width-1-1 story-slider">
                    <li>
                      <div
                        className="story-slider-image uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                        <img src="assets/images/avatars/avatar-lg-4.jpg" alt="" />
                      </div>

                    </li>
                  </ul>
                </div>

              </li>

              <li>

                <a href="#" uk-switcher-item="previous"
                  className="uk-position-center-left-out uk-position-medium slidenav-prev"></a>
                <a href="#" uk-switcher-item="next" className="uk-position-center-right-out uk-position-medium slidenav-next"></a>

                <div className="uk-position-relative uk-visible-toggle" uk-slider="true">
                  <ul className="uk-slider-nav uk-dotnav story-slider-nav"></ul>
                  <ul className="uk-slider-items uk-child-width-1-1 story-slider">
                    <li>
                      <div
                        className="story-slider-image uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                        <img src="assets/images/avatars/avatar-lg-4.jpg" alt="" />
                      </div>

                    </li>
                  </ul>
                </div>

              </li>

              <li>


                <a href="#" uk-switcher-item="previous"
                  className="uk-position-center-left-out uk-position-medium slidenav-prev"></a>
                <a href="#" uk-switcher-item="next" className="uk-position-center-right-out uk-position-medium slidenav-next"></a>

                <div className="uk-position-relative uk-visible-toggle" uk-slider="true">
                  <ul className="uk-slider-nav uk-dotnav story-slider-nav"></ul>
                  <ul className="uk-slider-items uk-child-width-1-1 story-slider">
                    <li>
                      <div
                        className="story-slider-image uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                        <img src="assets/images/avatars/avatar-lg-4.jpg" alt="" />
                      </div>

                    </li>
                  </ul>
                </div>

              </li>

              <li>

                <a href="#" uk-switcher-item="previous"
                  className="uk-position-center-left-out uk-position-medium slidenav-prev"></a>
                <a href="#" uk-switcher-item="next" className="uk-position-center-right-out uk-position-medium slidenav-next"></a>

                <div className="uk-position-relative uk-visible-toggle" uk-slider="true">
                  <ul className="uk-slider-nav uk-dotnav story-slider-nav"></ul>
                  <ul className="uk-slider-items uk-child-width-1-1 story-slider">
                    <li>
                      <div
                        className="story-slider-image uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                        <img src="assets/images/avatars/avatar-lg-4.jpg" alt="" />
                      </div>

                    </li>
                  </ul>
                </div>

              </li>

              <li>

                <a href="#" uk-switcher-item="previous"
                  className="uk-position-center-left-out uk-position-medium slidenav-prev"></a>
                <a href="#" uk-switcher-item="next" className="uk-position-center-right-out uk-position-medium slidenav-next"></a>

                <div className="uk-position-relative uk-visible-toggle" uk-slider="true">
                  <ul className="uk-slider-nav uk-dotnav story-slider-nav"></ul>
                  <ul className="uk-slider-items uk-child-width-1-1 story-slider">
                    <li>
                      <div
                        className="story-slider-image uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                        <img src="assets/images/avatars/avatar-lg-4.jpg" alt="" />
                      </div>

                    </li>
                  </ul>
                </div>

              </li>

              <li>

                <a href="#" uk-switcher-item="previous"
                  className="uk-position-center-left-out uk-position-medium slidenav-prev"></a>
                <a href="#" uk-switcher-item="next" className="uk-position-center-right-out uk-position-medium slidenav-next"></a>

                <div className="uk-position-relative uk-visible-toggle" uk-slider="true">
                  <ul className="uk-slider-nav uk-dotnav story-slider-nav"></ul>
                  <ul className="uk-slider-items uk-child-width-1-1 story-slider">
                    <li>
                      <div
                        className="story-slider-image uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                        <img src="assets/images/avatars/avatar-lg-4.jpg" alt="" />
                      </div>

                    </li>
                  </ul>
                </div>

              </li>

            </ul>







          </div>




        </div>
      </div>


     
      <div id="sidebar-chat" className="sidebar-chat px-3" uk-offcanvas="flip: true; overlay: true">
        <div className="uk-offcanvas-bar">

          <div className="sidebar-chat-head mb-2">

            <div className="btn-actions">
              <a href="#" uk-tooltip="title: Search ;offset:7"
                uk-toggle="target: .sidebar-chat-search; animation: uk-animation-slide-top-small"> <i
                  className="icon-feather-search"></i> </a>
              <a href="#" uk-tooltip="title: settings ;offset:7"> <i className="icon-feather-settings"></i> </a>
              <a href="#"> <i className="uil-ellipsis-v"></i> </a>
              <a href="#" className="uk-hidden@s"> <button className="uk-offcanvas-close uk-close" type="button" uk-close="true"> </button>
              </a>
            </div>

            <h2> Chats </h2>
          </div>

          <div className="sidebar-chat-search" hidden>
            <input type="text" className="uk-input" placeholder="Search in Messages" />
            <span className="btn-close" uk-toggle="target: .sidebar-chat-search; animation: uk-animation-slide-top-small"> <i
              className="icon-feather-x"></i> </span>
          </div>

          <ul className="uk-child-width-expand sidebar-chat-tabs" uk-tab="true">
            <li className="uk-active"><a href="#">Users</a></li>
            <li><a href="#">Groups</a></li>
          </ul>

          <a href="#">
            <div className="contact-list">
              <div className="contact-list-media"> <img src="assets/images/avatars/avatar-2.jpg" alt="" />
                <span className="online-dot"></span> </div>
              <h5> Dennis Han</h5>
            </div>
          </a>

          <a href="#">
            <div className="contact-list">
              <div className="contact-list-media"> <img src="assets/images/avatars/avatar-1.jpg" alt="" />
                <span className="online-dot"></span> </div>
              <h5> Erica Jones </h5>
            </div>
          </a>

          <a href="#">
            <div className="contact-list">
              <div className="contact-list-media"> <img src="assets/images/avatars/avatar-7.jpg" alt="" />
                <span className="offline-dot"></span> </div>
              <h5> Stella Johnson </h5>
            </div>
          </a>

          <a href="#">
            <div className="contact-list">
              <div className="contact-list-media"> <img src="assets/images/avatars/avatar-5.jpg" alt="" />
                <span className="offline-dot"></span> </div>
              <h5> Alex Dolgove </h5>
            </div>
          </a>
          <a href="#">
            <div className="contact-list">
              <div className="contact-list-media"> <img src="assets/images/avatars/avatar-2.jpg" alt="" />
                <span className="online-dot"></span> </div>
              <h5> Dennis Han</h5>
            </div>
          </a>
          <a href="#">
            <div className="contact-list">
              <div className="contact-list-media"> <img src="assets/images/avatars/avatar-4.jpg" alt="" />
                <span className="online-dot"></span> </div>
              <h5> Erica Jones </h5>
            </div>
          </a>
          <a href="#">
            <div className="contact-list">
              <div className="contact-list-media"> <img src="assets/images/avatars/avatar-3.jpg" alt="" />
                <span className="offline-dot"></span> </div>
              <h5> Stella Johnson </h5>
            </div>
          </a>
          <a href="#">
            <div className="contact-list">
              <div className="contact-list-media"> <img src="assets/images/avatars/avatar-5.jpg" alt="" />
                <span className="offline-dot"></span> </div>
              <h5> Alex Dolgove </h5>
            </div>
          </a>
          <a href="#">
            <div className="contact-list">
              <div className="contact-list-media"> <img src="assets/images/avatars/avatar-2.jpg" alt="" />
                <span className="online-dot"></span> </div>
              <h5> Dennis Han</h5>
            </div>
          </a>
          <a href="#">
            <div className="contact-list">
              <div className="contact-list-media"> <img src="assets/images/avatars/avatar-4.jpg" alt="" />
                <span className="online-dot"></span> </div>
              <h5> Erica Jones </h5>
            </div>
          </a>
          <a href="#">
            <div className="contact-list">
              <div className="contact-list-media"> <img src="assets/images/avatars/avatar-3.jpg" alt="" />
                <span className="offline-dot"></span> </div>
              <h5> Stella Johnson </h5>
            </div>
          </a>
          <a href="#">
            <div className="contact-list">
              <div className="contact-list-media"> <img src="assets/images/avatars/avatar-5.jpg" alt="" />
                <span className="offline-dot"></span> </div>
              <h5> Alex Dolgove </h5>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

export default Home;
