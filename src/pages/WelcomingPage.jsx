import React from "react";

function WelcomingPage() {
  return (
    <div>
      <section className="rounded-3xl shadow-2xl w-[600px] mx-auto">
        <div className="p-8 text-center sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-pink-500">
            Welcome to Boardify
          </p>

          <h2 className="mt-6 text-3xl font-bold">
            Thanks for your purchase, we're getting it ready!
          </h2>

          <a
            className="mt-8 inline-block w-full rounded-[4px] bg-blue-600 py-4 font-bold text-white shadow-xl"
            href=""
          >
            Create Workspace
          </a>
        </div>
      </section>
    </div>
  );
}

export default WelcomingPage;
