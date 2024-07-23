import "./App.css";

function App() {
  return (
    <>
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          <SkillList />
        </div>
      </div>
    </>
  );
}

function Avatar() {
  return (
    <>
      <img className="avatar" src="dev.png" alt="logo" />
    </>
  );
}

function Intro() {
  return (
    <>
      <h1>WEB DEVELOPER</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </>
  );
}

function SkillList() {
  return (
    <>
      <div className="skill-list">
        <Skill skill="JAVA SCRIPT" color="yellow" />
        <Skill skill="HTML+CSS" color="orange" />
        <Skill skill="REACT" color="cyan" />
        <Skill skill="Web Design" color="turquoise" />
      </div>
    </>
  );
}

function Skill({ skill, color }) {
  return (
    <>
      <div className="skill" style={{ backgroundColor: color }}>
        <span>{skill}</span>
      </div>
    </>
  );
}

export default App;
