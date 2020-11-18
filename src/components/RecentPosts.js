import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/styles';

import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Helmet} from 'react-helmet'
import Background from './Background'

function RecentPosts({posts}) {
  return (
    <div id="recent-posts">
      <Helmet>
        <meta name="description" content="Recent posts"/>
        <title>RSUB | Recent posts</title>
      </Helmet>
      <Background title="Recent posts"/>
      <div className="container">
        <div className="articles-container  wow animate__animated animate__fadeIn">
          <AwesomeSlider cssModule={AwsSliderStyles} mobileTouch={true}>
            {posts.slice(posts.length-3, posts.length)
              .map(item => (
                <div className="item" key={item.title}>
                  <img src={item.image} alt="post"/>
                  <div className="content">
                    <h3>
                      <Link to={"/posts/" + item.path}>{item.title}</Link>
                    </h3>
                    <p>Posted by {item.author.name} on <span>{item.author.date}</span>
                    </p>
                  </div>
                </div>
              ))}
          </AwesomeSlider>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {posts: state.posts}
}

export default connect(mapStateToProps, null)(RecentPosts)