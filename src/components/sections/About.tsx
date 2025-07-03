
import { Card, CardContent } from '@/components/ui/card';
import { User, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, education, and aspirations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 animate-slide-in-left">
          {/* Personal Info Card */}
          <Card className="h-full">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/10 rounded-lg mr-4">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Personal Info</h3>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate and motivated individual with a strong drive to excel in the tech industry. 
                  As a quick learner, I thrive on challenges and am always eager to expand my knowledge and skills.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My approach to problem-solving is methodical and creative, always looking for the most 
                  efficient and elegant solutions. I believe in the power of clean code and user-centered design.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I'm excited about the opportunity to contribute to innovative projects and grow alongside 
                  experienced professionals in a dynamic work environment.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Education Card */}
          <Card className="h-full">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/10 rounded-lg mr-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-xl font-semibold mb-2">Bachelor's of Engineering</h4>
                  <p className="text-primary font-medium mb-2">AMC Engineering College</p>
                  <p className="text-muted-foreground mb-2">Expected Graduation: 2025</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Currently pursuing my engineering degree with a focus on building strong 
                    foundational knowledge in software development and engineering principles.
                  </p>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-primary">Key Strengths</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Quick learner with strong adaptability</li>
                    <li>• Motivated and ready for first job opportunity</li>
                    <li>• Passionate about modern web technologies</li>
                    <li>• Committed to continuous improvement</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
