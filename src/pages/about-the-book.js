import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/books/Book_Cover.png'


const ATB = (props) => {

    const slug = (props.location.href);

    const disqusConfig = {
        shortname: 'ron-rupert',
        config: { identifier: 12, slug }
    }


    return (
        <>
            <Layout>
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div
                        className="container"
                        id="book-containers" >

                        <BookInfo
                            data={{
                                title: `True Crime Cases`,
                                spanFirst: ``,
                                imgSrc: Book1,
                                id: 'the_gifted_one',
                                content:
                                    `
                                        <p>
                                        Ron was working in an A & P grocery supermarket when a friend came in that was in a police uniform. He had been transferred to the same city, where  Ron was working in a grocery store, when his friend met him. He was invited to his friend’s house the next evening to update from the time they had last seen each other. During the conversation, Ron was asked if he ever thought of being a police officer. Ron responded with, I never thought of that, but it might be a good idea. His friend told him that he would get him an application. Fill it out, get some good references and send it in. Which he did.
                                        </p>

                                        <p>
                                        Ron joined the Ontario Provincial Police in 1951.  In his first 12 years on the force, Ron worked undercover, with highway patrol and carrying out municipal policing duties.
                                        </p>

                                        <p>
                                        For the next 22 years Ron did Crime Scene Investigations (CSI) and worked on many criminal cases, some more notorious than others. After retiring from the OPP, the chief of the Woodstock Police Department, asked Ron to come and work for them. Woodstock needed a qualified CSI person and knew Ron would be a tremendous asset. While with the Woodstock PD, Ron worked on more cases, including several murders, using his vast CSI experience to help investigate crimes.
                                        </p>

                                        <p>
                                        In his long and rewarding career as a police officer, Ron worked more than 65 murders, as well as other various crimes. This is his first book. 
                                        </p>
                                                
                                    `,

                                ebooks: {
                                    stratton: 'https://www.stratton-press.com/books/true-crime-cases/',
                                    barnes: 'https://www.barnesandnoble.com/w/true-crime-cases-ron-rupert/1136287286?ean=9781643457864',
                                    amazon: 'https://www.amazon.com/True-Crime-Cases-Ron-Rupert-ebook/dp/B084D1YZ5W/ref=sr_1_1?keywords=9781643457864&qid=1580495585&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/dp/1643456326/ref=sr_1_1?keywords=9781643456324&qid=1580495602&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/true-crime-cases-ron-rupert/1136287286?ean=9781643456324',
                                    booksamillion: 'https://www.booksamillion.com/p/True-Crime-Cases/Ron-Rupert/9781643456324?id=8049069540563&_ga=2.38043555.1238548230.1605514860-2145380449.1604906972#',
                                }
                            }}
                        />

                        <div className="commentSection" >
                            <div id="disqus_thread">
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                        </div>
                    </div>
                </main>


            </Layout>
        </>
    )
}


export default ATB;