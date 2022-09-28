import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateEvent from "./Pages/CreateEvent";
import Event from "./Pages/Event";
import Home from "./Pages/Home";

function App() {
  const [event, setEvent] = useState({});
  const [start, setStart] = useState("18 August 6:00PM");
  const [end, setEnd] = useState("19 August 1:00PM");

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/create"
          element={
            <CreateEvent
              setEvent={setEvent}
              setStart={setStart}
              setEnd={setEnd}
            />
          }
        ></Route>
        <Route
          path="/event"
          element={<Event event={event} start={start} end={end} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
