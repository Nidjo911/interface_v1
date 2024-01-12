import React, { useEffect, useState } from 'react'

'use client'


export default function Data() {

    const [profile, setProfile] = useState([{ freq: "", amp: "" }]);

    /*     getVal = (e) => {
            setFreq(e.target.value)
        }; */
    const handleProfileChange = (e, i) => {
        // Todo: Change profile at position i 
    };

    /* separate for changes: freq and amp */

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

        {/* New chatcode:
        
            <div>
      {inputs.map((input, index) => (
        <div key={index}>
          <label>
            Frequency:
            <input
              type="text"
              value={input.frequency}
              onChange={(e) => handleFrequencyChange(e, index)}
            />
          </label>
          <label>
            Amplitude:
            <input
              type="text"
              value={input.amplitude}
              onChange={(e) => handleAmplitudeChange(e, index)}
            />
          </label>
        </div>
      ))}
      <button onClick={addInput}>Add Input</button>
    </div>*/}
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
                    onChange={(e) => handleProfileChange(e, index)}
                    required
                />

            </Form>


        </>
    );

}