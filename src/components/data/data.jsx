import React, { useEffect, useState } from 'react'

'use client'


export default function Data() {

  const [profile, setProfile] = useState([{ freq: "", amp: "" }]);


  const handleFrequencyChange = (e, index) => {
    const newInputs = [...inputs];
    newInputs[index].frequency = e.target.value;
    setInputs(newInputs);
  };


  const handleAmplitudeChange = (e, index) => {
    const newInputs = [...inputs];
    newInputs[index].amplitude = e.target.value;
    setInputs(newInputs);
  };

  const addInput = () => {
    setInputs([...inputs, { frequency: '', amplitude: '' }]);
  };

  const handleProfileAdd = () => {

  }

  const handleProfileDel = (i) => {

  }

  const handleSubmitProfile = (e) => {
    e.preventDefault();
    setProfile([]);

  }

  return (
    <>

      {/* Default inputs I need to begin with */}
      <label htmlFor="freq">
        <input type="number" name="freq" id="" value="" onChange={getVal} />

      </label>

      <label htmlFor="amp">
        <input type="number" name="amp" id="" value="" onChange={getVal} />
      </label>

      <Form onSubmit="">
        <input
          type="text"
          placeholder="Freq"
          name="Freq"
          value={profile.name}
          onChange={(e) => handleFrequencyChange(e, index)}
          required
        />

        <input
          type="text"
          placeholder="Amp"
          name="Amp"
          value={profile.name}
          onChange={(e) => handleAmplitudeChange(e, index)}
          required
        />

      </Form>


    </>
  );

}