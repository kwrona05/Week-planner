import Days from "./components/Days";
import "./App.css";

const daysData = [
  { id: "monday", title: "Monday" },
  { id: "tuesday", title: "Tuesday" },
  { id: "wednesday", title: "Wednesday" },
  { id: "thursday", title: "Thursday" },
  { id: "friday", title: "Friday" },
  { id: "saturday", title: "Saturday" },
  { id: "sunday", title: "Sunday" },
];
const App = () => {
  return (
    <div className="container">
      {daysData.map((day) => (
        <Days key={day.id} id={day.id} title={day.title} />
      ))}
    </div>
  );
};

export default App;
