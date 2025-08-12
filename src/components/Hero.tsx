import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Eye,
  Send,
  MapPin,
  Calendar,
  Coffee,
} from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  const phrases = [
    "Full-Stack Developer",
    "SaaS developer",
    "Front End Developer",
    "React Developer",
    "Problem Solver",
    "Next.js Developer",
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    let currentIndex = 0;
    let isDeleting = false;

    const typeWriter = () => {
      if (!isDeleting && currentIndex <= currentPhrase.length) {
        setTypedText(currentPhrase.slice(0, currentIndex));
        currentIndex++;
      } else if (isDeleting && currentIndex >= 0) {
        setTypedText(currentPhrase.slice(0, currentIndex));
        currentIndex--;
      }

      if (currentIndex > currentPhrase.length) {
        setTimeout(() => {
          isDeleting = true;
        }, 2000);
      }

      if (currentIndex < 0) {
        isDeleting = false;
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        currentIndex = 0;
      }
    };

    const interval = setInterval(typeWriter, isDeleting ? 50 : 100);
    return () => clearInterval(interval);
  }, [currentPhraseIndex]);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Floating elements */}
        <div
          className="absolute w-20 h-20 rounded-full bg-blue-500/10 animate-pulse"
          style={{
            top: "20%",
            left: "10%",
            transform: `translate(${mousePosition.x * 0.01}px, ${
              mousePosition.y * 0.01
            }px)`,
          }}
        />
        <div
          className="absolute w-12 h-12 rounded-full bg-purple-500/15 animate-pulse"
          style={{
            top: "40%",
            right: "20%",
            animationDelay: "1s",
            transform: `translate(${mousePosition.x * -0.02}px, ${
              mousePosition.y * 0.015
            }px)`,
          }}
        />
        <div
          className="absolute w-16 h-16 rounded-full bg-pink-500/10 animate-pulse"
          style={{
            bottom: "30%",
            left: "25%",
            animationDelay: "2s",
            transform: `translate(${mousePosition.x * 0.015}px, ${
              mousePosition.y * -0.01
            }px)`,
          }}
        />
        <div
          className="absolute w-8 h-8 rounded-full bg-yellow-500/20 animate-pulse"
          style={{
            top: "60%",
            right: "15%",
            animationDelay: "3s",
            transform: `translate(${mousePosition.x * -0.01}px, ${
              mousePosition.y * 0.02
            }px)`,
          }}
        />

        {/* Grid pattern */}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-8xl font-bold leading-tight">
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                Hrachya
              </span>
              <span className="block text-white text-5xl md:text-7xl mt-2">
                {typedText}
                <span className="animate-pulse text-blue-400">|</span>
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Transforming ideas into high-performance web applications that drive
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-semibold">
              {" "}
              real business results{" "}
            </span>
            with React, Next.js, and cutting-edge technologies
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              onClick={() => scrollToSection("#projects")}
              size="lg"
              className="group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 border-0 shadow-xl hover:shadow-2xl px-8 py-4 text-lg font-medium transform hover:scale-105 transition-all duration-300"
            >
              <Eye className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection("#contact")}
              variant="outline"
              size="lg"
              className="group border-2 border-slate-600 text-white hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 hover:border-blue-400 px-8 py-4 text-lg font-medium transform hover:scale-105 transition-all duration-300"
            >
              <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          {/* <div className="flex justify-center space-x-6 pt-8">
            {[
              {
                icon: Github,
                href: "https://github.com/hrachya-j",
                label: "GitHub",
                color: "hover:text-gray-300",
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/hrachya-j",
                label: "LinkedIn",
                color: "hover:text-blue-400",
              },
              {
                icon: Mail,
                href: "mailto:hrachjgshow@gmail.com",
                label: "Email",
                color: "hover:text-red-400",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-4 rounded-full bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:bg-slate-700/50 hover:border-slate-600 transform hover:scale-110 transition-all duration-300 ${social.color}`}
                title={social.label}
              >
                <social.icon className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors duration-300" />
              </a>
            ))}
          </div> */}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-sm text-slate-400">Scroll to explore</span>
          <ArrowDown className="w-5 h-5 text-slate-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
