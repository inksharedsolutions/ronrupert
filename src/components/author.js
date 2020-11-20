import React from 'react'
import { Link } from 'gatsby'
import AuthorImg from '../../static/author/main_author.jpg'

const Author = () => {
    return (
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-two-columns">

                    <div className="grid-child" id="author-contents">

                        <p data-aos="fade-up" data-aos-duration="2000">
                        I was born in Niagara Falls, Canada where we lived, and I went to public school until I was 13 when we moved to Fort Erie a town across the Niagara River from Buffalo NY. I finished Public School and went to Fort Erie High school. I quit high school halfway through grade nine and started working. I had many different jobs, punch press operator, welding, woodworking, upholstery, landscaping, tree trimming and removing, and a steeplejack.
                        </p>

                        <h1 className="author-name-tag" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                            <span>Ron</span>
                            <span>Rupert</span>
                        </h1>

                        <span className="author-tagline">Author & Writer</span>
                        <Link className="buttonLayouts" data-aos="fade-up" data-aos-duration="3000" to="/about-the-author">
                            Read More
                        </Link>
                    </div>

                    <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={AuthorImg} data-aos="fade-up" data-aos-duration="3000" />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Author;