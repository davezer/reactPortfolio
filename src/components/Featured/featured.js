import React from 'react';
import img_ftm from '../../assets/projects/FTM.png';
import img_memoryGame from '../../assets/projects/memorygameSS.png';
import img_irvingChampions from '../../assets/projects/irvingChampions.png'

function Featured() {
        const featured = {
            projects: [
                {
                    id: "irvingChampionsLeague",
                    name: "Irving Champions League",
                    github: "https://github.com/davezer/irvingLeague",
                    deployed: "https://irving-league.vercel.app/",
                    image: img_irvingChampions,
                    alt: "Irving Champions League Project",
                    description: "Built using JavaScript, svelte, and building local APIs.",
                    skills: "SvelteKit | SMUI | Vercel | JavaScript | API"
                },
                {
                    id: "followTheMoney",
                    name: "Follow The Money",
                    github: "https://github.com/Adamcalcasola/follow-the-money",
                    deployed: "https://adamcalcasola.github.io/follow-the-money/",
                    image: img_ftm,
                    alt: "Follow The Money project" ,
                    description: "Search by memeber of congress to see how they vote and where their campaign contributions come from. Simple and fast." ,
                    skills: "Bulma | JavaScript | CSS | jQuery | API",
                },
                {
                    id: "memoryGame",
                    name: 'Memory Game',
                    github: 'https://github.com/davezer/memoryGame' ,
                    deployed: 'https://davezer.github.io/memoryGame/',
                    image: img_memoryGame,
                    alt: "memory game",
                    description: 'A simple memory test game built using JS, CSS and HTML',
                    skills: "JS | CSS | HTML | Bootstrap",
                },
                // {
                //     id: ,
                //     name: ,
                //     github: ,
                //     deployed: ,
                //     // image: ,
                //     alt: ,
                //     description: ,
                //     skills: ,
                // },

            ]
        }
        return (

            <section id="featured" className="feature">
              <h2 className="title">Featured Projects</h2>
              <div className="container">
                {featured.projects.map( featured => {
                  return (
                    <React.Fragment key={featured.id}>
                      <div className="card mb-3 text-start feature-project">
                        <div className="row">
                          <div className="col-12 col-lg-5">
                            <div className="card-header">Featured Project</div>
                            <div className="card-body">
                              <h3 className="card-title"><a href={featured.deployed} target="_blank" rel="noreferrer">{featured.name}</a></h3>
                              <p className="card-text">{featured.description}</p>
                              <p><small className="text-skill">{featured.skills}</small></p>
                              <a href={featured.github} target="_blank" rel="noreferrer">
                                <span><i class="fa-brands fa-github"></i></span>
                              </a>
                              
                            </div>
                          </div>
                          <div className="col-12 col-lg-7">
                            <a href={featured.deployed} target="_blank" rel="noreferrer">
                              <img src={featured.image} className="rounded float-end" alt={featured.alt} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </section>
        );
}

export default Featured;