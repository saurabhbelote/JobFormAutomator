"use client";
import React from "react";
import { auth } from "@/firebase/config";
import  "./settings.css"

const Settings = function () {
    let user = auth.currentUser;
    async function updateKey() {
        window.location.href = "/updategemini"


    }
    async function updateData() {
        window.location.href = "/updateresume"

    }
    async function deleteAccount() {
        window.location.href  = "/deleteaccount"

    }
    async function handleLogout() {
        try {
            await auth.signOut();
            localStorage.clear()
            window.location.href = "/sign-in";
            // console.log("User logged out successfully!");
            //Event Listner
            function notifyExtensionOnLogout(key) {
                const event = new CustomEvent('onLogout');
                document.dispatchEvent(event);
            }

            // Call this function after successful login
            notifyExtensionOnLogout();  // userUID is the UID of the logged-in user


        } catch (error) {
            console.error("Error logging out:", error.message);
        }

    }
    return (
        <div>
            <main>
                <div className="ellipse ellipse-1"></div>
                <div className="ellipse ellipse-2"></div>
                <div className="ellipse ellipse-3"></div>
                <div className="ellipse ellipse-4"></div>

                <h1>Settings</h1>



                <div className="settings-container">
                    <div className="settings-section">
                        <h2>Update Gemini Key</h2>
                        <button className="btn" onClick={updateKey}>Update Key</button>
                    </div>
                    <div className="settings-section">
                        <h2>Update Data</h2>
                        <button className="btn" onClick={updateData}>Update Data</button>
                    </div>
                    <div className="settings-section">
                        <h2>Delete Account</h2>
                        <button className="btn" onClick={deleteAccount}>Delete Account</button>
                    </div>
                    <div className="settings-section">
                        <h2>Logout</h2>
                        <button className="btn" onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </main>

        </div>
    )
}
export default Settings;