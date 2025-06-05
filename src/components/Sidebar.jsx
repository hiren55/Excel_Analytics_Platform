import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '../lib/utils';
import {
    LayoutDashboard,
    Upload,
    BarChart3,
    History,
    Brain,
    FileText,
    Settings,
    X,
} from 'lucide-react';
import { Button } from './ui/button';

const navItems = [
    {
        title: 'Dashboard',
        href: '/',
        icon: LayoutDashboard,
    },
    {
        title: 'Upload Excel',
        href: '/upload',
        icon: Upload,
    },
    {
        title: 'Generate Charts',
        href: '/charts',
        icon: BarChart3,
    },
    {
        title: 'History',
        href: '/history',
        icon: History,
    },
    {
        title: 'AI Insights',
        href: '/ai-insights',
        icon: Brain,
    },
    {
        title: 'Reports',
        href: '/reports',
        icon: FileText,
    },
    {
        title: 'Settings',
        href: '/settings',
        icon: Settings,
    },
];

const Sidebar = ({ isOpen, onClose }) => {
    return (
        <>
            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/10 backdrop-blur-sm md:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <aside
                className={cn(
                    'fixed inset-y-0 left-0 z-50 w-64 transform bg-white/80 backdrop-blur-md border-r border-gray-200/50 shadow-lg transition-transform duration-300 ease-in-out md:translate-x-0',
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                )}
            >
                <div className="flex h-full flex-col">
                    <div className="flex h-16 items-center justify-between border-b border-gray-200/50 px-6 bg-gradient-to-r from-white to-gray-50">
                        <h2 className="text-lg font-semibold text-gray-800">Navigation</h2>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden hover:bg-red-100 text-gray-800"
                            onClick={onClose}
                        >
                            <X className="h-5 w-5" />
                            <span className="sr-only">Close sidebar</span>
                        </Button>
                    </div>
                    <nav className="flex-1 space-y-1 px-3 py-4">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.href}
                                to={item.href}
                                className={({ isActive }) =>
                                    cn(
                                        'flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all duration-200',
                                        isActive
                                            ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-200'
                                            : 'text-gray-800 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100/50 hover:text-red-600'
                                    )
                                }
                            >
                                <item.icon className="mr-3 h-5 w-5" />
                                {item.title}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </aside>
        </>
    );
};

export default Sidebar; 