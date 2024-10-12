import Days from "./components/Days";
import { ThemeProvider, useTheme } from "./components/SwitchTheme";
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

const ThemedApp = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <div>
      <div className="toggle-button" onClick={toggleTheme}>
        <div className={`toggle-circle ${theme}`}></div>
      </div>
      <div className="container">
        {daysData.map((day) => (
          <Days key={day.id} id={day.id} title={day.title} />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
};

export default App;
