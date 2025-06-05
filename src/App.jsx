import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import { useAuth } from '@/hooks/useAuth';

// Layout Components
import DashboardLayout from '@/components/layouts/DashboardLayout';
import AuthLayout from '@/components/layouts/AuthLayout';

// Auth Pages
import Login from '@/pages/auth/Login';
import Register from '@/pages/auth/Register';

// Dashboard Pages
import Dashboard from '@/pages/dashboard/Dashboard';
import Upload from '@/pages/dashboard/Upload';
import Charts from '@/pages/dashboard/Charts';
import History from '@/pages/dashboard/History';
import AIInsights from '@/pages/dashboard/AIInsights';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-background">
                <AnimatePresence mode="wait">
                    <Routes>
                        {/* Auth Routes */}
                        <Route element={<AuthLayout />}>
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                        </Route>

                        {/* Protected Dashboard Routes */}
                        <Route
                            element={
                                <ProtectedRoute>
                                    <DashboardLayout />
                                </ProtectedRoute>
                            }
                        >
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/upload" element={<Upload />} />
                            <Route path="/charts" element={<Charts />} />
                            <Route path="/history" element={<History />} />
                            <Route path="/ai-insights" element={<AIInsights />} />
                        </Route>
                    </Routes>
                </AnimatePresence>
                <Toaster />
            </div>
        </Router>
    );
}

export default App; 