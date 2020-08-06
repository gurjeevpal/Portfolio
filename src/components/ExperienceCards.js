import React from 'react';
import { Card } from 'react-bootstrap';
import "../Tabs.css";

function ExperienceCards() 
{ 
        return <div><Card className = 'card-border'>
        <Card.Body>
          <Card.Title><h4>American Express Banking Application</h4></Card.Title>
          <Card.Text>
            <h6 className="tabs_desc">Single Page Application to simply the manual work of account management across various regions for American Express Internal Employees.
                Application was developed in React Js using HTML5, ES6 , Bootstrap, SASS and integration with RestFul APIs.
            </h6>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className = 'card-border'>
        <Card.Body >
          <Card.Title><h4>RightEverywhere Portal </h4></Card.Title>
          <Card.Text>
            <h6 className="tabs_desc">The project uses JavaScript, JAVA, HTML5, CMS tool, Bootstrap, Email generation , CSS3, AJAX to give a proper website to the candidates who wants to enhance their skill to get better job or to build specefic skills to get job. </h6>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className = 'card-border'>
        <Card.Body>
          <Card.Title><h4> British Telecoms Portal </h4></Card.Title>
          <Card.Text>
            <h6 className="tabs_desc">Fleet Management of the trucking industry, insurance renewals of trucks, services due , accidental damages or off hour maintainance services across various locations in UK.
            This portal is used to keep track of all the trucks and driver and their services.</h6>
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
} 

export default ExperienceCards;