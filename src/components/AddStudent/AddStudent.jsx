import React, { PureComponent } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

class AddStudent extends PureComponent {
  insertData() {
    const student = this.state;
    console.log(student);
    const headers = {
      method: "POST",
      body: JSON.stringify(student),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('http://localhost:3030/addStudent', headers).then(e => e.json()).then(e => console.log(e));
    alert("Successfully Inserted !!!");
  }
  displayData() {
    console.log(this.state);
  }
  render() {
    return (
      <Container fluid="lg">
        <Row>
          <Col xs={12}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
              <Form.Control
                placeholder="Name"
                aria-label="Name"
                aria-describedby="basic-addon1"
                onChange={e => this.setState({ name: e.target.value })}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
              <Form.Control
                placeholder="Email"
                aria-label="Email"
                aria-describedby="basic-addon1"
                onChange={e => this.setState({ email: e.target.value })}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Mobile</InputGroup.Text>
              <Form.Control
                placeholder="Mobile"
                aria-label="Mobile"
                aria-describedby="basic-addon1"
                onChange={e => this.setState({ mobile: e.target.value })}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row><Col><Button variant="primary" onClick={() => this.insertData()}>INSERT</Button></Col></Row>
      </Container >
    );
  }
}

export default AddStudent;