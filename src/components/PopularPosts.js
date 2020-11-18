import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/styles';

import {Helmet} from 'react-helmet'
import {posts} from '../redux/posts'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Background from './Background'

function PopularPosts() {
  return (
    <div id="popular">
      <Helmet>
        <meta name="description" content="Popular posts"/>
        <title>RSUB | Popular posts</title>
      </Helmet>
      <Background title="Popular posts"/>
      <div className="container">
        <div className="articles-container wow animate__animated animate__fadeIn">
          <AwesomeSlider cssModule={AwsSliderStyles} mobileTouch={true}>
            {posts.filter(item=>item.popular).map(item => (
            <div className="item" key={item.title}>
                  <img src={item.image} alt="post"/>
                  <div className="content">
                    <h3>
                      <Link to={"/posts/" + item.path}>{item.title}</Link>
                    </h3>
                    <p>Posted by {item.author.name} on <span>{item.author.date}</span>
                    </p>
                  </div>
                </div>))}
          </AwesomeSlider>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {posts: state.posts}
}

export default connect(mapStateToProps, null)(PopularPosts)