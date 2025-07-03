
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, Code, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Web Design",
      description: "I design modern, responsive websites that deliver clean user experiences.",
      features: [
        "Modern & Minimalistic Design",
        "Responsive Layouts",
        "User-Centered Approach",
        "Clean Visual Hierarchy",
        "Brand-Focused Solutions"
      ],
      color: "from-electric-blue to-electric-purple"
    },
    {
      icon: Code,
      title: "Java Full Stack Development",
      description: "Building robust web applications with modern Java technologies and frameworks.",
      features: [
        "Backend API Development",
        "Database Design & Management",
        "Spring Framework Expertise",
        "Frontend Integration",
        "Performance Optimization"
      ],
      color: "from-electric-purple to-electric-pink"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What I can offer as a passionate developer ready to make an impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 animate-slide-in-left">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${service.color} mb-4`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group hover:bg-primary hover:text-primary-foreground"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Me Section */}
        <div className="mt-16 animate-fade-in">
          <div className="bg-gradient-to-r from-electric-blue/5 to-electric-purple/5 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Why Work With Me?</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                As a fresh graduate ready to start my career, I bring enthusiasm, 
                dedication, and a strong willingness to learn and grow.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-electric-blue to-electric-purple rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="font-semibold mb-2">Quick Learner</h4>
                <p className="text-sm text-muted-foreground">
                  I adapt quickly to new technologies and methodologies
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-electric-purple to-electric-pink rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="font-semibold mb-2">Fresh Perspective</h4>
                <p className="text-sm text-muted-foreground">
                  I bring modern approaches and innovative thinking to projects
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-electric-pink to-electric-orange rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h4 className="font-semibold mb-2">Dedicated</h4>
                <p className="text-sm text-muted-foreground">
                  I'm committed to delivering quality work and continuous improvement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
