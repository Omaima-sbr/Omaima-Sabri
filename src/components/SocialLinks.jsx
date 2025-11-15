import { useEffect } from "react";
import { Linkedin, Github, Mail, ExternalLink } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const socialLinks = [
  {
    name: "LinkedIn",
    displayName: "LinkedIn",
    subText: "Let's Connect",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/omaima-sabri-129396318/",
    color: "#0A66C2",
    gradient: "from-[#0A66C2] to-[#0077B5]",
    type: "primary",
  },
  {
    name: "Gmail",
    displayName: "Gmail",
    subText: "sabriomaima24@gmail.com",
    icon: Mail,
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=sabriomaima24@gmail.com",
    color: "#EA4335",
    gradient: "from-[#EA4335] to-[#FF6F61]",
    type: "secondary",
  },
  {
    name: "GitHub",
    displayName: "GitHub",
    subText: "@Omaima-sbr",
    icon: Github,
    url: "https://github.com/Omaima-sbr",
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]",
    type: "third",
  },
];

const SocialLinks = () => {
  const linkedIn = socialLinks.find((link) => link.type === "primary");
  const gmail = socialLinks.find((link) => link.type === "secondary");
  const github = socialLinks.find((link) => link.type === "third");

  useEffect(() => {
    AOS.init({ offset: 10 });
  }, []);

  const renderCard = (link, delay = 100) => {
    const Icon = link.icon; // 👈 Important : composant avec majuscule

    return (
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-between p-4 rounded-lg 
                   bg-white/5 border border-white/10 overflow-hidden
                   hover:border-white/20 transition-all duration-500"
        data-aos="fade-up"
        data-aos-delay={delay}
      >
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${link.gradient}`}
        />

        <div className="relative flex items-center gap-4">
          <div className="relative flex items-center justify-center">
            <div
              className="absolute inset-0 opacity-20 rounded-md transition-all duration-500 group-hover:scale-110 group-hover:opacity-30"
              style={{ backgroundColor: link.color }}
            />
            <div className="relative p-2 rounded-md">
              <Icon
                className="w-6 h-6 transition-all duration-500 group-hover:scale-105"
                style={{ color: link.color }}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">
              {link.displayName}
            </span>
            <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              {link.subText}
            </span>
          </div>
        </div>

        <ExternalLink className="relative w-5 h-5 text-gray-500 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-1" />
      </a>
    );
  };

  return (
    <div className="w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl">
      <h3
        className="text-xl font-semibold text-white mb-6 flex items-center gap-2"
        data-aos="fade-down"
      >
        <span className="inline-block w-8 h-1 bg-indigo-500 rounded-full"></span>
        Connect With Me
      </h3>

      <div className="flex flex-col gap-4">
        {renderCard(linkedIn, 100)}
        {renderCard(gmail, 200)}
        {renderCard(github, 300)}
      </div>
    </div>
  );
};

export default SocialLinks;
