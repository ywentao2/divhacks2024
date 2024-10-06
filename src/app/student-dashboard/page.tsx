"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  HomeIcon,
  UserIcon,
  InboxIcon,
  GraduationCapIcon,
  BellIcon,
  LogOutIcon,
  SearchIcon,
  MapPinIcon,
} from "lucide-react";
import "../globals.css";
import MyNavbar from "../navbar";

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("events");
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [eventFilters, setEventFilters] = useState<{
    eventType: string[];
    dateRange: string;
    categories: string[];
    gradSupport: string[];
  }>({
    eventType: [],
    dateRange: "recently",
    categories: [],
    gradSupport: [],
  });
  const [recruiterFilters, setRecruiterFilters] = useState<{
    yearsOfExperience: any;
    backgroundOfStudy: string[];
  }>({
    yearsOfExperience: [],
    backgroundOfStudy: [],
  });

  const events = [
    {
      id: 1,
      title: "Tech Career Fair",
      company: "TechCorp Inc.",
      date: "2023-07-15",
      type: "In Person",
      category: "Tech",
      gradSupport: ["Junior", "Senior", "New Grad"],
      location: "New York, NY",
    },
    {
      id: 2,
      title: "Web Development Workshop",
      company: "CodeMasters",
      date: "2023-07-20",
      type: "Online",
      category: "Tech",
      gradSupport: ["Freshman", "Sophomore"],
      location: "Online",
    },
    {
      id: 3,
      title: "AI in Healthcare Seminar",
      company: "HealthTech Solutions",
      date: "2023-07-25",
      type: "Hybrid",
      category: "Professional Services",
      gradSupport: ["Senior", "New Grad"],
      location: "Boston, MA",
    },
    {
      id: 4,
      title: "Finance Industry Panel",
      company: "Global Investments",
      date: "2023-07-30",
      type: "In Person",
      category: "Finance",
      gradSupport: ["Junior", "Senior"],
      location: "Chicago, IL",
    },
  ];

  const recruiters = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      location: "New York, NY",
      backgroundOfStudy: ["Computer Science", "Business"],
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "DataInsights Co.",
      location: "San Francisco, CA",
      backgroundOfStudy: ["Computer Science", "Economics"],
      yearsOfExperience: "3-5",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "DesignPro Agency",
      location: "Chicago, IL",
      backgroundOfStudy: ["Business", "Investment Banking"],
      yearsOfExperience: "6-10",
    },
    {
      id: 4,
      name: "David Kim",
      company: "FinTech Solutions",
      location: "Boston, MA",
      backgroundOfStudy: ["Economics", "Computer Science"],
      yearsOfExperience: "10+",
    },
  ];

  const handleEventFilterChange = (
    filterType: string,
    value: string | string[]
  ) => {
    setEventFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const handleRecruiterFilterChange = (filterType: string, value: string[]) => {
    setRecruiterFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const filteredEvents = events.filter((event) => {
    if (
      searchQuery &&
      !event.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false;
    if (
      locationQuery &&
      !event.location.toLowerCase().includes(locationQuery.toLowerCase())
    )
      return false;
    if (
      eventFilters.eventType.length > 0 &&
      !eventFilters.eventType.includes(event.type)
    )
      return false;
    if (
      eventFilters.categories.length > 0 &&
      !eventFilters.categories.includes(event.category)
    )
      return false;
    if (
      eventFilters.gradSupport.length > 0 &&
      !event.gradSupport.some((support) =>
        eventFilters.gradSupport.includes(support)
      )
    )
      return false;
    return true;
  });

  const filteredRecruiters = recruiters.filter((recruiter) => {
    if (
      searchQuery &&
      !recruiter.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !recruiter.company.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false;
    if (
      locationQuery &&
      !recruiter.location.toLowerCase().includes(locationQuery.toLowerCase())
    )
      return false;
    if (
      recruiterFilters.backgroundOfStudy.length > 0 &&
      !recruiter.backgroundOfStudy.some((background) =>
        recruiterFilters.backgroundOfStudy.includes(background)
      )
    )
      return false;
    return true;
  });

  return (
    <>
      <MyNavbar />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Welcome, Student!</h1>

        <div className="mb-8">
          <Card>
            <CardContent className="p-6">
              <form className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex-grow">
                  <Input
                    placeholder="Search events, recruiters, or companies"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex-grow">
                  <Input
                    placeholder="Enter location"
                    value={locationQuery}
                    onChange={(e) => setLocationQuery(e.target.value)}
                  />
                </div>
                <Button type="submit">
                  <SearchIcon className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-4"
        >
          <TabsList>
            <TabsTrigger value="events">Upcoming Events</TabsTrigger>
            <TabsTrigger value="recruiters">Nearby Alumni</TabsTrigger>
            <TabsTrigger value="meetings">Meet Recruiters</TabsTrigger>
          </TabsList>

          <TabsContent value="events">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>
                  Events tailored to your interests and skills
                </CardDescription>
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
                          <label className="text-sm font-medium mb-2 block">
                            Event Type
                          </label>
                          <div className="space-y-2">
                            {["In Person", "Online", "Hybrid"].map((type) => (
                              <div key={type} className="flex items-center">
                                <Checkbox
                                  id={`type-${type}`}
                                  checked={eventFilters.eventType.includes(
                                    type
                                  )}
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      handleEventFilterChange("eventType", [
                                        ...eventFilters.eventType,
                                        type,
                                      ]);
                                    } else {
                                      handleEventFilterChange(
                                        "eventType",
                                        eventFilters.eventType.filter(
                                          (t) => t !== type
                                        )
                                      );
                                    }
                                  }}
                                />
                                <label
                                  htmlFor={`type-${type}`}
                                  className="ml-2 text-sm font-medium"
                                >
                                  {type}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            Date Range
                          </label>
                          <RadioGroup
                            value={eventFilters.dateRange}
                            onValueChange={(value) =>
                              handleEventFilterChange("dateRange", value)
                            }
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="recently" id="recently" />
                              <Label htmlFor="recently">Recently Posted</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="popular" id="popular" />
                              <Label htmlFor="popular">Popular Listings</Label>
                            </div>
                          </RadioGroup>
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            Categories
                          </label>
                          <div className="space-y-2">
                            {[
                              "Tech",
                              "Finance",
                              "Professional Services",
                              "Healthcare",
                              "Education",
                            ].map((category) => (
                              <div key={category} className="flex items-center">
                                <Checkbox
                                  id={`category-${category}`}
                                  checked={eventFilters.categories.includes(
                                    category
                                  )}
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      handleEventFilterChange("categories", [
                                        ...eventFilters.categories,
                                        category,
                                      ]);
                                    } else {
                                      handleEventFilterChange(
                                        "categories",
                                        eventFilters.categories.filter(
                                          (c) => c !== category
                                        )
                                      );
                                    }
                                  }}
                                />
                                <label
                                  htmlFor={`category-${category}`}
                                  className="ml-2 text-sm font-medium"
                                >
                                  {category}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            New Grad / Undergrad Support
                          </label>
                          <div className="space-y-2">
                            {[
                              "Freshman",
                              "Sophomore",
                              "Junior",
                              "Senior",
                              "New Grad",
                            ].map((support) => (
                              <div key={support} className="flex items-center">
                                <Checkbox
                                  id={`support-${support}`}
                                  checked={eventFilters.gradSupport.includes(
                                    support
                                  )}
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      handleEventFilterChange("gradSupport", [
                                        ...eventFilters.gradSupport,
                                        support,
                                      ]);
                                    } else {
                                      handleEventFilterChange(
                                        "gradSupport",
                                        eventFilters.gradSupport.filter(
                                          (s) => s !== support
                                        )
                                      );
                                    }
                                  }}
                                />
                                <label
                                  htmlFor={`support-${support}`}
                                  className="ml-2 text-sm font-medium"
                                >
                                  {support}
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
                      {filteredEvents.map((event) => (
                        <Card key={event.id}>
                          <CardContent className="p-4 flex justify-between items-center">
                            <div>
                              <h3 className="font-semibold">{event.title}</h3>
                              <p className="text-sm text-gray-500">
                                {event.company}
                              </p>
                              <p className="text-sm text-gray-500">
                                {event.date}
                              </p>
                              <p className="text-sm text-gray-500">
                                {event.location}
                              </p>
                            </div>
                            <div className="flex flex-col items-end space-y-2">
                              <Badge>{event.type}</Badge>
                              <Badge variant="outline">{event.category}</Badge>
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

          <TabsContent value="recruiters">
            <Card>
              <CardHeader>
                <CardTitle>Nearby Alumni</CardTitle>
                <CardDescription>
                  Connect with alumni in your area
                </CardDescription>
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
                          <label className="text-sm font-medium mb-2 block">
                            Background of Study
                          </label>
                          <div className="space-y-2">
                            {[
                              "Computer Science",
                              "Business",
                              "Economics",
                              "Investment Banking",
                            ].map((background) => (
                              <div
                                key={background}
                                className="flex items-center"
                              >
                                <Checkbox
                                  id={`background-${background}`}
                                  checked={recruiterFilters.backgroundOfStudy.includes(
                                    background
                                  )}
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      handleRecruiterFilterChange(
                                        "backgroundOfStudy",
                                        [
                                          ...recruiterFilters.backgroundOfStudy,
                                          background,
                                        ]
                                      );
                                    } else {
                                      handleRecruiterFilterChange(
                                        "backgroundOfStudy",
                                        recruiterFilters.backgroundOfStudy.filter(
                                          (b) => b !== background
                                        )
                                      );
                                    }
                                  }}
                                />
                                <label
                                  htmlFor={`background-${background}`}
                                  className="ml-2 text-sm font-medium"
                                >
                                  {background}
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
                      {filteredRecruiters.map((recruiter) => (
                        <Card key={recruiter.id}>
                          <CardContent className="p-4 flex justify-between items-center">
                            <div className="flex items-center space-x-4">
                              <Avatar>
                                <AvatarFallback>
                                  {recruiter.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <h3 className="font-semibold">
                                  {recruiter.name}
                                </h3>
                                <p className="text-sm text-gray-500">
                                  {recruiter.company}
                                </p>
                                <p className="text-sm text-gray-500 flex items-center">
                                  <MapPinIcon className="h-4 w-4 mr-1" />
                                  {recruiter.location}
                                </p>
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {recruiter.backgroundOfStudy.map(
                                    (background, index) => (
                                      <Badge
                                        key={index}
                                        variant="secondary"
                                        className="text-xs"
                                      >
                                        {background}
                                      </Badge>
                                    )
                                  )}
                                </div>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              Connect
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="meetings">
            <Card>
              <CardHeader>
                <CardTitle>Meet Recruiters</CardTitle>
                <CardDescription>
                  Schedule meetings with recruiters in your field
                </CardDescription>
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
                          <label className="text-sm font-medium mb-2 block">
                            Background of Study
                          </label>
                          <div className="space-y-2">
                            {[
                              "Computer Science",
                              "Business",
                              "Economics",
                              "Investment Banking",
                            ].map((background) => (
                              <div
                                key={background}
                                className="flex items-center"
                              >
                                <Checkbox
                                  id={`meeting-background-${background}`}
                                  checked={recruiterFilters.backgroundOfStudy.includes(
                                    background
                                  )}
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      handleRecruiterFilterChange(
                                        "backgroundOfStudy",
                                        [
                                          ...recruiterFilters.backgroundOfStudy,
                                          background,
                                        ]
                                      );
                                    } else {
                                      handleRecruiterFilterChange(
                                        "backgroundOfStudy",
                                        recruiterFilters.backgroundOfStudy.filter(
                                          (b) => b !== background
                                        )
                                      );
                                    }
                                  }}
                                />
                                <label
                                  htmlFor={`meeting-background-${background}`}
                                  className="ml-2 text-sm font-medium"
                                >
                                  {background}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            Years of Experience
                          </label>
                          <div className="space-y-2">
                            {["0-2", "3-5", "6-10", "10+"].map((range) => (
                              <div key={range} className="flex items-center">
                                <Checkbox
                                  id={`experience-${range}`}
                                  checked={recruiterFilters.yearsOfExperience.includes(
                                    range
                                  )}
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      handleRecruiterFilterChange(
                                        "yearsOfExperience",
                                        [
                                          ...recruiterFilters.yearsOfExperience,
                                          range,
                                        ]
                                      );
                                    } else {
                                      handleRecruiterFilterChange(
                                        "yearsOfExperience",
                                        recruiterFilters.yearsOfExperience.filter(
                                          (r: string) => r !== range
                                        )
                                      );
                                    }
                                  }}
                                />
                                <label
                                  htmlFor={`experience-${range}`}
                                  className="ml-2 text-sm font-medium"
                                >
                                  {range} years
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
                      {filteredRecruiters.map((recruiter) => (
                        <Card key={recruiter.id}>
                          <CardContent className="p-4 flex justify-between items-center">
                            <div className="flex items-center space-x-4">
                              <Avatar>
                                <AvatarFallback>
                                  {recruiter.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <h3 className="font-semibold">
                                  {recruiter.name}
                                </h3>
                                <p className="text-sm text-gray-500">
                                  {recruiter.company}
                                </p>
                                <p className="text-sm text-gray-500 flex items-center">
                                  <MapPinIcon className="h-4 w-4 mr-1" />
                                  {recruiter.location}
                                </p>
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {recruiter.backgroundOfStudy.map(
                                    (background, index) => (
                                      <Badge
                                        key={index}
                                        variant="secondary"
                                        className="text-xs"
                                      >
                                        {background}
                                      </Badge>
                                    )
                                  )}
                                </div>
                                <p className="text-sm text-gray-500 mt-1">
                                  {recruiter.yearsOfExperience} years of
                                  experience
                                </p>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              Schedule Meeting
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </>
  );
}
