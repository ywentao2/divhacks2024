'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { GraduationCap, User, Brain, ArrowLeft } from "lucide-react"

export default function NeuroTalentOnboarding() {
  const [step, setStep] = useState(0)
  const [userType, setUserType] = useState<'student' | 'employer' | null>(null)
  const [studentInfo, setStudentInfo] = useState({
    university: '',
    graduationYear: '',
    major: '',
  })
  const [employerInfo, setEmployerInfo] = useState({
    company: '',
    role: '',
    industry: '',
  })

  const handleNext = () => {
    setStep(step + 1)
  }

  const handleBack = () => {
    setStep(step - 1)
  }

  const handleSubmit = () => {
    console.log('Submitting user info:', userType === 'student' ? studentInfo : employerInfo)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <div className="w-full max-w-md">
        <div className="flex items-center mb-12">
          <Brain className="w-8 h-8 text-blue-500 mr-2" />
          <span className="text-2xl font-bold">neurotalent</span>
        </div>
        
        {step === 0 ? (
          <>
            <h1 className="text-4xl font-bold text-center mb-4">Welcome to NeuroTalent</h1>
            <p className="text-xl text-center mb-12">Lets get to know you better...</p>
            
            <div className="space-y-4">
              <Button 
                variant="outline" 
                className="w-full text-lg py-8 flex items-center justify-center space-x-2"
                onClick={() => {
                  setUserType('student')
                  handleNext()
                }}
              >
                <GraduationCap className="w-6 h-6 mr-2" />
                <span>I'm a student</span>
              </Button>
              <Button 
                variant="outline" 
                className="w-full text-lg py-8 flex items-center justify-center space-x-2"
                onClick={() => {
                  setUserType('employer')
                  handleNext()
                }}
              >
                <User className="w-6 h-6 mr-2" />
                <span>I'm an employer</span>
              </Button>
            </div>
          </>
        ) : (
          <>
            <Button 
              variant="ghost" 
              className="mb-6 p-0 hover:bg-transparent"
              onClick={handleBack}
            >
              <ArrowLeft className="w-6 h-6 mr-2" />
              Back
            </Button>
            
            <h1 className="text-3xl font-bold text-center mb-4">
              {userType === 'student' ? 'Student Information' : 'Employer Information'}
            </h1>
            <p className="text-lg text-center mb-8">Please provide the following details</p>

            {userType === 'student' && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="university" className="text-lg">University</Label>
                  <Input 
                    id="university" 
                    value={studentInfo.university}
                    onChange={(e) => setStudentInfo({...studentInfo, university: e.target.value})}
                    placeholder="Enter your university"
                    className="w-full py-6 text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="graduationYear" className="text-lg">Expected Graduation Year</Label>
                  <Select 
                    onValueChange={(value) => setStudentInfo({...studentInfo, graduationYear: value})}
                  >
                    <SelectTrigger className="w-full py-6 text-lg">
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                      {[2023, 2024, 2025, 2026, 2027].map((year) => (
                        <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="major" className="text-lg">Major</Label>
                  <Input 
                    id="major" 
                    value={studentInfo.major}
                    onChange={(e) => setStudentInfo({...studentInfo, major: e.target.value})}
                    placeholder="Enter your major"
                    className="w-full py-6 text-lg"
                  />
                </div>
              </div>
            )}

            {userType === 'employer' && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-lg">Company Name</Label>
                  <Input 
                    id="company" 
                    value={employerInfo.company}
                    onChange={(e) => setEmployerInfo({...employerInfo, company: e.target.value})}
                    placeholder="Enter your company name"
                    className="w-full py-6 text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role" className="text-lg">Your Role</Label>
                  <Input 
                    id="role" 
                    value={employerInfo.role}
                    onChange={(e) => setEmployerInfo({...employerInfo, role: e.target.value})}
                    placeholder="Enter your role"
                    className="w-full py-6 text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industry" className="text-lg">Industry</Label>
                  <Select 
                    onValueChange={(value) => setEmployerInfo({...employerInfo, industry: value})}
                  >
                    <SelectTrigger className="w-full py-6 text-lg">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {['Technology', 'Finance', 'Healthcare', 'Education', 'Other'].map((industry) => (
                        <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            <Button 
              className="w-full mt-8 py-6 text-lg"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </>
        )}
      </div>
    </div>
  )
}