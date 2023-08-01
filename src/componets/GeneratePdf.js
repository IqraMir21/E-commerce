import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import React, { useRef, useCallback } from "react";
// import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

const data = {
  labels: ["Red", "Yellow", "Green", "Grey", "Dark Grey"],
  datasets: [
    {
      label: "My Dataset",
      data: [300, 50, 100, 40, 120],
      backgroundColor: ["#FF6384", "#008000", "#FFFF00", "#ccc", "#DCDCDC"],
      hoverOffset: 4,
    },
  ],
};

Chart.register(CategoryScale);

const GeneratePdf = () => {
  const inputRef = useRef(null);
  // const input = document.getElementById("divToPrint");
  const printDocument = () => {
    html2canvas(inputRef.current).then((canvas) => {
      let imgWidth = 208;
      let imgHeight = (canvas.height * imgWidth) / canvas.width;
      const imgData = canvas.toDataURL("img/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      // pdf.output("dataurlnewwindow");
      pdf.save("download.pdf");
    });
  };
  return (
    <>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <div id="divToPrint" ref={inputRef}>
          <div>Note: Here the dimensions of div are same as A4</div>
          <div>You Can add any component here</div>
          <div style={{ height: "690px", width: "690px", margin: "auto" }}>
            <Doughnut data={data} />
          </div>
          <div className="mb5">
            <button onClick={printDocument}>Print</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default GeneratePdf;
