

import { useState } from "react";

function LocationForm({ locationHandler }) {
  const statesWithCities = {
    Haryana: ["Gurgaon", "Faridabad", "Panipat", "Ambala"],
    Delhi: ["New Delhi", "Dwarka", "Rohini", "Saket"],
    Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik"],
    Karnataka: ["Bengaluru", "Mysuru", "Mangaluru"],
  };

  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [error, setError] = useState("");

  // whenever state/city changes, inform parent
  const handleChange = (state, city) => {
    if (!state || !city) {
      setError("Both fields are mandatory");
    } else {
      setError("");
      locationHandler({ state, city }); // pass to parent
    }
  };

  return (
    <>
    <hr />
    <div style={{ margin: "20px"}} className="loaction-user">
      <h3>Confirm Your Location</h3>

      {/* STATE */}
      <label>State *</label>
      <br />
      <select
        value={selectedState}
        onChange={(e) => {
          const newState = e.target.value;
          setSelectedState(newState);
          setSelectedCity(""); // reset city
          handleChange(newState, "");
        }}
        style={{
          width: "250px",
          height: "35px",
          marginTop: "5px",
          border: !selectedState && error ? "1px solid red" : "1px solid gray",
        }}
      >
        <option value="">-- Select State --</option>
        {Object.keys(statesWithCities).map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>

      <br />
      <br />

      {/* CITY */}
      {selectedState && (
        <>
          <label>City *</label>
          <br />
          <select
            value={selectedCity}
            onChange={(e) => {
              const city = e.target.value;
              setSelectedCity(city);
              handleChange(selectedState, city);
            }}
            style={{
              width: "250px",
              height: "35px",
              marginTop: "5px",
              border:
                selectedState && !selectedCity && error
                  ? "1px solid red"
                  : "1px solid gray",
            }}
          >
            <option value="">-- Select City --</option>
            {statesWithCities[selectedState].map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
    </>
  );
}

export default LocationForm;
