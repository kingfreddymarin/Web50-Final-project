import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import Comments from '../pages/Comments'
import Axios from 'axios'


const Posts = ({ post, currentUser }) => {
    const { content, title, likes, dislikes, comments, categories } = post
    const [likeFill, setLikeFill] = useState(false)
    const [likeCount, setLikeCount] = useState(likes.length)
    const [dislikeFill, setDislikeFill] = useState(false)
    const [dislikeCount, setDislikeCount] = useState(dislikes.length)

    const [currentPost, setCurrentPost] = useState(null)

    const likeHandler = (likes) => {
        if (!likeFill) {
            /*likes.indexOf(currentUser.id) === -1*/
            if (dislikeFill) {
                setDislikeCount(dislikeCount - 1)
                setDislikeFill(false)
                Axios.post('http://localhost:8000/dislike/', {
                    undislike: true,
                    post: post,
                    user: currentUser
                }).then(function (response) {
                    console.log('boom')
                }).catch(function (error) {
                    console.log(error)
                });
            }
            setLikeCount(likeCount + 1)
            setLikeFill(true)
            Axios.post('http://localhost:8000/like/', {
                unlike: false,
                post: post,
                user: currentUser
            }).then(function (response) {
                console.log('boom')
            }).catch(function (error) {
                console.log(error)
            });
        } else {
            setLikeCount(likeCount - 1)
            setLikeFill(false)
            Axios.post('http://localhost:8000/like/', {
                unlike: true,
                post: post,
                user: currentUser
            }).then(function (response) {
                console.log('boom')
            }).catch(function (error) {
                console.log(error)
            });
        }
        console.log(likes)
    }

    const dislikeHandler = (dislikes) => {
        if (!dislikeFill) {
            if (likeFill) {
                setLikeCount(likeCount - 1)
                setLikeFill(false)
                Axios.post('http://localhost:8000/like/', {
                    unlike: true,
                    post: post,
                    user: currentUser
                }).then(function (response) {
                    console.log('boom')
                }).catch(function (error) {
                    console.log(error)
                });
            }
            setDislikeCount(dislikeCount + 1)
            setDislikeFill(true)
            Axios.post('http://localhost:8000/dislike/', {
                undislike: false,
                post: post,
                user: currentUser
            }).then(function (response) {
                console.log('boom')
            }).catch(function (error) {
                console.log(error)
            });
        } else {
            setDislikeCount(dislikeCount - 1)
            setDislikeFill(false)
            Axios.post('http://localhost:8000/dislike/', {
                undislike: true,
                post: post,
                user: currentUser
            }).then(function (response) {
                console.log('boom')
            }).catch(function (error) {
                console.log(error)
            });
        }
        console.log(dislikes)
    }

    const setPost = (post) => {
        console.log(currentPost)
        setCurrentPost(post)
        console.log(currentPost)
    }

    useEffect(() => {
        likes.forEach((like) => {
            if (like.profile === currentUser.username) {
                return setLikeFill(true)
            }
        })
        dislikes.forEach((dislike) => {
            if (dislike.profile === currentUser.username) {
                return setDislikeFill(true)
            }
        })
    }, [currentPost, currentUser, likes, dislikes])

    return (
        <div className="inner-main-body p-2 p-sm-3 forum-content show ">
            <div className="card mb-2" style={{ maxWidth: "40rem" }}>
                <div className="card-body p-2 p-sm-3" >
                    <div className="d-flex flex-column" >
                        <div className="media-body">
                            <div className="">
                                <h6 className="text-body">{title}</h6>
                                <section className="category-conteiner d-flex">
                                    {categories.map((category) => {
                                        return (
                                            <div key={category} >
                                                <span className="badge badge-secondary mr-2">{category}</span>
                                            </div>
                                        )
                                    })}
                                </section>
                            </div>
                            <p >
                                {content}
                            </p>
                        </div>
                        <div className="text-muted small text-center align-self-center align-items-center">
                            <span onClick={() => likeHandler(likes)} className=" d-sm-inline-block"> {likeFill ? <FaThumbsUp className='like' /> : <FaThumbsUp className='none' />} {likeCount} </span>
                            <span onClick={() => dislikeHandler(dislikes)} className=" d-sm-inline-block ml-2"> {dislikeFill ? <FaThumbsDown className='dislike' /> : <FaThumbsDown className='none' />} {dislikeCount}</span>
                            <span onClick={() => setPost(post)}><button type="button" data-toggle="modal" data-target="#exampleModalLong" style={{ border: 'none' }}><i className="far fa-comment ml-2"></i>{comments.length}</button></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                {currentPost != null && <Comments currentPost={currentPost} />}
            </div>
        </div>
    );
}

export default Posts;