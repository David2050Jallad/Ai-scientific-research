'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  BookOpen, 
  Target, 
  CheckCircle2,
  Brain,
  Lightbulb,
  Library,
  GitBranch,
  PenTool,
  ShieldCheck,
  GraduationCap,
  Users,
  MonitorPlay,
  Calendar,
  Clock,
  MapPin,
  Globe,
  Award,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
      
      {/* Navigation (Simple) */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-slate-900 font-serif font-bold text-xl">
            <BookOpen className="w-6 h-6 text-blue-600" />
            <span>AI in Research</span>
          </div>
          <a href="#register" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors">
            Register Now
          </a>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl opacity-50 z-0"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-emerald-50/50 rounded-full blur-3xl opacity-50 z-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6 border border-blue-100">
              <Sparkles className="w-4 h-4" />
              <span>Transformative Academic Training</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl font-serif font-bold text-slate-900 leading-tight mb-6">
              AI in Scientific Research
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-slate-600 font-light mb-4">
              From Research Ideas to Publication-Ready Outputs
            </motion.p>
            
            <motion.div variants={fadeIn} className="mb-8 p-4 bg-white rounded-xl border border-slate-200 inline-block shadow-sm">
              <p className="font-medium text-slate-900">Delivered by Dr. Ra’fat Jallad</p>
              <p className="text-sm text-slate-500">Dean of the Faculty of Business and Communication, An-Najah National University</p>
            </motion.div>

            <motion.p variants={fadeIn} className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl">
              This comprehensive course introduces researchers to practical AI tools and methods that improve literature review, research design, academic writing, data analysis, and publication preparation.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
              <a href="#register" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-transform hover:-translate-y-1 shadow-lg shadow-blue-600/20">
                Join the Course
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#about" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-full text-lg font-medium border border-slate-200 transition-colors">
                Learn More
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. About the Course */}
      <section id="about" className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">About the Course</h2>
            <p className="text-xl text-slate-600 leading-relaxed font-light">
              This course helps participants understand how to use AI <span className="font-medium text-blue-600 text-slate-800">responsibly and effectively</span> throughout the research process, while maintaining academic integrity, critical thinking, and methodological rigor.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. Course Objectives */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-12 text-center"
          >
            <Target className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
            <h2 className="text-3xl font-serif font-bold text-slate-900">Course Objectives</h2>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-x-8 gap-y-4 max-w-4xl mx-auto"
          >
            {[
              "Understand the role of AI in modern scientific research.",
              "Use AI tools to identify research gaps and refine research ideas.",
              "Support literature review, article screening, and synthesis.",
              "Improve research design, methodology, and conceptual framework development.",
              "Enhance academic writing, editing, and argumentation.",
              "Use AI tools ethically while avoiding plagiarism and overdependence.",
              "Prepare stronger manuscripts for academic publication."
            ].map((objective, idx) => (
              <motion.div key={idx} variants={fadeIn} className="flex gap-3 items-start">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 leading-relaxed">{objective}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Course Content / Modules */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-16 text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Course Modules</h2>
            <p className="text-slate-600">A structured, practical outline designed to guide you through every stage of AI-assisted academic research.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                color: "text-blue-500",
                bg: "bg-blue-50",
                title: "Module 1: Introduction to AI in Scientific Research",
                items: [
                  "What AI can and cannot do in research",
                  "Opportunities and limitations",
                  "Responsible use of AI in academia"
                ]
              },
              {
                icon: Lightbulb,
                color: "text-amber-500",
                bg: "bg-amber-50",
                title: "Module 2: AI for Research Idea Development",
                items: [
                  "Generating research topics",
                  "Refining research questions",
                  "Identifying research gaps",
                  "Building conceptual models"
                ]
              },
              {
                icon: Library,
                color: "text-indigo-500",
                bg: "bg-indigo-50",
                title: "Module 3: AI for Literature Review",
                items: [
                  "Searching and organizing literature",
                  "Summarizing academic papers",
                  "Comparing theories and findings",
                  "Supporting systematic and bibliometric reviews"
                ]
              },
              {
                icon: GitBranch,
                color: "text-emerald-500",
                bg: "bg-emerald-50",
                title: "Module 4: AI for Research Design and Methodology",
                items: [
                  "Choosing suitable research methods",
                  "Developing variables and hypotheses",
                  "Designing questionnaires and interview guides",
                  "Supporting quantitative and qualitative research"
                ]
              },
              {
                icon: PenTool,
                color: "text-purple-500",
                bg: "bg-purple-50",
                title: "Module 5: AI for Academic Writing",
                items: [
                  "Improving abstracts, introductions, and discussions",
                  "Enhancing clarity, coherence, and academic tone",
                  "Responding to reviewer comments",
                  "Preparing manuscripts for journal submission"
                ]
              },
              {
                icon: ShieldCheck,
                color: "text-rose-500",
                bg: "bg-rose-50",
                title: "Module 6: Ethics and Academic Integrity",
                items: [
                  "Responsible AI use",
                  "Citation and transparency",
                  "Avoiding fabricated references",
                  "Maintaining researcher judgment and originality"
                ]
              }
            ].map((module, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${module.bg} ${module.color}`}>
                  <module.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{module.title}</h3>
                <ul className="space-y-3">
                  {module.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                      <ChevronRight className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 & 6. Target Audience & Learning Outcomes (Split Section) */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-3xl font-serif font-bold">Target Audience</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Master’s & PhD Students",
                  "Academic Researchers",
                  "Faculty Members",
                  "Research Assistants",
                  "Early-Career Scholars",
                  "Professionals interested in research & publication"
                ].map((audience, idx) => (
                  <motion.div key={idx} variants={fadeIn} className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                    <span className="text-slate-300 font-medium">{audience}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-emerald-500/20 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-emerald-400" />
                </div>
                <h2 className="text-3xl font-serif font-bold">Learning Outcomes</h2>
              </div>
              <ul className="space-y-4">
                {[
                  "Apply AI tools across different stages of the research process.",
                  "Develop stronger research questions and academic arguments.",
                  "Conduct more efficient literature reviews.",
                  "Improve academic writing quality.",
                  "Use AI ethically and transparently in research.",
                  "Prepare a practical AI-supported research workflow."
                ].map((outcome, idx) => (
                  <motion.li key={idx} variants={fadeIn} className="flex gap-4 items-start">
                    <div className="bg-slate-800 p-2 rounded-full border border-slate-700 flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </div>
                    <span className="text-slate-300 pt-1 leading-relaxed">{outcome}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. Training Methodology */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-serif font-bold text-slate-900">Training Methodology</h2>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center">
              <BookOpen className="w-8 h-8 text-blue-500 mx-auto mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">Theoretical Foundations</h3>
              <p className="text-sm text-slate-600">Short, clear theoretical explanations covering AI concepts.</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center">
              <MonitorPlay className="w-8 h-8 text-blue-500 mx-auto mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">Live Demonstrations</h3>
              <p className="text-sm text-slate-600">Real-time walkthroughs of AI tools in research scenarios.</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center">
              <PenTool className="w-8 h-8 text-blue-500 mx-auto mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">Practical Exercises</h3>
              <p className="text-sm text-slate-600">Hands-on practice and AI prompt-writing exercises.</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center sm:col-span-2 md:col-span-1 md:col-start-2">
              <Users className="w-8 h-8 text-blue-500 mx-auto mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">Interactive Activities</h3>
              <p className="text-sm text-slate-600">Real research examples, individual and group activities.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. Trainer Profile */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 flex flex-col md:flex-row gap-10 items-center md:items-start"
          >
            <div className="w-40 h-40 flex-shrink-0 bg-blue-100 rounded-full border-4 border-white shadow-lg overflow-hidden flex justify-center items-end relative">
              {/* Fallback avatar if real image is not provided. A real image could be placed via Next/Image */}
              <div className="absolute inset-x-0 bottom-0 top-6 bg-blue-200 rounded-full flex justify-center items-start">
                 <div className="w-20 h-20 bg-slate-100 rounded-full mt-4 flex items-center justify-center border-4 border-blue-50 shadow-inner">
                    <span className="text-2xl font-bold text-blue-800 font-serif">RJ</span>
                 </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-2">Dr. Ra’fat Jallad</h2>
              <p className="text-blue-600 font-medium mb-6">Dean of the Faculty of Business and Communication, An-Najah National University • Professor of Finance</p>
              <p className="text-slate-600 leading-relaxed font-light">
                His academic and professional interests include financial technology, digital finance, risk management, valuation, green finance, sustainable development, and bibliometric analysis. He has extensive experience in teaching, research supervision, academic program development, and international research collaboration.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9. Course Information */}
      <section id="register" className="py-20 bg-blue-600 relative overflow-hidden">
        {/* Abstract Pattern */}
        <div className="absolute opacity-10 pointer-events-none inset-0"
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 2px, transparent 0)', backgroundSize: '40px 40px' }}
        ></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row"
          >
            {/* Info panel */}
            <div className="p-10 lg:p-14 lg:w-3/5">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">Course Details</h2>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="bg-blue-50 p-3 rounded-xl flex-shrink-0 self-start">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Date</p>
                    <p className="font-medium text-slate-900">[Insert Date]</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-blue-50 p-3 rounded-xl flex-shrink-0 self-start">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Time & Duration</p>
                    <p className="font-medium text-slate-900">[Insert Time]</p>
                    <p className="text-sm text-slate-500">[Insert Duration]</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-blue-50 p-3 rounded-xl flex-shrink-0 self-start">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Venue / Platform</p>
                    <p className="font-medium text-slate-900">[Insert Location or Online Platform]</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-blue-50 p-3 rounded-xl flex-shrink-0 self-start">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Language</p>
                    <p className="font-medium text-slate-900">[Insert Language]</p>
                  </div>
                </div>
                <div className="flex gap-4 sm:col-span-2">
                  <div className="bg-emerald-50 p-3 rounded-xl flex-shrink-0 self-start">
                    <Award className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Certification</p>
                    <p className="font-medium text-slate-900">Certificate of Participation</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA panel */}
            <div className="bg-slate-50 p-10 lg:p-14 lg:w-2/5 flex flex-col justify-center border-l border-slate-200">
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">Secure your spot</h3>
              <p className="text-slate-600 mb-8 italic">
                “Join this practical training course and learn how to transform AI from a simple writing assistant into a powerful research companion.”
              </p>
              <a href="[Insert Link]" className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all hover:shadow-lg focus:ring-4 focus:ring-blue-100 group">
                Register Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-center text-sm text-slate-500 mt-4">Places may be limited. Register early.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 text-center text-slate-400 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <p className="mb-4 font-serif text-lg text-slate-300">AI in Scientific Research</p>
          <p className="text-sm">&copy; {new Date().getFullYear()} Dr. Ra’fat Jallad. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
