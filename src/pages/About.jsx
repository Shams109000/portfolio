import React from "react";
import { Container, Typography, Grid, Paper } from "@mui/material";
import { styled } from "@mui/system";

const AnimatedImage = styled("img")({
  width: "100%",
  height: "100%",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  transition: "transform 0.3s ease", // Apply zoom effect
  "&:hover": {
    transform: "scale(1.05)", // Zoom in on hover
  },
});

const ZoomContent = styled(Paper)({
  padding: "2rem",
  background: "linear-gradient(135deg, #f0f4f8, #c6e0f5)",
  height: "100%",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)", // Zoom in on hover
  },
});

const About = () => {
  return (
    <section style={{ padding: "2rem 0", background: "linear-gradient(135deg, #f0f4f8, #c6e0f5)" }}>
      <Container maxWidth="lg" sx={{ padding: "0 1rem" }}>
        <Typography variant="h4" align="center" className="pb-3" gutterBottom>
          About Me
        </Typography>
        <Grid container spacing={2} alignItems="stretch">
          <Grid item xs={12} md={6}>
            <AnimatedImage
              src="https://t4.ftcdn.net/jpg/05/90/45/35/360_F_590453560_ugMuPncnGYB6XnJqmC8xiPQx4eg3jmMD.jpg"
              alt="Portrait of MD Shams Alam Ansari"
              loading="lazy"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ZoomContent elevation={3}>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.6, fontSize: "1.1rem" }}>
                I am a Frontend Web Developer with a strong foundation in HTML, CSS, JavaScript, and React. I have experience in creating visually appealing and user-friendly web applications.
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.6, fontSize: "1.1rem" }}>
                Additionally, I have worked with Node.js and MongoDB to develop full-stack solutions and utilized Redux for efficient state management. I am passionate about solving real-world problems in web development and software engineering and eager to be part of a team that fosters learning and growth.
              </Typography>
            </ZoomContent>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default About;
