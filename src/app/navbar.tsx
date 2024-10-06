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
  LogInIcon,
  UserPlusIcon,
} from "lucide-react";
import { useUser } from '@auth0/nextjs-auth0/client';
import "./globals.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "./media/neurotalent.png";

import { useUser } from "@auth0/nextjs-auth0/client";

const MyNavbar = () => {
  const { user } = useUser();
  const isEmployer = user?.userType === "employer";
  const dashboardLink = isEmployer
    ? "/employer-dashboard"
    : "/student-dashboard";
  const isEmployer = true;
  const { user, error, isLoading } = useUser();

  const dashboardLink = isEmployer  ? "/employer-dashboard" : "/student-dashboard";
  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="w-1/4 flex-shrink-0">
            <Image src={logo} alt="Neurotalent Logo" className="h-8 w-auto" />
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
            <Link href='/inbox' className="flex items-center space-x-2">
              <InboxIcon className="h-5 w-5 font-bold" />
              <span>Inbox</span>
            </Link>
          </nav>
          <div className="w-1/4 flex justify-end">
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
            <Link href="/settings" className="ml-3 rounded-full bg-white p-1 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <span className="sr-only">Settings</span>
              <Settings className="h-6 w-6" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MyNavbar;
