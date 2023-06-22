import React, { useState } from "react";

const Form = ({ addData }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setErrors({ name: "Name is required" });
      return;
    }

    if (!age) {
      setErrors({ age: "Age is required" });
      return;
    }

    if (!email) {
      setErrors({ email: "Email is required" });
      return;
    }

    addData({ name, age, email });
    setName("");
    setAge("");
    setEmail("");
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        {errors.age && <span>{errors.age}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
