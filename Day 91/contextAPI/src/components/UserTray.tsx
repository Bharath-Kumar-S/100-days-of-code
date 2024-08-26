import React from "react";

export const UserTray = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: "1rem",
        textAlign: "left",
        border: "1px solid turquoise",
        padding: "2rem",
      }}
    >
      <div>Logout</div>
      <div>Settings</div>
      <div>Profile</div>
      <div>Help</div>
      <div>About</div>
    </div>
  );
};
