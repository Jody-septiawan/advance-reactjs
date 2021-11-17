// create style here
const styles = {
  form: {
    margin: '15px 10px',
  },
  groupInput: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
  },
  input: {
    fontSize: '1rem',
    padding: '10px',
    backgroundColor: '#86e2d5',
    border: '1px solid #bfbfbf',
    borderRadius: '.25rem',
    color: '#fff',
  },
  button: {
    padding: '5px 20px',
    cursor: 'pointer',
    backgroundColor: '#2c82c9',
    border: 'none',
    borderRadius: '5px',
    color: '#fff',
  },
};

// create Form component
function Form() {
  return (
    <form style={styles.form}>
      <div style={styles.groupInput}>
        <label htmlFor="usernameInput" style={styles.label}>
          Username
        </label>
        <input
          id="usernameInput"
          type="text"
          placeholder="Type username here.."
          style={styles.input}
        />
      </div>
      <button style={styles.button}>Submit</button>
    </form>
  );
}

export default Form;
