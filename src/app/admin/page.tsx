"use client";

import { useState, useEffect } from "react";
import AdminLogin from "@/components/AdminLogin";
import AdminDashboard from "@/components/AdminDashboard";

export default function AdminPage() {
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  const [error, setError] = useState<string>("");

  // Default passcode - You can change this or use an environment variable
  const CORRECT_PASSCODE = "290426"; // Wedding date: April 29, 2026

  useEffect(() => {
    // Check if previously authorized in this session
    const authStatus = sessionStorage.getItem("admin_authorized");
    if (authStatus === "true") {
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
    }
  }, []);

  const handleLogin = (password: string) => {
    if (password === CORRECT_PASSCODE) {
      setIsAuthorized(true);
      sessionStorage.setItem("admin_authorized", "true");
      setError("");
    } else {
      setError("Mật mã không chính xác. Vui lòng thử lại.");
    }
  };

  if (isAuthorized === null) return null; // Wait for hydration/useEffect

  return isAuthorized ? (
    <AdminDashboard />
  ) : (
    <AdminLogin onLogin={handleLogin} error={error} />
  );
}
