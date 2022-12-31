import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavbarCompo from "./components/NavbarCompo";

import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Student from "./pages/Student";
import Students from "./pages/Students";
import Teacher from "./pages/Teacher";
import Grade from "./pages/Grade";

import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<NavbarCompo />}>
            <Route path="/" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/teacher" element={<Teacher />} />
            <Route path="/students" element={<Students />} />
            <Route path="/grade" element={<Grade />} />
            <Route path="/students/:id" element={<Student />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
