import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



function User(props){
  const userD=props.userdetails;
  const ondelete=props.ondelete;
 // console.log(userD);
    return(
        <Card style={{border:"3px solid black",margin:"5px" ,  maxHeight:"100vh",maxWidth:"40vh", width: '18rem' }}>
        <Card.Img style={{maxHeight:'20vh'}}variant="top" src={userD.image} />
        <Card.Body style={{maxHeight:"130vh"}}>
          <Card.Title>
            {userD.firstName +" "+userD.lastName}
          </Card.Title>
          <Card.Text style={{fontWeight:"bold"}}>
            {
               "AdiSree Ltd"
               }
            
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush" style={{maxHeight:'80vh'}}>
          <ListGroup style={{}}>Company: {userD.company.name} </ListGroup>
          <ListGroup.Item>Department : {userD.company.department} </ListGroup.Item>
          <ListGroup.Item>birthDate: {userD.birthDate}</ListGroup.Item>
          <ListGroup.Item>Gender: {userD.gender}</ListGroup.Item>
         
        </ListGroup>
        <Card.Body style={{maxHeight:"12vh" }}>
          <Card.Link href="#">bloodgroop: {userD.bloodGroup}</Card.Link>
          <Button onClick={()=>ondelete(userD.id)} variant="primary">Delete</Button>
        </Card.Body>
      </Card>
    );
}

export default User
