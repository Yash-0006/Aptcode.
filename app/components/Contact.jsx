"use client";
import { useEffect, useState } from "react";

export default function Contact() {
  const [isMobile, setIsMobile] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  useEffect(() => {
    const checkIfMobile = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      // Get environment variables
      const accessKey = process.env.NEXT_PUBLIC_FORM_ACCESS_KEY;
      const contactEmail ='contact@aptcode.in';

      if (!accessKey) {
        console.error('Web3Forms access key not configured');
        throw new Error('Configuration error');
      }

      // Create email content
      const emailSubject = `New Contact Form Submission from ${formData.name}`;

      // Use Web3Forms
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', accessKey);
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('company', formData.company || '');
      formDataToSend.append('message', formData.message);
      formDataToSend.append('subject', emailSubject);
      formDataToSend.append('from_name', 'AptCode Contact Form');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        // Show success animation
        setIsSubmitted(true);
        setFormData({ name: '', email: '', company: '', message: '' });
        
        // Reset success state after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
      
    } catch (error) {
      console.error('Failed to send email:', error);
      
      // Fallback to mailto if service fails
      const contactEmail ='contact@aptcode.in';
      const emailSubject = `Contact Form: ${formData.name} - ${formData.company || 'New Inquiry'}`;
      const emailBody = `New Contact Form Submission:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not specified'}

Message:
${formData.message}

---
This email was sent from the contact form on aptcode.in`;

      const mailtoLink = `mailto:${contactEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;
      
      // Show success animation anyway
      setTimeout(() => {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', company: '', message: '' });
        
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
            Get In Touch
          </h2>
          <p className="text-xl text-white/90 mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
            Ready to start your next project? Let's discuss how we can help bring your ideas to life.
          </p>

          {/* Minimal Success Message */}
          {isSubmitted && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm">
              <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-xl p-8 text-center max-w-sm mx-4">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full border border-green-400/50 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-white text-lg font-medium">Message sent successfully</p>
              </div>
            </div>
          )}

          {/* Contact Form */}
          <div className="text-left max-w-2xl mx-auto mb-16">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/80 transition-colors text-lg"
                    placeholder="Your Name *"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/80 transition-colors text-lg"
                    placeholder="Email Address *"
                  />
                </div>
              </div>

              {/* Company Field */}
              <div>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/80 transition-colors text-lg"
                  placeholder="Company (Optional)"
                />
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/80 transition-colors text-lg resize-none"
                  placeholder="Tell us about your project... *"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4 flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-block px-8 py-4 border-2 border-white/80 text-white font-bold text-lg rounded-full transition-all ${
                    isSubmitting 
                      ? "opacity-50 cursor-not-allowed" 
                      : isMobile
                      ? ""
                      : "hover:scale-105 hover:bg-white/10"
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}