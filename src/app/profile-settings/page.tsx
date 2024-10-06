'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { PlusCircle, Trash2 } from 'lucide-react'
import React from 'react'
import MyNavbar from '../navbar'


type Profile = {
  name: string;
  email: string;
  summary: string;
  location: string;
  lookingFor: string[];
  skills: string[];
  workExperience: { company: string; role: string; duration: string }[];
  education: { institution: string; degree: string; year: string }[];
  courses: string[];
  organizations: string[];
  projects: { name: string; description: string }[];
  languages: string[];
  certifications: string[];
  age: string;
  gender: string;
  ethnicity: string;
  veteranStatus: boolean;
  disabilityStatus: boolean;
  workAuthorization: string;
  visaType: string;
  visaExpirationDate: string;
  jobTypes: string[];
  salaryExpectation: string;
  willingToRelocate: boolean;
  preferredLocations: string[];
  connectionPrivacy: string;
  [key: string]: any; // Index signature
};

type Settings = {
  screenReader: boolean;
  fontSize: number;
  highContrast: boolean;
  colorBlindMode: boolean;
  keyboardNavigation: boolean;
  closedCaptioning: boolean;
  audioDescriptions: boolean;
  altText: boolean;
  textSpacing: number;
  readingGuide: boolean;
  dyslexiaFont: boolean;
  reducedMotion: boolean;
  ariaEnhancements: boolean;
  focusIndicators: boolean;
  skipToContent: boolean;
  profileVisibility: string;
  connectionPrivacy: string; // Add this line
  showEmail: boolean;
  showPhone: boolean;
  allowMessaging: boolean;
  dataUsageConsent: boolean;
  profileSearchability: boolean;
};

export default function ProfileAndSettings() {
  const [profile, setProfile] = useState<Profile>({
    name: 'John Doe',
    email: 'john.doe@example.com',
    summary: 'Passionate software engineer with a focus on web technologies and accessibility.',
    location: 'San Francisco, CA',
    lookingFor: ['Software Engineer', 'Frontend Developer', 'Remote'],
    skills: ['JavaScript', 'React', 'Node.js', 'Accessibility'],
    workExperience: [
      { company: 'Tech Co', role: 'Software Engineer', duration: '2020 - Present' },
      { company: 'Startup Inc', role: 'Junior Developer', duration: '2018 - 2020' }
    ],
    education: [
      { institution: 'University of Technology', degree: 'BSc Computer Science', year: '2018' }
    ],
    courses: ['Web Accessibility', 'Advanced React Patterns'],
    organizations: ['Web Developers Association', 'Accessibility Advocates'],
    projects: [
      { name: 'Accessible Chat App', description: 'A real-time chat application with a focus on accessibility' }
    ],
    languages: ['English (Native)', 'Spanish (Intermediate)'],
    certifications: ['WCAG 2.1 Certified', 'React Developer Certification'],
    // Demographics
    age: '',
    gender: '',
    ethnicity: '',
    veteranStatus: false,
    disabilityStatus: false,
    // Work Authorization
    workAuthorization: 'citizen',
    visaType: '',
    visaExpirationDate: '',
    // Job Preferences
    jobTypes: ['Full-time', 'Remote'],
    salaryExpectation: '',
    willingToRelocate: false,
    preferredLocations: [],
    connectionPrivacy: "", // Add this line
  })

  const [settings, setSettings] = useState({
    // Accessibility Settings
    screenReader: false,
    fontSize: 16,
    highContrast: false,
    colorBlindMode: false,
    keyboardNavigation: true,
    closedCaptioning: false,
    audioDescriptions: false,
    altText: true,
    textSpacing: 1,
    readingGuide: false,
    dyslexiaFont: false,
    reducedMotion: false,
    ariaEnhancements: true,
    focusIndicators: true,
    skipToContent: true,

    // Privacy Settings
    profileVisibility: 'public',
    showEmail: true,
    showPhone: false,
    allowMessaging: true,
    dataUsageConsent: true,
    profileSearchability: true,
    connectionPrivacy: 'everyone',
  })

  const handleProfileChange = (field: string, value: string | boolean | any[]) => {
    setProfile(prev => ({ ...prev, [field]: value }))
  }

  const handleSettingsChange = (field: string, value: string | number | boolean) => {
    setSettings(prev => ({ ...prev, [field]: value }))
  }

  const addListItem = (field: string, item: { company?: string; role?: string; duration?: string; institution?: string; degree?: string; year?: string; name?: string; description?: string }) => {
    setProfile(prev => ({ ...prev, [field]: [...prev[field], item] }))
  }

  const removeListItem = (field: string, index: number) => {
    setProfile(prev => ({
      ...prev,
      [field]: prev[field].filter((_: any, i: any) => i !== index)
    }))
  }

  return (
    <div>
      <MyNavbar />
    <div className="container mx-auto p-4 space-y-8">
      <h1 className="text-3xl font-bold">Profile and Settings</h1>
      <Tabs defaultValue="profile">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Your Profile</CardTitle>
              <CardDescription>Manage your personal and professional information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={profile.name}
                  onChange={(e) => handleProfileChange('name', e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={profile.email}
                  onChange={(e) => handleProfileChange('email', e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={profile.location}
                  onChange={(e) => handleProfileChange('location', e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="summary">Summary</Label>
                <Textarea
                  id="summary"
                  value={profile.summary}
                  onChange={(e) => handleProfileChange('summary', e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label>Looking For</Label>
                <div className="flex flex-wrap gap-2">
                  {profile.lookingFor.map((item, index) => (
                    <Badge key={index} variant="secondary">
                      {item}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="ml-2 h-4 w-4 p-0"
                        onClick={() => removeListItem('lookingFor', index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </Badge>
                  ))}
                  <Input
                    placeholder="Add new..."
                    className="w-32"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        addListItem('lookingFor', { name: (e.target as HTMLInputElement).value });
                        (e.target as HTMLInputElement).value = ''
                      }
                    }}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Skills</Label>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="ml-2 h-4 w-4 p-0"
                        onClick={() => removeListItem('skills', index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </Badge>
                  ))}
                  <Input
                    placeholder="Add skill..."
                    className="w-32"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        addListItem('lookingFor', { name: (e.target as HTMLInputElement).value });
                        (e.target as HTMLInputElement).value = ''
                      }
                    }}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Work Experience</Label>
                {profile.workExperience.map((exp, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">{exp.role}</h4>
                          <p className="text-sm text-gray-500">{exp.company}</p>
                          <p className="text-sm text-gray-500">{exp.duration}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeListItem('workExperience', index)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-2"
                  onClick={() => addListItem('workExperience', { company: '', role: '', duration: '' })}
                >
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add Work Experience
                </Button>
              </div>
              
              <div className="space-y-2">
                <Label>Education</Label>
                {profile.education.map((edu, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">{edu.degree}</h4>
                          <p className="text-sm text-gray-500">{edu.institution}</p>
                          <p className="text-sm text-gray-500">{edu.year}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeListItem('education', index)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-2"
                  onClick={() => addListItem('education', { institution: '', degree: '', year: '' })}
                >
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add Education
                </Button>
              </div>
              
              <div className="space-y-2">
                <Label>Courses</Label>
                <div className="flex flex-wrap gap-2">
                  {profile.courses.map((course, index) => (
                    <Badge key={index} variant="secondary">
                      {course}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="ml-2 h-4 w-4 p-0"
                        onClick={() => removeListItem('courses', index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </Badge>
                  ))}
                  <Input
                    placeholder="Add course..."
                    className="w-32"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        addListItem('lookingFor', { name: (e.target as HTMLInputElement).value });
                        (e.target as HTMLInputElement).value = ''
                      }
                    }}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Organizations</Label>
                <div className="flex flex-wrap gap-2">
                  {profile.organizations.map((org, index) => (
                    <Badge key={index} variant="secondary">
                      {org}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="ml-2 h-4 w-4 p-0"
                        onClick={() => removeListItem('organizations', index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </Badge>
                  ))}
                  <Input
                    placeholder="Add organization..."
                    className="w-32"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        addListItem('organizations', { name: (e.target as HTMLInputElement).value });
                        (e.target as HTMLInputElement).value = ''
                      }
                    }}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Projects</Label>
                {profile.projects.map((project, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">{project.name}</h4>
                          <p className="text-sm text-gray-500">{project.description}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeListItem('projects', index)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-2"
                  onClick={() => addListItem('projects', { name: '', description: '' })}
                >
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add Project
                </Button>
              </div>
              
              <div className="space-y-2">
                <Label>Languages</Label>
                <div className="flex flex-wrap gap-2">
                  {profile.languages.map((lang, index) => (
                    <Badge key={index} variant="secondary">
                      {lang}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="ml-2 h-4 w-4 p-0"
                        onClick={() => removeListItem('languages', index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </Badge>
                  ))}
                  <Input
                    placeholder="Add language..."
                    className="w-32"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        addListItem('lookingFor', { name: (e.target as HTMLInputElement).value });
                        (e.target as HTMLInputElement).value = ''
                      }
                    }}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Certifications</Label>
                <div className="flex flex-wrap gap-2">
                  {profile.certifications.map((cert, index) => (
                    <Badge key={index} variant="secondary">
                      {cert}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="ml-2 h-4 w-4 p-0"
                        onClick={() => removeListItem('certifications', index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </Badge>
                  ))}
                  <Input
                    placeholder="Add certification..."
                    className="w-32"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        addListItem('lookingFor', { name: (e.target as HTMLInputElement).value });
                        (e.target as HTMLInputElement).value = ''
                      }
                    }}
                  />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Demographics</h3>
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    type="number"
                    value={profile.age}
                    onChange={(e) => handleProfileChange('age', e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select
                    value={profile.gender}
                    onValueChange={(value) => handleProfileChange('gender', value)}
                  >
                    <SelectTrigger id="gender">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="non-binary">Non-binary</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                      <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="ethnicity">Ethnicity</Label>
                  <Select
                    value={profile.ethnicity}
                    onValueChange={(value) => handleProfileChange('ethnicity', value)}
                  >
                    <SelectTrigger id="ethnicity">
                      <SelectValue placeholder="Select ethnicity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asian">Asian</SelectItem>
                      <SelectItem value="black">Black or African American</SelectItem>
                      <SelectItem value="hispanic">Hispanic or Latino</SelectItem>
                      <SelectItem value="native-american">Native American</SelectItem>
                      <SelectItem value="pacific-islander">Pacific Islander</SelectItem>
                      <SelectItem value="white">White</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                      <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Separator />
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Work Authorization</h3>
                <div className="space-y-2">
                  <Label htmlFor="work-authorization">Work Authorization Status</Label>
                  <Select
                    value={profile.workAuthorization}
                    onValueChange={(value) => handleProfileChange('workAuthorization', value)}
                  >
                    <SelectTrigger id="work-authorization">
                      <SelectValue placeholder="Select work authorization status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="citizen">U.S. Citizen</SelectItem>
                      <SelectItem value="permanent-resident">Permanent Resident</SelectItem>
                      <SelectItem value="visa-holder">Visa Holder</SelectItem>
                      <SelectItem value="need-sponsorship">Need Sponsorship</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {profile.workAuthorization === 'visa-holder' && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="visa-type">Visa Type</Label>
                      <Input
                        id="visa-type"
                        value={profile.visaType}
                        onChange={(e) => handleProfileChange('visaType', e.target.value)}
                        placeholder="e.g., H1B, F1 OPT, etc."
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="visa-expiration">Visa Expiration Date</Label>
                      <Input
                        id="visa-expiration"
                        type="date"
                        value={profile.visaExpirationDate}
                        onChange={(e) => handleProfileChange('visaExpirationDate', e.target.value)}
                      />
                    </div>
                  </>
                )}
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Job Preferences</h3>
                <div className="space-y-2">
                  <Label>Job Types</Label>
                  <div className="flex flex-wrap gap-2">
                    {profile.jobTypes.map((type, index) => (
                      <Badge key={index} variant="secondary">
                        {type}
                        <Button
                          variant="ghost"
                          size="sm"
                          className="ml-2 h-4 w-4 p-0"
                          onClick={() => handleProfileChange('jobTypes', profile.jobTypes.filter((_, i) => i !== index))}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </Badge>
                    ))}
                    <Input
                      placeholder="Add job type..."
                      className="w-32"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          handleProfileChange('jobTypes', [...profile.jobTypes, (e.target as HTMLInputElement).value]);
                          (e.target as HTMLInputElement).value = ''
                        }
                      }}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="salary-expectation">Salary Expectation</Label>
                  <Input
                    id="salary-expectation"
                    value={profile.salaryExpectation}
                    onChange={(e) => handleProfileChange('salaryExpectation', e.target.value)}
                    placeholder="e.g., $50,000 - $70,000"
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Switch
                    id="willing-to-relocate"
                    checked={profile.willingToRelocate}
                    onCheckedChange={(checked) => handleProfileChange('willingToRelocate', checked)}
                  />
                  <Label htmlFor="willing-to-relocate">Willing to relocate</Label>
                </div>
                
                <div className="space-y-2">
                  <Label>Preferred Locations</Label>
                  <div className="flex flex-wrap gap-2">
                    {profile.preferredLocations.map((location, index) => (
                      <Badge key={index} variant="secondary">
                        {location}
                        <Button
                          variant="ghost"
                          size="sm"
                          className="ml-2 h-4 w-4 p-0"
                          onClick={() => handleProfileChange('preferredLocations', profile.preferredLocations.filter((_, i) => i !== index))}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </Badge>
                    ))}
                    <Input
                      placeholder="Add location..."
                      className="w-32"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          handleProfileChange('preferredLocations', [...profile.preferredLocations, (e.target as HTMLInputElement).value]);
                          (e.target as HTMLInputElement).value = ''
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="accessibility">
          <Card>
            <CardHeader>
              <CardTitle>Accessibility Settings</CardTitle>
              <CardDescription>Customize your experience for better accessibility</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <Label htmlFor="screen-reader">Screen Reader Compatibility</Label>
                <Switch
                  id="screen-reader"
                  checked={settings.screenReader}
                  onCheckedChange={(checked) => handleSettingsChange('screenReader', checked)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="font-size">Font Size</Label>
                <div className="flex items-center space-x-2">
                  <Slider
                    id="font-size"
                    min={12}
                    max={24}
                    step={1}
                    value={[settings.fontSize]}
                    onValueChange={([value]) => handleSettingsChange('fontSize', value)}
                  />
                  <span>{settings.fontSize}px</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="high-contrast">High Contrast Mode</Label>
                <Switch
                  id="high-contrast"
                  checked={settings.highContrast}
                  onCheckedChange={(checked) => handleSettingsChange('highContrast', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="color-blind">Color Blind Friendly Mode</Label>
                <Switch
                  id="color-blind"
                  checked={settings.colorBlindMode}
                  onCheckedChange={(checked) => handleSettingsChange('colorBlindMode', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="keyboard-nav">Keyboard Navigation Support</Label>
                <Switch
                  id="keyboard-nav"
                  checked={settings.keyboardNavigation}
                  onCheckedChange={(checked) => handleSettingsChange('keyboardNavigation', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="closed-captions">Closed Captioning for Videos</Label>
                <Switch
                  id="closed-captions"
                  checked={settings.closedCaptioning}
                  onCheckedChange={(checked) => handleSettingsChange('closedCaptioning', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="audio-descriptions">Audio Descriptions for Visual Content</Label>
                <Switch
                  id="audio-descriptions"
                  checked={settings.audioDescriptions}
                  onCheckedChange={(checked) => handleSettingsChange('audioDescriptions', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="alt-text">Alternative Text for Images</Label>
                <Switch
                  id="alt-text"
                  checked={settings.altText}
                  onCheckedChange={(checked) => handleSettingsChange('altText', checked)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="text-spacing">Adjustable Text Spacing</Label>
                <div className="flex items-center space-x-2">
                  <Slider
                    id="text-spacing"
                    min={1}
                    max={2}
                    step={0.1}
                    value={[settings.textSpacing]}
                    onValueChange={([value]) => handleSettingsChange('textSpacing', value)}
                  />
                  <span>{settings.textSpacing.toFixed(1)}x</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="reading-guide">Reading Guide/Ruler</Label>
                <Switch
                  id="reading-guide"
                  checked={settings.readingGuide}
                  onCheckedChange={(checked) => handleSettingsChange('readingGuide', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="dyslexia-font">Dyslexia-Friendly Font Option</Label>
                <Switch
                  id="dyslexia-font"
                  checked={settings.dyslexiaFont}
                  onCheckedChange={(checked) => handleSettingsChange('dyslexiaFont', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="reduced-motion">Seizure Safe Mode (Reduced Motion)</Label>
                <Switch
                  id="reduced-motion"
                  checked={settings.reducedMotion}
                  onCheckedChange={(checked) => handleSettingsChange('reducedMotion', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="aria-enhancements">ARIA Labels and Landmarks</Label>
                <Switch
                  id="aria-enhancements"
                  checked={settings.ariaEnhancements}
                  onCheckedChange={(checked) => handleSettingsChange('ariaEnhancements', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="focus-indicators">Focus Indicators</Label>
                <Switch
                  id="focus-indicators"
                  checked={settings.focusIndicators}
                  onCheckedChange={(checked) => handleSettingsChange('focusIndicators', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="skip-content">Skip to Main Content Link</Label>
                <Switch
                  id="skip-content"
                  checked={settings.skipToContent}
                  onCheckedChange={(checked) => handleSettingsChange('skip-content', checked)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="privacy">
          <Card>
            <CardHeader>
              <CardTitle>Privacy and Network Settings</CardTitle>
              <CardDescription>Control who can see your information and how it's used</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="profile-visibility">Profile Visibility</Label>
                <Select
                  value={settings.profileVisibility}
                  onValueChange={(value) => handleSettingsChange('profileVisibility', value)}
                >
                  <SelectTrigger id="profile-visibility">
                    <SelectValue placeholder="Select visibility" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">Public</SelectItem>
                    <SelectItem value="connections">Connections Only</SelectItem>
                    <SelectItem value="private">Private</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="connection-privacy">Who can send you connection requests?</Label>
                <Select
                  value={settings.connectionPrivacy}
                  onValueChange={(value) => handleSettingsChange('connectionPrivacy', value)}
                >
                  <SelectTrigger id="connection-privacy">
                    <SelectValue placeholder="Select privacy level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="everyone">Everyone</SelectItem>
                    <SelectItem value="second-degree">Second-degree connections</SelectItem>
                    <SelectItem value="no-one">No one</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch
                  id="show-email"
                  checked={settings.showEmail}
                  onCheckedChange={(checked) => handleSettingsChange('showEmail', checked)}
                />
                <Label htmlFor="show-email">Show email on profile</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch
                  id="show-phone"
                  checked={settings.showPhone}
                  onCheckedChange={(checked) => handleSettingsChange('showPhone', checked)}
                />
                <Label htmlFor="show-phone">Show phone number on profile</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch
                  id="allow-messaging"
                  checked={settings.allowMessaging}
                  onCheckedChange={(checked) => handleSettingsChange('allowMessaging', checked)}
                />
                <Label htmlFor="allow-messaging">Allow others to message me</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch
                  id="data-usage-consent"
                  checked={settings.dataUsageConsent}
                  onCheckedChange={(checked) => handleSettingsChange('dataUsageConsent', checked)}
                />
                <Label htmlFor="data-usage-consent">I consent to the use of my data for personalized job recommendations</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="profile-searchability"
                  checked={settings.profileSearchability}
                  onCheckedChange={(checked) => handleSettingsChange('profileSearchability', checked)}
                />
                <Label htmlFor="profile-searchability">Allow search engines to show your profile</Label>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your account preferences and security</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="current-email">Email (Current email address)</Label>
                <Input
                  id="current-email"
                  type="email"
                  value={profile.email}
                  onChange={(e) => handleProfileChange('email', e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
              
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
    </div>
  )
}