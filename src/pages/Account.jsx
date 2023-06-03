import React from "react";
import SavedShows from "../components/SavedShows";

const Account = () => {
  return (
    <>
      <div className='w-full text-white'>
        <img
          className='object-cover w-full h-400px'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/d54727b4-2ad9-4e71-bb48-0899f55f103a/231fe309-d117-409a-afc9-c2249d51a97a/US-en-20230220-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
          alt=''
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'>
          <div className='absolute top-[19%] p-4 md:p-8'>
            <h1 className='text-3xl font-bold md:text-5xl'>My Shows</h1>
          </div>
        </div>
      </div>
      <SavedShows />
    </>
  );
};

export default Account;
