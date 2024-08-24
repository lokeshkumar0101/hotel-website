import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

export default function Inquiry() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const apiKey = import.meta.env.VITE_PUBLIC_ACCESS_KEY || "0f23ad39-4581-4711-9713-e7cf78111ff4";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Acme Inc",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });

  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 pt-10 pb-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-xl text-lg">
              At the same time, the fact that we are wholly owned and totally independent from
              manufacturer and other group control gives you confidence that we will only recommend what
              is right for you.
            </p>

            <div className="mt-8">
              <a href="#" className="text-2xl font-bold text-teal-600"> +91-9876543210 </a>
              <address className="mt-2 not-italic">282 Kevin Brook, Imogeneborough, CA 58517</address>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <input
                type="checkbox"
                className="hidden"
                style={{ display: "none" }}
                {...register("botcheck")}
              />

              <div>
                <h4 className="text-center pb-8 -mt-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  Share Your Details With Us!
                </h4>
                <label className="sr-only" htmlFor="name">Name</label>
                <input
                  className={`w-full rounded-lg border-2 border-black p-3 text-sm ${errors.name ? "border-red-600" : "border-gray-200"
                    }`}
                  placeholder="Name"
                  type="text"
                  id="name"
                  {...register("name", { required: "Full name is required" })}
                />
                {errors.name && (
                  <div className="mt-1 text-red-600">
                    <small>{errors.name.message}</small>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>

                  <label className="sr-only" htmlFor="email">Email</label>
                  <input
                    className={`w-full rounded-lg border-2 border-black p-3 text-sm ${errors.email ? "border-red-600" : "border-gray-200"
                      }`}
                    placeholder="Email address"
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Enter your email",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Please enter a valid email",
                      },
                    })}
                  />
                  {errors.email && (
                    <div className="mt-1 text-red-600">
                      <small>{errors.email.message}</small>
                    </div>
                  )}
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">Phone</label>
                  <input
                    className={`w-full rounded-lg border-2 border-black p-3 text-sm ${errors.phone ? "border-red-600" : "border-gray-200"
                      }`}
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                    {...register("phone", { required: "Phone number is required" })}
                  />
                  {errors.phone && (
                    <div className="mt-1 text-red-600">
                      <small>{errors.phone.message}</small>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">Message</label>
                <textarea
                  className={`w-full rounded-lg border-2 border-black p-3 text-sm ${errors.message ? "border-red-600" : "border-gray-200"
                    }`}
                  placeholder="Message"
                  rows="8"
                  id="message"
                  {...register("message", { required: "Enter your Message" })}
                ></textarea>
                {errors.message && (
                  <div className="mt-1 text-red-600">
                    <small>{errors.message.message}</small>
                  </div>
                )}
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-teal-600 hover:bg-teal-500 active:text-slate-200 px-5 py-3 font-medium text-white sm:w-auto"
                >
                  {isSubmitting ? (
                    <svg
                      className="w-5 h-5 mx-auto text-white animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    "Send Enquiry"
                  )}
                </button>
              </div>
            </form>

            {isSubmitSuccessful && isSuccess && (
              <div className="mt-3 text-sm text-center text-green-500">
                {message || "Success. Message sent successfully"}
              </div>
            )}
            {isSubmitSuccessful && !isSuccess && (
              <div className="mt-3 text-sm text-center text-red-500">
                {message || "Something went wrong. Please try later."}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
