import { useState } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";

function App() {
  const [students, setStudents] = useState([
    { name: "Vansh", score: 67 },
    { name: "Arihant", score: 39 },
    
  ]);

  const updateScore = (index, newScore) => {
    const updated = [...students];
    updated[index].score = Number(newScore);
    setStudents(updated);
  };

  const addStudent = (name, score) => {
    if (!name || score === "") return;
    setStudents([...students, { name, score: Number(score) }]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-200 to-yellow-100 flex items-center justify-center p-6">
      
      <div className="bg-white/70 backdrop-blur-md shadow-2xl rounded-2xl p-6 w-full max-w-2xl border border-white/40">
        
        <Header />
        <AddStudentForm addStudent={addStudent} />
        <StudentTable students={students} updateScore={updateScore} />
      
      </div>

    </div>
  );
}

export default App;