import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              API Developer & Database Engineer 
            </h3>

            <p className="text-muted-foreground">
              I’m an API Developer & Database Engineer at Sagicor Innovation Lab, where I build scalable digital payment solutions like SwifPay, integrating CI/CD pipelines, AI, and secure transaction systems.
            </p>

            <p className="text-muted-foreground">
               My background includes hands-on roles as a Network Administrator and IT Technician, configuring servers, networks, and enterprise systems. Beyond work, I’ve built projects like a Python voice assistant integrated wth gemini AI and a MERN stack social media app, blending creativity with technical expertise to deliver seamless digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                  href="/JevaughnStewartResume.pdf"
                  download="Jevaughn-Stewart-Resume.pdf"
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  Download Resume
                </a>

            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> API & Backend Development</h4>
                  <p className="text-muted-foreground">
                    Building and optimizing APIs with secure, scalable architectures, CI/CD pipelines, and stored procedures.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Database Engineering</h4>
                  <p className="text-muted-foreground">
                    Designing efficient databases, migrating logic into stored procedures, and improving performance for high-traffic apps
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Systems & Network Administration</h4>
                  <p className="text-muted-foreground">
                    Hands-on experience with servers, Active Directory, VLANs, and enterprise infrastructure setup and troubleshooting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
