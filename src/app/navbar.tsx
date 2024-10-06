"use client";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  HomeIcon,
  UserIcon,
  InboxIcon,
  GraduationCapIcon,
  LogOutIcon,
} from "lucide-react";
import "./globals.css";
import React from "react";
import Link from "next/link";

import { useUser } from "@auth0/nextjs-auth0/client";

const MyNavbar = () => {

  const isEmployer = true;
  const { user, error, isLoading } = useUser();

  const dashboardLink = isEmployer  ? "/employer-dashboard" : "/student-dashboard";

  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center">
          <div className="flex items-center space-x-2 flex-1">
            <Link href={"/"}>
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link className="text-lg font-bold" href={"/"}>
              NeuroTalent
            </Link>
          </div>
          <nav className="flex justify-center items-center flex-1">
            <Link href={dashboardLink} className="flex items-center space-x-2">
              <HomeIcon className="h-5 w-5" />
              <span className="text-sm">Home</span>
            </Link>
            <Button variant="ghost" className="flex items-center space-x-2">
              <GraduationCapIcon className="h-6 w-6" />
              <span>Browse</span>
            </Button>
            <Button variant="ghost" className="flex items-center space-x-2">
              <InboxIcon className="h-5 w-5 font-bold" />
              <span>Inbox</span>
            </Button>
          </nav>
          <div className="flex items-center flex-1 justify-end">
            <DropdownMenu>
              {user ? (
                <>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Avatar className="w-12 h-12">
                        <AvatarImage
                          src={
                            user
                              ? "./media/nopfp2.jpg"
                              : "./media/default_icon.png"
                          }
                          alt="User"
                        />
                        <AvatarImage src={user.picture ? user.picture : "User"} alt="User"></AvatarImage>
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
                      <span><a href="/api/auth/logout">Log out</a></span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </>
              ) : (
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="w-12 h-12">
                    <AvatarImage
                      src="./media/default_icon.png"
                      alt="User"
                    />
                    <AvatarFallback ><a href="/api/auth/login">Login</a></AvatarFallback>
                  </Avatar>
                </Button>
              )}
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MyNavbar;
