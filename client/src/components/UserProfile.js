import React from "react";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import "./Style.css";
import { useStoreContext } from "../utils/GlobalState";
import {Link} from "react-router-dom"

function UserProfile({ name, jobTitle, userPic }) {
  // this will be how we decide what to view based on button click
  // eslint-disable-next-line
  const [state, dispatch] = useStoreContext();

  const handleView = (name) => {
    dispatch({
      type: "CHANGE_VIEW",
      payload: name,
    });
  };

  return (
    <Card className="user-profile-card">
      <Card.Img
        style={{
          margin: "20px auto",
          width: "90%",
          borderRadius: "5px",
        }}
        className="image-styles"
        variant="top"
        src="https://i.pinimg.com/564x/98/6d/39/986d39470fae3b16f0ae38b551267367.jpg"
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{jobTitle}</Card.Text>
      </Card.Body>
      <ButtonGroup vertical>
      <Link to="/home/taskscomponents">Tasks</Link>
        <Button
          style = {{backgroundColor: "rgb(48, 61, 129)"}}
          className="user-button"
          name="task"
          onClick={(e) => {
            handleView(e.target.name);
          }}
        >
          <Link className = "user-links" to="/taskscomponents">Tasks</Link>
        </Button>
        <Link to="/home/leadcomponents">Leads</Link>
        <Button
        style = {{backgroundColor: "rgb(48, 61, 129)"}}
          className="user-button"
          name="leads"
          onClick={(e) => {
            handleView(e.target.name);
          }}
        >
          <Link className = "user-links" to="/leadcomponents">Leads</Link>
        </Button>

        <Button
        style = {{backgroundColor: "rgb(48, 61, 129)"}}
          className="user-button"
          name="email"

          // onClick={(e) => {
          //   handleView(e.target.name);
          // }}
        >
          <Link className = "user-links" to="/email">Email</Link>
        </Button>
      </ButtonGroup>
    </Card>
  );
}

export default UserProfile;
