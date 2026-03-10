// src/components/RightSidebar.jsx

const community = [
  {
    initials: "SC",
    color: "#06b6d4",
    name: "Sarah Chen",
    action: "completed",
    course: "Blues Guitar Solo Techniques",
    time: "2h ago",
  },
  {
    initials: "MJ",
    color: "#a855f7",
    name: "Mike Johnson",
    action: "started",
    course: "Electric Guitar for Rock",
    time: "4h ago",
  },
  {
    initials: "EW",
    color: "#f59e0b",
    name: "Emma Wilson",
    action: "achieved",
    course: "Fingerstyle Mastery Badge",
    time: "5h ago",
  },
  {
    initials: "AK",
    color: "#22c55e",
    name: "Alex Kumar",
    action: "joined",
    course: "Acoustic Guitar Fundamentals",
    time: "6h ago",
  },
];

const trending = [
  "Jazz Guitar Improvisation",
  "Heavy Metal Techniques",
  "Acoustic Fingerpicking",
];

export default function RightSidebar() {
  return (
    <aside className="right-sidebar">
      <div className="panel">
        {/* Community Activity */}
        <div className="panel__heading">
          <span className="icon">👥</span>
          <h3>Community Activity</h3>
        </div>
        <p className="panel__sub">See what others are learning</p>

        <div className="community-feed">
          {community.map((user, i) => (
            <div className="community-item" key={i}>
              <div
                className="community-item__avatar"
                style={{ background: user.color }}
              >
                {user.initials}
              </div>
              <div className="community-item__info">
                <div className="community-item__name-line">
                  <span className="name">{user.name}</span>
                  <span className="action"> {user.action}</span>
                </div>
                <div className="community-item__course">{user.course}</div>
                <div className="community-item__time">{user.time}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trending */}
        <div className="trending-box">
          <div className="trending-box__header">
            <span className="arrow">↗</span>
            <span>Trending Now</span>
          </div>
          {trending.map((t, i) => (
            <div className="trending-box__item" key={i}>
              <span className="dot" />
              <span>{t}</span>
            </div>
          ))}
        </div>

        {/* Join Discussion */}
        <div className="community-cta">
          <div className="community-cta__header">
            <span className="icon">💬</span>
            <strong>Join Discussion</strong>
          </div>
          <p>Connect with fellow learners and share your progress</p>
          <button className="btn-community">Open Community</button>
        </div>
      </div>
    </aside>
  );
}
