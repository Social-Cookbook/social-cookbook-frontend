import React from "react";

const Username = ({ username }) => {
  return (
    <div style={styles.container}>
      <p style={styles.usernameText}>{"@" + username}</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
  },
  usernameText: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
};

export default Username;

