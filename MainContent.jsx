import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { translated } from '.././redux/actions/translated';
import { Vortex } from 'react-loader-spinner'
// import { generateD } from "../redux/actions/generateD";
import { docs } from "../redux/actions/docs";
// import { Audio } from 'react-loader-spinner'



const MainContent = () => {
  // eslint-disable-next-line
  const navigate = useNavigate()
  // eslint-disable-next-line
  const [isOpen, setIsOpen] = useState(false);
  const textareaRef = useRef(null);
  const [saving, setSaving] = useState(false)
  const dispatch = useDispatch();
  const translatedtXT = useSelector((state) => state.translated.val);
  // const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const generated = useSelector(state => state.generated.val);
  const user = JSON.parse(localStorage.getItem('user'))._id
  // const user ="32435353"

  const toggleDropdown = (e) => {
    setIsOpen((prevState) => !prevState);
  };

  const handleLanguageChange = (event) => {
    console.log("Starting")
    setLoading(true)
    const selectedLanguage = event.target.value;
    Axios.post("http://localhost:5000/api/translate", { language: selectedLanguage, text: generated })
      .then(res => {
        if (res.data.translated) {
          dispatch(translated(res.data.translated));
          setLoading(false)

        } else {
          console.error("The response does not contain the expected data");
        }
      })
      .catch(err => {
        // dispatch(translated(err))
        console.log(err.response.data.message)
      });
  };

  const saveDoc = () => {
    setSaving(true)
    // Send POST request to backend to save text document
    Axios.post("http://localhost:5000/doc/save", { text: generated, translated: translatedtXT, user: user })
      .then(res => {
        // Dispatch action to update state
        // dispatch(saveTextDocument(res.data));
        console.log(res.data.message)
        setSaving(false)
      })
      // .catch(err => console.log(err.response.data.message));
      .catch((err) => {
        // dispatch(generateD(err.response.data.message))
        // dispatch(translated(err.response.data.message))
        console.log(err)
      })
  }

  const getDocs = () => {
    Axios.get(`http://localhost:5000/doc/documents/${user}`)
      .then(res => {
        // console.log(res)
        dispatch(docs(res))
        navigate(`../${user}/alldocuments`)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const lang = [
    "English",
    "German",
    "Spanish",
    "Italian",
    "Hindi",
    "Turkish",
    "French",
    "Japanese",
    "Chinese",
    "Russian", "Urdu", "Polish"
  ];
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-6 w-full">
      <div className="flex flex-row justify-end gap-4">
        <div className="flex justify-center items-center mr-20">
          {saving && (
            <>
              <Vortex
                visible={true}
                height="50"
                width="50"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
              />
              <div className="font-bold text-xl">Saving Document...</div>
            </>
          )}
        </div>
        <button
          className="bg-gray-200 px-4 py-2 hover:bg-gray-300 rounded-full border border-gray-400 shadow-lg hover:shadow-xl sm:w-32 md:w-52"
          onClick={saveDoc}
        //! workin but no point in it when getDocs isn't working'
        >
          Save Document
        </button>
        <button className="bg-gray-200 px-4 py-2 hover:bg-gray-300 rounded-full border border-gray-400 shadow-lg hover:shadow-xl sm:w-32 md:w-52"
          onClick={getDocs}
        //! Not workin'


        >
          View Documents
        </button>

      </div>
      <select
        placeholder="Select language for translation"
        className="form-input border-gray-500 bg-gray-300 py-2 px-3 block w-2/3 mt-4 mr-auto ml-auto rounded-full border leading-5 cursor-pointer transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        id="dropdown1"
        onChange={handleLanguageChange}
      >
        {lang.map((item, index) => (
          <option
            key={index}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-300 cursor-pointer font-sm text-sm"
            onClick={toggleDropdown}
          >
            {item}
          </option>
        ))}
      </select>
      <div className="flex flex-col md:flex-row justify-around gap-4 mt-4">
        <div className="flex flex-col justify-center items-center lg:block">
          <p className="block font-bold text-gray-700 mb-2" htmlFor="dropdown1">Generated text</p>
          {loading ? (
            // <div className={`w-full h-4 rounded-full bg-grey-light ${loading ? 'is-loading' : 'hidden'}`}>hehe</div>
            <div className=" h-64 w-full">
              <Vortex
                className="absolute inset-0 m-auto"
                type="Vortex"
                color="#00BFFF"
                height={80}
                width={80}
              />
            </div>
          ) : (
            <textarea
              className="border bg-gray-300 rounded-lg shadow-lg p-2  hover:border-blue-500 hover:shadow-xl cursor-pointer w-full h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
              placeholder="We are waiting for you to generate some amazing content ✨✨✨" value={generated} ref={textareaRef}
            ></textarea>
          )}
        </div>
        <div className="flex flex-col justify-center items-center lg:block">
          <p className="block font-bold text-gray-700 mb-2" htmlFor="dropdown2">Translated text</p>
          {loading ? (
            // <div className={`w-full h-4 rounded-full bg-grey-light ${loading ? 'is-loading' : 'hidden'}`}>hehe</div>
            <div className=" h-64 w-full">
              <Vortex
                className="absolute inset-0 m-auto"
                type="Vortex"
                color="#00BFFF"
                height={80}
                width={80}
              />
            </div>

          ) : (
            <textarea
              className="border rounded-lg shadow-lg p-2 bg-gray-300 hover:border-blue-500 hover:shadow-xl cursor-pointer w-full h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
              placeholder="Translated version.... from the dropdown below ✨✨✨" value={translatedtXT}
            ></textarea>
          )}
        </div>
      </div>


    </div>
  );

};

export default MainContent;


