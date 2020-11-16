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
                                title: `The Crime Case`,
                                spanFirst: `AN IMPRINT ON LIFE`,
                                imgSrc: Book1,
                                id: 'the_gifted_one',
                                content:
                                    `
                                        <p>
                                        One of the murders I had was remarkably interesting, in that the Crown Attorney (Prosecutor) believed the trial would last three to four weeks. I was the first witness called to give evidence.
                                        </p> 

                                        <p>
                                        I was in the witness box for a day and a half giving my evidence. I produced and described all my photos, I produced charts identifying his boot print in the snow at the crime scene to his boots, the tire tracks at the crime scene and at the Union Hall to his truck, The palm print on the exit door from the union hall, his 2 fingerprints on a beer bottle near where his boot prints were, I found behind her footprints as he pressed her up against the outside wall of the building, the blood I took form the passenger side of his truck and blood found on his jeans lying on the the floor beside his bed in his apartment which was the victim's blood. I finished giving my evidence just before noon the second day. When court resumed the guy charged with murder changed his plea to guilty after hearing the damming evidence against him.
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