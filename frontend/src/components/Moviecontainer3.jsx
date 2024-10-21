import React from "react";
import featureImg1 from "./img/feature-1.png";
import featureImg2 from "./img/feature-2.png";
import featureImg3 from "./img/feature-3.png";
import featureImg4 from "./img/feature-4.png";

function Moviecontainer3() {
  return (
    <>
      <div className="flex">
        <img className="w-[50%] h-[50%]" src={featureImg1} alt="Feature" />
        <div className="flex flex-col justify-center items-center bg-black">
          <div className="text-5xl font-bold text-white">Enjoy on your TV</div>
          <div className="w-2/3 text-white text-xl m-4">
            Email address Get Started Enjoy on your TV Watch on smart TVs,
            PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col justify-center items-center bg-black">
          <div className="text-5xl font-bold text-white">Enjoy on your TV</div>
          <div className="w-2/3 text-white text-xl m-4">
            Email address Get Started Enjoy on your TV Watch on smart TVs,
            PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more
          </div>
        </div>
        <img className="w-[50%] h-[50%]" src={featureImg2} alt="Feature" />
      </div>
      <div className="flex">
        <img className="w-[50%] h-[50%]" src={featureImg3} alt="Feature" />
        <div className="flex flex-col justify-center items-center bg-black">
          <div className="text-5xl font-bold text-white">Enjoy on your TV</div>
          <div className="w-2/3 text-white text-xl m-4">
            Email address Get Started Enjoy on your TV Watch on smart TVs,
            PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col justify-center items-center bg-black">
          <div className="text-5xl font-bold text-white">Enjoy on your TV</div>
          <div className="w-2/3 text-white text-xl m-4">
            Email address Get Started Enjoy on your TV Watch on smart TVs,
            PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more
          </div>
        </div>
        <img className="w-[50%] h-[50%]" src={featureImg4} alt="Feature" />
      </div>

      <footer className="bg-black text-gray-400 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-100 mb-4">
                Company
              </h3>
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-100 mb-4">Help</h3>
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Account
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Investor Relations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Ways to Watch
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-100 mb-4">
                Legal
              </h3>
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Cookie Preferences
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Corporate Information
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-100 mb-4">
                Social
              </h3>
              <ul className="flex space-x-4">
                <li>
                  <a href="#">
                    <img
                      src="https://th.bing.com/th?id=OIP.55DCXbXlKDgEBoZhKxpzLAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                      alt="Facebook"
                      className="w-6 h-6"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="https://th.bing.com/th?id=OIP.JCI8klaaA1w4LCtljpeJoAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                      alt="Instagram"
                      className="w-6 h-6"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="https://th.bing.com/th?id=OIP.AdzhkXtdEuGDv94QoKVmaAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                      alt="Twitter"
                      className="w-6 h-6"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="http://ts1.mm.bing.net/th?id=OIP.JgaNw1lMcHOPBb_gdlGg_AHaFM&pid=15.1"
                      alt="YouTube"
                      className="w-6 h-6"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8 text-sm text-gray-500">
            © 2024 Netflix Clone, Inc.
          </div>
        </div>
      </footer>
    </>
  );
}

export default Moviecontainer3;
