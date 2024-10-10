import { useState } from "react";
const Days = ({ title }) => {
  const [lessons, setLessons] = useState("");
  const [lessonList, setLessonList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (lessons) {
      setLessonList([...lessonList, lessons]);
      setLessons("");
    }
  };

  const addTask = () => {
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={lessons}
        placeholder="Enter your lesson"
        onChange={(e) => setLessons(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>;
  };

  return (
    <div>
      <h2>{title}</h2>
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your lesson"
          value={lessons}
          onChange={(e) => setLessons(e.target.value)}
        />
        <button type="submit">Add Lesson</button>
      </form> */}
      <button onClick={addTask}>Add lesson</button>

      <ul>
        {lessonList.map((lesson, index) => (
          <li key={index}>{lesson}</li>
        ))}
      </ul>
    </div>
  );
};

export default Days;
