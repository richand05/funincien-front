import "./Post.css";

const Post = () => {
    return (
        <div className="card shadow">
            <div className="img-card-container">
                <img src="https://i.scdn.co/image/ab6761610000e5ebe10b2ad3fd856485dd8900b6" className="card-img-top card-img" alt="..." />
            </div>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}

export default Post;
