import React, { useState } from "react";

const BasicForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label className="form-label">
        Nombre:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-input"
        />
      </label>
      <br />
      <label className="form-label">
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
        />
      </label>
      <br />
      <label className="form-label">
        Mensaje:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="form-input form-textarea"
        />
      </label>
      <br />
      <button type="submit" className="form-button">
        Enviar
      </button>
    </form>
  );
};

export default BasicForm;
