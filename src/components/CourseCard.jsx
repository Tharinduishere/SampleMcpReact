// src/components/CourseCard.jsx
import { useState } from "react";

export default function CourseCard({ course }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`course-card${hovered ? " course-card--hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="course-card__thumb">
        <img className="course-card__img" src={course.img} alt={course.title} />
        <div className="course-card__overlay" />
      </div>
      <div className="course-card__body">
        <h3 className="course-card__title">{course.title}</h3>
        <p className="course-card__instructor">{course.instructor}</p>
        <div className="course-card__meta">
          <div className="course-card__rating">
            <span className="star">★</span>
            <span className="score">{course.rating.toFixed(1)}</span>
            <span className="count">({course.reviews})</span>
          </div>
          <div className="course-card__duration">
            <span>⏱</span>
            {course.duration}
          </div>
        </div>
      </div>
    </div>
  );
}
