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
                                        I was born in Niagara Falls, Canada where we lived, and I went to public school until I was 13 when we moved to Fort Erie a town across the Niagara River from Buffalo NY. I finished Public School and went to Fort Erie High school. I quit high school halfway through grade nine and started working. I had many different jobs, punch press operator, welding, woodworking, upholstery, landscaping, tree trimming and removing, and a steeplejack.
                                        I quit working when I was 20 and went back to high school and fished my education. While going to school I worked weekends at the A&P store. After finishing high school, I worked full time at the A&P store in Fort Erie and was later transferred to the Welland Store. 
                                        One day, while stocking shelves in the store, I noticed a police officer start down the aisle with his wife. I kept placing the items on the shelves and did not pay any attention to the police officer. When the police officer got behind me, he said, “How are you doing Ron?” 
                                        I turned around and found to my surprise it was a friend I knew from Fort Erie, Charlie Gorham. We talked for a few minutes and I found out he had been transferred from Fort Erie a few months ago. After a little discussion, he invited me over to his house for the next evening and gave me his address.
                                        I went over to Charlie’s house the next evening where we discussed a lot of familiar topics. 
                                        He finally asked me if I ever thought of being a police officer. I told him I never gave it a thought but sounded like it might be a good idea. He said he would get me and application. He said for me to fill it and get some good references and send to the OPP Headquarters.
                                        I eventually received a letter requesting my presents at the Ontario Provincial Police Headquarters in Toronto to be tested by writing a type of an exam.
                                        Two weeks later I received a letter requesting I attend the police academy in Toronto for the police training course.     
                                        The last day of the training course, an officer came into the classroom and started going over the location where all the class members would be stationed. There were 16 districts in the Province, the higher the number the further north you would be. I was afraid I was going to be in the north of the Province, but no, I was assigned to the Anti-gambling office which was in the building which was next to the building the classroom was situated. I was to report there on Monday.
                                        I arrived at the office on Monday morning where I was welcomed and then I was checked out about my knowledge of horse racing, poker games, and other gambling subjects. They told me they were satisfied and told me I could go home and come back next Monday as I was going to be going out on an undercover job for a month or so.    
                                        On Thursday I was out visiting friends and when I got home my dad told me I had a call from the Inspector and I was to call him. I did and he told me he had an undercover job for me to do on Friday and wanted me to meet him in Hamilton at 9:00 in the morning, which I did.
                                        I met him as requested and found out he wanted me to get into an illegal poker game in Niagara Falls on this evening. I was requested to go back to the office in Toronto and get some marked money to be used in the poker game apparently on Bridge Street.
                                        I went to the office got the marked money and went back home to Fort Erie.
                                        At 7:00 pm I got back on my motorcycle and went to Niagara Falls to try and get into the poker game. If I was unable to get into the game, I was to meet them near the Rainbow bridge. 
                                        I did get into the poker game as I met a guy in the hotel next door to where the game was being played. He took me in and introduced me to the guy running the event and I got into the poker game and got rid of most of the marked money.
                                        I went back to the office on Monday and was praised for getting into the game and getting the evidence required to lay the charges of illegal gambling. 
                                        On Monday afternoon I was taken to a factory in Brantford where I would have a job as a cover for the undercover work I would do in the city. My job at the factory was a safety supervisor. I would walk through the factory and look for safety hazards which I would have corrected. I also got safety posters from the Ontario Safety League and placed them on the bulletin boards throughout the factory.
                                        After a month and a half, 20 plus raids on the places I got evidence of the illegal gambling. In one of the Toronto papers, the headlines on the front page read in 3-inch-high letters, POLICE RAID 20 PLACES IN BRANTFORD.
                                        I spent another year in the gambling branch before having an accident and got a broken leg which put me off on sick leave for eleven months before coming back to headquarters on light duties then in uniform and security detail around the parliament buildings in Toronto.
                                        From Toronto I was transferred to Dundas where I did traffic and general duties. I had some interesting and some disgusting occurrences to deal with. One of the disgusting things were several break-ins in homes in my area that I patrolled. The bad guys that broke in craped in the middle of the living room rug leaving a terrible odder in the living room. 
                                        After a year or so I was transferred to Milton Municipal Detachment where I spent five and a half years. I organized a safety program for public schools where I visited every classroom in the three school and gave the safety talks to the children in each classroom every month. I also organized safety patrols for each school, and other safety programs for the school children, and safety programs for adults as well. 
                                        I also did my enforcement duties as well. At one point while stationed in Milton I was shot and was off work for over three months recovering.
                                        From Milton, I was transferred to Municipal duties in the town of Acton where I spent another four years and where I did some more safety work and law enforcement.
                                        In September of 1964, I got a letter from the Queens Park Amateur Radio Club, as I had been a licensed amateur radio operator for some time, invited me to a dinner in Toronto the next week. I was advised in the letter the Commissioner of the OPP, also an amateur radio operator would also be there. I took the letter over to the Corporal and showed It to him. Because the Commissioner's name was shown in the letter, he told me to go.
                                        I went. The Commissioner was a little late getting there but when he got there, he was introduced to me and sat next to me. He asked me where I was stationed, and I told him. He asked me how I liked it there and I responded with I do not like it as I have been doing municipal duties for over nine years. He asked me where I would like to be. I told him I would like to in the Identification Unit as I have been interested in photographs since I was 14 and that I have taken a course from the Institute of Applied Science, dealing with fingerprints and other subjects dealing with police work. He turned around and started talking to the others in the room and ignored me. Two weeks later I received a letter transferring me to the Identification Unit here in London where I worked for twenty-two years doing Crime Scene Investigations.    
                                            When I retired from the OPP, the Chief of Police for the city of Woodstock asked me to come and work for his department, as they did not have anyone qualified to do CSI. In the first three years, I worked part-time as they needed my services. I was then hired full time in uniform for another ten years.
                                        Over the years I worked at CSI, I investigated 65 to 70 murders over the years.
                                        When I went to a crime scene, I went by myself. If it was a murder I took someone with me to take notes for me as I took pictures, search for fingerprint d t I found and saved, picked up exhibits, and receive exhibits from doctors and other witnesses. 

                                                
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