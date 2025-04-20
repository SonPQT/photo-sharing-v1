import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";

import "./styles.css";
import models from "../../modelData/models";

/**
 * Define TopBar, a React component showing app header and context.
 */
function TopBar() {
  const location = useLocation();
  const params = useParams();

  const getContextText = () => {
    if (!params.userId) return null;

    const user = models.userModel(params.userId);
    if (!user) return null;

    const fullName = `${user.first_name} ${user.last_name}`;
    
    if (location.pathname.includes('/photos/')) {
      return `Photos of ${fullName}`;
    } else if (location.pathname.includes('/users/')) {
      return fullName;
    }
    return null;
  };

  const contextText = getContextText();

  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar className="toolbar">
        <Typography variant="h6" color="inherit" className="author-name">
          by Phi Son
        </Typography>
        {contextText && (
          <Typography variant="h6" color="inherit" className="context-text">
            {contextText}
          </Typography>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
