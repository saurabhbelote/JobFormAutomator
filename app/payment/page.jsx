
"use client"
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
// import Img from "./image/jobform_automator_logo.jpg"
// import "./styles.css"
// import rupay from "./image/rupay.svg";
// import mastercard from "./image/mastercard.svg"
// import upi from "./image/upi.svg";
// import visa from "./image/visa.svg"
import { get, ref, getDatabase, update } from "firebase/database";
import app, { auth } from "@/firebase/config";
import { toast } from "react-toastify";
import { onAuthStateChanged } from "firebase/auth";


const Payment = function () {
    const searchParams = useSearchParams();
    const plan = searchParams.get("plan") || "Not specified";
    const price = searchParams.get("price") || "0";
    const [currency, setCurrency] = useState('INR');
    const [amount, setAmount] = useState(999);
    const [promocode, setPromocode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [coupon, setCoupon] = useState("");
    const [country, setCountry] = useState("")
    const [country_name, setCountryname] = useState("")
    const receiptId = "qwsaq1";
    const db = getDatabase(app);
    let final_amount = 0;
    console.log(plan, price)

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log("User signed in:", currentUser); // Debugging user 
            } else {
                toast.error("You need to be signed in!");
                window.location.href = "/sign-in"
            }
        });

        

        // Detect user's country and set currency
        fetch("https://ipapi.co/json/")
            .then((response) => response.json())
            .then((data) => {
                setCountry(data.country);
                setCountryname(data.country_name);

                if (data.country === "IN") {
                    setCurrency('INR');
                    setAmount(1);
                } else {
                    setCurrency('USD');
                    setAmount(20);
                }
            });

        // Load Razorpay script dynamically
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        script.onload = () => {
            console.log("Razorpay script loaded successfully");
        };
        script.onerror = () => {
            console.error("Razorpay script failed to load");
        };
        document.body.appendChild(script);
        return () => unsubscribe();
    }, []);


    const handlePaymentINR = async (e) => {
        e.preventDefault();
        // console.log(process.env.REACT_APP_API_KEY,"key")
        const finalAmount = (amount - discount) * 100;
        final_amount = finalAmount;

        const response = await fetch("https://us-central1-browser-extension-01.cloudfunctions.net/app/order", {
            method: "POST",
            body: JSON.stringify({
                amount: finalAmount,
                currency: 'INR',
                receipt: receiptId,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const order = await response.json();
        initiateRazorpay(order, 'INR');
    }

    const handlePaymentUSD = async (e) => {
        e.preventDefault();
        const finalAmount = (amount - discount) * 100;

        const response = await fetch("https://us-central1-browser-extension-01.cloudfunctions.net/app/order", {
            method: "POST",
            body: JSON.stringify({
                amount: finalAmount,
                currency: 'USD',
                receipt: receiptId,
            }),
            headers: {
                "Content-Type": "application/json",
            },


        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const order = await response.json();
        initiateRazorpay(order, 'USD');
    }

    const initiateRazorpay = (order, currency) => {

        var options = {
            key: process.env.REACT_APP_API_KEY,
            amount: order.amount,
            currency,
            name: "JobForm Automator",
            description: "Subscription",
            // image: Img,
            order_id: order.id,
            method: {
                // Enable/Disable specific payment methods
                netbanking: true,
                card: true,
                wallet: true,
                upi: true,
                qr: true, // Disable QR code payment
            },
            handler: async function (response) {
                // console.log(response, "response")

                const validateRes = await fetch(
                    "https://us-central1-browser-extension-01.cloudfunctions.net/app/order/validate",
                    {
                        method: "POST",
                        body: JSON.stringify({
                            razorpayorderId: response.razorpay_order_id,
                            razorpaySignature: response.razorpay_signature,
                            razorpaypaymentId: response.razorpay_payment_id

                        }),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                await validateRes.json().then((status) => {
                    if (status.msg === "success") {
                        function notifyExtensionOnPayment(uid) {
                            console.log("payment successfull", "even listner call")

                            const event = new CustomEvent('paymentSuccessfull', { detail: { uid } });
                            document.dispatchEvent(event);
                        }
                        console.log(auth?.currentUser?.uid, "uid")
                        notifyExtensionOnPayment(auth?.currentUser?.uid)
                        //**REFERRAL CODE UPDATE */
                        const currentDate = new Date();
                        const formattedDateTime = currentDate.toISOString().replace("T", " ").split(".")[0];
                        const getReferralCodeFromCookie = () => {
                            const cookie = document.cookie.split('; ').find(row => row.startsWith('referral='));
                            return cookie ? cookie.split('=')[1] : null;
                        };
                        const referralCode = getReferralCodeFromCookie();
                        console.log(auth.currentUser, "user");
                        const currentUser = auth?.currentUser?.uid

                        // Path: /referrals/<referralCode>/<currentUser>
                        const userRef = ref(db, `/referrals/${referralCode}/${currentUser}`);

                        // Update amount and paymentDate
                        update(userRef, {
                            amount: final_amount / 100, // Set the new amount
                            paymentDate: formattedDateTime // Set the payment date
                        })
                            .then(() => {
                                console.log("Amount and payment date updated successfully!");
                            })
                            .catch((error) => {
                                console.error("Error updating data:", error);
                            });

                    }
                })

            },
            prefill: {
                name: "",
                email: "",
                contact: "",
            },
            notes: {
                address: "Razorpay Corporate Office",
            },
            theme: {
                color: "#3399cc",
            },
        };
        var rzp1 = new window.Razorpay(options);
        // console.log(rzp1,"payment")
        rzp1.on("payment.failed", function (response) {
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
        });
        rzp1.open();
    }

    const applyPromocode = async (e) => {
        e.preventDefault();
        document.getElementById('promocode').value = '';
        let db = getDatabase(app);
        const userRef = ref(db, "promo_codes/" + promocode);
        // console.log(country,)
        get(userRef).then(async (snapshot) => {
            console.log(snapshot.val())
            if (snapshot.val() === null) {
                toast.error("Invalid promocode!")
                return;
            }
            // console.log(country,snapshot.val().currency_type , 'SUMAN')
            if ((country === "IN" && snapshot.val().currency_type === "INR") || (country !== "IN" && snapshot.val().currency_type === "USD")) {


                if (snapshot.val().discount_type === "fixed") {
                    setCoupon(promocode);
                    setDiscount(snapshot.val().discount_value);
                } else if (snapshot.val().discount_type === "percentage") {
                    setCoupon(promocode);
                    let finalValue = Math.floor(amount * (snapshot.val().discount_value / 100));
                    setDiscount(finalValue);
                }
            }
            else {
                toast.error(`Invalid Promocode :This promocode is not applicable for  ${country_name}`)
            }
        }).catch((err) => {
            toast.error(err);
        });
    };


    const handleInputChange = (e) => {
        e.preventDefault();
        setPromocode(e.target.value);
    }

    const deleteCoupon = async (e) => {
        setCoupon("");
        setDiscount(0);
    }

    const handlePayment = currency === 'INR' ? handlePaymentINR : handlePaymentUSD;
    const subtotal = ((amount - discount) * 100) / 100;

    return (
        <div>
            <main>
                <div className="ellipse ellipse-1"></div>
                <div className="ellipse ellipse-2"></div>
                <h1>Payment</h1>
                <div className="contact-container">
                    <div className="message-section">
                        <h2>Why Choose Us?</h2>
                        <p>- Time-Saving: Focus on what matters while we handle the job applications.</p>
                        <p>- 24/7 Customer Support: We are here to assist you anytime.</p>
                        <p>- Money-Back Guarantee: Not satisfied with our service? Get your money back.</p>
                    </div>
                    <div className="form-section">
                        <h2>Order Summary</h2>
                        <p className="item-count">1 item</p>
                        <p className="subtotal">Subtotal ({currency}) <span>{coupon ? `${currency} ${subtotal}` : amount}</span></p>
                        <form>
                            <input type="text" id="promocode" placeholder="Promo Code" onChange={handleInputChange} required />
                            <button className="apply-button" onClick={applyPromocode}>Apply</button>
                        </form>
                        {coupon ? (
                            <div>
                                <div className="promo-code">
                                    Promo Code: <span>{coupon}</span>
                                    <span className="remove" onClick={deleteCoupon} style={{ cursor: "pointer" }}>🗑</span>
                                </div>
                                <div className="savings">
                                    <p>✔️ You qualify for multiple money-saving orders. We've applied the best one to give you the lowest price.</p>
                                    <p>{`😃 Nice! You saved ${currency} ${discount} on your order.`}</p>
                                </div>
                            </div>
                        ) : <div></div>}
                        <button onClick={handlePayment}>I'm Ready to Pay</button>
                        <div className="secure-payment">
                            <p>Secure Payment</p>
                            {/* <img src={visa} alt="Visa" />
                            <img src={mastercard} alt="MasterCard" />
                            <img src={rupay} alt="RuPay" />
                            <img src={upi} alt="UPI" /> */}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Payment;