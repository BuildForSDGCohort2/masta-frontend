import React, {useState} from "react";
import {philiaClient} from "../../api/philiaClient";
import Food from "./partials/Food";


const Philia = () => {
    const [philia, setPhilia] = useState([]);
    const search = async() => {
        const data = await philiaClient('burger', 'sugar-conscious');
        setPhilia(data);
    }

    search();
    return (
        <>
            <div className="main_content">

                <div className="main_content_inner">


                    <h3 className="mb-2"> Find the best recipe for your taste that matches your diet </h3>
                    <nav className="responsive-tab style-4 mb-5">
                        <ul>
                            <li className="uk-active"><a href="#"> Suggestions </a></li>
                            <li><a href="#"> Newest </a></li>
                            <li><a href="#"> Mostly </a></li>
                        </ul>
                    </nav>

                    <div className="uk-grid-large" uk-grid="true">
                        <div className="uk-width-3-4@m">

                           <Food recipe={philia}/>                           

                            <ul className="uk-pagination my-5 uk-flex-center" uk-margin="true">
                                <li><a href="#"><span uk-pagination-previous="true"></span></a></li>
                                <li className="uk-disabled"><span>...</span></li>
                                <li><a href="#">4</a></li>
                                <li className="uk-active"><span>7</span></li>
                                <li><a href="#">8</a></li>
                                <li><a href="#">10</a></li>
                                <li className="uk-disabled"><span>...</span></li>
                                <li><a href="#"><span uk-pagination-next="true"></span></a></li>
                            </ul>
                            
                        </div>
                        <div className="uk-width-expand">
                            <div className="sidebar-filter" uk-sticky="offset:30 ; media : @s: bottom: true">
                                <div className="sidebar-filter-contents">
                                    <h4> Filter</h4>
                                    <ul className="sidebar-filter-list uk-accordion" uk-accordion="multiple: true">
                                        <li className="uk-open">
                                            <a className="uk-accordion-title" href="#"> Diet labels </a>
                                            <div className="uk-accordion-content" aria-hidden="false">
                                                <div className="uk-form-controls">
                                                    <label>
                                                        <input className="uk-radio" type="radio" onChange={()=> true} />
                                                        <span className="test">&nbsp;&nbsp; balanced </span>
                                                    </label>
                                                    <label>
                                                        <input className="uk-radio" type="radio" name="radio1" onChange={()=> true} />
                                                        <span className="test">&nbsp;&nbsp; low-sodium </span>
                                                    </label>
                                                    <label>
                                                        <input className="uk-radio" type="radio" onChange={()=> true} />
                                                        <span className="test">&nbsp;&nbsp; low-fat </span>
                                                    </label>
                                                    <label>
                                                        <input className="uk-radio" type="radio" onChange={()=> true} />
                                                        <span className="test">&nbsp;&nbsp; low-carb </span>
                                                    </label>
                                                    <label>
                                                        <input className="uk-radio" type="radio" onChange={()=> true} />
                                                        <span className="test">&nbsp;&nbsp; high-protein </span>
                                                    </label>
                                                    <label>
                                                        <input className="uk-radio" type="radio" onChange={()=> true} />
                                                        <span className="test">&nbsp;&nbsp; high-fiber </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="uk-open: false">
                                            <a className="uk-accordion-title" href="#"> Health labels </a>
                                            <div className="uk-accordion-content" aria-hidden="false">
                                                <div className="uk-form-controls">
                                                    <label>
                                                        <input className="uk-radio" type="radio" onChange={()=> true} />
                                                        <span className="test">&nbsp;&nbsp; wheat-free </span>
                                                    </label>
                                                    <label>
                                                        <input className="uk-radio" type="radio" name="radio1" onChange={()=> true} />
                                                        <span className="test">&nbsp;&nbsp; vegetarian </span>
                                                    </label>
                                                    <label>
                                                        <input className="uk-radio" type="radio" onChange={()=> true} />
                                                        <span className="test">&nbsp;&nbsp; vegan </span>
                                                    </label>
                                                    <label>
                                                        <input className="uk-radio" type="radio" onChange={()=> true} />
                                                        <span className="test">&nbsp;&nbsp; tree-nut-free </span>
                                                    </label>
                                                    <label>
                                                        <input className="uk-radio" type="radio" onChange={()=> true} />
                                                        <span className="test">&nbsp;&nbsp; sugar-conscious </span>
                                                    </label>
                                                    <label>
                                                        <input className="uk-radio" type="radio" onChange={()=> true} />
                                                        <span className="test">&nbsp;&nbsp; soy-free </span>
                                                    </label>
                                                    <label>
                                                        <input className="uk-radio" type="radio" onChange={()=> true} />
                                                        <span className="test">&nbsp;&nbsp; shellfish-free </span>
                                                    </label>
                                                    <label>
                                                        <input className="uk-radio" type="radio" onChange={()=> true} />
                                                        <span className="test">&nbsp;&nbsp; sesame-free </span>
                                                    </label>

                                                </div>
                                            </div>
                                        </li>

                                        <li className="uk-open: false">
                                            <a className="uk-accordion-title" href="#"> Cuisine type </a>
                                            <div className="uk-accordion-content" aria-hidden="false">
                                                <div className="uk-form-controls">
                                                    <label>
                                                        <input className="uk-radio" type="radio" name="radio3" onChange={()=> true} />
                                                        <span className="test">&nbsp;&nbsp; african</span>
                                                    </label>
                                                    <label>
                                                        <input className="uk-radio" type="radio" name="radio3" onChange={()=> true} />
                                                        <span className="test">&nbsp;&nbsp; british</span>
                                                    </label>
                                                    <label>
                                                        <input className="uk-radio" type="radio" name="radio3" onChange={()=> true} />
                                                        <span className="test">&nbsp;&nbsp; american</span>
                                                    </label>
                                                    <label>
                                                        <input className="uk-radio" type="radio" name="radio3" onChange={()=> true} />
                                                        <span className="test">&nbsp;&nbsp; asian</span>
                                                    </label>
                                                    <label>
                                                        <input className="uk-radio" type="radio" name="radio3" onChange={()=> true} />
                                                        <span className="test">&nbsp;&nbsp; nordic </span>
                                                    </label>
                                                    <label>
                                                        <input className="uk-radio" type="radio" name="radio3" onChange={()=> true} />
                                                        <span className="test">&nbsp;&nbsp; french</span>
                                                    </label>
                                                    <label>
                                                        <input className="uk-radio" type="radio" name="radio3" onChange={()=> true} />
                                                        <span className="test">&nbsp;&nbsp; mexican</span>
                                                    </label>
                                                    <label>
                                                        <input className="uk-radio" type="radio" name="radio3" onChange={()=> true} />
                                                        <span className="test">&nbsp;&nbsp; mediterranean</span>
                                                    </label>
                                                    <label>
                                                        <input className="uk-radio" type="radio" name="radio3" onChange={()=> true} />
                                                        <span className="test">&nbsp;&nbsp; kosher</span>
                                                    </label>
                                                    <label>
                                                        <input className="uk-radio" type="radio" name="radio3" onChange={()=> true} />
                                                        <span className="test">&nbsp;&nbsp; japanese </span>
                                                    </label>
                                                    <label>
                                                        <input className="uk-radio" type="radio" name="radio3" onChange={()=> true} />
                                                        <span className="test">&nbsp;&nbsp; italian</span>
                                                    </label>
                                                    <label>
                                                        <input className="uk-radio" type="radio" name="radio3" onChange={()=> true} />
                                                        <span className="test">&nbsp;&nbsp; chinese</span>
                                                    </label>
                                                    <label>
                                                        <input className="uk-radio" type="radio" name="radio3" onChange={()=> true} />
                                                        <span className="test">&nbsp;&nbsp; indian</span>
                                                    </label>
                                                    <label>
                                                        <input className="uk-radio" type="radio" name="radio3" onChange={()=> true} />
                                                        <span className="test">&nbsp;&nbsp; caribbean</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="uk-open: false">
                                            <a className="uk-accordion-title" href="#"> Dish type </a>
                                            <div className="uk-accordion-content" aria-hidden="false">
                                                <div className="uk-form-controls">
                                                    <label>
                                                        <input className="uk-radio" type="radio" name="radio3" onChange={()=> true} />
                                                        <span className="test">&nbsp;&nbsp; Starter</span>
                                                    </label>
                                                    <label>
                                                        <input className="uk-radio" type="radio" name="radio3" onChange={()=> true} />
                                                        <span className="test">&nbsp;&nbsp; Soup</span>
                                                    </label>
                                                    <label>
                                                        <input className="uk-radio" type="radio" name="radio3" onChange={()=> true} />
                                                        <span className="test">&nbsp;&nbsp; Sandwiches</span>
                                                    </label>
                                                    <label>
                                                        <input className="uk-radio" type="radio" name="radio3" onChange={()=> true} />
                                                        <span className="test">&nbsp;&nbsp; Salad</span>
                                                    </label>
                                                    <label>
                                                        <input className="uk-radio" type="radio" name="radio3" onChange={()=> true} />
                                                        <span className="test">&nbsp;&nbsp; Omelet </span>
                                                    </label>
                                                    <label>
                                                        <input className="uk-radio" type="radio" name="radio3" onChange={()=> true} />
                                                        <span className="test">&nbsp;&nbsp; Egg</span>
                                                    </label>
                                                    <label>
                                                        <input className="uk-radio" type="radio" name="radio3" onChange={()=> true} />
                                                        <span className="test">&nbsp;&nbsp; Desserts </span>
                                                    </label>
                                                    <label>
                                                        <input className="uk-radio" type="radio" name="radio3" onChange={()=> true} />
                                                        <span className="test">&nbsp;&nbsp; Drinks </span>
                                                    </label>
                                                    <label>
                                                        <input className="uk-radio" type="radio" name="radio3" onChange={()=> true} />
                                                        <span className="test">&nbsp;&nbsp; Cereals</span>
                                                    </label>
                                                    <label>
                                                        <input className="uk-radio" type="radio" name="radio3" onChange={()=> true} />
                                                        <span className="test">&nbsp;&nbsp; Bread </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="uk-open: false">
                                            <a className="uk-accordion-title" href="#"> Meal type </a>
                                            <div className="uk-accordion-content" aria-hidden="false">
                                                <div className="uk-form-controls">
                                                    <label>
                                                        <input className="uk-radio" type="radio" name="radio3" onChange={()=> true} />
                                                        <span className="test">&nbsp;&nbsp; teatime </span>
                                                    </label>
                                                    <label>
                                                        <input className="uk-radio" type="radio" name="radio3" onChange={()=> true} />
                                                        <span className="test">&nbsp;&nbsp; snack</span>
                                                    </label>
                                                    <label>
                                                        <input className="uk-radio" type="radio" name="radio3" onChange={()=> true} />
                                                        <span className="test">&nbsp;&nbsp; dinner</span>
                                                    </label>
                                                    <label>
                                                        <input className="uk-radio" type="radio" name="radio3" onChange={()=> true} />
                                                        <span className="test">&nbsp;&nbsp; lunch</span>
                                                    </label>
                                                    <label>
                                                        <input className="uk-radio" type="radio" name="radio3" onChange={()=> true} />
                                                        <span className="test">&nbsp;&nbsp; breakfast</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </li>
                                    
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Philia;