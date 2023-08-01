import React, { useState } from "react";
import './Symptom.css'

function responseFromOpenAI() {
  const { Configuration, OpenAIApi } = require("openai")
  const config = new Configuration({
    apiKey: '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'
  })

  const openai = new OpenAIApi(config);

  const runPromt = async () => {
    const prompt = "what can cause the symptoms of fever, headache, cough and loss of taste ans its remedies"

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 2048,
      temperature: 1,
    });
    let ans = document.getElementById('ans')
    ans.innerHTML = response.data.choices[0].text
    console.log(response.data.choices[0].text)
  }

  runPromt()
}

function SymptomSelector() {
  return (
    <div className="symptoms-select">
      <h1> Select Multiple Disease Symptoms </h1>
      <div className="symptoms-select-container">
        <form>
          <label>
            < input type="checkbox" id="mycheck1" name="symptom" value="Fever" /> Fever
          </label> <br />
          <label>
            < input type="checkbox" id="mycheck2" name="symptom" value="Cough" /> Cough
          </label>
          <br />
          <label>
            < input type="checkbox" id="mycheck3" name="symptom" value="Fatigue" /> Fatigue
          </label> <br />
          <label>
            < input type="checkbox" id="mycheck4" name="symptom" value="Headache" /> Headache
          </label> <br />
          <label>
            < input type="checkbox" id="mycheck5" name="symptom" value="Loss of taste or smell" /> Loss of
            taste or smell
          </label>
          <br />
          <button type="button" onClick={responseFromOpenAI}> Show Remedies</button>
        </form>
        <div id="ans" style={{ textAlign: "center", display: "flex", alignItems: "center", flexDirection: "column" }}>Select symptoms to know about the cause and remedies<br /><span style={{ fontSize: "20px" }}>here</span></div>
      </div>
    </div>
  );
}

export default SymptomSelector;