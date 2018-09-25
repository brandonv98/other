import React, {
  Component
} from 'react';
// Components lib
import brandonvancamp2 from '../../data/brandonvancamp2'; // local DB
import {
	Doughnut,
	Bar,
	HorizontalBar
} from 'react-chartjs-2'; // Charts for data
import {
	Row,
	Col,
	Nav,
	Grid
} from 'react-bootstrap';
// Dependencies
// import {
//   Route,
//   Switch
// } from 'react-router-dom';
// Not Found Page
export default class Home extends Component {
  render() {
    console.log(brandonvancamp2);
    console.log(brandonvancamp2.badges['150'].icon_url);
    const iconImg = brandonvancamp2.badges['150'].icon_url;
    const jsPoints = brandonvancamp2.points.JavaScript;
    const total = brandonvancamp2.points.total;
    const langData = { // charts for languages
			labels: ['JavaScript', 'Total', 'HTML'], // Should make these dynamic
			datasets: [{
				label: 'Languages used in Percents for ',
				backgroundColor: ['rgba(255,153,4,0.6)', 'rgba(22,189,244,0.6)', 'rgba(255,0,0,0.6)'],
				borderColor: 'rgba(255,99,132,1)',
				borderWidth: 1,
				hoverBackgroundColor: ['rgba(255,153,4,0.9)', 'rgba(22,189,244,0.9)', 'rgba(255,0,0,0.9)'],
				hoverBorderColor: ['rgba(255,153,4,0.9)', 'rgba(22,189,244,0.9)', 'rgba(255,0,0,0.9)'],
				data: [jsPoints, total
          // this.findPercents(repoLangs.CSS),
          // this.findPercents(repoLangs.HTML)
        ],
      }]
		};
    return (
      <div className="App">

        <img src={iconImg} />
        <p>{jsPoints}</p>
        <Col md={6}>
            <Bar
              data={langData}
              width={100}
              height={50}
              />
          </Col>
      </div>);
  }
}