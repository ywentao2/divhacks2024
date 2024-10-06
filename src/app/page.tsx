"use client";
import React, { useState } from 'react'
import { Button } from "../components/ui/button"
import { Briefcase, Users, BarChart, Award, Moon, Sun, ChevronDown, Lightbulb, Puzzle, MessageCircle } from 'lucide-react'
import { Input } from "../components/ui/input"
import MyNavbar from './navbar';
import LoginPage from './login/page';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router';

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [email, setEmail] = useState('')


  const toggleFaq = (index: number | null) => {
    if (openFaq === index) {
      setOpenFaq(null)
    } else {
      setOpenFaq(index)
      setTimeout(() => setOpenFaq(index), 50);
    }
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    setEmail('')
    alert('Thank you for your interest! We\'ll be in touch soon.')
  }

  return (
    <>
    <div>
        <MyNavbar />
        <main>
          <section className="py-20 text-center">
            <h1 className="text-4xl md:text-6xl mb-6 font-sans">Diversity Matters. We're here for it.</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              NeuroTalent connects autistic and disabled professionals with inclusive employers, fostering a diverse and talented workforce.
            </p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:bg-opacity-90 text-lg px-8 py-3">
                Contact employers!
              </Button>
              <Button className="bg-gray-600 text-white dark:bg-gray-300 dark:text-gray-900 hover:bg-opacity-90 text-lg px-8 py-3">
                Company view
              </Button>
            </div>
          </section>

          <section id="how-it-works" className="py-20 bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Briefcase className="mx-auto h-12 w-12 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Create Your Profile</h3>
                  <p>Showcase your skills and preferences in a format that works for you.</p>
                </div>
                <div className="text-center">
                  <Users className="mx-auto h-12 w-12 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Connect with Employers</h3>
                  <p>Our matching algorithm finds employers that fit your unique talents.</p>
                </div>
                <div className="text-center">
                  <Award className="mx-auto h-12 w-12 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Thrive in Your Career</h3>
                  <p>Access resources and support to succeed in your new role.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="features" className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Key Features and Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FeatureCard
                  icon={<Lightbulb />}
                  title="Accessible Platform"
                  description="Our platform is designed with accessibility in mind, ensuring a smooth experience for all users." />
                <FeatureCard
                  icon={<Puzzle />}
                  title="Smart Matching"
                  description="Our algorithm connects talent with opportunities that match their unique skills and preferences." />
                <FeatureCard
                  icon={<BarChart />}
                  title="Privacy Control"
                  description="Job seekers have full control over their information and disability disclosure." />
                <FeatureCard
                  icon={<Users />}
                  title="Inclusive Hiring Guide"
                  description="Resources and guidance for employers on creating inclusive workplaces and hiring practices." />
                <FeatureCard
                  icon={<MessageCircle />}
                  title="Dedicated Support"
                  description="Our team provides personalized support for both job seekers and employers throughout the process." />
                <FeatureCard
                  icon={<Award />}
                  title="Success Tracking"
                  description="Track your progress, celebrate victories, and continuously improve your career journey." />
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-8">Join Our Mission</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                We're committed to empowering individuals, promoting inclusion, and driving positive social change. Join us in creating a more diverse and inclusive workforce.
              </p>
              <Button className="bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:bg-opacity-90 text-lg px-8 py-3">
                Get Involved
              </Button>
            </div>
          </section>

          <section id="faq" className="py-20 bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
              <div className="space-y-4 max-w-3xl mx-auto">
                <FaqItem
                  question="How does NeuroTalent ensure accessibility for all users?"
                  answer="Our platform is designed with WCAG guidelines in mind, featuring screen reader compatibility, keyboard navigation, and customizable display options. We continuously work with users to improve accessibility."
                  isOpen={openFaq === 0}
                  toggle={() => toggleFaq(0)} />
                <FaqItem
                  question="What kind of support do you offer to job seekers?"
                  answer="We provide personalized guidance on profile creation, interview preparation, and workplace accommodations. Our team is always available to address any concerns or questions throughout your job search journey."
                  isOpen={openFaq === 1}
                  toggle={() => toggleFaq(1)} />
                <FaqItem
                  question="How do you help employers create inclusive workplaces?"
                  answer="We offer resources, training modules, and personalized consultations to help employers understand and implement inclusive hiring practices, workplace accommodations, and supportive team environments."
                  isOpen={openFaq === 2}
                  toggle={() => toggleFaq(2)} />
                <FaqItem
                  question="Is there a cost to use NeuroTalent?"
                  answer="Job seekers can use our platform for free. Employers have various subscription options based on their hiring needs. We also offer a free trial for employers to experience the benefits of our platform."
                  isOpen={openFaq === 3}
                  toggle={() => toggleFaq(3)} />
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                Join NeuroTalent today and be part of a community that values diverse talents and perspectives.
              </p>
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-grow" />
                  <Button type="submit" className="bg-gray-900 text-white dark:bg-white dark:text-gray-900">
                    Sign Up
                  </Button>
                </div>
              </form>
            </div>
          </section>
        </main>

        <footer>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-xl font-bold">NeuroTalent</span>
              </div>
              <nav className="flex space-x-4 mb-4 md:mb-0">
                <a href="#features" className="hover:text-gray-500">Features</a>
                <a href="#faq" className="hover:text-gray-500">FAQ</a>
                <a href="/dashboard" className="hover:text-gray-500">Dashboard</a>
              </nav>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-500">Privacy Policy</a>
                <a href="#" className="hover:text-gray-500">Terms of Service</a>
              </div>
            </div>
            <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
              © 2023 NeuroTalent. All rights reserved.
            </div>
            <div className="mt-4 flex justify-center space-x-4">
              <a href="mailto:support@neurotalent.com" className="text-sm hover:text-gray-500">support@neurotalent.com</a>
              <a href="#" className="text-sm hover:text-gray-500">Twitter</a>
              <a href="#" className="text-sm hover:text-gray-500">LinkedIn</a>
              <a href="#" className="text-sm hover:text-gray-500">Facebook</a>
            </div>
          </div>
        </footer>
      </div></>
  )
}

function FeatureCard({ icon, title, description}: { icon: React.ReactElement, title: string, description: string }) {
  return (
    <div className={`flex flex-col items-center space-y-2 p-6 rounded-lg shadow-lg`}>
      <div className={`p-2 rounded-full`}>
        {React.cloneElement(icon, { className: ` h-8 w-8` })}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className={`text-center`}>
        {description}
      </p>
    </div>
  )
}

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}

function FaqItem({ question, answer, isOpen, toggle }: FaqItemProps) {
  return (
    <div className="p-4 rounded-lg shadow-md transition-all duration-500 ease-in-out">
      <button
        className="flex justify-between items-center w-full text-left transition-colors duration-500 ease-in-out"
        onClick={toggle}
      >
        <span className="font-semibold">{question}</span>
        <ChevronDown className={`h-5 w-5 transform transition-transform duration-500 ease-in-out ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="mt-2 transition-opacity duration-300 ease-in-out delay-100">
          {answer}
        </p>
      </div>
    </div>
  )
}
