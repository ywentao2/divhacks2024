"use client";
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { SearchIcon, PlusIcon, VideoIcon, MessageSquareIcon, CalendarIcon, MessageCircleIcon } from 'lucide-react'
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { EditIcon, TrashIcon } from 'lucide-react'
import DatePicker from 'react-datepicker'
import '../globals.css'
import MyNavbar from '../navbar';

export default function EmployerDashboard() {
  const [activeTab, setActiveTab] = useState("applicants")
  const [searchQuery, setSearchQuery] = useState("")
  const [applicantFilters, setApplicantFilters] = useState<{
    educationLevel: string[],
    experience: string[],
    skills: string[],
    category: string[]
  }>({
    educationLevel: [],
    experience: [],
    skills: [],
    category: []
  })
  const [quickNote, setQuickNote] = useState("")
  const [dateSort, setDateSort] = useState("latest")

  const applicants = [
    { 
      id: 1, 
      name: "Alice Johnson", 
      role: "Software Engineer", 
      education: "B.S. Computer Science, Stanford University",
      experience: "2 years at Tech Startup",
      skills: ["React", "Node.js", "Python"],
      background: "Led development of a machine learning project. Active in hackathons.",
      category: "Computer Science",
      applicationDate: "2023-05-15",
      appliedFor: "Senior Full Stack Developer"
    },
    { 
      id: 2, 
      name: "Bob Smith", 
      role: "Data Analyst", 
      education: "M.S. Data Science, MIT",
      experience: "3 years at Fortune 500 company",
      skills: ["SQL", "Python", "Tableau"],
      background: "Published research on predictive analytics. Volunteer data consultant for non-profits.",
      category: "Computer Science",
      applicationDate: "2023-05-18",
      appliedFor: "Lead Data Scientist"
    },
    { 
      id: 3, 
      name: "Carol Davis", 
      role: "UX Designer", 
      education: "B.A. Graphic Design, Rhode Island School of Design",
      experience: "4 years freelance, 1 year at design agency",
      skills: ["Figma", "Adobe Creative Suite", "User Research"],
      background: "Award-winning portfolio. Passionate about accessible design.",
      category: "Computer Science",
      applicationDate: "2023-05-20",
      appliedFor: "Senior UX/UI Designer"
    },
    { 
      id: 4, 
      name: "David Lee", 
      role: "Financial Analyst", 
      education: "MBA, Harvard Business School",
      experience: "5 years at Investment Bank",
      skills: ["Financial Modeling", "Valuation", "Excel"],
      background: "CFA charterholder. Specializes in mergers and acquisitions.",
      category: "Finance",
      applicationDate: "2023-05-22",
      appliedFor: "Senior Financial Analyst"
    },
    { 
      id: 5, 
      name: "Emma Wilson", 
      role: "Marketing Manager", 
      education: "B.S. Business Administration, UC Berkeley",
      experience: "6 years in Tech Marketing",
      skills: ["Digital Marketing", "Content Strategy", "Analytics"],
      background: "Led successful product launches. Increased conversion rates by 30%.",
      category: "Business",
      applicationDate: "2023-05-25",
      appliedFor: "Head of Digital Marketing"
    },
  ]

  const handleApplicantFilterChange = (filterType: string, value: string[]) => {
    setApplicantFilters(prev => ({
      ...prev,
      [filterType]: value
    }))
  }

  const filteredApplicants = applicants
    .filter(applicant => {
      if (searchQuery && !applicant.name.toLowerCase().includes(searchQuery.toLowerCase()) && !applicant.role.toLowerCase().includes(searchQuery.toLowerCase())) return false
      if (applicantFilters.educationLevel.length > 0 && !applicantFilters.educationLevel.some(level => applicant.education.includes(level))) return false
      if (applicantFilters.experience.length > 0 && !applicantFilters.experience.some(exp => applicant.experience.includes(exp))) return false
      if (applicantFilters.skills.length > 0 && !applicantFilters.skills.some(skill => applicant.skills.includes(skill))) return false
      if (applicantFilters.category.length > 0 && !applicantFilters.category.includes(applicant.category)) return false
      return true
    })
    .sort((a, b) => {
      if (dateSort === "latest") {
        return new Date(b.applicationDate).getTime() - new Date(a.applicationDate).getTime()
      } else {
        return new Date(a.applicationDate).getTime() - new Date(b.applicationDate).getTime()
      }
    })

  // Company Profile State and Handlers
  const [profile, setProfile] = useState({
    name: 'TechCorp Inc.',
    logo: '/placeholder.svg',
    website: 'https://techcorp.com',
    description: 'A leading technology company specializing in AI and machine learning solutions.',
    culture: 'We value innovation, collaboration, and continuous learning.',
    benefits: '- Flexible work hours\n- Remote work options\n- Comprehensive health insurance\n- Professional development budget',
    diversity: 'We are committed to creating an inclusive workplace that celebrates diversity in all forms.',
  })

  const handleProfileInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target
    setProfile({ ...profile, [name]: value })
  }

  const handleProfileSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    console.log('Updated profile:', profile)
    alert('Profile updated successfully!')
  }

  // Event Postings State and Handlers
  const [events, setEvents] = useState([
    { id: 1, title: 'Tech Meetup', date: '2023-06-15', location: 'Online', isActive: true },
    { id: 2, title: 'Career Fair', date: '2023-07-01', location: 'New York, NY', isActive: false },
  ])

  const [isCreating, setIsCreating] = useState(false)
  const [newEvent, setNewEvent] = useState({ title: '', date: '', location: '', description: '', isActive: true })

  const handleCreateEvent = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setEvents([...events, { id: events.length + 1, ...newEvent }])
    setNewEvent({ title: '', date: '', location: '', description: '', isActive: true })
    setIsCreating(false)
  }

  const toggleEventStatus = (id: number) => {
    setEvents(events.map(event => 
      event.id === id ? { ...event, isActive: !event.isActive } : event
    ))
  }

  const handleStartChat = (applicant: { id?: number; name: any; role?: string; education?: string; experience?: string; skills?: string[]; background?: string; category?: string; applicationDate?: string; appliedFor?: string }) => {
    console.log(`Starting chat with ${applicant.name}`)
    // Implement chat functionality here
  }

  return (
    <>
    <div>
      <MyNavbar />
    </div><main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Card>
            <CardContent className="p-6">
              <form className="flex space-x-4">
                <div className="flex-grow">
                  <Input
                    placeholder="Search applicants or events"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} />
                </div>
                <Button type="submit">
                  <SearchIcon className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList>
            <TabsTrigger value="applicants">Applicant Tracking</TabsTrigger>
            <TabsTrigger value="company-profile">Company Profile</TabsTrigger>
            <TabsTrigger value="events">Event Postings</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="applicants">
            <Card>
              <CardHeader>
                <CardTitle>Applicant Tracking System</CardTitle>
                <CardDescription>Manage and review applicants for your job postings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                  <div className="w-full md:w-1/4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Filters</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <label className="text-sm font-medium mb-2 block">Application Date</label>
                          <Select value={dateSort} onValueChange={setDateSort}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select date order" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="latest">Latest to Oldest</SelectItem>
                              <SelectItem value="oldest">Oldest to Latest</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Category</label>
                          <div className="space-y-2">
                            {["Computer Science", "Finance", "Business"].map((category) => (
                              <div key={category} className="flex items-center">
                                <Checkbox
                                  id={`category-${category}`}
                                  checked={applicantFilters.category.includes(category)}
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      handleApplicantFilterChange('category', [...applicantFilters.category, category]);
                                    } else {
                                      handleApplicantFilterChange('category', applicantFilters.category.filter(c => c !== category));
                                    }
                                  } } />
                                <label htmlFor={`category-${category}`} className="ml-2 text-sm font-medium">
                                  {category}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Education Level</label>
                          <div className="space-y-2">
                            {["B.S.", "M.S.", "Ph.D."].map((level) => (
                              <div key={level} className="flex items-center">
                                <Checkbox
                                  id={`education-${level}`}
                                  checked={applicantFilters.educationLevel.includes(level)}
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      handleApplicantFilterChange('educationLevel', [...applicantFilters.educationLevel, level]);
                                    } else {
                                      handleApplicantFilterChange('educationLevel', applicantFilters.educationLevel.filter(l => l !== level));
                                    }
                                  } } />
                                <label htmlFor={`education-${level}`} className="ml-2 text-sm font-medium">
                                  {level}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Experience</label>
                          <div className="space-y-2">
                            {["0-2 years", "3-5 years", "5+ years"].map((exp) => (
                              <div key={exp} className="flex items-center">
                                <Checkbox
                                  id={`experience-${exp}`}
                                  checked={applicantFilters.experience.includes(exp)}
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      handleApplicantFilterChange('experience', [...applicantFilters.experience, exp]);
                                    } else {
                                      handleApplicantFilterChange('experience', applicantFilters.experience.filter(e => e !== exp));
                                    }
                                  } } />
                                <label htmlFor={`experience-${exp}`} className="ml-2 text-sm font-medium">
                                  {exp}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Skills</label>
                          <div className="space-y-2">
                            {["React", "Python", "SQL", "Machine Learning"].map((skill) => (
                              <div key={skill} className="flex items-center">
                                <Checkbox
                                  id={`skill-${skill}`}
                                  checked={applicantFilters.skills.includes(skill)}
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      handleApplicantFilterChange('skills', [...applicantFilters.skills, skill]);
                                    } else {
                                      handleApplicantFilterChange('skills', applicantFilters.skills.filter(s => s !== skill));
                                    }
                                  } } />
                                <label htmlFor={`skill-${skill}`} className="ml-2 text-sm font-medium">
                                  {skill}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-full md:w-3/4">
                    <div className="space-y-4">
                      {filteredApplicants.map((applicant) => (
                        <Card key={applicant.id}>
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start">
                              <div className="flex items-start space-x-4">
                                <Avatar className="h-10 w-10">
                                  <AvatarFallback>{applicant.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <h3 className="font-semibold">{applicant.name}</h3>
                                  <p className="text-sm text-gray-500">{applicant.role}</p>
                                  <p className="text-sm text-gray-500">{applicant.education}</p>
                                  <p className="text-sm text-gray-500">{applicant.experience}</p>
                                  <p className="text-sm text-gray-700 mt-2">{applicant.background}</p>
                                  <div className="flex flex-wrap gap-1 mt-2">
                                    {applicant.skills.map((skill, index) => (
                                      <Badge key={index} variant="secondary" className="text-xs">
                                        {skill}
                                      </Badge>
                                    ))}
                                  </div>
                                  <Badge variant="outline" className="mt-2">
                                    {applicant.category}
                                  </Badge>
                                  <div className="mt-2 flex items-center text-sm text-gray-500">
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    Applied on {applicant.applicationDate}
                                  </div>
                                  <div className="mt-1 text-sm font-medium">
                                    Applied for: {applicant.appliedFor}
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col space-y-2">
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button variant="outline" size="sm">
                                      <MessageSquareIcon className="h-4 w-4 mr-2" />
                                      Quick Note
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                      <DialogTitle>Add Quick Note</DialogTitle>
                                      <DialogDescription>
                                        Add a quick note about {applicant.name}. This note will be saved to their profile.
                                      </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                      <Textarea
                                        placeholder="Enter your note here..."
                                        value={quickNote}
                                        onChange={(e) => setQuickNote(e.target.value)} />
                                    </div>
                                    <DialogFooter>
                                      <Button type="submit">Save Note</Button>
                                    </DialogFooter>
                                  </DialogContent>
                                </Dialog>
                                <Button variant="outline" size="sm">
                                  <VideoIcon className="h-4 w-4 mr-2" />
                                  Invite to Zoom
                                </Button>
                                <Button variant="default" size="sm">View Application</Button>
                                <Button variant="default" size="sm" onClick={() => handleStartChat(applicant)}>
                                  <MessageCircleIcon className="h-4 w-4 mr-2" />
                                  Start Chat
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="company-profile">
            <Card>
              <CardHeader>
                <CardTitle>Company Profile Management</CardTitle>
                <CardDescription>Manage your company's profile and information</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleProfileSubmit} className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src={profile.logo} alt={profile.name} />
                      <AvatarFallback>{profile.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <Label htmlFor="logo">Company Logo</Label>
                      <Input id="logo" type="file" accept="image/*" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="name">Company Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={profile.name}
                      onChange={handleProfileInputChange}
                      required />
                  </div>

                  <div>
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      name="website"
                      value={profile.website}
                      onChange={handleProfileInputChange}
                      type="url"
                      required />
                  </div>

                  <div>
                    <Label htmlFor="description">Company Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={profile.description}
                      onChange={handleProfileInputChange}
                      required />
                  </div>

                  <div>
                    <Label htmlFor="culture">Company Culture</Label>
                    <Textarea
                      id="culture"
                      name="culture"
                      value={profile.culture}
                      onChange={handleProfileInputChange} />
                  </div>

                  <div>
                    <Label htmlFor="benefits">Benefits</Label>
                    <Textarea
                      id="benefits"
                      name="benefits"
                      value={profile.benefits}
                      onChange={handleProfileInputChange} />
                  </div>

                  <div>
                    <Label htmlFor="diversity">Diversity & Inclusion Initiatives</Label>
                    <Textarea
                      id="diversity"
                      name="diversity"
                      value={profile.diversity}
                      onChange={handleProfileInputChange} />
                  </div>

                  <Button type="submit">Update Profile</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events">
            <Card>
              <CardHeader>
                <CardTitle>Event Posting Management</CardTitle>
                <CardDescription>Create, edit, and manage your event postings</CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={() => setIsCreating(!isCreating)} className="mb-4">
                  <PlusIcon className="mr-2 h-4 w-4" /> Create New Event
                </Button>

                {isCreating && (
                  <form onSubmit={handleCreateEvent} className="space-y-4 mb-6">
                    <div>
                      <Label htmlFor="title">Event Title</Label>
                      <Input
                        id="title"
                        value={newEvent.title}
                        onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                        required />
                    </div>
                    <div>
                      <Label htmlFor="date">Event Date</Label>
                      <DatePicker
                        id="date"
                        selected={newEvent.date ? new Date(newEvent.date) : null}
                        onChange={(date: Date | null) => setNewEvent({ ...newEvent, date: date ? date.toISOString().split('T')[0] : '' })}
                        required />
                    </div>
                    <div>
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={newEvent.location}
                        onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                        required />
                    </div>
                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        value={newEvent.description}
                        onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                        required />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="isActive"
                        checked={newEvent.isActive}
                        onCheckedChange={(checked) => setNewEvent({ ...newEvent, isActive: checked })} />
                      <Label htmlFor="isActive">Active</Label>
                    </div>
                    <Button type="submit">Create Event</Button>
                  </form>
                )}

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {events.map((event) => (
                      <TableRow key={event.id}>
                        <TableCell>{event.title}</TableCell>
                        <TableCell>{event.date}</TableCell>
                        <TableCell>{event.location}</TableCell>
                        <TableCell>
                          <Switch
                            checked={event.isActive}
                            onCheckedChange={() => toggleEventStatus(event.id)} />
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            <EditIcon className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <TrashIcon className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Analytics and Reporting</CardTitle>
                <CardDescription>View insights on your hiring activity</CardDescription>
              </CardHeader>
              <CardContent>
                <Card>
                  <CardHeader>
                    <CardTitle>Key Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold">27</h3>
                        <p className="text-sm text-gray-500">Total Events</p>
                      </div>
                      <div className="text-center">
                        <h3 className="text-2xl font-bold">390</h3>
                        <p className="text-sm text-gray-500">Total Applicants</p>
                      </div>
                      <div className="text-center">
                        <h3 className="text-2xl font-bold">15</h3>
                        <p className="text-sm text-gray-500">Total Hires</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </>
  )
}