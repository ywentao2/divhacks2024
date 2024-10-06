import React, { use } from 'react';
import { Navbar, Nav, Container, DropdownMenu } from 'react-bootstrap';
import "./globals.css";
import { Link } from 'react-router-dom';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import { DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import { HomeIcon, GraduationCapIcon, InboxIcon, UserIcon, LogOutIcon } from 'lucide-react';

const MyNavbar = () => {
  const router = useRouter();
  return (
    <header className="bg-white dark:bg-gray-800 shadow">
  <div className="container mx-auto px-4 py-4">
    <div className="flex items-center">
      <div className="flex items-center space-x-2 flex-1">
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-lg font-bold">NeuroTalent</span>
      </div>
      <nav className="flex justify-center items-center flex-1">
        <Button variant="ghost" className="flex items-center space-x-2">
          <HomeIcon className="h-5 w-5" />
          <span>Dashboard</span>
        </Button>
        <Button variant="ghost" className="flex items-center space-x-2">
          <GraduationCapIcon className="h-5 w-5" />
          <span>Alumni</span>
        </Button>
        <Button variant="ghost" className="flex items-center space-x-2">
          <InboxIcon className="h-5 w-5" />
          <span>Inbox</span>
        </Button>
      </nav>
      <div className="flex items-center flex-1 justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <UserIcon className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOutIcon className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  </div>
</header>
  );
};

export default MyNavbar;