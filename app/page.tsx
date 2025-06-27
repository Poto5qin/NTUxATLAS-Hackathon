"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ChevronUp, Trophy, Calendar, Users, Target, Award, ExternalLink } from "lucide-react"

export default function HackathonPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqData = [
    {
      question: "What is the Reimagine Learning through Learning Analytics @ NTU Hackathon?",
      answer:
        "It's a collaborative hackathon between NTU and Imperial College London where students design innovative learning analytics solutions to empower self-aware learning using AI, learning sciences, and user interface design.",
    },
    {
      question: "Who can participate?",
      answer:
        "The hackathon is open to NTU students from all disciplines. Teams should preferably be interdisciplinary, with at least one member from CCDS.",
    },
    {
      question: "How do I register?",
      answer: "Register via the registration link attached above!",
    },
    {
      question: "What are the stages of the competition?",
      answer:
        "There are three stages: Ideation (workshops and proposal submission), Implementation (solution development with mentorship), and Presentation (student voting and final presentations at a joint conference).",
    },
    {
      question: "What skills or background do I need?",
      answer:
        "No prior hackathon experience is required. Participants from all backgrounds—learning sciences, AI, design, or tech—are welcome. Workshops will help you get started.",
    },
    {
      question: "How are winners selected?",
      answer:
        "Finalists are chosen based on proposal evaluation, solution implementation, and presentations. Both student votes and faculty judges contribute to the final decision.",
    },
    {
      question: "What do winners receive?",
      answer:
        "Top teams will present at a joint conference with Imperial College London and have their solutions considered for integration into NTU's NALA platform.",
    },
  ]

  const timelineEvents = [
    {
      date: "Week 1-2",
      title: "Registration & Team Formation",
      description: "Register for the hackathon and form interdisciplinary teams",
    },
    {
      date: "Week 3",
      title: "Ideation Workshops",
      description: "Attend workshops on learning analytics, AI, and design thinking",
    },
    {
      date: "Week 4",
      title: "Proposal Submission",
      description: "Submit your innovative learning analytics solution proposal",
    },
    {
      date: "Week 5-8",
      title: "Implementation Phase",
      description: "Develop your solution with mentorship and guidance",
    },
    {
      date: "Week 9",
      title: "Final Presentations",
      description: "Present your solution at the joint conference with Imperial College London",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="bg-indigo-800/50 backdrop-blur-sm border-b border-indigo-700/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-8">
              <a
                href="#home"
                className="text-white hover:text-indigo-200 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="#faq"
                className="text-white hover:text-indigo-200 px-3 py-2 text-sm font-medium transition-colors"
              >
                FAQ
              </a>
              <a
                href="#prizes"
                className="text-white hover:text-indigo-200 px-3 py-2 text-sm font-medium transition-colors"
              >
                Prizes
              </a>
              <a
                href="#sponsors"
                className="text-white hover:text-indigo-200 px-3 py-2 text-sm font-medium transition-colors"
              >
                Sponsors
              </a>
              <a
                href="#timeline"
                className="text-white hover:text-indigo-200 px-3 py-2 text-sm font-medium transition-colors"
              >
                Timeline
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Reimagine Learning through Learning Analytics @ NTU Hackathon
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-indigo-200 font-light">
                Empower students with AI-driven learning solutions
              </p>
              <p className="text-lg mb-8 text-indigo-100 leading-relaxed">
                Join us in collaboration with Imperial College London to innovate how students learn using AI, learning
                sciences, and analytics. Make a real impact on the NTU learning experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 text-lg"
                  onClick={() => window.open("https://forms.gle/your-registration-link", "_blank")}
                >
                  Register Now <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
                
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center text-white">
                  <Calendar className="h-16 w-16 mx-auto mb-4 text-indigo-300" />
                  <h3 className="text-2xl font-bold mb-4">Event Schedule</h3>
                  <p className="text-lg mb-2">Registration Open</p>
                  <p className="text-indigo-200">4th July 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About the Hackathon</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Since late 2024, NTU has been piloting Project NALA (NTU AI Learning Assistants) — a university-wide
                initiative to transform how students learn with AI. This hackathon challenges you to design analytics
                solutions that help students become self-aware learners, ask better questions, plan their learning, and
                visualize progress. In collaboration with Imperial College London, dive into learning science, design
                thinking, and AI innovation to support effective learning at NTU.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="bg-teal-500 rounded-full p-12">
                <div className="text-white text-6xl font-mono">{"{ / }"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Event Timeline</h2>
            <p className="text-xl text-gray-600">Key dates and milestones for the hackathon</p>
          </div>
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="bg-indigo-600 rounded-full p-3">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                          <p className="text-gray-600">{event.description}</p>
                        </div>
                        <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                          {event.date}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about the hackathon</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {faqData.map((faq, index) => (
              <Collapsible key={index} open={openFaq === index} onOpenChange={() => toggleFaq(index)}>
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-full p-6 h-auto text-left bg-indigo-100 hover:bg-indigo-200 rounded-lg border-none justify-between"
                  >
                    <span className="font-medium text-gray-900 pr-4 border-0">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    )}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="px-6 pb-6 pt-2">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section id="prizes" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Prize Section</h2>
            <p className="text-xl text-gray-600">Recognition and opportunities for outstanding teams</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-2 border-yellow-200 bg-gradient-to-b from-yellow-50 to-white">
              <Trophy className="h-16 w-16 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Top 3 Teams</h3>
              <p className="text-gray-700 mb-4">
                Winners will present their solutions at a joint conference with Imperial College London.
              </p>
              <div className="bg-yellow-100 rounded-lg p-4">
                <Award className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                <p className="text-sm text-yellow-800 font-medium">Conference Presentation</p>
              </div>
            </Card>
            <Card className="text-center p-8 border-2 border-blue-200 bg-gradient-to-b from-blue-50 to-white">
              <Target className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">NALA Integration</h3>
              <p className="text-gray-700 mb-4">
                Outstanding solutions will be considered for integration into NTU's NALA platform.
              </p>
              <div className="bg-blue-100 rounded-lg p-4">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm text-blue-800 font-medium">Real-world Impact</p>
              </div>
            </Card>
            <Card className="text-center p-8 border-2 border-purple-200 bg-gradient-to-b from-purple-50 to-white">
              <Users className="h-16 w-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Networking</h3>
              <p className="text-gray-700 mb-4">
                Connect with industry mentors, faculty, and peers from NTU and Imperial College London.
              </p>
              <div className="bg-purple-100 rounded-lg p-4">
                <ExternalLink className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <p className="text-sm text-purple-800 font-medium">Global Connections</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sponsors & Partners</h2>
            <p className="text-xl text-gray-600 mb-8">Supporting innovation in learning analytics</p>
            <Button
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700 text-white"
              onClick={() => window.open("mailto:sponsor@ntu.edu.sg", "_blank")}
            >
              Interested in Sponsoring? Contact Us
            </Button>
          </div>
          <div className="text-center text-gray-500 py-16">
            <p className="text-lg">Sponsor logos will be displayed here</p>
            <p className="text-sm mt-2">Contact us to become a sponsor and support student innovation</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Reimagine Learning Analytics @ NTU</h3>
            <p className="text-gray-300 mb-6">A collaboration between NTU and Imperial College London</p>
            <div className="flex justify-center space-x-6">
              <Button
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                onClick={() => window.open("https://forms.gle/your-registration-link", "_blank")}
              >
                Register Now
              </Button>
              <Button
                variant="ghost"
                className="text-gray-300 hover:bg-gray-800"
                onClick={() => window.open("mailto:info@ntu.edu.sg", "_blank")}
              >
                Contact Us
              </Button>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700">
              <p className="text-gray-400 text-sm">© 2025 Nanyang Technological University. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
