import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from 'react-icons/fa'; // Replaced Twitter with FaCode
import emailjs from '@emailjs/browser';


const Contact = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    title: 'Contact'
  });

const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);

  const emailData = {
    name: formData.name,
    email: formData.email,
    message: formData.message,
    title: `Message from ${formData.name}`,
  };

  console.log("Sending to EmailJS:", emailData);

  emailjs
    .send(
      'service_d2vhat7',
      'template_a2k0gpm', 
      emailData,           
      'dXlBl11MquFsaTHcK'       
    )
    .then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('✅ Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); 
        setLoading(false);
      },
      (err) => {
        console.error('FAILED...', err);
        alert('❌ Failed to send message. Please try again later.');
        setLoading(false);
      }
    );
};




  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub aria-label="GitHub" />,
      url: 'https://github.com/Vikashkrjsr15' 
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin aria-label="LinkedIn" />,
      url: 'https://linkedin.com/in/vikashjsr15'
    },
    {
      name: 'LeetCode',
      icon: <FaCode aria-label="LeetCode" />,
      url: 'https://leetcode.com/u/Vikashjsr15/'
    },
    {
      name: 'Email',
      icon: <FaEnvelope aria-label="Email" />,
      url: 'mailto:your.vikashkrjsr15@gmail.com'
    }
  ];

  return (
    <section id="contact" className="min-h-screen bg-gray-900 py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-pink-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project, question, or just want to connect? I'm happy to chat!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl transform -rotate-6"></div>
            <form
              onSubmit={handleSubmit}
              className="relative bg-gray-800/50 backdrop-blur-xl p-8 rounded-2xl border border-white/10"
            >
              <div className="mb-6">
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500"
                  placeholder="vikash@example.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500 resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-shadow relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-50 transition-opacity blur-xl"></span>
                <span className="relative">
  {loading ? 'Sending...' : 'Send Message'}
</span>

              </motion.button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-4">
                Connect With Me
              </h3>
              <p className="text-gray-400">
                You can find me on these platforms or just send an email.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 p-4 bg-gray-800/50 backdrop-blur-xl rounded-xl border border-white/10 text-white hover:bg-white/5 transition-colors group"
                >
                  <span className="text-2xl group-hover:animate-bounce">{link.icon}</span>
                  <span>{link.name}</span>
                </motion.a>
              ))}
            </div>

            <div className="bg-gray-800/50 backdrop-blur-xl p-6 rounded-xl border border-white/10">
              <h4 className="text-xl font-semibold text-white mb-2">
                Location
              </h4>
              <p className="text-gray-400">
                Jamshedpur, India<br />
                Open to remote opportunities worldwide
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
