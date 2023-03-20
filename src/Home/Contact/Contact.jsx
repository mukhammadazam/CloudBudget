import '../scss/main.scss';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

const Contact = () => {

    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className='container'>
        <div className='row contact d-flex align-items-center justify-content-between pt-5 pb-5'>
            <div className='col-md-6 col-12'>
                <div className='contact__main text-md-start text-center'>
                    <h3 className='contact__main--title'>Contact</h3>
                    <p className='contact__main--text'>Questions or concerns? Just fill out the form below and our support team will get back to you within 24 hours</p>
                </div>
                </div>  
            <div className='col-md-6 col-12 text-md-start text-center'>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="6"  controlId="validationCustom01">
          <Form.Label></Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label></Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="12" controlId="validationCustom03">
          <Form.Label></Form.Label>
          <InputGroup hasValidation>
            
            <Form.Control
              type="number"
              placeholder="Phone Number"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter your number.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Form.Select>
      <option>Select Service</option>
      <option value="1">Management skills</option>
      <option value="2">B2B and B2C</option>
      <option value="3">Consumer Behaviour</option>
    </Form.Select>
      <Form.Group className="mb-3 pt-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit" className='contact__button'>Submit form</Button>
    </Form>
            </div>
        </div>
    </div>
  )
}

export default Contact;