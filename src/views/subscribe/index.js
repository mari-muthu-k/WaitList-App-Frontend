import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavBar from "../../components/navBar";

import "../../css/subscribe.css";

function Subscribe() {
  const [email,setEmail] = useState("");
  const [err,setErr]     = useState(null);

  const Submit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <NavBar />
      <div className="subscribe-container">
        <Form className="subscribe-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="example@email.com"
              style={{ borderColor: "#000" }}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
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
            Subscribe
          </Button>
        </Form>
      </div>
    </div>
  );
}
export default Subscribe;
