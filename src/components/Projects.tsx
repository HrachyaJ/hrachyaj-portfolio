import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import project1 from "/acme-dashboard.png";
import project2 from "/chat-to-pdf.png";
import project3 from "/next-pizza.png";
import project4 from "/amazon.png";
import project5 from "/agency-nextjs.png";
import project6 from "/ecom-react.png";
import project7 from "/pixel-grid.png";
import project8 from "/prandella.png";
import project9 from "/fight-fit.png";
import project10 from "/vibe.png";

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const allProjects = [
    {
      title: "Vibe - AI Website Builder",
      description:
        "A SaaS platform that enables users to create websites with a prompt, AI-powered code generation, website preview, and more.",
      image: project10,
      technologies: ["Next.js", "React", "Inngest", "Prisma"],
      liveUrl: "https://vibe-coding-dev.vercel.app/",
      githubUrl: "https://github.com/HrachyaJ/vibe",
    },
    {
      title: "Acme Finance Dashboard",
      description:
        "A comprehensive financial dashboard platform with real-time data visualization, user management, and ability to send invoices.",
      image: project1,
      technologies: ["Next.js", "React.js", "NextAuth", "Tailwind CSS"],
      liveUrl: "https://acme-dashboard-finance.vercel.app/",
      githubUrl: "https://github.com/HrachyaJ/nextjs-dashboard",
    },
    {
      title: "Chat with PDF AI",
      description:
        "An AI SaaS tool that allows you to upload PDF documents and ask any questions regarded to the file. Fast responses, Clean UI, User Authentication.",
      image: project2,
      technologies: ["Next.js", "Stripe", "Supabase", "Clerk"],
      liveUrl: "https://chat-with-pdf-app-nu.vercel.app/",
      githubUrl: "https://github.com/HrachyaJ/chat-with-pdf-app/",
    },
    {
      title: "Next Pizza",
      description:
        "A clone of a pizza delivery platform DodoPizza with product listing, filtering functionality, product searching, adding them to cart, and securely checking out.",
      image: project3,
      technologies: ["Next.js", "Prisma", "NextAuth", "JWT"],
      liveUrl: "https://next-pizza-site.vercel.app/",
      githubUrl: "https://github.com/HrachyaJ/next-pizza",
    },
    {
      title: "Amazon Clone",
      description:
        "A clone of the popular e-commerce platform Amazon, featuring product listings, a shopping cart functionality, and ability to place an order and track it.",
      image: project4,
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://amazon-hj.netlify.app/",
      githubUrl: "https://github.com/HrachyaJ/amazon",
    },
    {
      title: "Web Development Agency",
      description:
        "A professional website for a web development agency, showcasing services, portfolio, and client testimonials, designed to attract potential clients.",
      image: project5,
      technologies: ["React.js", "TypeScript", "TailwindCSS"],
      liveUrl: "https://wip-solutions.netlify.app/",
      githubUrl: "https://github.com/HrachyaJ/agency-website",
    },
    {
      title: "NextBuy - E-commerce Platform",
      description:
        "A modern e-commerce website built with React.js, featuring a user-friendly interface, product listings, and a secure checkout process.",
      image: project6,
      technologies: ["React", "TailwindCSS"],
      liveUrl: "https://react-app-delta-blue.vercel.app/",
      githubUrl: "https://github.com/HrachyaJ/react-app",
    },
    {
      title: "Pixel Grid - Collaborative Drawing App",
      description:
        "A fun and interactive pixel grid application where users can collaboratively draw and create pixel art in real-time.",
      image: project7,
      technologies: ["HTML5", "CSS3", "JavaScript", "Node.js"],
      liveUrl: "https://pixel-grid.onrender.com/",
      githubUrl: "https://github.com/HrachyaJ/pixel-grid",
    },
    {
      title: "Prandella Restaurant",
      description:
        "A functional restaurant website showcasing menu items, reservation options, and a vibrant design to attract food enthusiasts.",
      image: project8,
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      liveUrl:
        "https://hrachyaj.github.io/mywebsites-ai/restaurant-website.html",
      githubUrl:
        "https://github.com/HrachyaJ/mywebsites-ai/blob/main/restaurant-website.html",
    },
    {
      title: "FightFit Gym",
      description:
        "A bold and dynamic fitness website built for gyms and personal trainers, designed to showcase services, client testimonials, and a call-to-action for memberships.",
      image: project9,
      technologies: ["HTML3", "CSS3", "JavaScript", "Bootstrap"],
      liveUrl: "https://hrachyaj.github.io/mywebsites-ai/fightfit.html",
      githubUrl:
        "https://github.com/HrachyaJ/mywebsites-ai/blob/main/fightfit.html",
    },
  ];

  const displayedProjects = allProjects.slice(0, visibleProjects);

  const handleShowMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, allProjects.length));
  };

  const handleShowLess = () => {
    setVisibleProjects(3);
  };

  const handleLiveDemo = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleGithub = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="hero-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in
            full-stack development, UI/UX design, and problem-solving abilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <Card
              key={index}
              className="glass-card overflow-hidden group hover:scale-105 transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <Button
                    size="sm"
                    className="flex-1"
                    onClick={() => handleLiveDemo(project.liveUrl)}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleGithub(project.githubUrl)}
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          {visibleProjects < allProjects.length ? (
            <Button
              variant="outline"
              size="lg"
              className="hover:scale-105 transition-all duration-300"
              onClick={handleShowMore}
            >
              View More Projects
            </Button>
          ) : (
            <Button
              variant="outline"
              size="lg"
              className="hover:scale-105 transition-all duration-300"
              onClick={handleShowLess}
            >
              Show Less Projects
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
