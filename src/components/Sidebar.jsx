// src/components/Sidebar.jsx

const navItems = [
  { label: "Home", icon: "🏠" },
  { label: "All Guitar Courses", icon: "🎸" },
  { label: "My Guitar Journey", icon: "🎯" },
  { label: "Practice Tools", icon: "🔧" },
  { label: "Achievements", icon: "🏆" },
];

export default function Sidebar({ activeNav, setActiveNav }) {
  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        <div className="sidebar__logo-icon">🎸</div>
        <div className="sidebar__logo-text">
          <strong>GUITARHUB</strong>
          <span>Unleash Your Inner Guitarist</span>
        </div>
      </div>

      <nav>
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`nav-item${activeNav === item.label ? " nav-item--active" : ""}`}
            onClick={() => setActiveNav(item.label)}
          >
            <span className="nav-icon">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      <div className="sidebar__footer">GUITARHUB.COM</div>
    </aside>
  );
}
