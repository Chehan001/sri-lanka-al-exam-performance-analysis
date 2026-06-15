import React, { useState, useEffect } from 'react';
import { LayoutDashboard, Radio, Cpu, HelpCircle } from 'lucide-react';
import apiService from '../services/api';

const Navbar = () => {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    const verifyConnection = async () => {
      try {
        const online = await apiService.checkApiHealth();
        setIsOnline(online);
      } catch (e) {
        setIsOnline(false);
      }
    };
    verifyConnection();
    // Refresh health status every 10 seconds
    const interval = setInterval(verifyConnection, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80 bg-slate-950/80 px-6 py-4 flex items-center justify-between">
      {/* Brand logo & title */}
      <div className="flex items-center space-x-3">
        <div className="bg-gradient-to-tr from-brand-600 to-teal-400 p-2 rounded-lg text-white shadow-md shadow-brand-500/10">
          <LayoutDashboard className="h-6 w-6" />
        </div>
        <div>
          <h1 className="text-xl font-bold font-display tracking-tight bg-gradient-to-r from-slate-50 via-slate-100 to-slate-300 bg-clip-text text-transparent">
            Sri Lanka G.C.E. A/L
          </h1>
          <p className="text-xs text-slate-400 font-medium">Performance Analysis System</p>
        </div>
      </div>

      {/* API status and toggle actions */}
      <div className="flex items-center space-x-4">
        {/* Connection status badge */}
        <div
          title={isOnline ? 'System is connected to the backend API' : 'Cannot reach backend API server'}
          className={`flex items-center space-x-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-all duration-300 ${
            isOnline
              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
              : 'bg-rose-500/10 text-rose-400 border-rose-500/30 animate-pulse'
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
              isOnline ? 'bg-emerald-400' : 'bg-rose-400'
            }`}></span>
            <span className={`relative inline-flex rounded-full h-2 w-2 ${
              isOnline ? 'bg-emerald-500' : 'bg-rose-500'
            }`}></span>
          </span>
          <span className="flex items-center gap-1 font-mono uppercase">
            {isOnline ? 'API ONLINE' : 'API OFFLINE'}
          </span>
        </div>
        
        {/* Info panel */}
        <div className="hidden md:flex items-center space-x-1 text-xs text-slate-400 border-l border-slate-800 pl-4">
          <Cpu className="h-4 w-4 text-slate-500" />
          <span>v1.0.0</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
