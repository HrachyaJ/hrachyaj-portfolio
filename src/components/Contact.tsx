import { Card } from "@/components/ui/card";
import { Mail, MessageCircle, Github } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hrachjgshow@gmail.com",
      href: "mailto:hrachjgshow@gmail.com",
    },
    {
      icon: MessageCircle,
      title: "LinkedIn",
      value: "Hrachya J.",
      href: "https://www.linkedin.com/in/hrachya-jivaryan-744167326",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "Hrachya J.",
      href: "https://github.com/HrachyaJ",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Work <span className="hero-gradient">Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? I'm available for freelance
            projects, collaborations, and full-time opportunities. Let's discuss
            your next project!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in touch</h3>
              <p className="text-muted-foreground mb-8">
                I typically respond within 24 hours. Whether you have a question
                about my work, want to discuss a project, or just want to say
                hi, I'd love to hear from you!
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-5 rounded-lg bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group"
                >
                  <div className="p-2 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <Card className="glass-card p-8 h-fit">
            <h4 className="font-semibold mb-6 text-lg">Available for:</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Full-stack web applications</li>
              <li>• E-commerce platforms</li>
              <li>• API development & integration</li>
              <li>• UI/UX design & development</li>
              <li>• Website optimization</li>
              <li>• SaaS Tool development</li>
              <li>• Performance optimization</li>
              <li>• Landing Page development</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
