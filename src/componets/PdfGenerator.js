import React, { PureComponent } from "react";
import jsPDF from "jspdf";

export default class PfdGenerator extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }
  jsPdfGenerator = () => {
    var doc = new jsPDF("p", "pt");

    doc.text(20, 20, "This is default text");

    doc.setFont("courier", "normal");

    doc.text(20, 20, "This is text with courier font");

    doc.save("generated.pdf");
  };

  render() {
    return <button onClick={this.jsPdfGenerator}>Generate PDF</button>;
  }
}
