import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Bell, Search, User, LogOut, Settings } from 'lucide-react';
import { Button } from './ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Input } from './ui/input';

const Navbar = ({ toggleSidebar }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-40 w-full border-b border-gray-200/50 bg-white/80 backdrop-blur-md">
            <div className="flex h-16 items-center justify-between px-4 md:px-6">
                <div className="flex items-center gap-4">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden text-gray-800 hover:bg-red-100"
                        onClick={toggleSidebar}
                    >
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle sidebar</span>
                    </Button>
                    <Link to="/" className="flex items-center gap-2">
                        <span className="text-xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                            Excel Analytics
                        </span>
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-2">
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                            <Input
                                type="search"
                                placeholder="Search..."
                                className="w-[200px] pl-8 bg-gray-50/50 border-gray-200/50 focus:border-red-200"
                            />
                        </div>
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="relative text-gray-800 hover:bg-red-100"
                    >
                        <Bell className="h-5 w-5" />
                        <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-gradient-to-r from-red-600 to-red-500" />
                        <span className="sr-only">Notifications</span>
                    </Button>
                    <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="relative text-gray-800 hover:bg-red-100"
                            >
                                <User className="h-5 w-5" />
                                <span className="sr-only">User menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56 bg-white/95 backdrop-blur-md border-gray-200/50">
                            <DropdownMenuLabel className="font-normal">
                                <div className="flex flex-col space-y-1">
                                    <p className="text-sm font-medium text-gray-800">John Doe</p>
                                    <p className="text-xs text-gray-500">john@example.com</p>
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator className="bg-gray-200/50" />
                            <DropdownMenuItem className="text-gray-800 hover:bg-red-100 hover:text-red-600 cursor-pointer">
                                <User className="mr-2 h-4 w-4" />
                                Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-gray-800 hover:bg-red-100 hover:text-red-600 cursor-pointer">
                                <Settings className="mr-2 h-4 w-4" />
                                Settings
                            </DropdownMenuItem>
                            <DropdownMenuSeparator className="bg-gray-200/50" />
                            <DropdownMenuItem className="text-gray-800 hover:bg-red-100 hover:text-red-600 cursor-pointer">
                                <LogOut className="mr-2 h-4 w-4" />
                                Log out
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 