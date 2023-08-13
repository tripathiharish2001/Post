import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Create from "./components/Create";
import Edit from "./components/Edit";
import View from "./components/View";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/edit/:postId" element={<Edit />}></Route>
          <Route path="/view/:postId" element={<View />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
