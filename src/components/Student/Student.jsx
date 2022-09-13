import React, { PureComponent } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import AddStudent from '../AddStudent/AddStudent';
import GetAllStudent from '../GetAllStudents/GetAllStudent';
import './Student.css';
import UpdateStudent from '../UpdateStudent/UpdateStudent';

class Student extends PureComponent {
  render() {
    return (
      <Container fluid="lg">
        <Row>
          <Col xs={12}>
            <Card>
              <Card.Body>
                <Card.Title className='card-header'>STUDENT PORTAL</Card.Title>
                <Card.Text>
                  <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                  >
                    <Tab eventKey="addStudents" title="Add Students">
                      <AddStudent />
                    </Tab>
                    <Tab eventKey="updateStudent" title="Update Student">
                      <UpdateStudent />
                    </Tab>
                    <Tab eventKey="getAllStudent" title="View Students">
                      <GetAllStudent />
                    </Tab>
                  </Tabs>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container >
    );
  }
}

export default Student;