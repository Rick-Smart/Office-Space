import React from "react";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import "./Style.css";
<<<<<<< HEAD
import { useStoreContext } from "../utils/GlobalState";
import { Link } from "react-router-dom";
=======
import {Link} from "react-router-dom"
>>>>>>> 741cb1ed8eadee22f2509168e4c3ba6ce45ae29b

function UserProfile({ name, jobTitle, userPic }) {
  // this will be how we decide what to view based on button click

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
      <ButtonGroup className="button-group" vertical>
        <Button
          style={{ backgroundColor: "rgb(3, 73, 94)" }}
          className="user-button"
          name="task"
        >
          <Link className="user-links" to="/home/taskscomponents">
            Tasks
          </Link>
        </Button>

        <Button
          style={{ backgroundColor: "rgb(3, 73, 94)" }}
          className="user-button"
          name="leads"
        >
          <Link className="user-links" to="/home/leadcomponents">
            Leads
          </Link>
        </Button>

        <Button
          style={{ backgroundColor: "rgb(3, 73, 94)" }}
          className="user-button"
          name="calendar"
        >
<<<<<<< HEAD
          <Link className="user-links" to="/home/email">
            Email
          </Link>
=======
          <Link className = "user-links" to="/home/calendarcomponents">Calendar</Link>
>>>>>>> 741cb1ed8eadee22f2509168e4c3ba6ce45ae29b
        </Button>
      </ButtonGroup>
    </Card>
  );
}

export default UserProfile;
