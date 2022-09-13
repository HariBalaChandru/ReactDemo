import React, { PureComponent, useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// class GetAllStudent extends PureComponent {
//   componentDidMount() {
//     this.refreshData();
//   }
// refreshData() {
//   fetch('http://localhost:3030/getAllStudents').then(e => e.json()).then(e => this.setState({ result: e }));
// }
// makeARow(data, ind) {
//   return (<Row key={ind}>
//     <Col xs={3}>{data.id}</Col>
//     <Col xs={3}>{data.name}</Col>
//     <Col xs={3}>{data.email}</Col>
//     <Col xs={3}>{data.mobile}</Col>
//   </Row>);
// }
//   render() {
//     return (
// <Container fluid="lg">
//   <Row><Col><Button onClick={() => this.refreshData()}>REFRESH</Button></Col></Row>
//   <Row>
//     <Col xs={3}>Id</Col>
//     <Col xs={3}>Name</Col>
//     <Col xs={3}>Email</Col>
//     <Col xs={3}>Mobile</Col>
//   </Row>
//   {this.state && this.state.result && this.state.result.map(this.makeARow)}
// </Container >
//     );
//   }
// }
function GetAllStudent() {
  const [result, changeResult] = useState([]);
  useEffect(() => {
    refreshData();
  }, []);
  const makeARow = (data, ind) => {
    return (<Row key={ind}>
      <Col xs={3}>{data.id}</Col>
      <Col xs={3}>{data.name}</Col>
      <Col xs={3}>{data.email}</Col>
      <Col xs={3}>{data.mobile}</Col>
    </Row>);
  }
  const refreshData = () => {
    fetch('http://localhost:3030/getAllStudents').then(e => e.json()).then(e => changeResult(e));
  }
  return (
    <Container fluid="lg">
      <Row><Col><Button onClick={() => refreshData()}>REFRESH</Button></Col></Row>
      <Row>
        <Col xs={3}>Id</Col>
        <Col xs={3}>Name</Col>
        <Col xs={3}>Email</Col>
        <Col xs={3}>Mobile</Col>
      </Row>
      {result && result.map(makeARow)}
    </Container >
  );
}

export default GetAllStudent;