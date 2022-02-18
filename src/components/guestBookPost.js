function GuestBookPost(post)
{
    return(
        <div className="post" key={post.postId}>
            <div className="post-content">{post.postContent}</div>
            <div className="post-author">{post.postAuthor}</div>
            <div className="post-date">{post.postDate.substring(0, 10)} {post.postDate.substring(11, 19)}</div>
        </div>
    )
}

export default GuestBookPost;