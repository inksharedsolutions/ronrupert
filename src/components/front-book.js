import React from 'react'
import { Link } from 'gatsby'
import FrontBook from '../../static/books/Book_Cover.png'
// import Accordions from '../containers/accordions'

const MidBook = (props) => {
    return (
        <>
            <section className="upper-main">
                <div className="container-gt separator-line">

                    <div className="grid-two-columns" id="wrapper-two-books" >

                        <div className="book-wraps" >
                            <img src={FrontBook} data-aos="fade-up" data-aos-duration="3000" />
                        </div>

                        <div className="content-wraps">

                            <span className="italic-tag" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                                Read, listen, and learn in various formats
                            </span>

                            <h1 className="heading--featured" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" >
                                <span>Featured</span>
                                <span>Book</span>
                            </h1>

                            <p data-aos="fade-up" data-aos-duration="2000">
                            Ron was working in an A & P grocery supermarket when a friend came in that was in a police uniform. He had been transferred to the same city, where  Ron was working in a grocery store, when his friend met him. He was invited to his friend’s house the next evening to update from the time they had last seen each other. During the conversation, Ron was asked if he ever thought of being a police officer.
                            </p>

                            <button className="btn-book-featured" data-aos="fade-up" data-aos-duration="3000">
                                <Link to="/about-the-book">
                                    Read More
                                </Link>
                            </button>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MidBook