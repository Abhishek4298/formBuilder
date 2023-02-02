import React, { useState } from "react";
import Modal from "../Modal/Modal";

const FormBuilder = () => {
  const [formName, setFormName] = useState("");
  const [questions, setQuestions] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleFormNameChange = (event) => {
    setFormName(event.target.value);
  };

  const handleAddQuestion = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddQuestionSubmit = (question) => {
    setQuestions([...questions, question]);
    setShowModal(false);
  };

  return (
    <div className="form-builder">
      <input
        type="text"
        placeholder="Form Name"
        value={formName}
        onChange={handleFormNameChange}
      />
      <button onClick={handleAddQuestion}>Add Question</button>
      {showModal && (
        <Modal onClose={handleCloseModal} onSubmit={handleAddQuestionSubmit} />
      )}
    </div>
  );
};

export default FormBuilder;
