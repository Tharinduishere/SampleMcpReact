// src/components/CourseSection.jsx
import CourseCard from "./CourseCard";

export default function CourseSection({ title, subtitle, courses }) {
  return (
    <section className="section">
      <div className="section__header">
        <div>
          <h2 className="section__title">{title}</h2>
          <p className="section__subtitle">{subtitle}</p>
        </div>
        <button className="section__view-all">View All →</button>
      </div>
      <div className="section__grid">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
