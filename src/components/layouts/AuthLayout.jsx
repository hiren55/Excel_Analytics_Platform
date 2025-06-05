import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function AuthLayout() {
    return (
        <div className="min-h-screen gradient-bg">
            <div className="container relative flex h-screen flex-col items-center justify-center">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -left-1/2 top-0 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl" />
                    <div className="absolute -right-1/2 bottom-0 h-[500px] w-[500px] rounded-full bg-secondary/20 blur-3xl" />
                </div>

                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8 text-center"
                >
                    <h1 className="text-4xl font-bold glow-text">Excel Analytics</h1>
                    <p className="mt-2 text-muted-foreground">
                        Analyze and visualize your data with AI-powered insights
                    </p>
                </motion.div>

                {/* Auth Form Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-md"
                >
                    <div className="glassmorphism rounded-lg p-8 shadow-lg">
                        <Outlet />
                    </div>
                </motion.div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mt-8 text-center text-sm text-muted-foreground"
                >
                    <p>© 2024 Excel Analytics Platform. All rights reserved.</p>
                </motion.div>
            </div>
        </div>
    );
} 