'use client'

import React, { useState } from 'react'
import dummyData from '@/database';

export default function Data() {

  const [profile, setProfile] = useState( [ {freq: "", amp: ""} ]);

  const handleFormChange = (index, event) => {
    let currentData = [...profile];
    currentData[index][event.target.name] = event.target.value;
    setProfile(currentData);
  };


  const addProfileLine = () => {
    let newLine = { freq: "", amp: "" };
    setProfile([...profile, newLine]);
  };

  const removeProfileLineForever = (index) => {
    let data = [...profile];
    data.splice(index, 1);
    setProfile(data);

  };


  const handleSubmitProfileForm = (e) => {
    e.preventDefault();
    console.log(profile);

  }

  const gimmeDummyData = () => {
    setProfile(dummyData);
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmitProfileForm}>
          {profile.map((value, index) => {

            return (
              <div className='flex' key={index}>
                <input
                  type="number"
                  placeholder="freq"
                  name="freq"
                  value={value.freq}
                  onChange={(event) => handleFormChange(index, event)}
                  required
                />
                <input
                  type="number"
                  placeholder="amp"
                  name="amp"
                  value={value.amp}
                  onChange={(event) => handleFormChange(index, event)}
                  required
                />
                <button onClick={()=>removeProfileLineForever(index)} className="removeBtn">Remove profile line</button>

              </div>
            )

          } ) }
          <button onClick={addProfileLine}>Add a new line</button>
            < br />
          <button onClick={handleSubmitProfileForm}>Submit</button>
        </form>

      </div>

      {/* make dummy data show when button is clicked */}

      <div>
          <button onClick={gimmeDummyData} type="button">Click to see example</button>

      </div>
    </>
  );

}