// https://www.bootdey.com/snippets/view/profile-with-data-and-skills
import { useEffect } from "react"
import "../styles/Profile.css"
const Profile = ({ currentUser }) => {

    const { email, first_name, last_name, likes, dislikes, comments, profile_data } = currentUser
    const { ctg_following } = profile_data
    useEffect(() => {
        console.log(ctg_following)
    }, [currentUser, ctg_following])
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row no-gutters">
                    <div className="col-md-4 col-lg-4"><img src="https://source.unsplash.com/random/500x500?sig=3" alt="rndm" /></div>
                    <div className="col-md-8 col-lg-8">
                        <div className="d-flex flex-column">
                            <div className="d-flex flex-row justify-content-between align-items-center p-5 bg-dark text-white">
                                <h3 className="display-5">{first_name} {last_name}</h3>
                                <h5>@{currentUser.username}</h5>
                            </div>
                            <div className="p-3 bg-black text-white">
                                <h6>{email}</h6>
                            </div>
                            <div className="d-flex flex-row text-white">
                                <div className="p-4 bg-success text-center skill-block">
                                    <h4>{likes.length}</h4>
                                    <h6>Likes</h6>
                                </div>
                                <div className="p-4 bg-secondary text-center skill-block">
                                    <h4>{comments.length}</h4>
                                    <h6>Comments</h6>
                                </div>
                                <div className="p-4 bg-danger text-center skill-block">
                                    <h4>{dislikes.length}</h4>
                                    <h6>Dislikes</h6>
                                </div>
                                <div className="p-4 bg-dark text-center skill-block">
                                    <h4>{ctg_following.length}</h4>
                                    <h6>Categories</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;