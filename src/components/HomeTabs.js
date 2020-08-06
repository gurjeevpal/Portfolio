import React from 'react'; 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "../Tabs.css";
import ExperienceCards from '../components/ExperienceCards';


function HomeTabs() 

{ 
  return <div class="fluid-container"><Tabs>
    <TabList>
      <Tab >About Me</Tab>
      <Tab >Projects/Experience</Tab>
      <Tab >Achievements</Tab>
      <Tab >Contact</Tab>
    </TabList>

    <TabPanel>
    <div className="description"> <li>5 years experienced and highly creative front-end developer with bachelor’s degree in 
        computer science and expertise in handling client, managing team technically as well as 
        developing front end in different technologies across geo locations for finances, telecom,
         retail, banking and career optimization portals. Designing User Interface (UI) web applications 
        using HTML5,CSS3, CSS2, CSS, XHTML, Java Script, Node.js, ReactJS, AJAX, JSON, MVC,JSP,JSR 286.</li>
        </div>
        <div className="description"> <b>Skills</b>
        <li>Data Management: MS Excel (Advanced), MS PowerPoint, Tableau, MySQL, WordPress, IBM CMS</li>
<li>Programming: JAVA, HTML, JavaScript, ReactJS, CSS3, XML, SCSS, TypeScript, Node JS, RESTful APIs</li>
<li>Servers: IBM WebSphere, Oracle WebCenter </li>
<li>Project Management: Rally, SVN, GIT</li>
<li>Other Skills: Risk Management, System Administration, User Acceptance Testing, Logic and Analysis, Problem solving and troubleshooting, Communication and public speaking, Training and Instruction, Leadership, Project Management, Critical Thinking, Attention to detail, Self-starter, Time management </li>

        </div>
    </TabPanel>
    <TabPanel>
      <ExperienceCards />
    </TabPanel>
    <TabPanel >
      <div className="description"><ul><li>Managed 4 major deployments with 0 escalations and minor defects with client’s appreciation emails.</li>
      <li> “Insta” award for excellent performance; two times at Infosys.</li>
      <li> “Appreciation Bonus” for contribution in business development; two times at Infosys. </li>
         </ul>
    

      </div>
    </TabPanel>
    <TabPanel>
      <div className="description">
          <ul><li ><a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=gurjeev.pal@gmail.com" target="_blank">|| gurjeev.pal@gmail.com ||</a></li>
          <li>|| +1-437-248-8353 ||</li>
          <li><a

href="https://www.linkedin.com/in/gurjeev-pal-kaur/"
target="_blank"
rel="noopener noreferrer"
> || https://www.linkedin.com/in/gurjeev-pal-kaur/ || </a></li>
<li><a
href="https://github.com/gurjeevpal"
target="_blank"
rel="noopener noreferrer"
>||https://github.com/gurjeevpal||</a></li>
</ul>
 
</div>
    </TabPanel>
  </Tabs></div>

}

export default HomeTabs;