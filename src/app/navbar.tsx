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

const MyNavbar = () => {
  const { user } = useUser();
  const isEmployer = user?.userType === "employer";
  const isLoggedIn = false;
  const dashboardLink = isEmployer
    ? "/employer-dashboard"
    : "/student-dashboard";
  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="w-1/4 flex-shrink-0">
            <Image src={logo} alt="Neurotalent Logo" className="h-8 w-auto" />
          </div>
          <nav className="w-1/2 flex justify-center items-center">
            <div className="flex space-x-6">
              <Link href="/" className="flex items-center space-x-2">
                <HomeIcon className="h-6 w-6" />
                <span className="text-base">Home</span>
              </Link>
              <Link
                href={dashboardLink}
                className="flex items-center space-x-2"
              >
                <GraduationCapIcon className="h-7 w-7" />
                <span className="text-base">Browse</span>
              </Link>
              <Link href="/inbox" className="flex items-center space-x-2">
                <InboxIcon className="h-6 w-6 font-bold" />
                <span className="text-base">Inbox</span>
              </Link>
            </div>
          </nav>
          <div className="w-1/4 flex justify-end">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" className="rounded-full">
                  <Avatar>
                    <AvatarImage
                      src={
                        isLoggedIn
                          ? "./media/nopfp2.jpg"
                          : "./media/default_icon.png"
                      }
                      alt="User"
                    />
                    <AvatarFallback>{isLoggedIn ? "U" : " "}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {!isLoggedIn ? (
                  <>
                    <Link href="/login">
                      <DropdownMenuItem>
                        <LogInIcon className="mr-2 h-4 w-4" />
                        <span>Log In</span>
                      </DropdownMenuItem>
                    </Link>
                    <Link href="/first-time-sign-up">
                      <DropdownMenuItem>
                        <UserPlusIcon className="mr-2 h-4 w-4" />
                        <span>Sign Up</span>
                      </DropdownMenuItem>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link href="/profile-settings">
                      <DropdownMenuItem>
                        <UserIcon className="mr-2 h-4 w-4" />
                        <span>Profile & Settings</span>
                      </DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem>
                      <LogOutIcon className="mr-2 h-4 w-4" />
                      <span>
                        <a href="/api/auth/logout">Log out</a>
                      </span>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MyNavbar;
