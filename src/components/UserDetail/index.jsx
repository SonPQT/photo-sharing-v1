import React from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  Button
} from "@mui/material";

import "./styles.css";
import { useParams } from "react-router-dom";
import models from "../../modelData/models";

/**
 * Define UserDetail, a React component showing user details.
 */
function UserDetail() {
  const { userId } = useParams();
  const user = models.userModel(userId);

  if (!user) {
    return (
      <Typography variant="h6" color="error">
        User not found
      </Typography>
    );
  }

  return (
    <div className="user-detail-container">
      <Card className="user-detail-card">
        <CardContent>
          <Typography variant="h4" className="user-name">
            {user.first_name} {user.last_name}
          </Typography>
          
          <Typography variant="h6" color="textSecondary" className="user-info">
            {user.occupation}
          </Typography>
          
          <Typography variant="body1" className="user-location">
            Location: {user.location}
          </Typography>
          
          <Typography variant="body1" className="user-description">
            {user.description}
          </Typography>

          <Button
            variant="contained"
            color="primary"
            component={Link}
            to={`/photos/${userId}`}
            className="view-photos-button"
          >
            View Photos
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default UserDetail;
