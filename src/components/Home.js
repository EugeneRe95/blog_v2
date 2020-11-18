import React from 'react'
import {Helmet} from 'react-helmet'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import Background from './Background'

function Home({posts}) {
  return (
    <div id="home">
      <Helmet>
        <title>RSUB | Home</title>
      </Helmet>
      <Background title="RSUB" paragraph="RSUB is the website that discusses manhood and the way of living, solving concerns, and taking actions over problems. It assists men to get top performance in the areas of life like job, relationships and love, interests, and mental harmony." class="main" />
      <section className="articles">
          <div className="container">
              <div className="articles-container">
                {
                    posts.map((item, index)=>(
                        <div className="item wow animate__animated animate__fadeInUp" key={item.title} style={{animationDelay:100*index+'ms'}}>
                          <Link to={"/posts/"+item.path}>
                            <img src={item.image} alt="post"/>
                            <h3>{item.title}</h3>
                            <p className="date">{item.author.date}</p>
                            </Link>
                        </div>
                    ))
                }
              </div>
          </div>
      </section>
    </div>
  )
}

const mapStateToProps = state =>{
  return {
    posts: state.postsRev
  }
}

export default connect(mapStateToProps, null)(Home)
