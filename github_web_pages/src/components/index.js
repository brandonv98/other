import React, { Component } from 'react';
import logo from '../logo.png';

// Components
import ProjectList from './ProjectList';
import Footer from './Footer';
import Container from './home/Container';
import {
  ProjectsData
} from '../data/homePage';


// Bootstrap lib
import { Jumbotron, Panel } from 'react-bootstrap';

export default class Home extends Component {

  constructor(props) {
   super(props);
   this.state =
   {
     isLoading: false,
   };
 }


  render() {
    return (

      <div className="App">

        <Jumbotron>
          <img src={logo} alt="My logo" className="App-logo" />
           <Panel.Heading>
             <Panel.Title componentClass="h3">Hello, I'm Brandon</Panel.Title>
            </Panel.Heading>
            <Panel.Body>Build For The Web, Web designer/developer, problem solver. Team player. Tech enthusiast, and life long learner. Love to bringing people together, and collaborate about new ideas
          </Panel.Body>
          <ul>
            <li><a href="https://github.com/brandonv98" target="_blank" rel="noreferrer noopener" className="social github">Github</a></li>
            <li><a href="https://www.linkedin.com/in/brandon-vancamp-123360150/" rel="noreferrer noopener" target="_blank" className="social linkedin">Linkedin</a></li>
            <li><a href="https://twitter.com/brandondvancamp/" target="_blank" rel="noreferrer noopener" className="social twitter">Linkedin</a></li>
          </ul>
        </Jumbotron>

         {/* <ProjectList /> */}

         <Container data={ProjectsData}/>

        <Footer />

      </div>
    );
  }
}
