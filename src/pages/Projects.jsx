import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

const projects = [
  {
    title: "Hotel Booking App (Wanderlust)",
    description: "A full-stack hotel and villa booking platform similar to Airbnb. Users can browse and list hotels or villas, with the ability to add comments and reviews for each property, enhancing the user experience and providing valuable feedback for other travelers.",
    image: "/portfolio/airbnb.png", // Use correct path
    link: "https://wanderlust-2rlr.onrender.com/listings",
    deploy: true,
    code: "https://github.com/Shams109000/wanderlustProject"
  },
  {
    title: "E-commerce Website",
    description: "A robust online store for buying and selling products. Features include user authentication, product search and filtering, sorting by categories and ratings, and cart functionality. Currently in development, with plans for deployment.",
    image: "/portfolio/ecommerce2.png", 
    link: "https://github.com/Shams109000/A-part-of-Ecommerce-Website-front-ned-", 
    backendLink: "https://github.com/Shams109000/A-part-of-Ecommerce-Website-back-end-", 
    deploy: false,
  },
  {
    title: "Tic Tac Toe Game",
    description: "A classic Tic Tac Toe game built with React. Users can play against themselves with dynamic board updates and a simple, interactive UI. This project showcases state management and basic animation effects.",
    image: "/portfolio/tic-tac-toe.png", 
    link: "https://github.com/Shams109000/tic-tac-toe",
    deploy: false,
  },
  {
    title: "Task Manager",
    description: "An application for managing personal tasks and boosting productivity. Features include task creation, updating, and deletion. This app uses local storage for data persistence and provides a clean UI for easy task tracking.",
    image: "/portfolio/task-manager.png", 
    link: "https://github.com/Shams109000/todo-list",
    deploy: false,
  },
  {
    title: "Zerodha Clone",
    description: "A clone of the popular trading platform Zerodha, designed to replicate its UI and core functionalities. This project focuses on the frontend, emulating Zerodha's intuitive interface and user flow, ideal for practicing frontend development.",
    image: "/portfolio/zerodha.png", 
    link: "https://github.com/Shams109000/zerodhaClone",
    deploy: false,
  }
];

const ProjectSection = () => {
  return (
    <section style={{ padding: "2rem 0" }}>
      <Typography variant="h4" align="center" className="mb-5" gutterBottom>
        My Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card
              elevation={3}
              sx={{
                background: "linear-gradient(135deg, #ffffff, #e3f2fd)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)"
                }
              }}
            >
              <CardMedia
                component="img"
                alt={project.title}
                width={"100%"}
                height="240" 
                image={project.image}
                sx={{ objectFit: "cover" }} 
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 16px 16px' }}>
                <Button
                  href={project.deploy ? project.link : project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ m: 1 }}
                  variant="contained"
                  color="primary"
                  aria-label={project.deploy ? `View ${project.title}` : `View code for ${project.title}`}
                >
                  {project.deploy ? "View Project" : "View Code"}
                </Button>
                {project.backendLink && (
                  <Button
                    href={project.backendLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ m: 1 }}
                    variant="contained"
                    color="primary"
                    aria-label={`View backend code for ${project.title}`}
                  >
                    View Backend Code
                  </Button>
                )}
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default ProjectSection;
