'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, Mail, Phone, Briefcase, GraduationCap, Award, Code } from 'lucide-react'
import Image from 'next/image'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Section 1: Presentation */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-10"></div>
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-10 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src="/profile-image.jpeg"
                  alt="Johan Aguilar"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
                Johan Ricardo Aguilar Perez
              </h1>
              <p className="text-2xl md:text-3xl text-gray-600 mb-8 font-light">
                Software Engineering Student
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>Mérida, Yucatán, México</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span>johanaguilarperezz@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span>+52 999-390-2946</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Education */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50 to-transparent opacity-50"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Education
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Academic background and specialized training
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-2xl hover:shadow-3xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="pb-6">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl md:text-3xl text-gray-900 mb-3">
                      Bachelor's Degree in Software Engineering
                    </CardTitle>
                    <p className="text-lg font-semibold text-blue-600 mb-2">
                      Universidad Autónoma de Yucatán
                    </p>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>August 2022 - January 2027</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">91.22/100</div>
                    <div className="text-sm text-gray-500">GPA</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    Key Modules
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <Badge className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-800 border border-blue-200 hover:shadow-md transition-all duration-200">
                      Data Structures
                    </Badge>
                    <Badge className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-800 border border-blue-200 hover:shadow-md transition-all duration-200">
                      Object-Oriented Programming
                    </Badge>
                    <Badge className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-800 border border-blue-200 hover:shadow-md transition-all duration-200">
                      Discrete Mathematics
                    </Badge>
                    <Badge className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-800 border border-blue-200 hover:shadow-md transition-all duration-200">
                      Calculus
                    </Badge>
                    <Badge className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-800 border border-blue-200 hover:shadow-md transition-all duration-200">
                      Linear Algebra
                    </Badge>
                  </div>
                </div>
                
                <div className="border-t pt-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    Relevant Course
                  </h4>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="font-bold text-lg text-gray-900">Oracle Academy Mentorship</p>
                        <p className="text-purple-600 font-medium">Oracle</p>
                      </div>
                      <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
                        Sep 2024 - Nov 2024
                      </Badge>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Enhanced soft skills focusing on building effective relationships, gaining insights into goal-setting and leadership, daily challenges, and formulating a personal life plan.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 3: Experience */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100 via-pink-50 to-blue-100 opacity-30"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Experience
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional work, academic projects, and volunteer services
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-2">
            {/* Work Experience */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                Work Experience
              </h3>
              
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-blue-50 hover:scale-105 transform">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl text-gray-900 mb-2">
                        Project Manager Intern
                      </CardTitle>
                      <p className="text-blue-600 font-semibold">WAYAKNA</p>
                    </div>
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
                      May 2025 - Nov 2025
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Oversaw tasks, deliverables, agreements, and planning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Developed executive and client presentations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Provided project closure feedback to drive efficiency</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-purple-50 hover:scale-105 transform">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl text-gray-900 mb-2">
                        IT Support Assistant
                      </CardTitle>
                      <p className="text-purple-600 font-semibold">Computer Center, Mathematics Faculty</p>
                    </div>
                    <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
                      Jun 2024 - Sep 2024
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Organized NASA conferences for 30 attendees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Cloned and configured new computers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Increased equipment availability by 15%</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Projects & Services */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                Projects & Services
              </h3>
              
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-green-50 hover:scale-105 transform">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl text-gray-900 mb-2">
                        CRUD Seafood Trace
                      </CardTitle>
                      <p className="text-green-600 font-semibold">Academic Project</p>
                    </div>
                    <Badge className="bg-gradient-to-r from-green-600 to-blue-600 text-white border-0">
                      OOP Project
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Developed solution for local enterprise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Created inventory system with RFID technology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Implemented using Java with Spring framework</span>
                    </li>
                  </ul>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="border-green-300 text-green-700">Java</Badge>
                    <Badge variant="outline" className="border-green-300 text-green-700">Spring Boot</Badge>
                    <Badge variant="outline" className="border-green-300 text-green-700">RFID</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-orange-50 hover:scale-105 transform">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl text-gray-900 mb-2">
                        Participatory Budgeting
                      </CardTitle>
                      <p className="text-orange-600 font-semibold">Government Event Volunteering</p>
                    </div>
                    <Badge className="bg-gradient-to-r from-orange-600 to-red-600 text-white border-0">
                      January 2024
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Collaborated in government event management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Configured over 50 devices for testing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Contributed to 10,000 public votes</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}