import React from "react";
import { Link } from "react-router-dom";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

import "./styles.css";
import models from "../../modelData/models";

/**
 * Define UserList, a React component showing list of users.
 */
function UserList() {
  const users = models.userListModel();

  return (
    <div>
      <Typography
        variant="h5"
        className="user-list-title"
        component={Link}
        to="/users"
        style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
      >
        Users
      </Typography>
      <List component="nav">
        {users.map((user) => (
          <React.Fragment key={user._id}>
            <ListItem
              button
              component={Link}
              to={`/users/${user._id}`}
              className="user-list-item"
            >
              <ListItemText primary={`${user.first_name} ${user.last_name}`} />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </div>
  );
}

export default UserList;
