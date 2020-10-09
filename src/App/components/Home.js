import React, {useState} from "react";
import {
  Link
} from "react-router-dom";
import News from "./News";
import Error from "./Error";
import {philiaClient} from "../../api/philiaClient";

const Home = () => {
  const [query, setQuery] = useState('What\'s wrong with your health?');
  const [philia, setPhilia] = useState({});
  const search = async(e) => {
    if (e.key === 'Enter'){
      // const data = await philiaClient(query, 'sugar-conscious')
      // setPhilia(data);
      setQuery('only the doctor can make comments');
    }
  }
  const idea = async(e) => {
    setQuery('What\'s on your mind ?');
  }
  const help = async(e) => {
    setQuery('How can we help you? ');
  }
  const health = async(e) => {
    setQuery('What\'s wrong with your health?');
  }
  const feeling = async(e) => {
    setQuery('How do you feel ?');
  }
  return (
    <>
      <div className="main_content">

        <div className="main_content_inner">

          <div className="uk-grid-large" uk-grid="true">

            <div className="uk-width-2-3@m fead-area">

              <div className="section-small pt-0">
                <div className="uk-position-relative" uk-slider="finite: true">

                  <div className="uk-slider-container pb-3" >

                    <ul
                      className="uk-slider-items uk-child-width-1-5@m uk-child-width-1-3@s uk-child-width-1-3 story-slider uk-grid">
                      <li>
                        <a href="#" uk-toggle="target: body ; cls: is-open">
                          <div className="story-card" data-src="assets/icons/other/doctor-svgrepo-com.svg" uk-img="true">
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
                      <img src="assets/icons/other/user-male-com.svg" alt="" />
                    </div>
                    <div className="post-new-media-input">
                      <input 
                      type="text" 
                      className="uk-input" 
                      placeholder={query}
                      onClick={health}
                      />
                    </div>
                  </div>
                  <hr />
                  <div className="post-new-type">

                    <a href="#" onClick={help}>
                      <img src="assets/icons/other/help-svgrepo-com.svg" alt="" />
                  Help
                </a>

                    <a href="#" className="uk-visible@s" onClick={idea}>
                      <img src="assets/icons/other/idea-think-svgrepo-com.svg" alt="" />
                  Ideas
                </a>

                    <a href="#" onClick={feeling}><img src="assets/icons/smiley/101-happy-1.svg" alt="" />
                  Feeling /Activity
                </a>

                  </div>
                </div>

                <div className="post-pop">

                  <div className="post-new-overyly" uk-toggle="target: body ; cls: post-focus"></div>

                  <div className="post-new uk-animation-slide-top-small">


                    <div className="post-new-header">

                      <h4> Create new case</h4>


                      <span className="post-new-btn-close" uk-toggle="target: body ; cls: post-focus"
                        uk-tooltip="title:Close; pos: left "></span>

                    </div>

                    <div className="post-new-media">
                      <div className="post-new-media-user">
                        <img src="assets/images/avatars/avatar-2.jpg" alt="" />
                      </div>
                      <div className="post-new-media-input">
                        <input 
                        type="text" 
                        className="uk-input" 
                        placeholder={query}
                        autoComplete="off"/>
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
                      <div uk-dropdown="true">
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
                    <img src="assets/icons/other/anonymous-person-people-secret-svgrepo-com.svg" alt="" />
                  </div>
                  <div className="post-title">
                    <h4> Private User </h4>
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
                <p> Hello everyone. I am a pregnant woman and new to masta healthcare. I suffer from chest infections, I was advised by a friend to take amoxicilin but I don't know what dose to take.</p>
                  <div className="uk-grid-small" uk-grid="true">
                    <div className="uk-width-1-1@m">
                      <img src="assets/icons/other/Amoxicilin-Capsule-250mg-500mg.jpg" className="rounded" alt="" />
                    </div>
                  </div>

                  <div className="post-state-details">
                    <div>
                    <img src="assets/icons/other/doctor-svgrepo-com.svg" alt="" />
                    <img src="assets/icons/other/doctor-female-com.svg" alt="" />
                      <p> 5 </p>
                    </div>
                    <p> 4 Comments </p>
                  </div>

                </div>

                <div className="post-state">
                  <div className="post-state-btns"> <i className="uil-thumbs-up"></i> 6<span> Liked </span>
                  </div>
                  <div className="post-state-btns"> <i className="uil-heart"></i> 0 <span> Loved</span>
                  </div>
                  <div className="post-state-btns"> <i className="uil-share-alt"></i> 0 <span> Shared </span>
                  </div>
                  <div className="post-state-btns"> <i className="uil-bookmark"></i> 0 <span> Saved </span>
                  </div>
                </div>



                <div className="post-comments">
                  <a href="#" className="view-more-comment"> View 1 more Comment</a>
                  <div className="post-comments-single">
                    <div className="post-comment-avatar">
                    <img src="assets/icons/other/doctor-female-com.svg" alt="" />
                    </div>
                    <div className="post-comment-text">
                      <div className="post-comment-text-inner">
                        <h6> <Link to="/">Dr. Joy Ejiofoh</Link> </h6>
                        <p> Yes, amoxicillin can be taken by adults, including pregnant and lactating women.take 3 times a day a dose of 250mg to 500mg.
                        </p>
                      </div>
                      <div className="uk-text-small">
                        <a href="#" className="text-danger mr-1"> <i className="uil-heart"></i> Love </a>
                        <a href="#" className=" mr-1"> Reply </a>
                        <span> 3 hrs ago</span>
                      </div>
                    </div>
                    <a href="#" className="post-comment-opt"></a>
                  </div>
                  <div className="post-comments-single">
                    <div className="post-comment-avatar">
                      <img src="assets/icons/other/doctor-female-com.svg" alt="" />
                    </div>
                    <div className="post-comment-text">
                      <div className="post-comment-text-inner">
                        <h6><Link to="/">Dr. Ololade Oketunbi</Link></h6>
                        <p> The usual dose of amoxicillin is 250mg to 500mg taken 3 times a day. The dose may be lower for children. </p>
                      </div>
                      <div className="uk-text-small">
                        <a href="#" className="text-primary mr-1"> <i className="uil-thumbs-up"></i> Like
                    </a>
                        <a href="#" className=" mr-1"> Reply </a>
                        <span> 4 hrs ago</span>
                      </div>
                    </div>
                    <a href="#" className="post-comment-opt"></a>
                  </div>
                  <div className="post-comments-single">
                    <div className="post-comment-avatar">
                    <img src="assets/icons/other/doctor-svgrepo-com.svg" alt="" />
                    </div>
                    <div className="post-comment-text">
                      <div className="post-comment-text-inner">
                        <h6> <Link to="">Dr. Sam Esidem</Link> </h6>
                        <p> Try to space the doses evenly throughout the day. If you take it 3 times a day, this could be first thing in the morning, mid-afternoon and at bedtime.
                        You can take amoxicillin before or after food. </p>
                      </div>
                      <div className="uk-text-small">
                        <a href="#" className="text-danger mr-1"> <i className="uil-heart"></i> Love </a>
                        <a href="#" className=" mr-1"> Reply </a>
                        <span> 4 hrs ago</span>
                      </div>
                    </div>
                    <a href="#" className="post-comment-opt"></a>
                  </div>

                  <div className="post-add-comment">
                    <div className="post-add-comment-avature">
                      <img src="assets/icons/other/user-male-com.svg" alt="" />
                    </div>
                    <div className="post-add-comment-text-area">
                    <input 
                    type="text" 
                    placeholder="Write your comment..." 
                    value={query}
                    className="form-control"
                    autoComplete="off" 
                    onChange={(e)=> setQuery(e.target.value)} 
                      onKeyPress={search} 
                    />
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
                    <img src="assets/icons/other/IMG_4714.png" alt="" />
                  </div>
                  <div className="post-title">
                    <h4> Phil Odinga </h4>
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

                  <p> Hello community, I've had a cold for two days. 
                  The symptoms I'm feeling right now are runny nose, sneezing and congestion. 
                  What is the most common treatment for my condition?</p>
                  <div className="post-state-details">
                    <div>
                      <img src="assets/icons/other/doctor-svgrepo-com.svg" alt="" />
                      <img src="assets/icons/other/doctor-female-com.svg" alt="" />
                      <p> 4 </p>
                    </div>
                    <p> 4 Comments</p>
                  </div>

                </div>

                <div className="post-state">
                  <div className="post-state-btns"> <i className="uil-thumbs-up"></i> 1<span> Liked </span>
                  </div>
                  <div className="post-state-btns"> <i className="uil-heart"></i> 0 <span> Loved</span>
                  </div>
                  <div className="post-state-btns"> <i className="uil-share-alt"></i> 0 <span> Shared </span>
                  </div>
                  <div className="post-state-btns"> <i className="uil-bookmark"></i> 0 <span> Saved </span>
                  </div>
                </div>
                <div className="post-comments">
                  <a href="#" className="view-more-comment"> Veiw 2 more Comments</a>
                  <div className="post-comments-single">
                    <div className="post-comment-avatar">
                      <img src="assets/icons/other/doctor-svgrepo-com.svg" alt="" />
                    </div>
                    <div className="post-comment-text">
                      <div className="post-comment-text-inner">
                        <h6> <Link to="/">Dr. Jethro Magaji</Link></h6>
                        <p> You can buy cough and cold medicines from pharmacies or supermarkets. 
                        You can relieve a blocked nose with decongestant sprays or tablets.
                        ease aches or lower a temperature with painkillers like paracetamol or ibuprofen
                        <br/>
                        Be careful not to use cough and cold medicines if you're taking paracetamol and ibuprofen tablets, as it's easy to take more than the recommended dose. </p>
                      </div>
                      <div className="uk-text-small">
                        <a href="#" className="text-danger mr-1"> <i className="uil-heart"></i> Love </a>
                        <a href="#" className=" mr-1"> Reply </a>
                        <span> 10 sec</span>
                      </div>
                    </div>
                    <a href="#" className="post-comment-opt"></a>
                  </div>
                  <div className="post-comments-single">
                    <div className="post-comment-avatar">
                      <img src="assets/icons/other/doctor-female-com.svg" alt="" />
                    </div>
                    <div className="post-comment-text">
                      <div className="post-comment-text-inner">
                        <h6><Link to="/"> Dr. Joy Ejiofoh</Link></h6>
                        <p> Here are some suggestions to help you get better faster :
                        <br/>
                        rest and sleep, keep warm, Drink plenty of water (fruit juice or squash mixed with water is acceptable) to avoid dehydration
                        and gargle with salt water to soothe a sore throat </p>
                      </div>
                      <div className="uk-text-small">
                        <a href="#" className="text-primary mr-1"> <i className="uil-thumbs-up"></i> Like
                    </a>
                        <a href="#" className=" mr-1"> Reply </a>
                        <span> 2 hrs ago</span>
                      </div>
                    </div>
                    <a href="#" className="post-comment-opt"></a>
                  </div>

                  <div className="post-add-comment">
                    <div className="post-add-comment-avature">
                      <img src="assets/icons/other/user-male-com.svg" alt="" />
                    </div>
                    <div className="post-add-comment-text-area">
                      <input 
                      type="text" 
                      placeholder="Write your comment..." 
                      value={query}
                      className="form-control"
                      autoComplete="off" 
                      onChange={(e)=> setQuery(e.target.value)} 
                        onKeyPress={search} 
                      />
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


              <h3 className="mb-2"> Case Closed</h3>
              <a href="#" className="uk-link-reset">
                <div className="uk-flex uk-flex-top py-2 pb-0 pl-2 mb-2 bg-secondary-hover rounded">
                  <img src="assets/icons/other/closed-sign-svgrepo-com (1).svg" width="60px" className="mr-3" alt="" />
                  <p> <strong> Nyasinga jeff </strong> and <strong> two others </strong>
                  put an end to their health problems.</p>
                </div>
              </a>
              <div class="carousel p-0 mb-0 rounded uk-background-cover uk-light" id="id2" data-flickity='{ "lazyLoad": true , "autoPlay": true, "wrapAround": true}'>
                <Error/>
              </div>

              <br/>

              <h3 className="mb-1"> Contacts </h3>
              <div uk-sticky="offset:70 ; media : @m">

                <ul className="uk-child-width-expand tab-small my-2 uk-tab">
                  <li className="uk-active"><a href="#">Top rating doctors</a></li>
                  <li><a href="#">Groups</a></li>
                </ul>


                <div id="id3">

                  <a href="#">
                    <div className="contact-list">
                      <div className="contact-list-media"> <img src="assets/icons/other/doctor-svgrepo-com.svg" alt="" />
                        <span className="online-dot"></span> </div>
                      <h5> Dr. Sam Esidem</h5>
                    </div>
                  </a>
                  <div uk-drop="pos: left-center ;animation: uk-animation-slide-left-small">
                    <div className="contact-list-box">
                      <div className="contact-list-box-media">
                        <img src="assets/icons/other/doctor-svgrepo-com.svg" alt="" />
                        <span className="online-dot"></span>
                      </div>
                      <h4> <strong>Dr. Sam Esidem </strong>
                      <br/>
                       <span>Dermatologist </span>
                      </h4>
                      <div className="star-rating"><span className="avg"> 4.8 </span> <span
                        className="star"></span><span className="star"></span><span
                          className="star"></span><span className="star"></span><span
                            className="star"></span>
                      </div>
                      <p>  
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
                      <div className="contact-list-media"> <img src="assets/icons/other/doctor-female-com.svg" alt="" />
                        <span className="online-dot"></span> </div>
                      <h5> Dr. Joy Ejiofoh </h5>
                    </div>
                  </a>
                  <div uk-drop="pos: left-center ;animation: uk-animation-slide-left-small">
                    <div className="contact-list-box">
                      <div className="contact-list-box-media">
                        <img src="assets/icons/other/doctor-female-com.svg" alt="" />
                        <span className="online-dot"></span>
                      </div>
                      <h4> <strong>Dr. Joy Ejiofoh </strong>
                        <br />
                        <span>Internist </span>
                      </h4>
                      <div className="star-rating"><span className="avg"> 4.8 </span> <span
                        className="star"></span><span className="star"></span><span
                          className="star"></span><span className="star"></span><span
                            className="star"></span>
                      </div>
                      <p>
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
                      <div className="contact-list-media"> <img src="assets/icons/other/doctor-svgrepo-com.svg" alt="" />
                        <span className="offline-dot"></span> </div>
                      <h5> Dr. Femi </h5>
                    </div>
                  </a>
                  <div uk-drop="pos: left-center ;animation: uk-animation-slide-left-small">
                    <div className="contact-list-box">
                      <div className="contact-list-box-media">
                        <img src="assets/icons/other/doctor-svgrepo-com.svg" alt="" />
                        <span className="offline-dot"></span>
                      </div>
                      <h4> <strong>Dr. Femi </strong>
                        <br />
                        <span>Ophthalmologist </span>
                      </h4>
                      <div className="star-rating"><span className="avg"> 4.8 </span> <span
                        className="star"></span><span className="star"></span><span
                          className="star"></span><span className="star"></span><span
                            className="no-stars"></span>
                      </div>
                      <p>
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
                      <div className="contact-list-media"> <img src="assets/icons/other/doctor-svgrepo-com.svg" alt="" />
                        <span className="offline-dot"></span> </div>
                      <h5> Dr. Jethro Magaji </h5>
                    </div>
                  </a>
                  <div uk-drop="pos: left-center ;animation: uk-animation-slide-left-small">
                  <div className="contact-list-box">
                    <div className="contact-list-box-media">
                      <img src="assets/icons/other/doctor-svgrepo-com.svg" alt="" />
                      <span className="offline-dot"></span>
                    </div>
                      <h4> <strong>Dr. Jethro Magaji </strong>
                        <br />
                        <span>Ophthalmologist </span>
                      </h4>
                      <div className="star-rating"><span className="avg"> 4.8 </span> <span
                        className="star"></span><span className="star"></span><span
                          className="star"></span><span className="star"></span><span
                            className="star"></span>
                      </div>
                      <p>
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
                      <div className="contact-list-media"> <img src="assets/icons/other/doctor-female-com.svg" alt="" />
                        <span className="offline-dot"></span> </div>
                      <h5> Dr. ololade oketunbi </h5>
                    </div>
                  </a>
                  <div uk-drop="pos: left-center ;animation: uk-animation-slide-left-small">
                    <div className="contact-list-box">
                      <div className="contact-list-box-media">
                        <img src="assets/icons/other/doctor-female-com.svg" alt="" />
                        <span className="offline-dot"></span>
                      </div>
                      <h4> <strong>Dr. ololade oketunbi </strong>
                      <br />
                      <span>Pediatric pathologist </span>
                    </h4>
                    <div className="star-rating"><span className="avg"> 4.0 </span> <span
                      className="star"></span><span className="star"></span><span
                        className="star"></span><span className="star"></span><span
                          className="star"></span>
                    </div>
                    <p>
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

      
    </>
  )
}

export default Home;
