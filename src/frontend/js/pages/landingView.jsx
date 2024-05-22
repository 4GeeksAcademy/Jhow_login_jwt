import React, {useState} from "react"
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import Accordion from "../component/Accordion.jsx";

//--- icons ------------------------------------
import { HiOutlinePlus } from "react-icons/hi";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { HiOutlineCheck } from "react-icons/hi";

//--- icons ------------------------------------
import bricks from "../../assets/img/home-view-images/bricks.svg"
import vieja from "../../assets/img/image.png"



// @dreisup copy your -Home- contents to this file
const LandingView = () => {






	return (
    <div className="bg-dark w-full p-0 m-0 absolute ">
      <div className="pt-[60px] w-[1440px] mx-auto">
    {/*--- hero section ------------------------------------ */}
        <div id="heroSection" className="w-full grid grid-cols-2 p-5">
          <div className="mx-auto">
            <h1 className="f-tittle text-[64px] py-8">Organizing your tasks has never been easier and more convinient</h1>
            <p className="f-body text-xl py-2 w-8/12">Create a workspace and plan your way to go<br/> Your goals are just a few "checks" away from you </p>
            <Link to="/login">
              <button className="border rounded-[10rem] px-10 py-4 f-tittle text-xl bg-accent-l text-black mt-10">Get started - its free!</button>
            </Link>
          </div>
          <div className="mx-auto bg-b">
            <img src={vieja} alt="" />
            </div>
        </div>
        
    {/*--- trusted by ------------------------------------ */}
        <div id="socialProofSection" className="w-full grid py-20">
          <h2 className="flex justify-center w-full f-tittle text-[48px] my-5">
            Trusted by
          </h2>
            <ul className="grid grid-cols-5 my-10">
              <li className="mx-auto f-tittle text-4xl">apple</li>
              <li className="mx-auto f-tittle text-4xl">microsoft</li>
              <li className="mx-auto f-tittle text-4xl">google</li>
              <li className="mx-auto f-tittle text-4xl">amazon</li>
              <li className="mx-auto f-tittle text-4xl">open ai</li>
            </ul>
        </div>

        {/*--- Why KeQQu?  ------------------------------------*/}
        <div id="whyKeqquSection" className=" w-full py-28">
          <h2 className="flex justify-center py-10 f-tittle text-[48px]">Why KeQQu?</h2>
          <div className="grid grid-cols-3 py-10">
            <div className="bg-primary-d w-[28rem] h-[18rem] rounded-xl mx-auto p-5">
              <img className="w-24 h-24 mx-auto" src={bricks} alt="" /> 
              <p className="flex justify-center f-tittle text-xl pt-2">Customize as you want</p>
              <div className="w-4/6 mx-auto rounded-l-lg h-2 bg-accent-n"></div>
              <p className="f-body-sm p-5 mt-3">Customize KeQQu to fit your needs, the freedom is in your hands.</p>
            </div>
            <div className="bg-primary-d w-[28rem] h-[18rem] rounded-xl mx-auto p-5">
              <FaRegCircleCheck className="text-7xl mx-auto my-[12px]" />
              <p className="flex justify-center f-tittle text-xl pt-2">Simple to use</p>
              <div className="w-4/6 mx-auto h-2 bg-accent-n"></div>
              <p className="f-body-sm p-5 mt-3">Not hard to understand, not hard to start using. Super intuitive and practic.</p>
            </div>
            <div className="bg-primary-d w-[28rem] h-[18rem] rounded-xl mx-auto p-5">
              <FaRegClock className="text-7xl mx-auto my-[12px]"/>
              <p className="flex justify-center f-tittle text-xl pt-2">Save a lot of time</p>
              <div className="w-4/6 mx-auto rounded-r-lg h-2 bg-accent-n"></div>
              <p className="f-body-sm p-5 mt-3" >Save time and space in your mind. Keeps you organized, no more wasting time.</p>
            </div>
          </div>
        </div>

        {/*--- How does it work? -----------------------------------*/}
        <div id="howItWorksSection" className=" w-full py-28 text-black">
          <div className="bg-accent-l w-full px-20 h-[24rem] rounded-[3rem] mx-auto py-12 flex">
            <div className="w-2/6 pr-10">
              <h2 className="f-tittle text-[32px]">How Does it Work?</h2>
              <p className="f-body">Start using KeQQu now in 4 very simple steps</p>
            </div>
            <div className="grid grid-cols-2 w-4/6 pl-32">
              <div className="flex mb-10">
                <h4 className="f-tittle text-5xl text-primary-n mr-3">1</h4>
                <p className="f-body pt-3 mr-5">Create your account.</p>
              </div>
              <div className="flex">
                <h4 className="f-tittle text-5xl text-primary-n mr-3">2</h4>
                <p className="f-body pt-3">Create your first workspace.</p>
              </div>
              <div className="flex">
                <h4 className="f-tittle text-5xl text-primary-n mr-3">3</h4>
                <p className="f-body pt-3 mr-5">Add as many lists as you need.</p>
              </div>
              <div className="flex">
                <h4 className="f-tittle text-5xl text-primary-n mr-3">4</h4>
                <p className="f-body pt-3">Add your tasks, and, you are good to go! </p>
              </div>
            </div>
          </div>
        </div>

        {/*--- Plans & Pricing ------------------------------------*/}
        <div id="pricingSection" className="w-full py-28">
          <h2 className="flex justify-center py-10 f-tittle text-[48px] ">Plans & Pricing</h2>
          <div className="grid lg:grid-cols-3 py-10">
            <div className="bg-primary-d w-[26rem] h-[36rem] rounded-xl mx-auto px-10 pt-10 pb-16 flex flex-col">
              <h4 className="f-tittle text-4xl flex justify-center">BASIC</h4>
              <div className="w-full h-1 bg-accent-n mb-10 rounded-l-xl"></div>
              <div className="w-4/5 mx-auto">
                <div className="flex items-center">
                  <HiOutlineCheck className="text-6xl"/>
                  <p className="f-body justify-item-end">Unlimited workspaces</p>
                </div>
                <div className="flex items-center">
                  <HiOutlineCheck className="text-6xl"/>
                  <p className="f-body justify-item-end">Unlimited lists</p>
                </div>
              </div>
              <div id="bottom" className="mt-auto mx-auto"> 
                <p className="f-tittle flex justify-center text-2xl pb-3">0.00€</p>
                <Link to="/signup">
                  <button className=" f-body border rounded-[30px] px-8 py-3 bg-accent-l text-black">Get started</button>
                </Link>
              </div>
            </div>

            <div className="bg-primary-d w-[26rem] h-[36rem] rounded-xl mx-auto px-10 pt-10 pb-16 flex flex-col">
              <h4 className="f-tittle text-4xl flex justify-center">PRO</h4>
              <div className="w-full h-1 bg-accent-n mb-10"></div>
              <div className="w-4/5 mx-auto">
                <div className="flex items-center">
                  <HiOutlineCheck className="text-6xl"/>
                  <p className="f-body justify-item-end">Unlimited workspaces</p>
                </div>
                <div className="flex items-center">
                  <HiOutlineCheck className="text-6xl"/>
                  <p className="f-body justify-item-end">Unlimited lists</p>
                </div>
                <div className="flex items-center">
                  <HiOutlineCheck className="text-6xl"/>
                  <p className="f-body justify-item-end">Unlimited groups</p>
                </div>
                <div className="flex items-center">
                  <HiOutlineCheck className="text-6xl"/>
                  <p className="f-body justify-item-end">Unlimited productivity</p>
                </div>
              </div>
              <div id="bottom" className="mt-auto mx-auto"> 
                <p className="f-tittle flex justify-center text-2xl pb-3">0.00€</p>
                <Link to="/signup">
                  <button className=" f-body border border-accent-l rounded-[30px] px-8 py-3 text-accent-l">Get started</button>
                </Link>
              </div>
            </div>

            <div className="bg-primary-d w-[26rem] h-[36rem] rounded-xl mx-auto px-10 pt-10 pb-16 flex flex-col">
              <h4 className="f-tittle text-4xl flex justify-center">ENTERPRISE</h4>
              <div className="w-full h-1 bg-accent-n mb-10 rounded-r-xl"></div>
              <div className="w-4/5 mx-auto">
                <div className="flex items-center">
                  <HiOutlineCheck className="text-6xl"/>
                  <p className="f-body justify-item-end">Same features</p>
                </div>
                <div className="flex items-center">
                  <HiOutlineCheck className="text-6xl text-accent-n"/>
                  <p className="f-body justify-item-end">Same but in yellow</p>
                </div>
                <div className="flex items-center">
                  <HiOutlineCheck className="text-6xl"/>
                  <p className="f-body justify-item-end">100% free</p>
                </div>
              </div>
              <div id="bottom" className="mt-auto mx-auto"> 
                <p className="f-tittle flex justify-center text-2xl pb-3">0.00€</p>
                <Link to="/signup">
                  <button className=" f-body border rounded-[30px] px-8 py-3 bg-accent-l text-black">Get started</button>
                </Link>
              </div> 
            </div>
          </div>
        </div>

          {/*--- FAQ -----------------------------------*/}
        <div id="faqSection" className="w-full py-28 text-black">
          <div className="bg-accent-l w-full px-20 rounded-[3rem] mx-auto py-4 flex ">
            <div className="w-2/5 py-14">
              <h2 className="f-tittle text-[48px]">FAQ</h2>
              <p className="f-body my-2">Answers to some questions you may have</p>
            </div>
            <div className="w-3/5 p-10">
             <div className="bg-primary-n px-10 py-5 rounded-[3rem] my-8">
              <Accordion question='Here goes a question' answer='Here goes the anwer to that question lol'/>
              </div>
              <div className="bg-primary-n px-10 py-5 rounded-[3rem] my-8">
              <Accordion question='Here goes a question' answer='Here goes the anwer to that question lol'/>
              </div>
              <div className="bg-primary-n px-10 py-5 rounded-[3rem] my-8">
              <Accordion question='Here goes a question' answer='Here goes the anwer to that question lol'/>
              </div>
              <div className="bg-primary-n px-10 py-5 rounded-[3rem] my-8">
              <Accordion question='Here goes a question' answer='Here goes the anwer to that question lol, but this one is larger so we can see how this fits into the "button" pajapajpajapajapajapajapajapajapajapajapajapajapajapajapajapajapajapajapaj'/>
              </div>
            </div>
          </div>
        </div>

        {/*--- Footer ----------------------------------------------------*/}
        <div id="footerSection" className="bg-dark w-full py-28 text-black">
          <div className="bg-primary-d w-[1360px] px-10 rounded-[3rem] mx-auto py-4 text-white">
            <div className="w-4/5 m-10 mx-auto flex justify-around">
              <h3 className="f-tittle text-[32px]">KeQQu</h3>
              <ul className="flex w-2/5 items-center">
                <li className="f-tittle text-lg mx-auto">About</li>
                <li className="f-tittle text-lg mx-auto">Contact</li>
                <li className="f-tittle text-lg mx-auto">Support</li>
              </ul>
              <div className="flex items-center pl-10">
                <div> {/* here should go an input */}
                  <input type="email" placeholder="join our newsletter!" className="border-none outline-none bg-transparent placeholder-[#fff5c2] p-0 mx-2 placeholder:italic"  />
                  {/* <p className="px-2 f-tittle text-lg text-[#fff5c2]">join our newsletter!</p> */}
                  <div className="bg-accent-l h-[1px] w-56"></div>
                </div>
                <button className="mx-4 f-body border rounded-[30px] px-5  bg-[#fff5c2] text-black text-2xl">⟶</button>
              </div>
            </div>
            <div className="bg-gray-400 w-5/6 mx-auto h-1"></div>
            <div className="flex w-9/12 mx-auto mt-5 mb-8 px-20 justify-between">
              <p className="f-body">2024 - Keqqu,Inc.</p>
              <div className="flex items-center">
              <AiFillInstagram  className="text-2xl mx-2" />
              <FaYoutube className="text-2xl mx-2" />
              <FaDiscord className="text-2xl mx-2" />
              <FaTiktok className="text-xl mx-2" />
              <FaTwitter className="text-xl mx-2" />

              </div>

            </div>
            
          </div>
        </div>


    
      {/*--- colors --------------------------------------------------------*/}
      <div className="w-full flex-auto text-center items-center mt-24">
        <div className=" mx-auto grid-cols-2 md:flex py-5 md:h-screen">   
          <div className="w-48 h-48 bg-w"></div>
          <div className="w-48 h-48 bg-b"></div>
          <div className="w-48 h-48 bg-dark"></div>

          <div className="w-48 h-48 bg-primary-n"></div>
          <div className="w-48 h-48 bg-primary-l"></div>
          <div className="w-48 h-48 bg-primary-d"></div>

          <div className="w-48 h-48 bg-accent-n"></div>
          <div className="w-48 h-48 bg-accent-l"></div>

          <div className="w-48 h-48 bg-secondary-n"></div> 
        </div>
      </div> 

      
        <a href="#pricingSection">damn son wtf </a>
      
    </div>
  </div>
	)
}

export default LandingView