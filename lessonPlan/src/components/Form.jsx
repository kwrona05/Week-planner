import { useState } from "react";

const Form = () => {
  const [showForm, setShowForm] = useState(false);
  const [lessonList, setLessonList] = useState([]);
  const [lessons, setLessons] = useState("");

  const handleButtonClick = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (lessons) {
      setLessonList([...lessonList, lessons]);
      setLessons("");
    }
  };

  const handleDelete = (index) => {
    const newLessonList = lessonList.filter((_, i) => i !== index);
    setLessonList(newLessonList);
  };

  return (
    <div>
      <button id="addLesson" onClick={handleButtonClick}>
        {showForm ? "Hide form" : "Show form"} {/* Toggle button label */}
      </button>

      {showForm && ( // Conditionally render form based on `showForm` state
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={lessons}
            onChange={(e) => setLessons(e.target.value)}
            placeholder="Enter your lessons"
          />
          <button type="submit">Submit</button>
        </form>
      )}

      <ul>
        {lessonList.map((lesson, index) => (
          <li key={index}>
            {lesson}
            {""}
            <button id="delLesson" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Form;
