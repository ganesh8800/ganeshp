
import { Card, CardContent } from '@/components/ui/card';
import { Code, Briefcase } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      category: "Java Full Stack Development",
      icon: Code,
      description: "Building robust web applications with Java technologies",
      technologies: ["Java", "Spring Framework", "REST APIs", "Database Design", "Backend Development"],
      color: "from-electric-blue to-electric-purple"
    },
    {
      category: "Web Design",
      icon: Briefcase,
      description: "Creating modern, responsive, and user-friendly interfaces",
      technologies: ["UI/UX Design", "Responsive Design", "Modern CSS", "User Experience", "Visual Design"],
      color: "from-electric-purple to-electric-pink"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My primary areas of focus and the technologies I'm passionate about
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 animate-slide-in-left">
          {skills.map((skill, index) => (
            <Card key={index} className="h-full hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${skill.color} mb-4`}>
                    <skill.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{skill.category}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </div>

                <div className="space-y-3">
                  {skill.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color}`}></div>
                      <span className="text-foreground font-medium">{tech}</span>
                    </div>
                  ))}
                </div>

                {/* Progress indicator */}
                <div className="mt-6 pt-6 border-t border-muted">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Proficiency Level</span>
                    <span className="text-sm font-semibold text-primary">Growing</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className={`h-2 rounded-full bg-gradient-to-r ${skill.color} w-3/4 transition-all duration-1000`}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center animate-fade-in">
          <h3 className="text-2xl font-semibold mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["HTML5", "CSS3", "JavaScript", "React", "Git", "MySQL", "Problem Solving", "Team Collaboration"].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-muted rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
