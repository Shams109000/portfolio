import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Typography, Box, Button } from "@mui/material";
import "../css/LandingPage.css";
import "../index.css";
import SkillsSection from "./SkillsSection";
import About from "./About";
import ProjectSection from "./Projects";

const LandingPage = () => {
  return (
    <Container fluid className="landing-page" style={styles.container}>
      <Row className="ms-1 p-3">
        <Col
          xs={12}
          lg={6}
          className="d-flex flex-column justify-content-center align-items-start"
        >
          <Typography variant="h3">MD SHAMS ALAM ANSARI</Typography>
          <Typography className="my-3" variant="h4">
            A Frontend Developer
          </Typography>

          <Typography className="mt-2" style={styles.description}>
            Crafting visually captivating, fast, and responsive websites that
            blend seamlessly across devices. With a strong foundation in HTML,
            CSS, JavaScript, and React, I turn ideas into engaging online
            experiences.
          </Typography>
          <Button
            href="/portfolio/resume.pdf" 
            download="MD_Shams_Alam_Ansari_Resume.pdf" 
            variant="contained"
            className="mt-2 mb-2"
            style={styles.button}
          >
            Download Resume
          </Button>
        </Col>
        <Col
          xs={12}
          lg={6}
          className="d-flex align-items-center text-start text-sm-center"
        >
          <Box
            component="img"
            src="../public/codingImage.webp" 
            alt="coding-themed illustration"
            loading="lazy" 
            sx={{
              width: { xs: "100%", md: "70%" },
              marginTop: { xs: "10px", md: 0 },
              borderRadius: { xs: "0%", md: "50%" },
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          />
        </Col>
      </Row>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <SkillsSection />
      </div>
      <div id="projects">
        <ProjectSection />
      </div>
    </Container>
  );
};

const styles = {
  container: {
    background: "linear-gradient(135deg, #f0f4f8, #c6e0f5)",
    minHeight: "100vh",
    paddingTop: "5rem",
    paddingBottom: "5rem",
    color: "#333",
  },
  description: {
    color: "#555",
    marginBottom: "2rem",
    maxWidth: "400px",
  },
  button: {
    backgroundColor: "#00796b",
    color: "#ffffff",
    padding: "0.5rem 1.5rem",
    border: "none",
    fontWeight: "bold",
    borderRadius: "5px",
  },
};

export default LandingPage;
