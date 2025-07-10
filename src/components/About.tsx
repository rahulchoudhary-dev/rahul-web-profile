import { motion } from 'framer-motion';
import React from 'react';
import CountUp from 'react-countup';
import { highlights } from '../data/highlights';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions that bridge the gap between traditional
            development and AI-powered automation. With over 5 years of experience, I specialize in
            building scalable applications and intelligent workflows that drive business
            transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <item.Icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-gray-800 dark:to-gray-700 p-6 md:p-8 rounded-2xl shadow-lg text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-yellow-700 dark:text-yellow-400 mb-4">
            ⭐ Star Performer of the Year (2022–2023)
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Awarded by{' '}
            <span className="font-semibold text-gray-900 dark:text-white">
              Santophy Infotech Pvt. Ltd.
            </span>{' '}
            for exceptional contribution in delivering full-stack projects, leading automation
            workflows with n8n, and consistently exceeding performance expectations.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                My Journey
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Started my career as a passionate developer, quickly discovering the power of
                  automation and AI in solving complex business challenges. My expertise spans
                  across the entire technology stack, from database design to user interfaces.
                </p>
                <p>
                  What sets me apart is my deep understanding of n8n automation workflows combined
                  with traditional full-stack development skills. I've successfully architected and
                  delivered multiple enterprise-level applications that serve thousands of users.
                </p>
                <p>
                  Currently focused on building intelligent systems that not only perform well but
                  also adapt and learn from user interactions, making businesses more efficient and
                  competitive.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {/* 5+ */}
                  <CountUp end={5} duration={5} />+
                </div>
                <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">
                  <CountUp end={10} duration={5} />+
                </div>
                <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                  <CountUp end={7} duration={5} />
                </div>
                <div className="text-gray-600 dark:text-gray-300">Major Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  <CountUp end={150} duration={5} />+
                </div>
                <div className="text-gray-600 dark:text-gray-300">Automation Workflows</div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700 shadow-sm"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            🎓 Education
          </h3>
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-800 dark:text-white">
              Bachelor of Technology in Computer Science Engineering
            </p>
            <p className="text-gray-600 dark:text-gray-300">RGPV University, Bhopal</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">04/2017 – 01/2021</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
