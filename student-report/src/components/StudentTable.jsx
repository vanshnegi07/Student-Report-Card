import StudentRow from "./StudentRow";

const StudentTable = ({ students, updateScore }) => {
  return (
    <table className="w-full mt-4 border rounded-lg overflow-hidden">
      <thead>
        <tr className="bg-purple-300 text-purple-900">
          <th className="p-2">Name</th>
          <th className="p-2">Score</th>
          <th className="p-2">Status</th>
        </tr>
      </thead>

      <tbody>
        {students.map((student, index) => (
          <StudentRow
            key={index}
            student={student}
            index={index}
            updateScore={updateScore}
          />
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;