import React from "react";

const Form = ({ onSubmit, onChange }) => {
  return (
    <form>
      <input
        type="email"
        id="email"
        className="form-control"
        name="email"
        placeholder="Ingresa tu email"
        required
        onChange={onChange}
      />
      <input
        type="password"
        id="pass"
        className="form-control"
        name="password"
        placeholder="Ingresa tu contraseña"
        required
        onChange={onChange}
      />
      <button
        type="submit"
        value="Iniciar Sesión"
        className="btn btn-block bg-relevant"
        onSubmit={onSubmit}
      >
        Inicia Sesión
      </button>
    </form>
  );
};

export default Form;
