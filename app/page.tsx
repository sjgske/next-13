"use client";

import { useState, useEffect } from "react";
import LoadingPage from "./loading";
import Courses from "./components/Courses";
import CourseSearch from "./components/CourseSearch";

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true); // Client component -> 로딩 상태도 직접 설정해줘야함..

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("/api/courses");
      const data = await response.json();
      setCourses(data);
      setLoading(false);
    };
    fetchCourses();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div>
      <h1>Welcome</h1>
      <CourseSearch setCourses={setCourses} />
      <Courses courses={courses} />
    </div>
  );
};

export default HomePage;
