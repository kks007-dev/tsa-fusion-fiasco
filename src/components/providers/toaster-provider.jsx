"use client";
import { Toaster } from "react-hot-toast";

export const ToastProvider = () => {
    return <Toaster 
    
    toastOptions={{
        duration: 4000,  // Set the default duration globally
      }}
      
      />
}