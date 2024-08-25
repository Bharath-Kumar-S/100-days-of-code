import React from "react";

type Props = {
  id: string;
  type: string;
  label: string;
  value: string; // Make this a required prop to ensure it's controlled
  onChange: (id: string, value: string) => void; // Callback to pass the value to the parent
};

export const Input = ({ id, type, label, value, onChange }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: "0.5rem",
      }}
    >
      <label style={{ fontSize: "0.875rem", textAlign: "left" }} htmlFor={id}>
        {label}
      </label>
      <input
        style={{
          padding: "0.5rem",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(id, e.target.value)} // Handle change and pass back to parent
      />
    </div>
  );
};
