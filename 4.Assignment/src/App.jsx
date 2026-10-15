import "./App.css";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <main className="profile-page">
      <a
        className="back-link"
        href={import.meta.env.DEV ? "../index.html" : "../../index.html"}
      >
        ← All assignments
      </a>

      <div className="profile-header">
        <p className="eyebrow">PROFILE</p>

        <h1>Meet the Developer</h1>

        <p>A simple profile card built with React.</p>
      </div>

      <ProfileCard
        name="Manish Kundan Zond"
        role="FULL STACK DEVELOPER"
        initials="SM"
        description="BCA graduate and MCA student interested in building modern web applications and AI-powered solutions."
      />
    </main>
  );
}

export default App;
