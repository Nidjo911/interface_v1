'use client'

import React, { useState } from 'react'


export default function Data() {

  const [profile, setProfile] = useState([{ freq: "", amp: "" }]);


  const handleFormChange = (e, index) => {
    let currentData = [...profile];
    currentData[index][e.target.name] = e.target.value;
    setProfile(currentData);
  };


  const addProfileLine = () => {
    let newLine = { freq: "", amp: "" }
    setProfile([...profile, newLine]);
  };

  const removeProfileLineForever = () => {
    

  };


  const handleSubmitProfileForm = (e) => {
    e.preventDefault();
    setProfile([profile]);
    console.log(setProfile);

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
                <button className="removeBtn">Remove profile line</button>

              </div>
            )

          } ) }
          <button onClick={addProfileLine}>Add a new line</button>
            < br />
          <button onClick={handleSubmitProfileForm}>Submit</button>
        </form>

      </div>
    </>
  );

}