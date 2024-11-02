import React from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#00796b", color: "#ffffff", p: 3, mt: "auto" }}>
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Typography variant="h6" gutterBottom>
          My Portfolio
        </Typography>
        <Typography variant="body2" gutterBottom>
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </Typography>
        <Box>
          <IconButton
            href="https://www.linkedin.com/in/md-shams-alam-ansari-28b458189/?trk=public-profile-join-page"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            href="https://github.com/Shams109000"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            href="https://www.instagram.com/accounts/login/"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
