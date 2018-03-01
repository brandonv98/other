import React from 'react';
import {Col, Image } from 'react-bootstrap';
// Dependencies
import {
  NavLink,
  Link,
  Route
} from 'react-router-dom';
import GitHub from '../GitHub';

//skill Component
// import Skills from './Skills';

const Section = (props) => {
  return(
        <Col md={6}>
          <div className="card">
            <h2><NavLink to={`/${props.project_link_github}/github`}>{props.title}</NavLink></h2>
            <Image src={props.img} thumbnail />
            <Image src={props.img_next} thumbnail />
            <h3>Skills</h3>
            <ul className="skills">
              {props.skills}
            </ul>
            <p>
              {props.desc}
            </p>
            <ul>
              {
                (props.doesExist)
                ? <li><Link to={`https://github.com/brandonv98/${props.project_link_github}`} rel="noreferrer noopener" target="_blank" className="social github">Github</Link></li>
                : <li></li>
              }
            </ul>
            {/* <Route path='/bio/:more' component={GitHub} /> */}
          </div>
        </Col>
  );
}

export default Section;
