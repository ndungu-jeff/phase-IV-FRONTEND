import React from "react";
import { NavLink } from "react-router-dom";
function Preface() {
  return (
    <>
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white p-8 sm:p-12">
        <div className="w-full max-w-xl rounded-2xl bg-violet-50 px-20 py-14">
          <div className="mx-auto flex max-w-sm flex-col items-center">
            <h3 className="max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-2xl md:leading-tight">Welcome!</h3>
            <p className="mt-3 text-center text-black/80">Like you, we are passionate about stays. Take your pick from our extensive catalogue of homes.</p>
            <form action="" className="mx-auto mt-6 flex w-full flex-col gap-3 px-5 sm:flex-row">
              <button type="submit" className="rounded-lg bg-black px-5 py-3 font-bold text-white">
                <NavLink to="/client/stays">My Stays</NavLink>
              </button>
              <button type="submit" className="rounded-lg bg-black px-5 py-3 font-bold text-white">
                <NavLink to="/client/listings">Browse Houses Catologue</NavLink>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default Preface