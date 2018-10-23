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
    <div className="grade3">
    <h2>Third Grade</h2>
    <a href="lesson3/topic/:id">
    <img id="cover" src="/images/books/3rdGrade.jpg" alt=""/></a>
   
    {/* <div className="container"> */}
<div className="lessontopics"> 


      Lesson 1: Hello
      Lesson 2: Oh, It's a Ball!
      Special 1
      Lesson 3: Sit Down, Please
      Lesson 4: How Many Apples?
      Special 2
      Lesson 5: I Have a Pencils
      Lesson 6: What Color Is It?
      Special 3
      Review 1
      Lesson 7: I Like Chicken
      Lesson 8: It's Very Tall!
      Special 4
      Lesson 9: I Can Swim
      Lesson 10: She's My Mom
      Special 5
      Lesson 11: Look! It's Snowing
      Review 2
      Multi-Lesson Reviews
      *Textbook + CD Preview*
      *Cheonjae Ham Curriculum Outlines*
{/* </div> */}
      </div>
    </div>

    <div className="grade4">
    <h2>Fourth Grade</h2>
    <a href="lesson4/topic/:id">
    <img id="cover" src="/images/books/4thGrade.jpg" alt=""/></a>
    <div className="lessontopics"> 

Lesson 1: My Name Is Eric
Lesson 2: Let's Play Soccer
Special 1
Lesson 3: I'm Happy
Lesson 4: Don't Run!
Special 2
Lesson 5: Where Is My Cap?
Lesson 6: What Time Is It?
Special 3
Review 1
Lesson 7: Is This Your Watch?
Lesson 8: I'm a Pilot
Special 4
Lesson 9: What Are You Doing?
Lesson 10: How Much Is It?
Special 5
Lesson 11: I Get Up Early
Review 2
Multi-Lesson Reviews
*Textbook + CD Preview*
*Cheonjae Ham Curriculum Outlines*

   </div>
    </div>

<div className="grade5">
<h2>Fifth Grade</h2>
<a href="lesson5/topic/:id">
<img id="cover" src="/images/books/5thGrade.jpg" alt=""/></a>
</div>
<div className="lessontopics"> 
Lesson 1: Where Are You From?
Lesson 2: What Do You Do On Weekends?
Special 1
Lesson 3: May I Sit Here?
Lesson 4: Whose Sock Is This?
Special 2
Lesson 5: I'd Like Fried Rice
Lesson 6: What Will You Do This Summer?
Special 3
Review 1
Lesson 7: I Visited My Uncle in Jeju-do
Lesson 8: How Much Are the Shoes?
Special 4
Lesson 9: My Favorite Subject Is Science
Lesson 10: What a Nice House!
Special 5
Lesson 11: I Want to Be a Movie Director
Review 2


   </div>

<div className="grade6">
<h2>Sixth Grade</h2>
<a href="lesson6/topic/:id">
<img id="cover" src="/images/books/6thGrade.jpg" alt=""/></a>
</div>
<div className="lessontopics"> 
Lesson 1:What Grade Are You In?
Lesson 2:I Have a Cold
Special 1
Lesson 3: When Is the Club Festival?
Lesson 4: Where Is the Post Office?
Special 2
Lesson 5: I'm Going to See a Movie
Lesson 6: He Has Short Curly Hair
Special 3
Review 1
Lesson 7: How Often Do You Eat Breakfast?
Lesson 8: I'm Taller Than You
Special 4
Lesson 9: What Do You Think?
Lesson 10: Who Wrote the Book?
Special 5
Lesson 11: We Should Save the Earth
Review 2
   </div>


<div className="grade7">
<h2>Seventh Grade</h2>
<a href="lesson7/topic/:id">
<img id="cover" src="/images/books/7thGrade.jpg" alt=""/></a>
</div>
<div className="lessontopics"> 
Lesson 1: A Nice Day
Lesson 2: How Do You Spend Your Day
Project 1
Reading for Fun 1
Lesson 3: Do You Have Special Plans?
Lesson 4: Walk Around Your Town
Project 2
Reading for Fun 2
Lesson 5: How Far Is It From Here?
Lesson 6: From Culture to Culture
Project 3
Reading for Fun 3
Lesson 7: Follow Your Dreams
Lesson 8: Give Your Hand, Give Your Heart
Project 4
Reading for Fun 4

   </div>

<div className="grade8">
<h2>Eigth Grade</h2>
<a href="lesson8/topic/:id">
<img id="cover" src="/images/books/8thGrade.jpg" alt=""/> </a>
</div>
<div className="lessontopics"> 
Lesson 1: Off to a Good Start
Lesson 2: Connecting With the World
Reading For Fun 1
Project 1
Lesson 3: Healthy Life, Happy Life
Lesson 4: Earth, Our Only Home
Project 2
Reading For Fun 2
Lesson 5: Understanding Others
Lesson 6: Near and Dear
Reading For Fun 3
Project 3
Lesson 7: A Life Full of Fun
Lesson 8: Viva, South America!
Project 4
Reading For Fun 4
   </div>
</div>
{/* </div> */}

{/* </Card> */}

      
      </Container>
    )
  }
}


export default LessonPlans;

