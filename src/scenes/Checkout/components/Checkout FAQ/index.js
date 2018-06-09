import React, { Component } from "react";

import "./styles.css";

export class CheckoutFAQ extends Component {
  render() {
    const qnaContent = [
      [
        "How do I pay?",
        "We don't have online payments set up on the webstore yet. Therefore, payment will be done through e-transfers and cash."
      ],
      [
        "Who do I pay?",
        "All payments should be directed to either Trisha or Bryan. If you don't know who either Bryan or Trisha are, please contact someone who does."
      ],
      [
        "When will I receive my order?",
        "We will begin processing orders on the day of the deadline and once all orders are taken. Processing time for orders will take around two weeks."
      ]
    ];

    const qna = qnaContent.map(qna => {
      return (
        <div key={qna[0]}>
          <strong>{qna[0]}</strong>
          <p>{qna[1]}</p>
        </div>
      );
    });
    return (
      <React.Fragment>
        <hr />
        <div className="text-justify">
          <h5>FAQ</h5>
          {qna}
        </div>
      </React.Fragment>
    );
  }
}
