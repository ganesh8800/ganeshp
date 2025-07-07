import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero = ({ onNavigate }: HeroProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 electric-gradient opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="relative w-48 h-48 mx-auto">
              <div className="absolute inset-0 electric-gradient rounded-full p-1">
                <img
                  src="https://i.postimg.cc/rF3X349Z/ganesh-p.jpg"
                  alt="GANESH P"
                  className="w-full h-full object-cover rounded-full bg-card"
                />
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-foreground mb-2">Hi, I'm</span>
            <span className="bg-gradient-to-r from-electric-blue via-electric-purple to-electric-pink bg-clip-text text-transparent">
              GANESH P
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Quick learner interested in a job in{' '}
            <span className="text-primary font-semibold">web design</span> and{' '}
            <span className="text-primary font-semibold">Java full stack development</span>
          </p>

          {/* Bio */}
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            I am a quick learner eager to grow in the tech industry. I'm passionate about building 
            modern web applications and designing clean, functional user experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => onNavigate('portfolio')}
              size="lg"
              className="electric-gradient text-white hover:opacity-90 transition-opacity px-8 py-3 text-lg font-semibold"
            >
              View My Work
            </Button>
            <Button
              onClick={() => onNavigate('contact')}
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg font-semibold border-2 hover:bg-primary hover:text-primary-foreground"
            >
              Contact Me
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onNavigate('about')}
            className="rounded-full"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
