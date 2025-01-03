import './App.css';

function App() {
  const arr = [
    { name: "Dinath", age: "23", Marvel: "yes", DC: "yes", Telugu: "yes" },
    { name: "Ravi", age: "50", Marvel: "no", DC: "yes", Telugu: "no" },
    { name: "Hari", age: "60", Marvel: "no", DC: "no", Telugu: "yes" }
  ];

  return (
    <div style={{ backgroundColor: "white", padding: "20px" }}>
      <h1 style={{ color: "black" }}>Creating a Table</h1>
      <table id="table" style={{ border: "2px solid blue", borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={{ border: "2px solid green", padding: "8px", color: "black" }}>Name</th>
            <th style={{ border: "2px solid green", padding: "8px", color: "black" }}>Age</th>
            <th style={{ border: "2px solid green", padding: "8px", color: "black" }}>Marvel</th>
            <th style={{ border: "2px solid green", padding: "8px", color: "black" }}>DC</th>
            <th style={{ border: "2px solid green", padding: "8px", color: "black" }}>Telugu</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((element, index) => (
            <tr key={index}>
              <td style={{ border: "2px solid green", padding: "8px", color: "black" }}>{element.name}</td>
              <td style={{ border: "2px solid green", padding: "8px", color: "black" }}>{element.age}</td>
              <td style={{ border: "2px solid green", padding: "8px", color: "black" }}>{element.Marvel}</td>
              <td style={{ border: "2px solid green", padding: "8px", color: "black" }}>{element.DC}</td>
              <td style={{ border: "2px solid green", padding: "8px", color: "black" }}>{element.Telugu}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <h1 style={{ color: "black" }}>List of Names</h1>
      <div>
        {arr.map((element, index) => (
          <ul key={index}>
            <li style={{ color: "black" }}>
              {element.name}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default App;
