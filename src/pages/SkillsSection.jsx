import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

// Update the skills array with image URLs
const skills = [
  { name: "HTML", image: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png" },
  { name: "CSS", image: "https://images.javatpoint.com/csspages/images/css-tutorial.png" },
  { name: "Bootstrap", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png" },
  { name: "JavaScript", image: "https://quintagroup.com/cms/js/js-image/javascript-logo.png" },
  { name: "React JS", image: "https://miro.medium.com/v2/resize:fit:1000/1*Yafu7ihc1LFuP4azerAa4w.png" },
  { name: "Redux", image: "https://avatars.githubusercontent.com/u/13142323?v=4" },
  { name: "MUI", image: "https://svgmix.com/uploads/5b99f5-material-ui.svg" },
  { name: "Node JS", image: "https://images.credly.com/images/51aeb74b-ec87-4069-93fc-0ea449c8d77f/node.png" },
  { name: "MongoDB", image: "https://camo.githubusercontent.com/e2219317cf5e191a42545b0e3ebff6e0a11887ab6e233fbd6833a43d914af9bc/68747470733a2f2f7777772e646573757669742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032312f30332f6d6f6e676f64622d69636f6e2e706e67" },
];

// Wrap the component with React.memo
const SkillsSection = React.memo(() => {
  return (
    <section style={{ padding: "2rem 0" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Skills
      </Typography>
      <Grid container spacing={2}>
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              elevation={3}
              sx={{
                textAlign: "center",
                background: "linear-gradient(135deg, #f0f4f8, #c6e0f5)",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.1)", 
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)", 
                },
                marginBottom: "1.5rem", 
              }}
            >
              <CardContent>
                <img
                  src={skill.image}
                  alt={`${skill.name} logo`} 
                  loading="lazy"
                  style={{
                    width: "70px", 
                    height: "70px", 
                    marginBottom: "1rem",
                  }}
                />
                <Typography variant="h6" sx={{ color: "#333" }}>{skill.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
});

export default SkillsSection;
