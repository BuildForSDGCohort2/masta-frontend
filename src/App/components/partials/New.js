import React from 'react';

const New = (props) => (
        <div className="carousel-cell">
            <a href={`${props.news.url}`} target="empty">
                <img className="carousel-cell-image rounded uk-width-12-12" data-flickity-lazyload={`${props.news.urlToImage}`} alt=""/>
                <div className="content">
                    <h6>{`${props.news.title}`}</h6>
                </div>
            </a>
        </div>
);

export default New;
