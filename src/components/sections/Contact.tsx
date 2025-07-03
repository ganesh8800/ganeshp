import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Linkedin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'service_7mxw4f7', // Service ID
        'template_yk0vd8s', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Ganesh', // Your name
        },
        'GqAO6IfF4loGpjCy5' // Public Key
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to Send Message",
        description: "There was an error sending your message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ganeshgani64853@gmail.com",
      href: "mailto:ganeshgani64853@gmail.com",
      color: "from-electric-blue to-electric-purple"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "9900008800",
      href: "tel:+919900008800",
      color: "from-electric-purple to-electric-pink"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/ganesh-p-076798267/",
      color: "from-electric-pink to-electric-orange"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start my career journey. Let's discuss how I can contribute to your team!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 animate-slide-in-left">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm actively seeking opportunities to start my career in web development. 
                Whether you have a job opening, want to discuss a project, or just want to connect, 
                I'd love to hear from you!
              </p>
            </div>

            {contactInfo.map((contact, index) => (
              <Card key={index} className="hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <a 
                    href={contact.href}
                    target={contact.label === 'LinkedIn' ? '_blank' : undefined}
                    rel={contact.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-4 group"
                  >
                    <div className={`p-3 rounded-full bg-gradient-to-r ${contact.color}`}>
                      <contact.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold group-hover:text-primary transition-colors">
                        {contact.label}
                      </h4>
                      <p className="text-muted-foreground group-hover:text-primary transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-electric-blue/10 to-electric-purple/10 rounded-xl p-6 mt-8">
              <h4 className="font-bold mb-2">Ready to Start!</h4>
              <p className="text-sm text-muted-foreground">
                I'm available for interviews and ready to begin immediately. 
                Let's discuss how my enthusiasm and skills can benefit your team.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about the opportunity or just say hello!"
                    rows={5}
                    className="w-full resize-none"
                    disabled={isSubmitting}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full electric-gradient text-white hover:opacity-90 transition-opacity"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
