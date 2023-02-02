import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addQuestion } from "../../actions/formBuilder";

const Form = () => {
  const [formName, setFormName] = useState("");
  const [question, setQuestion] = useState("");
  const [answerType, setAnswerType] = useState("");
  const [choices, setChoices] = useState("");

  const dispatch = useDispatch();

  const handleAddQuestion = () => {
    const question = {
      title: question,
      answerType: answerType,
      choices: choices,
    };
    dispatch(addQuestion(question));
    // reset form fields
    setQuestion("");
    setAnswerType("");
    setChoices("");
  };

  return (
    <div>
      <h2>Create Form</h2>
      <div>
        <input
          type="text"
          value={formName}
          onChange={(e) => setFormName(e.target.value)}
          placeholder="Enter form name"
        />
      </div>
      <div>
        <button>Add Question</button>
        <div>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter question"
          />
          <select value={answerType} onChange={(e) => setAnswerType(e.target.value)}>
            <option value="">Select answer type</option>
            <option value="text">Text</option>
            <option value="multichoice">Multichoice (Checkbox)</option>
            <option value="single-select">Single Select (Radio)</option>
          </select>
          {answerType === "multichoice" && (
            <textarea
              value={choices}
              onChange={(e) => setChoices(e.target.value)}
              placeholder="Enter choices, one per line"
            />
          )}
          <button onClick={handleAddQuestion}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
