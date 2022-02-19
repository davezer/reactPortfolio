import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Experience() {
    const work = {
      company: [
        {
          id: "bootcamp",
          name: "UConn Bootcamp",
          role: "Developer",
          dates: "September 2021 - March 2022",
          link: "https://bootcamp.uconn.edu/",
          description1: "Experienced with a variety of languages, platforms, frameworks, and content management systems.",
          description2: "Collaborated with small teams of student designers to build a multi page API based website and a Issue Tracker content management system.",
        },
        {
          id: "usps",
          name: "United States Postal Service",
          role: "Mail Carrier",
          dates: "September 2014 - July 2021",
          link: "https://www.usps.com",
          description1: "Daily sorting of letters, parcels and periodicals in route order.",
          description2: "Accurately delivering mail to 500+ clients daily.",
          
        },
        {
          id: "gateway",
          name: "Gateway Community College",
          role: "Student",
          dates: "August 2020 - July 2021",
          link: "https://gatewayct.edu/",
          description1: "Studied Computer Science.",
          description2: "Learned computer programming languages such as Java and C++",
          
        },
      ]
    }
    return (

        <section id="experience" className="jobs">
          <h2 className="title">Experience</h2>
          <VerticalTimeline>
            {work.company.map( data => {
                return (
                  <React.Fragment key={data.id}>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      contentStyle={{ background: '#42252F', color: '#fff' }}
                      contentArrowStyle={{ borderRight: '7px solid  #95A8BC' }}
                      date={data.dates}
                      
                      
                    >
                      <h3 className="vertical-timeline-element-title">{data.name}</h3>
                      <h4 className="vertical-timeline-element-subtitle">{data.role}</h4>
                      <ul>
                        <li>
                          {data.description1}
                        </li>
                        <li>
                          {data.description2}
                        </li>
                      </ul>
                    </VerticalTimelineElement>
                  </React.Fragment>
                );
              })}
            <VerticalTimelineElement />
            </VerticalTimeline>
        </section>
    
        
      );
}

export default Experience;