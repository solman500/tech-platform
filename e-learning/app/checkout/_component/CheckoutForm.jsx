// CheckoutForm.js
"use client";
import { PaymentElement } from "@stripe/react-stripe-js";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = ({amount}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const handleError = (err) => {
      setLoading(false);
      setErrorMessage(err.message);
    };

    const { error: submitError } = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }

    const res = await fetch("api/create-intent", {
      method: "POST",
      body: JSON.stringify({
        amount: amount,
      }),
    });

    const clientSecret = await res.json();

    const result = await stripe.confirmPayment({
      clientSecret,    
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/payment-confirm", // Update with your return URL
      },
    });

    if (result.error) {
      console.log(result.error.message);
    } else {
      // Payment is successful
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mx-32 md:mx-[320px] m-10">
        <PaymentElement />
        <button className="w-full p-2 mt-4 text-white rounded-md bg-teal-600">
          Submit
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
