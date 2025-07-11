import React, { useState} from "react";
import Axios from "axios";
import {useDispatch } from 'react-redux';
import { generateD } from '.././redux/actions/generateD';


const Sidebar = () => {
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
    "Russian",
  ];
  const tone = [
    "Formal",
    "Informal",
    "Neutral",
    "Casual",
    "Business",
    "Professional",
    "Friendly",
    "Familiar",
    "Conversational",
    "Colloquial",
  ];

  const usecase = [
    'Product Descriptions',
    'Digital Ad Copy Variants',
    'Facebook Headlines',
    'Facebook Link Descriptions',
    'Facebook Listicle',
    'Facebook Primary Text',
    'General Ad Copy',
    'Google Descriptions',
    'Google Headlines',
    'LinkedIn Ad Copy',
    'Press Release Intros',
    'Rewrite With Keywords',
    'Sentence Rewriter',
    'Simplify Sentences',
    'Tone Changer',
    'Two Sentence Stories',
    'Brand Mission',
    'Brand Voice',
    'Motto Generator',
    'Value Proposition',
    'Website Copy ',
    'Call To Action',
    'Landing page Copy',
    'Landing Page Hero Text',
    'Listicle',
    'Meta Descriptions',
    'Microcopy',
    'Question Generator',
    'Social Proof Text',
    'Subheader',
    'Testimonial Rewriter',
    'Event page Copy',
    'Blog copy',
    'Blog Ideas',
    'Blog Content/paragraph',
    'Blog Intro',
    'Blog Outline',
    'Blog Title',
    'Blog Title - Listicle',
    'Bullet Point to Blog Section',
    'Keyword Generator',
    'Cold email copy ',
    'Follow Up Email',
    'Thank You Note',
    'Welcome Email',
    'Cancellation Email',
    'Catchy Email Subject Lines',
    'Confirmation Emails',
    'Bullet Points',
    'Carousel Post',
    'Youtube Subtitles',
    'Hashtag Generator',
    'Instagram Captions',
    'Instagram Product Showcase',
    'Keyword Generator',
    'Launch Your Product',
    'Relatable Experiences',
    'Short Text Hook',
    'TikTok Brainstorm Topics',
    'Video Call To Action',
    'YouTube Description Intro',
    'YouTube Video Title',
    'Essay Intro',
    'Essay Outline',
    "Explain Like I'm 5",
    'Freestyle',
    'Hero Story Intro',
    'Hero Story Villain',
    'Passive To Active Voice',
    'Birthday Card',
    'Cover Letter',
    'Love Letter',
    'Resume Bullet Points',
    'Type your usecase'
  ]

  const variants = [1, 2, 3]
  const [selectedOption, setSelectedOption] = useState("Existing Copy");
  const [language, setLanguage] = useState("English");
  const [Tone, setTone] = useState("Formal");
  const [Usecase, setUsecase] = useState("Product Descriptions");
  const [Description, setDescription] = useState("");
  // eslint-disable-next-line
  const [Variants, setVariants] = useState(1);
  const dispatch = useDispatch()
  // dispatch(generated)


  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  // eslint-disable-next-line
  const [isOpen, setIsOpen] = useState(false);
  // const dispatch = useDispatch('')
  const toggleDropdown = (e) => {
    setIsOpen((prevState) => !prevState);

  };
  // eslint-disable-next-line
  const handleSubmit = (event, formType) => {
    // prevent the default submission behavior of the form
    event.preventDefault();
    if(formType ==="form1"){
      Axios.post("http://localhost:5000/api/generate", {
        language: language,
        Tone: Tone,
        Usecase: Usecase,
        Description: Description,
        Variants: Variants
      })
        .then(res => {
          if (res.data.generated) {
            
            dispatch(generateD(res.data.generated));

          } else {
            console.error("The response does not contain the expected data");
          }
        })
        .catch(err => {
          console.error(err);
          // dispatch an error action using the dispatch function
          // dispatch({ type: "ERROR", payload: err });
          dispatch(generateD(err));

        });

    }else if(formType==="form2"){
      Axios.post("http://localhost:5000/api/generate", {
        language: language,
        Tone: Tone,
        Usecase: Usecase,
        Description: Description + " You need to REWRITE this description.\n",
        Variants: Variants
      })
        .then(res => {
          if (res.data.generated) {
            // dispatch a plain object action using the dispatch function
            // dispatch({ type: "GENERATE_SUCCESS", payload: res.data.generated });
            dispatch(generateD(res.data.generated));

          } else {
            console.error("The response does not contain the expected data");
          }
        })
        .catch(err => {
          // console.error(err);
          // dispatch an error action using the dispatch function
          // dispatch({ type: "ERROR", payload: err });
          dispatch(generateD(err));

        });
    }
  };

  // console.log(generated)

  return (
    <>
      <div className="sidebar bg-gray-200 p-4 lg:min-h-screen">

        <div className="mb-4">
          <label htmlFor="options" className="block font-bold my-4"> Select an option:</label>

          <select
            id="options"
            className="block appearance-none w-full hover:bg-gray-300 cursor-pointer bg-gray-200 rounded-full border border-gray-400 px-4 py-2 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => handleOptionClick(e.target.value)}>
            <option value="Existing Copy">Existing Copy</option> <option value="Generate New Copy">Generate New Copy</option>
          </select>

        </div>



        {/* <div className="bg-white rounded-lg shadow-lg p-4">
        </div> */}
        {selectedOption === "Generate New Copy" ? (
          <form onSubmit={event => handleSubmit(event, "form1")}>
            <div className="mb-4 flex flex-row justify-between items-center gap-10">
              <div>
                <label className="block font-bold text-gray-700 mb-2" htmlFor="dropdown1">Languague</label>
                <div className="relative rounded-full shadow-sm">
                  <select className="form-input cursor-pointer border border-gray-500 bg-gray-300 py-2 px-3 block w-full leading-5 rounded-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" id="dropdown1" onChange={(e) => setLanguage(e.target.value)}>
                    {lang.map((item, index) => (
                      <option key={index} className="block px-4 py-2 text-gray-700 hover:bg-gray-300 cursor-pointer font-sm text-sm" onClick={toggleDropdown}
                      >{item}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-2" htmlFor="dropdown1">Tone</label>
                <div className="relative rounded-full shadow-sm">
                  <select className="form-input cursor-pointer border border-gray-500 bg-gray-300 py-2 px-3 block w-full leading-5 rounded-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" id="dropdown1" onChange={(e) => setTone(e.target.value)}>
                    {tone.map((item, index) => (
                      <option key={index} className="block px-4 py-2 text-gray-700 hover:bg-gray-300 cursor-pointer font-sm text-sm" onClick={toggleDropdown}
                      >{item}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="block font-bold text-gray-700 mb-2" htmlFor="dropdown1">Usecase</label>
              <div className="relative rounded-full shadow-sm">
                <select className="form-input border cursor-pointer border-gray-500 bg-gray-300 py-2 px-3 block w-full leading-5 rounded-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" id="dropdown1" onChange={(e) => setUsecase(e.target.value)}>
                  {usecase.map((item, index) => (
                    <option key={index} className="block px-4 py-2 text-gray-700 hover:bg-gray-300 cursor-pointer font-sm text-sm" onClick={toggleDropdown}
                    >{item}</option>
                  ))}
                </select>
              </div>
            </div>


            <div className="mb-4">
              <label className="block font-bold text-gray-700 mb-2" htmlFor="input1">Enter your drescription</label>
              <input className="form-input py-2 px-3 block w-full leading-5 rounded-full border border-gray-500 transition duration-150 ease-in-out sm:text-sm sm:leading-5" id="input1" type="text" onChange={(e) => setDescription(e.target.value)} />
            </div>


            <div className="mb-4">
              <label className="block font-bold text-gray-700 mb-2" htmlFor="dropdown1">Variants</label>
              <div className="relative rounded-full shadow-sm">
                <select className="form-input bg-gray-300 cursor-pointer py-2 px-3  border border-gray-500 block w-full leading-5 rounded-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" id="dropdown1" onChange={(e) => setVariants(3)}>
                  {variants.map((item, index) => (
                    <option key={index} className="block px-4 py-2 text-gray-700 hover:bg-gray-300 cursor-pointer font-sm text-sm" onClick={toggleDropdown}
                    >{item}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="submit">
                Generate
              </button>
            </div>
          </form>

        ) : <form onSubmit={event => handleSubmit(event, "form2")}>
          <div className="mb-4 flex flex-row justify-between items-center gap-10">
            <div>
              <label className="block font-bold text-gray-700 mb-2" htmlFor="dropdown1">Languague</label>
              <div className="relative rounded-full shadow-sm">
                <select className="form-input cursor-pointer border border-gray-500 bg-gray-300 py-2 px-3 block w-full leading-5 rounded-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" id="dropdown1" onChange={(e) => setLanguage(e.target.value)}>
                  {lang.map((item, index) => (
                    <option key={index} className="block px-4 py-2 text-gray-700 hover:bg-gray-300 cursor-pointer font-sm text-sm" onClick={toggleDropdown}
                    >{item}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block font-bold text-gray-700 mb-2" htmlFor="dropdown1">Tone</label>
              <div className="relative rounded-full shadow-sm">
                <select className="form-input cursor-pointer border border-gray-500 bg-gray-300 py-2 px-3 block w-full leading-5 rounded-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" id="dropdown1" onChange={(e) => setTone(e.target.value)}>
                  {tone.map((item, index) => (
                    <option key={index} className="block px-4 py-2 text-gray-700 hover:bg-gray-300 cursor-pointer font-sm text-sm" onClick={toggleDropdown}
                    >{item}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block font-bold text-gray-700 mb-2" htmlFor="dropdown1">Usecase</label>
            <div className="relative rounded-full shadow-sm">
              <select className="form-input border cursor-pointer border-gray-500 bg-gray-300 py-2 px-3 block w-full leading-5 rounded-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" id="dropdown1" onChange={(e) => setUsecase(e.target.value)}>
                {usecase.map((item, index) => (
                  <option key={index} className="block px-4 py-2 text-gray-700 hover:bg-gray-300 cursor-pointer font-sm text-sm" onClick={toggleDropdown}
                  >{item}</option>
                ))}
              </select>
            </div>
          </div>


          <div className="mb-4">
            <label className="block font-bold text-gray-700 mb-2" htmlFor="input1">Enter your drescription</label>
            <input className="form-input py-2 px-3 block w-full leading-5 rounded-full border border-gray-500 transition duration-150 ease-in-out sm:text-sm sm:leading-5" id="input1" type="text" onChange={(e) => setDescription(e.target.value)} />
          </div>


          <div className="mb-4">
            <label className="block font-bold text-gray-700 mb-2" htmlFor="dropdown1">Variants</label>
            <div className="relative rounded-full shadow-sm">
              <select className="form-input bg-gray-300 cursor-pointer py-2 px-3  border border-gray-500 block w-full leading-5 rounded-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" id="dropdown1" onChange={(e) => setVariants(3)}>
                {variants.map((item, index) => (
                  <option key={index} className="block px-4 py-2 text-gray-700 hover:bg-gray-300 cursor-pointer font-sm text-sm" onClick={toggleDropdown}
                  >{item}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="submit">
              Rewrite and translate
            </button>
          </div>




        </form>}

      </div>


    </>
  );
};

export default Sidebar;