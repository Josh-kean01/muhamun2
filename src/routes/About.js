import React from "react";

const About = () => {
  return (
    <div>
      <ShortNote />
      <Skills />
      <Hobbies />
    </div>
  );
};

export default About;

const ShortNote = () => {
  return (
    <div>
      <article>
        <div>
          <h1></h1>
          <p></p>
        </div>
      </article>
    </div>
  );
};

const Skills = () => {
  return (
    <div>
      <article>
        <div className="d-flex justify-content-center">
          <div class="card text-bg-primary w-50 mb-3 ">
            <div class="card-header">
              <h3>About Hamzat Muhamun</h3>
            </div>
            <div class="card-body">
              <p class="card-text">
                I am an easy going person, i believe in myself and also believe
                with consistence
                <br />
                and hardwork many things can be done.
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div class="card text-bg-info mb-3 w-50">
            <div class="card-header">
              <h3>Skills</h3>
            </div>
            <div class="card-body">
              <p class="card-text">
                <SkillList
                  title="Proficient With"
                  list={[
                    "Html5",
                    "Css3",
                    "Bootstrap",
                    "JavaScript",
                    "React",
                    "Github",
                  ]}
                />
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div class="card text-bg-primary w-50 mb-3 ">
            <div class="card-header">
              <h3>Exposed to:</h3>
            </div>
            <div class="card-body">
              <p class="card-text">
                <SkillList
                  list={[
                    "Microsoft Office",
                    "3D Animation",
                    "Graphic designing",
                  ]}
                />
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div class="card text-bg-info mb-3 w-50">
            <div class="card-header">
              <h3>Hobbies</h3>
            </div>
            <div class="card-body">
              <p class="card-text">
                <div>
                  <HobbyList text="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;📖&nbsp;&nbsp;&nbsp;Reading" />
                  <HobbyList text="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🎦&nbsp;&nbsp;&nbsp;Theatre" />
                  <HobbyList text="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;📱&nbsp;&nbsp;&nbsp;Movies" />
                  <HobbyList text="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;👩‍💻&nbsp;&nbsp;&nbsp;Coding" />
                </div>
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

const SkillList = ({ title, list }) => {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {list.map((eachList, index) => (
          <li key={index}>{eachList}</li>
        ))}
      </ul>
    </div>
  );
};

const Hobbies = () => {
  return (
    <div>
      <article>
        <div className="as rounded-top p-1">
          <span className="dot"></span>
          <span className="dot1"></span>
          <span className="dot2"></span>
        </div>
      </article>
    </div>
  );
};

const HobbyList = ({ img, text }) => {
  return (
    <div>
      <img src={img} alt="" />
      <span>{text}</span>
    </div>
  );
};
