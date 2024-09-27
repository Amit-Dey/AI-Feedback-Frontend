import FeedbackForm from './components/FeedbackForm';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

import './App.css';

function App() {
  return (
    <div className="text-center mx-[10vw] lg:mx-[15vw]">
      {/* Add the header section */}
      <header className="bg-white py-4 text-black text-center flex justify-between ">
        <img src="/logo.svg" alt="logo" className="w-[10rem] mx-auto md:mx-0" />
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>

      {/* Add the main section */}
      <main className="flex-none  md:flex gap-5 mt-28">
        <div className='text-start flex-1'>
          <p className=' text-[#4A3AFF] font-bold flex text-base gap-3 justify-start'><img src='/dash.svg' alt='dash' /> RATE OUR SERVICES</p>
          <h1 className=" text-4xl font-extrabold text-[#170F49] py-5">Fill the form to submit your feedback</h1>
          <p className="text-[#6F6C90] text-base">Please take a moment to rate your experience with our services. Your feedback is important to us. Thank you for your time.</p>
          <SignedOut>
            <p className='text-gray-800 text-xl mt-14' >You must be signed in to submit your feedback. <br></br> If you don&apos;t have an account, you can create one for free.</p>
          </SignedOut>

        </div>
        <SignedIn>
          <FeedbackForm />
        </SignedIn>
      </main>
    </div>
  );
}

export default App;
