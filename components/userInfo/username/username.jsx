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
    textAlign: 'left',
  },
  usernameText: {
    fontSize: '24px',
    fontWeight: 'bold',
		marginLeft: '1.5rem',
  },
};

export default Username;

