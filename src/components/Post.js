import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Helmet} from 'react-helmet'
import {Link} from 'react-router-dom'
import Background from './Background'

export class Post extends Component {
  render() {
    const post = this.props.posts.find(post => post.path === this.props.globalProps.match.params.id)
    return (
      <div className="post-page">
        <Helmet>
          <meta name="description" content={post.title} />
          <title>{post.title}</title>
        </Helmet>
        <Background title={post.title} />
        <div className="container">
        <div className="post animate__animated animate__fadeIn"  key={post.title} >
        <figure className="main-image">
          <img src={post.image} alt="post-img"/>
        </figure>
        <div className="content">
          {(post.content.map((item, index) => ( 
              (item.type === 'h2') ? <h2 key={item.text} className={item.class}>{item.text}</h2> : 
              (item.type === 'h3') ? <h3 key={item.text} className={item.class}>{item.text}</h3> : 
              (item.type === 'h4') ? <h4 key={item.text} className={item.class}>{item.text}</h4> : 
              //Check if paragraph contains links
              (item.type === 'p') ? (Array.isArray(item.text)) ? 
              <p key={item.text} className={item.class}>{item.text.map(t=>(
              (t.href) ? <> <a target="_blank" rel="noreferrer noopener" key={t.href} href={t.href}>{t.hrefText}</a> &nbsp;</>: t + ' '
              ))}</p> 
              : <p key={item.text} className={item.class}>{item.text}</p> : 
              (item.type === 'ul') ? <ul key={item.text} className={item.class}>{item.text.map((liText)=>( <li key={liText}>{liText}</li> ))}</ul> : null
              (item.type === 'img') ? <img key={item.text} src={item.text} alt="post-pic"/> : null
              )
             )
            )
  }
        </div>
        </div>
        <aside>
        <h3>Popular Posts</h3>
          <div className="posts">
              {this.props.posts
              .map(item => (
                (item.popular) ?
                <Link to={"/posts/" + item.path}>
                  <p>{item.title}</p>
                </Link> : null
              ))}
          </div>
          <h3>Latest Posts</h3>
          <div className="posts">
            {this.props.posts
              .slice(this.props.posts.length-3, this.props.posts.length)
              .map(item => (
                <Link to={"/posts/" + item.path}>
                  <p>{item.title}</p>
                </Link>
              ))}
          </div>
        </aside>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {posts: state.posts}
}

export default connect(mapStateToProps, null)(Post)
