import { useState, useEffect } from "react";
import SongsService from "../services/songsService";
import GuestBookPost from "../components/guestBookPost";

function GuestBook()
{
    const initialPostState = {
        postContent: "",
        postAuthor: "",
        postDate: null
    };

    const [submitted, setSubmitted] = useState(false);
    const [guestBook, setGuestBook] = useState([]);
    const [post, setPost] = useState(initialPostState);
    useEffect(() => {
        retrieveGuestBook();
    }, [])

    const handleInputChange = event => {
        const { name, value } = event.target;
        setPost({ ...post, [name]: value });
      };

    const retrieveGuestBook = () =>
    {
        SongsService.getGuestBook()
            .then(response => {
                setGuestBook(response.data);
            })
    }

    const sendPost = () =>
    {
        let data = {
            postContent: post.postContent,
            postAuthor: post.postAuthor,
            postDate: new Date().toISOString()
        }
        SongsService.sendGuestBookPost(data).then(response =>
            {
                setPost({
                    postContent: response.data.postContent,
                    postAuthor: response.data.postAuthor,
                    postDate: response.data.postDate
                });
                console.log(response.data);
            }
        );
        setSubmitted(true);
    };

    const newPost = () => {
        setPost(initialPostState);
        setSubmitted(false);
      };


    return(
        <div className="site-section">
            This page will contain a guest book.<br /><br /><br />
            {submitted ? (<h4>Your message is sent!</h4>) : 
            (<div>
            <input
                type="text"
                id="postContent"
                className="post-form-content"
                placeholder="Write your message here"
                onChange={handleInputChange}
            />            
            <input
                type="text"
                id="postAuthor"
                className="post-form-author"
                placeholder="Your nickname"
                onChange={handleInputChange}

            />
            <div className="input-group-append">
                <button
                    className="search-btn"
                    type="button"
                    onClick={sendPost}
                >
                Send
                </button>
            </div></div>)
            }
            <br /><br /><br />

            <div className="container">
            {
                guestBook.map(post =>
                (
                    <GuestBookPost {...post} />
                )
                )
            }
            </div>
        </div>
    )
}

export default GuestBook;