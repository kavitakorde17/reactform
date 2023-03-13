
// // import { City, Country, State } from "country-state-city";
// // import { useEffect, useState } from "react";
// // // import Select from "react-select/dist/declarations/src/Select";
// // import Select from 'react-select'
// // const App = () => {
// //   let countryData = Country.getAllCountries();
// //   const [stateData, setStateData] = useState();
// //   const [cityData, setCityData] = useState();

// //   const [country, setCountry] = useState(countryData[0]);
// //   const [state, setState] = useState();
// //   const [city, setCity] = useState();
// //   console.log(country)
// //   useEffect(() => {
// //     setStateData(State.getStatesOfCountry(country?.isoCode));
// //   }, [country]);

// //   useEffect(() => {
// //     setCityData(City.getCitiesOfState(country?.isoCode, state?.isoCode));
// //   }, [state]);

// //   useEffect(() => {
// //     stateData && setState(stateData[0]);
// //   }, [stateData]);

// //   useEffect(() => {
// //     cityData && setCity(cityData[0]);
// //   }, [cityData]);

// //   return (
// //     <section className="min-h-screen px-3 grid place-items-center pb-20 selection:text-white selection:bg-teal-500 bg-gradient-to-r from-teal-400 to-teal-500">
// //       <div>
// //         <h2 className="text-2xl font-bold text-teal-900">
// //           Country, State and City Selectors
// //         </h2>
// //         <br />
// //         <div className="flex flex-wrap gap-3 bg-teal-300 rounded-lg p-8">
// //           <div>
// //             <p className="text-teal-800 font-semibold">Country :</p>
// //             <Select
// //             options={country}
// //               data={countryData}
// //               selected={country}
// //               setSelected={setCountry}
// //             />


// //           </div>
// //           {state && (
// //             <div>
// //               <p className="text-teal-800 font-semibold">State :</p>
// //               <Select
// //                 data={stateData}
// //                 selected={state}
// //                 setSelected={setState}
// //               />
// //             </div>
// //           )}
// //           {city && (
// //             <div>
// //               <p className="text-teal-800 font-semibold">City :</p>
// //               <Select data={cityData} selected={city} setSelected={setCity} />
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default App;




// import React, { useEffect } from "react";
// // import "./styles.css";
// import { useFormik } from "formik";
// import Select from "react-select";
// // import csc from "country-state-city";
// import { Country, State, City }  from 'country-state-city';
// export default function App() {
//   const addressFromik = useFormik({
//     initialValues: {
//       country: "India",
//       state: null,
//       city: null
//     },
//     onSubmit: (values) => console.log(JSON.stringify(values))
//   });

//   const countries = Country.getAllCountries();

//   const updatedCountries = countries.map((country) => ({
//     label: country.name,
//     value: country.id,
//     ...country
//   }));
//   const updatedStates = (countryId) =>
//     Country
//       .getStatesOfCountry(countryId)
//       .map((state) => ({ label: state.name, value: state.id, ...state }));
//   const updatedCities = (stateId) =>
//     State
//       .getCitiesOfState(stateId)
//       .map((city) => ({ label: city.name, value: city.id, ...city }));

//   const { values, handleSubmit, setFieldValue, setValues } = addressFromik;

//   useEffect(() => {}, [values]);

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <Select
//           id="country"
//           name="country"
//           label="country"
//           options={updatedCountries}
//           value={values.country}
//           // onChange={value => {
//           //   setFieldValue("country", value);
//           //   setFieldValue("state", null);
//           //   setFieldValue("city", null);
//           // }}
//           onChange={(value) => {
//             setValues({ country: value, state: null, city: null }, false);
//           }}
//         />
//         <Select
//           id="state"
//           name="state"
//           options={updatedStates(values.country ? values.country.value : null)}
//           value={values.state}
//           onChange={(value) => {
//             setValues({ state: value, city: null }, false);
//           }}
//         />
//         <Select
//           id="city"
//           name="city"
//           options={updatedCities(values.state ? values.state.value : null)}
//           value={values.city}
//           onChange={(value) => setFieldValue("city", value)}
//         />
//         <button type="submit">Submit</button>
//         {/* <p>{JSON.stringify(csc.get)}</p> */}
//       </form>
//     </div>
//   );
// }
