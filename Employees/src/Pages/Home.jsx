import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate()

  const [inputs, setInputs] = useState({
    Name: '',
    Age: '',
    City: '',
    Salary: '',
    Description: '',
    Question1: '',
    Question2: '',
    Question3: '',
  });
  

  const [validationError, setValidationError] = useState('');

  const change = (event) => {
    setInputs({...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const submit = (event) => {

    if (inputs.Name.length < 4) {
      setValidationError('Name should be at least 4 characters long');
      return;
    }

    if (inputs.Age < 18 || inputs.Age > 70) {
      setValidationError('Age should be between 18 and 70');
      return;
    }

    if (!inputs.City) {
      setValidationError('Please select a city');
      return;
    }

    if (!inputs.Salary) {
      setValidationError('Please select expected salary');
      return;
    }

    if (!inputs.Description) {
        setValidationError('Please fill the reason to join the job');
        return;
      }
    
    if (!inputs.Question1) {
        setValidationError('Please Answer the Questions');
        return;
      }

      if (!inputs.Question2) {
        setValidationError('Please Answer the Questions');
        return;
      }

      if (!inputs.Question3) {
        setValidationError('Please Answer the Questions');
        return;
      }

    setValidationError('');
    navigate('/done')
   
  };
  

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-black'>
      <div className='bg-white flex flex-col p-10'>
        <p className='text-lg text-center'>Job Application Form</p>
          <label className='p-1' htmlFor='Name'>
            Name:
          </label>
          <input
            className='border'
            type='text'
            name='Name'
            placeholder='Your Name'
            value={inputs.Name}
            onChange={change}
          />

          <label className='p-1' htmlFor='Age'>
            Age:
          </label>
          <input
            className='border'
            type='number'
            name='Age'
            placeholder='Your Age'
            value={inputs.Age}
            onChange={change}
          />

          <label className='p-1' htmlFor='City'>
            City:
          </label>
          <select
            className='border'
            name='City'
            value={inputs.City}
            onChange={change}
          >
            <option value='' disabled>
              Select City
            </option>
            <option value='1'>Riyadh</option>
            <option value='2'>Jeddah</option>
          </select>

          <label className='p-1' htmlFor='Salary'>
            Expected Salary:
          </label>
          <select
            className='border'
            name='Salary'
            value={inputs.Salary}
            onChange={change}
          >
            <option value='' disabled>
              Select Salary Range
            </option>
            <option value='3000-8000'>3000 - 8000</option>
            <option value='9000-13000'>9000 - 13000</option>
            <option value='15000+'>15000 and above</option>
          </select>

          <label className='p-1' htmlFor='Description'>
            Why do you want this job?
          </label>
          <textarea
            className='border'
            name='Description'
            placeholder='Write your answer here...'
            value={inputs.Description}
            onChange={change}
          ></textarea>

          <p className='mt-3'>Answer the following questions:</p>
          <label className='p-1' htmlFor='Question1'>
            Are you experienced?
          </label>
          <select
            className='border'
            name='Question1'
            value={inputs.Question1}
            onChange={change}
          >
            <option value='' disabled>
              Select an answer
            </option>
            <option value='Yes'>Yes</option>
            <option value='No'>No</option>
          </select>

          <label className='p-1' htmlFor='Question2'>
            Can you work in a team?
          </label>
          <select
            className='border'
            name='Question2'
            value={inputs.Question2}
            onChange={change}
          >
            <option value='' disabled>
              Select an answer
            </option>
            <option value='Yes'>Yes</option>
            <option value='No'>No</option>
          </select>

          <label className='p-1' htmlFor='Question3'>
            Are you willing to relocate?
          </label>
          <select
            className='border'
            name='Question3'
            value={inputs.Question3}
            onChange={change}
          >
            <option value='' disabled>
              Select an answer
            </option>
            <option value='Yes'>Yes</option>
            <option value='No'>No</option>
          </select>

          {validationError && (
            <p className='text-red-500'>{validationError}</p>
          )}

          <button className='mt-5 bg-black text-white' onClick={submit}>
            Submit
          </button>
        {/* </form> */}
      </div>
    </div>
  );
};

export default Home;
5