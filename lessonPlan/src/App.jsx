import React from "react";
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
      <div
        className="toggle-button"
        onClick={toggleTheme}
        data-testid="toggleTest"
      >
        <div
          className={`toggle-circle ${theme}`}
          data-testid="circleTest"
        ></div>
      </div>
      <div className="container" data-testid="dayTest">
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
