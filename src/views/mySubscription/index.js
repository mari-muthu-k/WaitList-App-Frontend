import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavBar from "../../components/navBar";


import welcomeImg from "../../img/welcome.png";

function Subscribe() {
  const [email,setEmail] = useState("");
  const [err,setErr]     = useState(null);
  const [myStatus,setStatus] = useState({
    fetched : false,
    id   : null,
    name : null,
    position : null,
    coupon:null
  });

  const Submit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <NavBar />
      <div style={{width:"100%",height:"100%"}}>
        <Form style={{
           width:"25%",
           margin:"10% auto 0 auto",
           padding:"20px"
        }}>
          {
            (myStatus?.fetched) ? 
            <>
            <div style={{textAlign:"center"}}>
              <img src={welcomeImg} style={{width:"100%"}}/>
              <h3 style={{fontWeight:"bold"}}>Welcome {myStatus.name}, Your current position is <span style={{textDecoration:"underline"}}>{myStatus.position}</span></h3>
            </div>
            </>
            :
            <>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="example@email.com"
              style={{ borderColor: "#000" }}
            />
          </Form.Group>
          {
            (err !== null) && 
            <span className="error mb-2">{err}</span>
          }
          <Button
            variant="dark"
            type="submit"
            className="w-100 rounded-0"
            style={{ backgroundColor: "#000" }}
            onClick={(e)=>{
                Submit(e);
            }}
          >
            Get my status
          </Button>
            </>
          }
        </Form>
      </div>
    </div>
  );
}
export default Subscribe;
