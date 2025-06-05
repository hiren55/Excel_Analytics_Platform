import { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    LayoutDashboard,
    Upload,
    BarChart3,
    History,
    Brain,
    Menu,
    X,
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const navItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/upload', icon: Upload, label: 'Upload' },
    { path: '/charts', icon: BarChart3, label: 'Charts' },
    { path: '/history', icon: History, label: 'History' },
    { path: '/ai-insights', icon: Brain, label: 'AI Insights' },
];

export default function DashboardLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const { user, logout } = useAuth();

    return (
        <div className="flex h-screen bg-background">
            {/* Sidebar */}
            <motion.aside
                initial={{ width: 0 }}
                animate={{ width: isSidebarOpen ? 240 : 0 }}
                className="fixed left-0 top-0 z-40 h-screen overflow-hidden bg-card transition-all duration-300"
            >
                <div className="flex h-full flex-col">
                    {/* Logo */}
                    <div className="flex h-16 items-center justify-between px-4">
                        <h1 className="text-xl font-bold glow-text">Excel Analytics</h1>
                        <button
                            onClick={() => setIsSidebarOpen(false)}
                            className="rounded-lg p-2 hover:bg-accent"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 space-y-1 px-2 py-4">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) =>
                                    `flex items-center space-x-3 rounded-lg px-3 py-2 transition-colors ${isActive
                                        ? 'bg-primary text-primary-foreground'
                                        : 'hover:bg-accent'
                                    }`
                                }
                            >
                                <item.icon className="h-5 w-5" />
                                <span>{item.label}</span>
                            </NavLink>
                        ))}
                    </nav>

                    {/* User Profile */}
                    <div className="border-t border-border p-4">
                        <div className="flex items-center space-x-3">
                            <div className="h-8 w-8 rounded-full bg-primary/20" />
                            <div className="flex-1">
                                <p className="text-sm font-medium">{user?.name}</p>
                                <p className="text-xs text-muted-foreground">{user?.email}</p>
                            </div>
                            <button
                                onClick={logout}
                                className="rounded-lg p-2 hover:bg-accent"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </motion.aside>

            {/* Main Content */}
            <div className="flex-1">
                {/* Header */}
                <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-card px-4">
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="rounded-lg p-2 hover:bg-accent"
                    >
                        <Menu className="h-5 w-5" />
                    </button>
                    <div className="flex items-center space-x-4">
                        <div className="text-sm text-muted-foreground">
                            Welcome back, {user?.name}
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="container mx-auto p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
} 