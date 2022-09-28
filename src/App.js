import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateEvent from "./Pages/CreateEvent";
import Event from "./Pages/Event";
import Home from "./Pages/Home";

function App() {
  const [event, setEvent] = useState(null);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/create"
          element={<CreateEvent setEvent={setEvent} />}
        ></Route>
        <Route path="/event" element={<Event event={event} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
