// src/App.jsx
import { useState } from "react";
import "./styles/guitarhub.scss";   // ← external SCSS file

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import CourseSection from "./components/CourseSection";
import RightSidebar from "./components/RightSidebar";

const FEATURED = [
  {
    id: 1,
    title: "Acoustic Guitar Mastery: Complete Beginner to Advanced",
    instructor: "David Martinez",
    rating: 4.9,
    reviews: "12,547",
    duration: "12 weeks",
    img: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&q=80",
  },
  {
    id: 2,
    title: "Electric Guitar Rock & Blues Techniques",
    instructor: "Jake Thunder",
    rating: 4.8,
    reviews: "9,832",
    duration: "10 weeks",
    img: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=400&q=80",
  },
  {
    id: 3,
    title: "Guitar Chord Theory & Practice Essentials",
    instructor: "Emma Thompson",
    rating: 4.7,
    reviews: "15,234",
    duration: "8 weeks",
    img: "https://images.unsplash.com/photo-1544982503-9f984c14501a?w=400&q=80",
  },
  {
    id: 4,
    title: "Classical Guitar: Techniques & Repertoire",
    instructor: "Carlos Fernandez",
    rating: 4.9,
    reviews: "8,456",
    duration: "14 weeks",
    img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80",
  },
];

const POPULAR = [
  {
    id: 5,
    title: "Advanced Fingerstyle Guitar Patterns",
    instructor: "Sarah Mitchell",
    rating: 5.0,
    reviews: "7,543",
    duration: "10 weeks",
    img: "https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?w=400&q=80",
  },
  {
    id: 6,
    title: "Bass Guitar Fundamentals & Groove Building",
    instructor: "Marcus Brown",
    rating: 4.8,
    reviews: "6,234",
    duration: "9 weeks",
    img: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=400&q=80",
  },
  {
    id: 7,
    title: "Guitar Gear & Effects: Complete Guide",
    instructor: "Alex Turner",
    rating: 4.7,
    reviews: "9,876",
    duration: "6 weeks",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
  },
  {
    id: 8,
    title: "Guitar Recording & Production Masterclass",
    instructor: "Jennifer Lee",
    rating: 4.9,
    reviews: "5,765",
    duration: "8 weeks",
    img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&q=80",
  },
];

export default function App() {
  const [activeNav, setActiveNav] = useState("Home");
  const [search, setSearch] = useState("");

  const filterCourses = (list) =>
    list.filter(
      (c) =>
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.instructor.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="app">
      <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />

      <main className="main">
        <Topbar search={search} setSearch={setSearch} />

        <div className="content-wrap">
          <div className="content">
            <CourseSection
              title="Featured Guitar Courses"
              subtitle="Expert-picked courses for all skill levels"
              courses={filterCourses(FEATURED)}
            />
            <CourseSection
              title="Popular Guitar Courses"
              subtitle="Top-rated by the guitar community"
              courses={filterCourses(POPULAR)}
            />
          </div>

          <RightSidebar />
        </div>
      </main>
    </div>
  );
}
