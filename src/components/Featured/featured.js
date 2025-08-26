import React from 'react';
import img_memoryGame from '../../assets/projects/memorygameSS.png';
import img_irvingChampions from '../../assets/projects/irvingChampions.png'
import img_floss from '../../assets/projects/flossBox.png';

function Featured() {
        const featured = {
            projects: [
                {
                    id: "irvingChampionsLeague",
                    name: "Irving Champions League",
                    github: "https://github.com/davezer/irvingLeague",
                    deployed: "https://irvingleague.club",
                    image: img_irvingChampions,
                    alt: "Irving Champions League Project",
                    description: "Fantasy Football website built to access the Sleeper App API. Built internal API for accessing managers and badges. Also Utilitzed Google Sheets as a small database to access Future Draft Money, as well as group parlays.",
                    skills: "SvelteKit | SMUI | Vercel | JavaScript | API"
                },
                {
                    id: "flossBox",
                    name: "The Floss Box",
                    github: "https://github.com/davezer/flossStock",
                    deployed: "https://floss-stock.vercel.app",
                    image: img_floss,
                    alt: "Floss Box project",
                    description: "Simple and fast inventory app for cross stitching enthusiasts. Simply search the code for the DMC floss you use, and store it in your stash. Used Supabase for the database so users can access their stashes from anywhere.",
                    skills: "SvelteKit | JavaScript | CSS | API | Vercel | SMUI | Supabase | mySQL",
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
                              <img src={featured.image} className="rounded float-end project-image" alt={featured.alt} />
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