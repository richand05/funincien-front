import Post from "../Post/Post";
import "./Posts.css";

const Posts = () => {
    return ( 
        <div className="container mt-4">
            <div className="row gx-4 gy-4"> 
                <div className="col-12 col-md-6 col-lg-4">
                    <Post />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Post />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Post />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Post />
                </div>
            </div>
        </div>
    );
}
 
export default Posts;
