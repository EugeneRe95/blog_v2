import React from 'react'
import { Helmet } from 'react-helmet'
import Background from './Background'

function AboutUs() {
    return (
        <div id="about-us">
            <Helmet>
            <meta name="description" content="On this website, we publish articles on the topics that bring a positive mindset to readers. Love and relationships narratives, man-made daily stories, and job success tales are made with proper humor in the manner of a certain bar of talking a bit more accented about ordinary stuff." />
            <title>RSUB | About us</title>
            </Helmet>
            <Background title="About us" />
            <div className="container">
                <p>RSUB is the website that discusses manhood and the way of living, solving concerns, and taking actions over problems. It assists men to get top performance in the areas of life like job, relationships and love, interests, and mental harmony.</p>
                <p>On this website, we publish articles on the topics that bring a positive mindset to readers. Love and relationships narratives, man-made daily stories, and job success tales are made with proper humor in the manner of a certain bar of talking a bit more accented about ordinary stuff. </p>
                <p>For anyone interested in advertising on our blog, RSUB has developed a content release calendar that works all year long. We have several content formats that have been approved by our advertising partners. That includes promo articles, videos that include promos, banners, and notifications of in-app and web types. </p>
                <p>In case of agreement, we can receive reward for promoting certain products and leave the right to do so under our authority. Any referral links placed on our website are pre-checked and agreed with advertising partners due to Advertising Disclosure. </p>
            </div>
        </div>
    )
}

export default AboutUs
