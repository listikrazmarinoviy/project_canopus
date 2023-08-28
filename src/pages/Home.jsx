import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import SidebarMenu from "../layouts/SidebarMenu";
import "../assets/home.css";
import "../assets/sidebar_menu.css";

const Home = () => {
  return (
    <div>
      <div id="container">
        <SidebarMenu />
        <div className="home-text">
          <p>Welcome to the</p>
          <h1 className="title">
            Project <span className="title__span">Canopus</span>
          </h1>
          <p>
            Imagine the world, safe of
            <br />
            cyber-threats
          </p>
        </div>
      </div>
      <div className="sections">
        <div>
          <h3 className="sections__title sections__title--backgroundColorRed">
            Latest News
          </h3>
        </div>
        <div>
          <h3 className="sections__title">Technologies</h3>
          <div className="sections__technologies">
            <img src="src\assets\images\noun-protect-1171264.png" alt="Wire" />
            <p>
              Free set of tools that you can use to test the security of your{" "}
              <br /> platform and it’s resistance to a malicious actions.
            </p>
          </div>
          <div className="sections__technologies">
            <img
              src="src\assets\images\noun-ai-5258527.png"
              alt="AI Robot Circuit"
            />
            <p>
              Compiled machine learning models that can be implemented in <br />
              your product.
            </p>
          </div>
        </div>
        <div>
          <h3 className="sections__title">Groups</h3>
          <div className="sections__groups">
            <div className="sections__groups__items">
              <img
                src="src\assets\images\joshua-rawson-harris-KRELIShKxTM-unsplash 1.png"
                alt="Group Mimic"
              ></img>
              <div className="sections__groups__items-width">
                <h4>Mimics</h4>
                <p>
                  The group of cyber-security researchers that based in Seoul,
                  South Korea
                </p>
              </div>
            </div>
            <div className="sections__groups__items">
              <img
                src="src\assets\images\joshua-rawson-harris-KRELIShKxTM-unsplash 1.png"
                alt="Group Mimic"
              ></img>
              <div className="sections__groups__items-width">
                <h4>Mimics</h4>
                <p>
                  The group of cyber-security researchers that based in Seoul,
                  South Korea
                </p>
              </div>
            </div>
            <div className="sections__groups__items">
              <img
                src="src\assets\images\joshua-rawson-harris-KRELIShKxTM-unsplash 1.png"
                alt="Group Mimic"
              ></img>
              <div className="sections__groups__items-width">
                <h4>Mimics</h4>
                <p>
                  The group of cyber-security researchers that based in Seoul,
                  South Korea
                </p>
              </div>
            </div>
            <div className="sections__groups__items">
              <img
                src="src\assets\images\joshua-rawson-harris-KRELIShKxTM-unsplash 1.png"
                alt="Group Mimic"
              ></img>
              <div className="sections__groups__items-width">
                <h4>Mimics</h4>
                <p>
                  The group of cyber-security researchers that based in Seoul,
                  South Korea
                </p>
              </div>
            </div>
            <div className="sections__groups__items">
              <img
                src="src\assets\images\joshua-rawson-harris-KRELIShKxTM-unsplash 1.png"
                alt="Group Mimic"
              ></img>
              <div className="sections__groups__items-width">
                <h4>Mimics</h4>
                <p>
                  The group of cyber-security researchers that based in Seoul,
                  South Korea
                </p>
              </div>
            </div>
            <div className="sections__groups__items">
              <img
                src="src\assets\images\joshua-rawson-harris-KRELIShKxTM-unsplash 1.png"
                alt="Group Mimic"
              ></img>
              <div className="sections__groups__items-width">
                <h4>Mimics</h4>
                <p>
                  The group of cyber-security researchers that based in Seoul,
                  South Korea
                </p>
              </div>
            </div>
            <div className="sections__groups__button">
              <Link to="groups">
                <Button variant="contained">EXPLORE</Button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h3 className="sections__title">Latest activities</h3>
          <div className="sections_activities">
            <div className="sections_activities__items">
              <img src="src\assets\images\image 7.png" alt="Activitie 2"></img>
              <div>
                <h4>Black Hat USA 2023</h4>
                <p>
                  Now in its 26th year, Black Hat USA returns to the Mandalay
                  Bay Convention Center in Las Vegas with a 6-day program. The
                  event will open with four days of specialized cybersecurity
                  Trainings (August 5-10), with courses for all skill levels.
                  The two-day main conference (August 9-10) will feature more
                  than 100 selected Briefings, dozens of open-source tool demos
                  in Arsenal, a robust Business Hall, networking and social
                  events, and ...
                </p>
                <Button>Show More</Button>
              </div>
            </div>
            <div className="sections_activities__items">
              <img src="src\assets\images\image 8.png" alt="Activitie 2"></img>
              <div>
                <h4>The future of cybersecurity starts here</h4>
                <p>
                  Fal.Con is where the greatest minds in cybersecurity come
                  together to protect and power businesses. If you want to
                  network with industry experts, explore the latest technology,
                  build skills at hands-on workshops, learn from skilled threat
                  hunters, and tap into the full power of the CrowdStrike
                  ecosystem, this is the place to be.
                </p>
                <Button>Show More</Button>
              </div>
            </div>
            <div className="sections__groups__button">
              <Link to="activities">
                <Button variant="contained">EXPLORE</Button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h3 className="sections__title">Learn</h3>
          <div className="sections__lessons">
            <div className="sections__lessons__items">
              <img src="src\assets\images\image 8.png" alt="Activitie 2"></img>
              <div className="sections__lessons__items-width">
                <h5>Introduction to cybersecurity</h5>
                <h6>Author: TryHackMe</h6>
                <p>
                  Cyber Security is a huge topic, and it can be challenging to
                  know where to start. This path will give you a hands-on
                  introduction to different areas within cyber, including:
                  Careers in Cyber Security Offensive Security; hacking your
                  first application Defensive Security; defending against a live
                  cyber attack Exploring security topics in the industry
                </p>
              </div>
            </div>
            <div className="sections__lessons__items">
              <img src="src\assets\images\image 8.png" alt="Activitie 2"></img>
              <div className="sections__lessons__items-width">
                <h5>WEB fundamentals</h5>
                <h6>Author: TryHackMe</h6>
                <p>
                  The aim of this path is to teach you how to attack web
                  applications. To successfully attack and exploit web
                  applications, you need to understand how they work. The first
                  section (Web Fundamentals) will give you all the pre-requisite
                  knowledge on this. The second section (Security Tools) focuses
                  on learning how to use Industry Standard tooling to interact
                  with your targets.
                </p>
              </div>
            </div>
            <div className="sections__lessons__items">
              <img src="src\assets\images\image 8.png" alt="Activitie 2"></img>
              <div className="sections__lessons__items-width">
                <h5>Cyber defense</h5>
                <h6>Author: TryHackMe</h6>
                <p>
                  The Cyber Defense path aims to give a broad introduction to
                  the different areas necessary to detect and respond to
                  threats. This path will be looking at the following areas:
                  Getting Started Threat and Vulnerability Management Security
                  Operations and Monitoring Threat Emulation Incident Response &
                  Forensics
                </p>
              </div>
            </div>
            <div className="sections__lessons__items">
              <img src="src\assets\images\image 8.png" alt="Activitie 2"></img>
              <div className="sections__lessons__items-width">
                <h5>Attacking and defending AWS</h5>
                <h6>Author: TryHackMe Amazon Web</h6>
                <p>
                  Services is the most popular cloud service provider in the
                  world offering hundreds of services. With a large number of
                  businesses adopting cloud technologies like AWS, cyber
                  practitioners must understand the security implications of
                  moving to the cloud. identifying, enumerating and exploiting
                  overly permissive IAM users, roles and policies
                </p>
              </div>
            </div>
            <div className="sections__groups__button">
              <Link to="learn">
                <Button variant="contained">EXPLORE</Button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h3 className="sections__title">Fast links</h3>
          <div className="sections__fastlinks">
            <img src="src\assets\images\image 14.png" alt="AI Robot Circuit" />
            <img src="src\assets\images\image 14.png" alt="AI Robot Circuit" />
            <img src="src\assets\images\image 14.png" alt="AI Robot Circuit" />
            <img src="src\assets\images\image 14.png" alt="AI Robot Circuit" />
            <img src="src\assets\images\image 14.png" alt="AI Robot Circuit" />
            <img src="src\assets\images\image 14.png" alt="AI Robot Circuit" />
            <img src="src\assets\images\image 14.png" alt="AI Robot Circuit" />
            <img src="src\assets\images\image 14.png" alt="AI Robot Circuit" />
            <img src="src\assets\images\image 14.png" alt="AI Robot Circuit" />
            <img src="src\assets\images\image 14.png" alt="AI Robot Circuit" />
            <img src="src\assets\images\image 14.png" alt="AI Robot Circuit" />
            <img src="src\assets\images\image 14.png" alt="AI Robot Circuit" />
            <img src="src\assets\images\image 14.png" alt="AI Robot Circuit" />
            <img src="src\assets\images\image 14.png" alt="AI Robot Circuit" />
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="list-container">
          <h5 className="list-title">About Project Canopus</h5>
          <ul className="list">
            <Link to="about">
              <li className="list__item">About Project Canopus</li>
            </Link>
            <Link to="contact">
              <li className="list__item">Contact Information</li>
            </Link>
            <Link to="ourteam">
              <li className="list__item">Our Team</li>
            </Link>
          </ul>
        </div>
        <div className="list-container">
          <h5 className="list-title">User guide</h5>
          <ul className="list">
            <Link to="privacypolicy">
              <li className="list__item">Privacy Policy</li>
            </Link>
            <Link to="termsofuse">
              <li className="list__item">Terms of Use</li>
            </Link>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Home;
