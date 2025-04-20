import React from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid
} from "@mui/material";

import "./styles.css";
import { useParams } from "react-router-dom";
import models from "../../modelData/models";

/**
 * Define UserPhotos, a React component showing user's photos and comments.
 */
function UserPhotos() {
  const { userId } = useParams();
  const photos = models.photoOfUserModel(userId);
  const user = models.userModel(userId);

  if (!photos || !user) {
    return (
      <Typography variant="h6" color="error">
        Photos not found
      </Typography>
    );
  }

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="photos-container">
      <Typography variant="h4" className="photos-title">
        Photos of {user.first_name} {user.last_name}
      </Typography>
      
      <Grid container spacing={4}>
        {photos.map((photo) => (
          <Grid item xs={12} key={photo._id}>
            <Card className="photo-card">
              <CardMedia
                component="img"
                src={require(`../../images/${photo.file_name}`)}
                alt={`Photo by ${user.first_name}`}
                className="photo-image"
              />
              
              <CardContent>
                <Typography variant="body2" color="textSecondary" className="photo-date">
                  Posted on {formatDate(photo.date_time)}
                </Typography>

                <div className="comments-section">
                  <Typography variant="h6" className="comments-title">
                    Comments
                  </Typography>
                  
                  {photo.comments && photo.comments.map((comment) => (
                    <div key={comment._id} className="comment">
                      <Typography variant="body2" className="comment-header">
                        <Link to={`/users/${comment.user._id}`} className="comment-user">
                          {comment.user.first_name} {comment.user.last_name}
                        </Link>
                        <span className="comment-date">
                          {formatDate(comment.date_time)}
                        </span>
                      </Typography>
                      
                      <Typography variant="body1" className="comment-text">
                        {comment.comment}
                      </Typography>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default UserPhotos;
