import Image from "next/image";
import React from "react";
import Link from "next/link";

function PaymentConfirm(){
    return(
        <div>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <header className="text-center">
                        <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                            Payment Confirmation
                        </h1>
                    </header>
                    <div className="mt-8">
                        <div className="flex items-center gap-4">
                            <div>
                                <h3 className="text-sm text-gray-900">
                                    Payment Successful
                                </h3>
                                <p className="text-sm text-gray-900">
                                    Your payment has been successfully processed. Thank you for your purchase.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}