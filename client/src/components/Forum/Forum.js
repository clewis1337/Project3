import React from "react";
import "./Forum.css";
import Dashboard from "../Dashboard";
//The map will create multiple posts depending on props.tableData
const Forum = (props) => (
    <div>
        {console.log(props)}
        {props.PostData.map(eachPost => (
            <div className="postWrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <div className="AuthorSection">
                                <div className="author">  {eachPost.author}</div>
                                <div className="img1">   <img src={eachPost.authorAvatar} /> </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div className="ContentSection">
                                <div className="date" id={eachPost._id + 'date'}> Date:{eachPost.date}</div>
                                <div className="content" id={eachPost._id + 'content'} contenteditable="true">{eachPost.content}</div>
                                <a id="link2" href={eachPost.link}><div className="link" contenteditable="true" id={eachPost._id + 'link'}>{eachPost.link}</div></a>
                                {/* <div className="rating"><fieldset class="rating"> */}
                                    {/* <legend>Please rate:</legend> */}
                                    {/* <input type="radio" id="star5" name="rating" value="5" /><label for="star5" title="Rocks!">5 stars</label> */}
                                    {/* <input type="radio" id="star4" name="rating" value="4" /><label for="star4" title="Pretty good">4 stars</label> */}
                                    {/* <input type="radio" id="star3" name="rating" value="3" /><label for="star3" title="Meh">3 stars</label> */}
                                    {/* <input type="radio" id="star2" name="rating" value="2" /><label for="star2" title="Kinda bad">2 stars</label> */}
                                    {/* <input type="radio" id="star1" name="rating" value="1" /><label for="star1" title="Sucks big time">1 star</label> */}
                                {/* </fieldset> */}
                                {/* </div> */}
                            </div>
                        </div>
                        <div class="col-lg-4" id="editButtons">
                            {/* Buttons will hide if user is not the ownder */}
                            <button className={(localStorage.getItem('userName')===eachPost.author) ? "" : "hide"} onClick={() => props.showModal(eachPost._id)}>Edit</button>
                            <button className={(localStorage.getItem('userName')===eachPost.author) ? "" : "hide"} onClick={() => props.deletePost(eachPost._id)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>

        ))}
    </div>
);
export default Forum;
