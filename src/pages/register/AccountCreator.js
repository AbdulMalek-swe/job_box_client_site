import React from 'react';
import { useNavigate, useParams } from 'react-router';
import img from '../../assets/login.svg'
import CandidateRegistration from './CandidateRegistration';
import EmployerRegistration from './EmployerRegistration';
const AccountCreator = () => {
    const navigate = useNavigate();
  const { type } = useParams();

  if (type === "candidate") {
    return <CandidateRegistration />;
  }

  if (type === "employer") {
    return <EmployerRegistration />;
  }

    return (
        <div className='h-screen pt-14'>
      <h1 className='text-center my-10 text-2xl'>Continue as ...</h1>
      <div className='flex justify-evenly '>
        <div
          onClick={() => navigate("/register/candidate")}
          className='flex flex-col justify-between transition-all rounded-lg p-5 border border-white hover:border-primary hover:shadow-2xl hover:scale-105 group'
        >
          <img className='h-5/6' src={img} alt='' />
          <p className='text-center text-3xl'>Candidate</p>
        </div>
        <div
          onClick={() => navigate("/register/employer")}
          className='flex flex-col justify-between transition-all rounded-lg p-5 border border-white hover:border-primary hover:shadow-2xl hover:scale-105 group'
        >
          <img className='h-[77%]' src={img} alt='' />
          <p className='text-center text-3xl'>Employer</p>
        </div>
      </div>
    </div>
    );
};

export default AccountCreator;