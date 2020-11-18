import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Helmet} from 'react-helmet'
import Background from './Background'

function AllPosts({posts}) {
  return (
    <div id="posts">
      <Helmet>
        <meta name="description" content="All blog posts"/>
        <title>RSUB | All posts</title>
      </Helmet>
      <Background title="All posts"/>
      <div className="container">
        <div className="articles-container">
          {posts.map(item => (
              <div
                className="item  wow animate__animated animate__fadeIn"
                key={item.title}>
                <img src={item.image} alt="post"/>
                <div className="text-content">
                <p className="date"><i className="fas fa-calendar-alt"></i> {item.author.date}</p>
                  <h3>
                    <Link to={"/posts/" + item.path}>{item.title}</Link>
                  </h3>
                  <p className="author">{item.author.name}</p>
                </div>
              </div>
            ))
}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    posts: state.postsRev
  }
}

export default connect(mapStateToProps, null)(AllPosts)