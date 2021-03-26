import React, { Component, useState } from "react";
import "survey-react/survey.css";
import * as Survey from "survey-react";
import SBA_form from "./SBA_form.json";
import PFS_form from "./PFS_form.json";

function App() {
  const [formType, setUserFormType] = useState(null);
  const [isCompleted, setCompleted] = useState(false);
  const [showUserResult, setUserResult] = useState(null);

  let chooseForm = (form) => {
    // if(form)
    setUserFormType(form);
  };

  const onCompeleteComponent = (e) => {
    setCompleted(true);
    setUserResult(e.valuesHash);
    console.log(e.valuesHash);
  };

  let loanApplication = !isCompleted ? (
    <Survey.Survey
      json={SBA_form}
      showCompletedPage={false}
      onComplete={(e) => onCompeleteComponent(e)}
    />
  ) : null;

  let financialForm = !isCompleted ? (
    <Survey.Survey
      json={PFS_form}
      showCompletedPage={false}
      onComplete={(e) => onCompeleteComponent(e)}
    />
  ) : null;

  let onSurveyCompletion = isCompleted ? (
    <div>Thanks for completing the form!</div>
  ) : null;

  return (
    <div
      style={{
        padding: "30px",
      }}
    >
      <button
        style={{
          background: "#BDB76B",
          width: "50%",
          height: "100px",
          color: "black",
          fontSize: "20px",
        }}
        onClick={() => chooseForm("SBA")}
      >
        LOAN APPLICATION
      </button>
      <button
        style={{
          background: "#00BFFF",
          width: "50%",
          height: "100px",
          color: "black",
          fontSize: "20px",
        }}
        onClick={() => chooseForm("PFS")}
      >
        PERSONAL FINANCIAL STATEMENT
      </button>
      <h2 style={{ textAlign: "center", color:"red" }}>CLICK THE ABOVE BUTTONS TO CHANGE THE TYPE OF FORMS.</h2>
      {formType === "SBA" ? (
        <main>
          <h2 style={{ textAlign: "center", color: "#BDB76B" }}>
            Loan Application
          </h2>
          {loanApplication}
        </main>
      ) : (
        <main>
          <h2 style={{ textAlign: "center", color: "#00BFFF" }}>
            PERSONAL FINANCIAL STATEMENT
          </h2>
          {financialForm}
        </main>
      )}
      {onSurveyCompletion}
      {!showUserResult ? null : (
        <div>
          <p>{JSON.stringify(showUserResult)}</p>

          <p>{showUserResult.Name}</p>
        </div>
      )}
    </div>
  );
}
export default App;
