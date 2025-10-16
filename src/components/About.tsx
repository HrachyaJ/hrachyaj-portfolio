import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Code,
  Rocket,
  Users,
  Zap,
  Star,
  CheckCircle,
  Award,
  Target,
  Heart,
  Brain,
} from "lucide-react";
import { useState, useEffect } from "react";

const About = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState("journey");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            setVisibleCards((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll(".highlight-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      category: "Frontend",
      techs: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
      ],
      count: 6,
    },
    {
      category: "Backend",
      techs: ["Node.js", "Express.js", "REST APIs"],
      count: 3,
    },
    {
      category: "Database",
      techs: ["PostgreSQL", "MongoDB", "MySQL", "Prisma"],
      count: 5,
    },
    {
      category: "Tools",
      techs: ["Git", "Docker", "AWS", "Vercel", "Figma", "VS Code"],
      count: 6,
    },
  ];

  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code with modern best practices and comprehensive documentation",
      color: "from-blue-500 to-cyan-500",
      metrics: "95% Code Quality Score",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description:
        "Quick turnaround times without compromising on quality or attention to detail",
      color: "from-green-500 to-emerald-500",
      metrics: "24h Average Response",
    },
    {
      icon: Users,
      title: "Client Focus",
      description:
        "Understanding your needs and delivering exactly what you envision with regular updates",
      color: "from-purple-500 to-pink-500",
      metrics: "100% Client Satisfaction",
    },
    {
      icon: Zap,
      title: "Latest Tech",
      description:
        "Staying up-to-date with cutting-edge technologies and industry best practices",
      color: "from-yellow-500 to-orange-500",
      metrics: "Always Learning",
    },
  ];

  const achievements = [
    { icon: Star, label: "3+ Years Experience", value: "2022-Present" },
    { icon: CheckCircle, label: "Projects Completed", value: "20+" },
    { icon: Award, label: "Client Satisfaction", value: "100%" },
    { icon: Target, label: "On-Time Delivery", value: "98%" },
  ];

  const tabs = [
    { id: "journey", label: "My Journey", icon: Heart },
    { id: "philosophy", label: "Philosophy", icon: Brain },
    { id: "goals", label: "Goals", icon: Target },
  ];

  const tabContent = {
    journey: (
      <div className="space-y-4 text-slate-400">
        <p>
          Started coding at 13 with a curiosity about how websites work. What
          began as tinkering with HTML quickly evolved into a passion for
          full-stack development.
        </p>
        <p>
          Self-taught through online resources, documentation, and countless
          hours of building projects. I believe in learning by doing and
          constantly pushing the boundaries of what I can create.
        </p>
        <p>
          Today, I specialize in modern web technologies and have built
          applications used by hundreds of users. I'm always eager to take on
          new challenges and collaborate with other developers.
        </p>
      </div>
    ),
    philosophy: (
      <div className="space-y-4 text-slate-400">
        <p>
          I believe that great software is not just about writing code - it's
          about solving real problems and creating meaningful experiences for
          users.
        </p>
        <p>
          Every project is an opportunity to learn something new, whether it's a
          cutting-edge technology or a better way to structure code. I approach
          each challenge with curiosity and determination.
        </p>
        <p>
          Collaboration and continuous learning are at the heart of my
          development process. I value clean, maintainable code and
          user-centered design above all else.
        </p>
      </div>
    ),
    goals: (
      <div className="space-y-4 text-slate-400">
        <p>
          My goal is to become a well-rounded full-stack developer who can
          tackle any challenge and contribute to meaningful projects that make a
          difference.
        </p>
        <p>
          I'm constantly expanding my skill set, currently diving deeper into
          cloud architecture, DevOps practices, and exploring emerging
          technologies like AI/ML integration.
        </p>
        <p>
          In the long term, I aim to lead development teams and mentor other
          young developers who share the same passion for creating amazing
          software.
        </p>
      </div>
    ),
  };

  return (
    <section id="about" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Passionate about technology and problem-solving, I've been coding
            for over 3 years, building everything from small websites to complex
            web applications.
          </p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left side - Story */}
          <div className="space-y-8">
            {/* Tab navigation */}
            <div className="flex space-x-1 bg-slate-800/30 p-1 rounded-lg">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 flex-1 justify-center ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                      : "text-slate-400 hover:text-white hover:bg-slate-700/50"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="min-h-[240px]">
              <h3 className="text-2xl font-semibold text-white mb-6">
                {tabs.find((tab) => tab.id === activeTab)?.label}
              </h3>
              {tabContent[activeTab as keyof typeof tabContent]}
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 text-center hover:bg-slate-800/50 transition-all duration-300"
                >
                  <achievement.icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <div className="text-lg font-bold text-white">
                    {achievement.value}
                  </div>
                  <div className="text-sm text-slate-400">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <Card
                key={index}
                data-index={index}
                className={`highlight-card bg-slate-800/30 backdrop-blur-sm border-slate-700/50 p-6 hover:scale-105 transition-all duration-500 ${
                  visibleCards.includes(index)
                    ? "animate-slide-up"
                    : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} p-3 mb-4`}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2 text-white">{item.title}</h4>
                <p className="text-sm text-slate-400 mb-3">
                  {item.description}
                </p>
                <div className="text-xs text-blue-400 font-medium">
                  {item.metrics}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills section */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-center text-white">
            Technologies I Work With
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <Card
                key={index}
                className="bg-slate-800/30 backdrop-blur-sm border-slate-700/50 p-6 hover:bg-slate-800/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-white">
                    {skillGroup.category}
                  </h4>
                  <Badge
                    variant="secondary"
                    className="bg-slate-700/50 text-slate-300"
                  >
                    {skillGroup.count}
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.techs.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="border-slate-600 text-slate-300 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-400 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default About;
