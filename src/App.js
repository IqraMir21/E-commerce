import "./App.css";
// import GeneratePdf from "./componets/GeneratePdf";
// import PfdGenerator from "./componets/PdfGenerator";
// import ReadyToGo from "./componets/ReadyToGo";
// import { jsPDF } from "jspdf";

// function App() {
//   return (
//     <div className="App">
//       <ReadyToGo />
//       <PfdGenerator />
//       <GeneratePdf />
//     </div>
//   );
// }

// export default App;
import "./App.css";
import JsPDF from "jspdf";
const App = () => {
  const generatePDF = () => {
    const report = new JsPDF("portrait", "pt", "a4");
    report.html(document.querySelector("#report")).then(() => {
      report.save("report.pdf");
    });
  };
  return (
    <div className="App">
      <button onClick={generatePDF} type="button">
        Export PDF
      </button>
    </div>
  );
};

export default App;
