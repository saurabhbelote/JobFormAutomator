"use client";
import React, { useEffect, useState} from "react";
import app from "@/firebase/config";
import { getDatabase, ref, get } from "firebase/database";
// import box from "./image/box.svg";
// import money from "./image/dollar-suitcase-svgrepo-com.svg";
// import discount from "./image/discount-label-svgrepo-com.svg";
// import news from "./image/health-message-text-mail-medical-inbox-hospital-svgrepo-com.svg";

// import "./Referral.css"; // Import the CSS file

const Referral = () => {
    const [isLogin, setIsLogin] = useState(null);
    const [fullName, setFullName] = useState("");
    const [copySuccess, setCopySuccess] = useState(""); // State to show copy success message
    const db = getDatabase(app);

    useEffect(() => {
        const fetchUserData = async () => {
            const loginStatus = localStorage.getItem("IsLogin");
            setIsLogin(loginStatus);

            const userId = localStorage.getItem("UID");
            if (userId) {
                const findUser = ref(db, `user/${userId}`);
                get(findUser).then((snapshot) => {
                    let Name = snapshot.val()?.name;
                    let fname = snapshot.val()?.fname;
                    let lname = snapshot.val()?.lname;
                    let user = "";
                    if (Name) {
                        user = Name;
                        const cleanedName = user.replace(/\s/g, "");
                        setFullName(cleanedName);
                    } else {
                        user = fname + " " + lname;
                        const cleanedName = user.replace(/\s/g, "");
                        setFullName(cleanedName);
                    }
                });
            }
        };

        fetchUserData();
    }, []);

    // Function to copy the URL to clipboard
    const copyToClipboard = () => {
        const referralURL = `https://jobformautomator.com/${fullName}`;
        navigator.clipboard.writeText(referralURL).then(() => {
            setCopySuccess("Copied!");
        }).catch(err => {
            setCopySuccess("Failed to copy!");
        });
    };

    return (

        <div>
            <main>

                <div className="ellipse ellipse-1"></div>
                <div className="ellipse ellipse-2"></div>
                <div className="ellipse ellipse-3"></div>
                <div className="ellipse ellipse-4"></div>

                <h1>Earn Money While You Job Hunt!</h1>
                <div className="contact-container">
                    <div className="message-section">

                        <div className="video-container">
                            {/* <img class="referal-img" src={box} alt="description of image" /> */}

                        </div>
                    </div>
                    <div className="form-section">
                        <form>
                            <h2>Start Earning Now🎉</h2>
                            <p>Refer a friend and earn $9* for every successful referral—no limits, no catch, just extra cash while you're on the path to your dream job.
                            </p>
                             {isLogin !== null && isLogin !== "null" ? (
                                <div>
                                    <div>
                                        {`https://jobformautomator.com/${fullName}`}
                                    </div><br></br>
                                    <button className="copy-btn" onClick={copyToClipboard}>
                                        Copy Your Referral Link
                                    </button>
                                    {copySuccess && <span className="copy-message">{copySuccess}</span>}
                                </div>
                            ) : (<div>
                                <div style={{"color":"red"}}>To Get Referral Link, Login First! </div><br></br>
                                <a href="/sign-in" className="forgot-password">Login</a>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </main>

            <div className="wrapper">

                <div className="content-container">

                    <div className="features-section">

                        <div className="feature-item">
                            <div className="icon-background">
                                {/* <img src={money} alt="money icon" class="icon" /> */}
                            </div>
                            <div className="feature-content">
                                <h3 className="feature-title">Receive $9 per Paid user</h3>
                                <p className="feature-description">For every new paid user you refer who installs our Chrome extension and automates their job applications, you'll receive $9 straight into your account. There's no cap on earnings—the sky's the limit!
                                </p>
                            </div>
                        </div>

                        <div className="feature-item">
                            <div className="icon-background">
                                {/* <img src={discount} alt="mail icon" class="icon" /> */}
                            </div>
                            <div className="feature-content">
                                <h3 className="feature-title">50% off when you share on LinkedIn</h3>
                                <p className="feature-description">
                                Want to save even more? Unlock 50% off on JobForm Automator! 🎉 Simply share our post on LinkedIn and email us the link to claim your exclusive discount. It's our way of saying thank you for spreading the word.
                                </p>
                            </div>
                        </div>

                        <div className="feature-item">
                            <div className="icon-background">
                                {/* <img src={news} alt="briefcase icon" class="icon" /> */}
                            </div>
                            <div className="feature-content">
                                <h3 className="feature-title">Be Remarkable—Lead the Way</h3>
                                <p className="feature-description">By sharing JobForm Automator, you're not just earning extra income—you're leading a movement. Help others discover a smarter way to job hunt and build your own community of forward-thinkers.
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="decorative-background">

                        <div className="vector-element"></div>
                        <div className="ellipse-element"></div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Referral;