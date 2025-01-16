"use client";
import React, { useState } from "react";
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import PageBackground from "@/components/ui/pagebackground";
import toast from "react-hot-toast";
import Loader from "@/components/ui/Loader";

// Updated Header Component
const Header = () => {
  return (
    <Navbar/>
  );
};

const HomePage = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [isLoading, loadSwitch] = useState(false);

  
    const toggleForm = () => {
      setIsSignUp(!isSignUp);
    };

    const handleSignUp = async (event) => {
        event.preventDefault();
        loadSwitch(true);
        const name = await document.getElementById('name').value;
        const rawemail = document.getElementById('email').value;
        const email = rawemail.toLowerCase();
        const password = document.getElementById('password').value;
        const data = {
          name: name,
          email: email,
          password: password,
        };
        try {
          const res = await fetch("/api/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
    
          const result = await res.json();
          if (res.ok) {
            toast.success("Sign up successful! Please log in.");
            toggleForm();

          } else {
            toast.error(result.message || "Something went wrong.")
           // alert("Something went wrong.");
          }
        } catch (error) {
          console.error(error);
          alert("Failed to sign up. Please try again.");
        }finally{
          loadSwitch(false);
        }
      };
    
      const handleLogIn = async (event) => {
        event.preventDefault();
        loadSwitch(true);
        const rawemail = document.getElementById('email').value;
        const email = rawemail.toLowerCase();
        const password = document.getElementById('password').value;
        const data = {
          email: email,
          password: password,
        };
      
        try {
          const res = await fetch("/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
      
          const result = await res.json();
          
          if (res.ok) {
            toast.success("Login successful!");
      
            // Store the token and user info in local storage or cookies
            localStorage.setItem("token", result.token);
            localStorage.setItem("user", JSON.stringify(result.user));
            localStorage.setItem("email", result.user.email);
            localStorage.setItem("name", result.user.name);
            if (result.user.cart.length >= 1) {
              localStorage.setItem("cart", JSON.stringify(result.user.cart));
            }
      
            // Delay the redirect to allow the toast to show
            setTimeout(() => {
              window.location.href = '/';
            }, 1500); // 2-second delay to let the toast display
          } else {
            toast.error(result.message || "Invalid credentials.");
          }
        } catch (error) {
          console.error(error);
          toast.error("Failed to log in. Please try again.");
        }finally{
          loadSwitch(false);
        }
      };
      

    return (
      <div>
        <PageBackground overlayOpacity={0.5} 
        imageUrl="https://i.ibb.co/ggxfhR5/Fusion-fiasco-20250112-223548-0000.png"
        >
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="transition-all duration-300 ease-in-out bg-white shadow-lg rounded-3xl p-8 max-w-md w-full">
            <h1 className="text-3xl font-bold text-center mb-6">
              {isSignUp ? "Sign Up" : "Login"}
            </h1>
            <form onSubmit= {isSignUp? handleSignUp : handleLogIn}>
              {isSignUp && (
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                    placeholder="Enter your full name" required
                  />
                </div>
              )}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                  placeholder="Enter your email" required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                  placeholder="Enter your password" required
                />
              </div>
              {isSignUp && (
                <div className="mb-4">
                  <label
                    htmlFor="confirm-password"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirm-password"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                    placeholder="Confirm your password" required
                  />
                </div>
              )}
              <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300">
              {isSignUp ? "Sign Up" : "Login"}
              </button>
            </form>
            <p className="text-center text-sm text-gray-600 mt-4">
              {isSignUp ? "Already have an account?" : "First time here?"}{" "}
              <button
                onClick={toggleForm}
                className="text-green-600 hover:underline focus:outline-none"
              >
                {isSignUp ? "Login" : "Sign Up"}
              </button>
            </p>
            
            <div id="loadspace" className="justify-items-center">
                {isLoading? <Loader /> : ''}
              </div>
          </div>
        </main>
        <Footer />
        </PageBackground>
      </div>
    );
  };
  
  export default HomePage;