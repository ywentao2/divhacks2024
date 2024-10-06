"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { SendIcon, SearchIcon, MoreVertical } from 'lucide-react'

export default function Inbox() {
  const [selectedConversation, setSelectedConversation] = useState<number | null>(null)
  const [newMessage, setNewMessage] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  const conversations = [
    { id: 1, with: "Sarah Johnson", company: "TechCorp Inc.", unread: 2, lastMessage: "Thanks for your interest in our company!", timestamp: "2023-07-10T14:30:00" },
    { id: 2, with: "Michael Chen", company: "DataInsights Co.", unread: 0, lastMessage: "Looking forward to our meeting next week.", timestamp: "2023-07-09T11:15:00" },
    { id: 3, with: "Emily Rodriguez", company: "DesignPro Agency", unread: 1, lastMessage: "Do you have any questions about the role?", timestamp: "2023-07-08T16:45:00" },
    { id: 4, with: "David Kim", company: "FinTech Solutions", unread: 0, lastMessage: "Great to connect with you!", timestamp: "2023-07-07T09:30:00" },
    { id: 5, with: "Lisa Wang", company: "AI Innovations", unread: 3, lastMessage: "We'd love to schedule an interview.", timestamp: "2023-07-06T13:20:00" },
  ]

  const messages = [
    { id: 1, conversationId: 1, from: "Sarah Johnson", content: "Hi there! I saw your profile and I'm impressed with your skills.", timestamp: "2023-07-10T14:00:00" },
    { id: 2, conversationId: 1, from: "You", content: "Thank you, Sarah! I'm very interested in opportunities at TechCorp.", timestamp: "2023-07-10T14:15:00" },
    { id: 3, conversationId: 1, from: "Sarah Johnson", content: "Great! Let's schedule a call to discuss further.", timestamp: "2023-07-10T14:20:00" },
    { id: 4, conversationId: 1, from: "You", content: "Sounds good! When would be a good time for you?", timestamp: "2023-07-10T14:25:00" },
    { id: 5, conversationId: 1, from: "Sarah Johnson", content: "Thanks for your interest in our company!", timestamp: "2023-07-10T14:30:00" },
  ]

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      console.log("Sending message:", newMessage)
      setNewMessage("")
    }
  }

  const filteredConversations = conversations.filter(conversation =>
    conversation.with.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conversation.company.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="flex h-screen bg-background">
      <div className="w-1/3 border-r border-border">
        <div className="p-4 border-b border-border">
          <Input
            placeholder="Search conversations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>
        <ScrollArea className="h-[calc(100vh-5rem)]">
          {filteredConversations.map((conversation) => (
            <div
              key={conversation.id}
              className={`flex items-center justify-between p-4 cursor-pointer transition-colors ${
                selectedConversation === conversation.id ? 'bg-accent' : 'hover:bg-accent/50'
              }`}
              onClick={() => setSelectedConversation(conversation.id)}
            >
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarFallback>{conversation.with.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{conversation.with}</p>
                  <p className="text-sm text-muted-foreground">{conversation.company}</p>
                  <p className="text-sm text-muted-foreground truncate w-48">{conversation.lastMessage}</p>
                </div>
              </div>
              <div className="flex flex-col items-end space-y-1">
                <p className="text-xs text-muted-foreground">
                  {new Date(conversation.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
                {conversation.unread > 0 && (
                  <Badge variant="destructive" className="rounded-full px-2 py-0.5">
                    {conversation.unread}
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </ScrollArea>
      </div>
      <div className="flex-1 flex flex-col">
        {selectedConversation ? (
          <>
            <div className="p-4 border-b border-border flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarFallback>
                    {conversations.find(c => c.id === selectedConversation)?.with.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{conversations.find(c => c.id === selectedConversation)?.with}</p>
                  <p className="text-sm text-muted-foreground">
                    {conversations.find(c => c.id === selectedConversation)?.company}
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages
                  .filter(m => m.conversationId === selectedConversation)
                  .map((message) => (
                    <div key={message.id} className={`flex ${message.from === 'You' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[70%] p-3 rounded-lg ${message.from === 'You' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>
                        <p className="text-sm">{message.content}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </ScrollArea>
            <div className="p-4 border-t border-border">
              <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="flex space-x-2">
                <Textarea
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="flex-grow"
                  rows={1}
                />
                <Button type="submit" size="icon">
                  <SendIcon className="h-4 w-4" />
                  <span className="sr-only">Send message</span>
                </Button>
              </form>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <Card className="w-[300px]">
              <CardHeader>
                <CardTitle>Welcome to your Inbox</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Select a conversation to start messaging
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}