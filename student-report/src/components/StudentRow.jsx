const StudentRow = ({ student, index, updateScore }) => {
  const isPass = student.score >= 40;

  return (
    <tr className="text-center hover:bg-purple-50 transition">
      <td className="p-2">{student.name}</td>

      <td className="p-2">
        <input
          type="number"
          value={student.score}
          onChange={(e) => updateScore(index, e.target.value)}
          className="border rounded px-2 py-1 w-20 text-center focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </td>

      <td className={`p-2 font-semibold ${isPass ? "text-green-600" : "text-red-500"}`}>
        {isPass ? "✅ Pass" : "❌ Fail"}
      </td>
    </tr>
  );
};

export default StudentRow;