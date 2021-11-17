// import React Bootstrap components here
import { Form as FormBootstrap, Row, Col } from 'react-bootstrap';

// import css modules
import cssModules from './Form.module.css';

const styles = {
  form: {
    margin: '16px 20% 0',
  },
  formGroup: {
    marginBottom: '16px',
  },
  formLabel: {
    marginBottom: '8px',
    display: 'inline-block',
  },
  formInput: {
    display: 'block',
    width: '100%',
    padding: '.375rem .75rem',
    fontSize: '1rem',
    lineHeight: 1.5,
    color: '#212529',
    backgroundColor: '#fff',
    border: '1px solid #ced4da',
    borderRadius: '.25rem',
  },
};

function Form() {
  return (
    <div>
      <form style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="username" style={styles.formLabel}>
            Username
          </label>
          <input
            id="username"
            placeholder="Input username"
            style={styles.formInput}
          />
        </div>
        <div className={`${cssModules.formGroup} text-warning`}>
          <label htmlFor="email" className={cssModules.formLabel}>
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Input email"
            className={cssModules.formInput}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <select id="gender" className="form-select" defaultValue="Choose...">
            <option>Choose...</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <Row>
          <Col>
            <FormBootstrap.Group>
              <FormBootstrap.Label bg="primary">City</FormBootstrap.Label>
              <FormBootstrap.Control type="text" placeholder="City" required />
            </FormBootstrap.Group>
          </Col>
          <Col>
            <FormBootstrap.Group>
              <FormBootstrap.Label>State</FormBootstrap.Label>
              <FormBootstrap.Control type="text" placeholder="State" required />
            </FormBootstrap.Group>
          </Col>
        </Row>
      </form>
    </div>
  );
}

export default Form;