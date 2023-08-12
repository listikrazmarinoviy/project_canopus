import { Button } from "@mui/material";
import SidebarMenuAboutPage from "../layouts/SideBarMenuAboutPage.jsx";
import SidebarButtonsAboutPage from "../layouts/SidebarButtonsAboutPage.jsx";

const About = () => {
  return (
    <>
      <div id="container">
        <SidebarMenuAboutPage />
        <div className="home-text">
          <p>About</p>
          <h1 className="title">
            Project <span className="title__span">Canopus</span>
          </h1>
          <div>
            <p>
              The “Project Canopus” is a world-wide cybersecurity platform that{" "}
              <br />
              was created to tackle the cyber-crimes and issues with cyber
              <br />
              protection arising all around the world.
            </p>
            <p>
              In the past several decades people and corporations built a lot of
              <br />
              web services that are not accurately and securely operate with
              <br />
              user's data. At the same time, the services themselves are not
              <br />
              entirely secure in front of cybercriminals.
            </p>
            <p>
              The world should not go further in developing systems that are not
              <br />
              secure and resilient. We believe that strict cybersecurity
              <br />
              implementation should be applied in every service that interacts
              <br />
              with users; provide services or any other functionality.
            </p>
            <p>
              Project Canopus' team made the platform absolutely free for
              <br />
              everyone, believing that every person in the world should have the
              <br />
              service and tools easily accessible to protect their journey in
              web.
            </p>
            <p>Project Canopus' team</p>
            <p>Imagine the world, safe of cyber-threats</p>
          </div>
        </div>
      </div>
      <div id="container">
        <SidebarButtonsAboutPage />
        <div className="home-text">
          <h1>
            Everything that you need for
            <br /> cybersecurity is on one platform
          </h1>
          <p>
            Project Canopus gives you the access to every possible aspect of{" "}
            <br />
            cybersecurity, starting from news to tools
          </p>
          <h2>News</h2>
          <p>
            Project Canopus is always up to date about what’s happening in a
            <br />
            world. We provide news that are relevant for everyone, even if you
            <br />
            are not too deep interested in cybersecurity or in protecting your
            <br />
            systems.
          </p>
          <h2>Tools</h2>
          <p>
            Project Canopus has the set of tools that are free for everyone.
            <br />
            These tools created for doing different tasks, such as checking the
            <br />
            malicious URL’s or testing the security of your database.
          </p>
          <h2>Groups</h2>
          <p>
            Here, you can create or join a group by your interests. Are you
            <br />
            interested in cloud service security? Be sure that there is a group
            <br />
            dedicated to this topic and you can find more people with similar
            <br />
            interests as yours and collaborate with them together.
          </p>
          <h2>Learning paths</h2>
          <p>
            Project Canopus is also the source of knowledge for those who want
            <br />
            to improve their skills in cybersecurity. We make the knowledge
            <br />
            about cybersecurity free and available for everyone, that’s why
            <br />
            don’t loose your time and get the new skills in our learning paths.
            <br />
            Project Canopus collaborate with many different platforms that let
            <br />
            ordinary people to improve their knowledge and skills in
            cybersecurity.
          </p>
          <Button variant="contained">EXPLORE</Button>
        </div>
      </div>
    </>
  );
};

export default About;
