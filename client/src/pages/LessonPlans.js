import React, { Component, PureComponent } from "react";
// import Forum from "../components/Forum";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import API from "../utils/API";
// import "./Table.css";
import { Card } from "react-simple-card";
import "../index.css"


class LessonPlans extends Component {
  state = { //Start as empty, need to query database to get numPosts etc
  }


  componentDidMount() { //Runs once to update the # of topics in each category
    this.setState({
    BookiD: this.props.match.params.id
    })
  }

    render (){
    return (
      <Container>
        
        <Jumbotron>
     
        </Jumbotron>
        <h2>Choose a Lesson Plan</h2>
        {/* <Card> */}
        
<div className="container">
    {/* <div className="cards"> */}
    <div className={this.props.match.params.id === 1 ? "grade3": "hide"}>
    <h2>Third Grade</h2>
    <a href="lesson3/topic/3001">
    <img id="cover" src="/images/books/3rdGrade.jpg" alt=""/></a>
   
    {/* <div className="container"> */}
<div className="lessontopics"> 


      <a href="/topic/301" classn> Lesson 1: Hello </a> <br/>
      <a href="/topic/302"> Lesson 2: Oh, It's a Ball! </a> <br/>
      Special 1
      <a href="/topic/303"> Lesson 3: Sit Down, Please </a> <br/>
      <a href="/topic/304">Lesson 4: How Many Apples?</a> <br/>
      Special 2
      <a href="/topic/305">Lesson 5: I Have a Pencils</a> <br/>
      <a href="/topic/306">Lesson 6: What Color Is It?</a> <br/>
      Special 3
      <a href="/topic/307">Review 1</a> <br/>
      <a href="/topic/308">Lesson 7: I Like Chicken</a> <br/>
      <a href="/topic/309">Lesson 8: It's Very Tall!</a> <br/>
      Special 4
      <a href="/topic/310">Lesson 9: I Can Swim</a> <br/>
      <a href="/topic/300">Lesson 10: She's My Mom</a> <br/>
      Special 5
      <a href="/topic/300">Lesson 11: Look! It's Snowing</a> <br/>
      Review 2
      Multi-Lesson Reviews
      *Textbook + CD Preview*
      *Cheonjae Ham Curriculum Outlines*
      </div>
    </div>

    <div className={this.props.match.params.id === 2 ? "grade4": "hide"}>
    <h2>Fourth Grade</h2>
    <a href="lesson4/topic/401">
    <img id="cover" src="/images/books/4thGrade.jpg" alt=""/></a>
    <div className="lessontopics"> 

<a href="/topic/401">Lesson 1: My Name Is Eric</a> <br/>
<a href="/topic/402">Lesson 2: Let's Play Soccer</a> <br/>
Special 1
<a href="/topic/300">Lesson 3: I'm Happy</a> <br/>
<a href="/topic/300">Lesson 4: Don't Run!</a> <br/>
Special 2
<a href="/topic/300">Lesson 5: Where Is My Cap?</a> <br/>
<a href="/topic/300">Lesson 6: What Time Is It?</a> <br/>
Special 3
Review 1
<a href="/topic/300">Lesson 7: Is This Your Watch?</a> <br/>
<a href="/topic/300">Lesson 8: I'm a Pilot</a> <br/>
Special 4
<a href="/topic/300">Lesson 9: What Are You Doing?</a> <br/>
<a href="/topic/300">Lesson 10: How Much Is It?</a> <br/>
Special 5
Lesson 11: I Get Up Early
Review 2
Multi-Lesson Reviews
*Textbook + CD Preview*
*Cheonjae Ham Curriculum Outlines*

   </div>
    </div>

<div className={this.props.match.params.id === 3 ? "grade5": "hide"}>
<h2>Fifth Grade</h2>
<a href="lesson5/topic/:id">
<img id="cover" src="/images/books/5thGrade.jpg" alt=""/></a>
</div>
<div className="lessontopics"> 
<a href="/topic/300">Lesson 1: Where Are You From?</a> <br/>
<a href="/topic/300">Lesson 2: What Do You Do On Weekends?</a> <br/>
Special 1
<a href="/topic/300">Lesson 3: May I Sit Here?</a> <br/>
<a href="/topic/300">Lesson 4: Whose Sock Is This?</a> <br/>
Special 2
<a href="/topic/300">Lesson 5: I'd Like Fried Rice</a> <br/>
<a href="/topic/300">Lesson 6: What Will You Do This Summer?</a> <br/>
Special 3
Review 1
<a href="/topic/300">Lesson 7: I Visited My Uncle in Jeju-do</a> <br/>
<a href="/topic/300">Lesson 8: How Much Are the Shoes?</a> <br/>
Special 4
<a href="/topic/300">Lesson 9: My Favorite Subject Is Science</a> <br/>
<a href="/topic/300">Lesson 10: What a Nice House!</a> <br/>
Special 5
<a href="/topic/300">Lesson 11: I Want to Be a Movie Director</a> <br/>
Review 2
   </div>
<div className={this.props.match.params.id === 4 ? "grade6": "hide"}>
<h2>Sixth Grade</h2>
<a href="lesson6/topic/:id">
<img id="cover" src="/images/books/6thGrade.jpg" alt=""/></a>

<div className="lessontopics"> 
<a href="/topic/300">Lesson 1:What Grade Are You In?</a> <br/>
<a href="/topic/300">Lesson 2:I Have a Cold</a> <br/>
Special 1
<a href="/topic/300">Lesson 3: When Is the Club Festival?</a> <br/>
<a href="/topic/300">Lesson 4: Where Is the Post Office?</a> <br/>
Special 2
<a href="/topic/300">Lesson 5: I'm Going to See a Movie</a> <br/>
<a href="/topic/300">Lesson 6: He Has Short Curly Hair</a> <br/>
Special 3
Review 1
<a href="/topic/300">Lesson 7: How Often Do You Eat Breakfast?</a> <br/>
<a href="/topic/300">Lesson 8: I'm Taller Than You</a> <br/>
Special 4
<a href="/topic/300">Lesson 9: What Do You Think?</a> <br/>
<a href="/topic/300">Lesson 10: Who Wrote the Book?</a> <br/>
Special 5
<a href="/topic/300">Lesson 11: We Should Save the Earth</a> <br/>
Review 2
   </div>
   </div>
<div className={this.props.match.params.id === 5 ? "grade7": "hide"}>
<h2>Seventh Grade</h2>
<a href="lesson7/topic/:id">
<img id="cover" src="/images/books/7thGrade.jpg" alt=""/></a>

<div className="lessontopics"> 
<a href="/topic/300">Lesson 1: A Nice Day</a> <br/>
<a href="/topic/300">Lesson 2: How Do You Spend Your Day</a> <br/>
<a href="/topic/300">Project 1</a> <br/>
Reading for Fun 1
<a href="/topic/300">Lesson 3: Do You Have Special Plans?</a> <br/>
<a href="/topic/300">Lesson 4: Walk Around Your Town</a> <br/>
<a href="/topic/300">Project 2</a> <br/>
<a href="/topic/300">Reading for Fun 2</a> <br/>
<a href="/topic/300">Lesson 5: How Far Is It From Here?</a> <br/>
<a href="/topic/300">Lesson 6: From Culture to Culture</a> <br/>
<a href="/topic/300">Project 3</a> <br/>
<a href="/topic/300">Reading for Fun 3</a> <br/>
<a href="/topic/300">Lesson 7: Follow Your Dreams</a> <br/>
<a href="/topic/300">Lesson 8: Give Your Hand, Give Your Heart</a> <br/>
<a href="/topic/300">Project 4</a> <br/>
<a href="/topic/300">Reading for Fun 4</a> <br/>
   </div>
   </div>
<div className={this.props.match.params.id === 6 ? "grade8": "hide"}>
<h2>Eigth Grade</h2>
<a href="lesson8/topic/:id">
<img id="cover" src="/images/books/8thGrade.jpg" alt=""/> </a>

<div className="lessontopics"> 
<a href="/topic/300">Lesson 1: Off to a Good Start</a> <br/>
<a href="/topic/300">Lesson 2: Connecting With the World</a> <br/>
<a href="/topic/300">Reading For Fun 1</a> <br/>
<a href="/topic/300">Project 1</a> <br/>
<a href="/topic/300">Lesson 3: Healthy Life, Happy Life</a> <br/>
<a href="/topic/300">Lesson 4: Earth, Our Only Home</a> <br/>
<a href="/topic/300">Project 2</a> <br/>
<a href="/topic/300">Reading For Fun 2</a> <br/>
<a href="/topic/300">Lesson 5: Understanding Others</a> <br/>
<a href="/topic/300">Lesson 6: Near and Dear</a> <br/>
<a href="/topic/300">Reading For Fun 3</a> <br/>
<a href="/topic/300">Project 3</a> <br/>
<a href="/topic/300">Lesson 7: A Life Full of Fun</a> <br/>
<a href="/topic/300">Lesson 8: Viva, South America!</a> <br/>
<a href="/topic/300">Project 4</a> <br/>
<a href="/topic/300">Reading For Fun 4</a> <br/>
   </div>
   </div>
</div>
{/* </div> */}
{/* </Card> */}
      
      </Container>
    )
  }
}
export default LessonPlans;