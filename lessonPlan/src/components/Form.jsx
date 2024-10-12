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
    <div className="formDiv">
      <button className="addBtn" id="addLesson" onClick={handleButtonClick}>
        {showForm ? "Hide form" : "Show form"}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={lessons}
            onChange={(e) => setLessons(e.target.value)}
            placeholder="Enter your lessons"
          />
          <button className="submitBtn" type="submit">
            +
          </button>
        </form>
      )}

      <ul>
        {lessonList.map((lesson, index) => (
          <li key={index}>
            {lesson}
            {""}
            <button
              className="delBtn"
              id="delLesson"
              onClick={() => handleDelete(index)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Form;
