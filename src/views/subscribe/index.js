import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavBar from "../../components/navBar";
import { subscribeReq } from "../../api";
import { useNavigate, useSearchParams } from 'react-router-dom';

import "../../css/subscribe.css";

function Subscribe() {
  const [user,setUser] = useState({
    name  : "",
    email : "",
  });
  const [err,setErr]     = useState(null);
  const [queryParams]    = useSearchParams();
  const navigate         = useNavigate();

  const Submit = () => {
    var data = {...user};

    if(data.name.length > 0 && data.email.length > 0){
      
      var ref_link = queryParams.get("ref_link");
      if(ref_link){
        data['referral_link'] = ref_link;
      }
      
      subscribeReq(data).then((res)=>{
        if(res.status === 200){
            //TODO : Add email to the global context
            navigate("/my/subscription");
        }
        else {
            setErr(res.data.data);
        }
        }).catch((e)=>{
          if(e.response.data.data){
            setErr(e.response.data.data);
          } 
          else {
            setErr('something went wrong');
          }
        });
    } 
    else {
      setErr('please fill all the required fields');
    }
  };

  return (
    <div>
      <NavBar />
      <div className="subscribe-container">
        <Form className="subscribe-form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full name</Form.Label>
            <Form.Control
              type="text"
              placeholder="your name"
              style={{ borderColor: "#000" }}
              onChange={(e)=>{
                setUser({
                  ...user,
                  name : e.target.value
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="example@email.com"
              style={{ borderColor: "#000" }}
              onChange={(e)=>{
                setUser({
                  ...user,
                  email : e.target.value
                });
              }}
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
                e.preventDefault();
                Submit();
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
