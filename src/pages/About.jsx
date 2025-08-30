import React from 'react';
import Footerpage from './footer';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      {/* Title Section */}
      <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold uppercase tracking-wide text-white mb-4">
          Trekking Itineraries
        </h1>
        <h2 className="text-xl lg:text-2xl font-light text-gray-300 tracking-wider">
          Everest Dudhkoshi Cultural Trail
        </h2>
        <div className="mt-6 w-20 h-0.5 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto"></div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto px-6 space-y-16 pb-20">
        
        {/* Introduction */}
        <div className="text-center">
          <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            The Everest Dudhkoshi Cultural Trail offers various options of trek itineraries with varied duration and activities.
          </p>
        </div>

        {/* Itinerary 1 */}
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 p-8 rounded-2xl border border-gray-700 shadow-xl">
          <div className="flex items-center mb-8">
            <div className="w-0 h-0 border-l-[24px] border-l-purple-500 border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent mr-4"></div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white uppercase tracking-wide">
              Itinerary 1: 6-Day Trail
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start bg-gray-800/50 p-4 rounded-lg border border-gray-600">
                <span className="text-purple-400 mr-4 mt-1 text-xl">🚶</span>
                <div>
                  <span className="font-semibold text-orange-400">Day 1:</span>
                  <span className="ml-2 text-gray-300">Kathmandu to Silguri</span>
                </div>
              </div>

              <div className="flex items-start bg-gray-800/50 p-4 rounded-lg border border-gray-600">
                <span className="text-purple-400 mr-4 mt-1 text-xl">🚶</span>
                <div>
                  <span className="font-semibold text-orange-400">Day 2:</span>
                  <span className="ml-2 text-gray-300">Silguri to Kudham Mid Camp via Ghumne Mera</span>
                </div>
              </div>

              <div className="flex items-start bg-gray-800/50 p-4 rounded-lg border border-gray-600">
                <span className="text-purple-400 mr-4 mt-1 text-xl">🚶</span>
                <div>
                  <span className="font-semibold text-orange-400">Day 3:</span>
                  <span className="ml-2 text-gray-300">Morning Kudam View Point and Trek to Yotelmya</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start bg-gray-800/50 p-4 rounded-lg border border-gray-600">
                <span className="text-purple-400 mr-4 mt-1 text-xl">🚶</span>
                <div>
                  <span className="font-semibold text-orange-400">Day 4:</span>
                  <span className="ml-2 text-gray-300">Yotelmya to Rappchha then Khastap</span>
                </div>
              </div>

              <div className="flex items-start bg-gray-800/50 p-4 rounded-lg border border-gray-600">
                <span className="text-purple-400 mr-4 mt-1 text-xl">🚶</span>
                <div>
                  <span className="font-semibold text-orange-400">Day 5:</span>
                  <span className="ml-2 text-gray-300">
                    Drive to Bhumesthan, Paasdha (Sundar Jharana), Mahabhir then Silguri/Salleri
                  </span>
                </div>
              </div>

              <div className="flex items-start bg-gray-800/50 p-4 rounded-lg border border-gray-600">
                <span className="text-purple-400 mr-4 mt-1 text-xl">🚶</span>
                <div>
                  <span className="font-semibold text-orange-400">Day 6:</span>
                  <span className="ml-2 text-gray-300">Drive to Kathmandu</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm">
                6 Days
              </span>
              <span className="px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-300 text-sm">
                Moderate
              </span>
            </div>
          </div>
        </div>

        {/* Itinerary 2 */}
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 p-8 rounded-2xl border border-gray-700 shadow-xl">
          <div className="flex items-center mb-8">
            <div className="w-0 h-0 border-l-[24px] border-l-orange-500 border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent mr-4"></div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white uppercase tracking-wide">
              Itinerary 2: 8-Day Extended Trail
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start bg-gray-800/50 p-4 rounded-lg border border-gray-600">
                <span className="text-orange-400 mr-4 mt-1 text-xl">🚶</span>
                <div>
                  <span className="font-semibold text-purple-400">Day 1:</span>
                  <span className="ml-2 text-gray-300">Kathmandu to Silguri</span>
                </div>
              </div>

              <div className="flex items-start bg-gray-800/50 p-4 rounded-lg border border-gray-600">
                <span className="text-orange-400 mr-4 mt-1 text-xl">🚶</span>
                <div>
                  <span className="font-semibold text-purple-400">Day 2:</span>
                  <span className="ml-2 text-gray-300">Silguri to Ghumne Mera</span>
                </div>
              </div>

              <div className="flex items-start bg-gray-800/50 p-4 rounded-lg border border-gray-600">
                <span className="text-orange-400 mr-4 mt-1 text-xl">🚶</span>
                <div>
                  <span className="font-semibold text-purple-400">Day 3:</span>
                  <span className="ml-2 text-gray-300">
                    Ghumne Mera to Kudham View Point Then Trek to Yotelmya, Khastap/Damku/Thul Dungga
                  </span>
                </div>
              </div>

              <div className="flex items-start bg-gray-800/50 p-4 rounded-lg border border-gray-600">
                <span className="text-orange-400 mr-4 mt-1 text-xl">🚶</span>
                <div>
                  <span className="font-semibold text-purple-400">Day 4:</span>
                  <span className="ml-2 text-gray-300">Khastap/Damku to Juving via Andheri</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start bg-gray-800/50 p-4 rounded-lg border border-gray-600">
                <span className="text-orange-400 mr-4 mt-1 text-xl">🚶</span>
                <div>
                  <span className="font-semibold text-purple-400">Day 5:</span>
                  <span className="ml-2 text-gray-300">Juving to Hill then Solaban, Jaleswori Mandir, Deurali</span>
                </div>
              </div>

              <div className="flex items-start bg-gray-800/50 p-4 rounded-lg border border-gray-600">
                <span className="text-orange-400 mr-4 mt-1 text-xl">🚶</span>
                <div>
                  <span className="font-semibold text-purple-400">Day 6:</span>
                  <span className="ml-2 text-gray-300">Deurali to Waku, Kanku Bhumesthan then Iosku</span>
                </div>
              </div>

              <div className="flex items-start bg-gray-800/50 p-4 rounded-lg border border-gray-600">
                <span className="text-orange-400 mr-4 mt-1 text-xl">🚶</span>
                <div>
                  <span className="font-semibold text-purple-400">Day 7:</span>
                  <span className="ml-2 text-gray-300">
                    Iosku to Paasdha (Sundar Jharana), Mahabhir Rock Climbing sport then Silguri
                  </span>
                </div>
              </div>

              <div className="flex items-start bg-gray-800/50 p-4 rounded-lg border border-gray-600">
                <span className="text-orange-400 mr-4 mt-1 text-xl">🚶</span>
                <div>
                  <span className="font-semibold text-purple-400">Day 8:</span>
                  <span className="ml-2 text-gray-300">Drive from Silguri to Kathmandu</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-300 text-sm">
                8 Days
              </span>
              <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm">
                Advanced
              </span>
              <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm">
                Rock Climbing
              </span>
            </div>
          </div>
        </div>

        {/* Trail Map Section */}
        <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
              <span className="text-purple-400 font-medium text-sm uppercase tracking-wide">Trail Navigation</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Route Map & Trail Guide
            </h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore the detailed trail map showing both itinerary routes, key landmarks, and elevation changes throughout the Everest Dudhkoshi Cultural Trail.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="relative max-w-4xl w-full">
              <img
                src="/images/map.jpg"
                alt="Everest Dudhkoshi Cultural Trail Map"
                className="w-full h-auto rounded-xl border-2 border-purple-500/30 shadow-2xl hover:shadow-purple-500/20 transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>
          
          
        </div>

        {/* Planning Tips */}
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 p-8 rounded-2xl border border-gray-700 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Planning Your Trek
            </h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 text-gray-300 text-lg leading-relaxed">
            <div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                <p>
                  Choose your itinerary based on available time, fitness level, and desired activities. The 6-day trek offers essential highlights, while the 8-day extended route includes rock climbing and additional cultural sites.
                </p>
              </div>
            </div>
           
            <div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                <p>
                  Best trekking seasons are March-May and October-December. Professional guides are recommended and available through local agencies. Book homestays in advance during peak seasons.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footerpage/>
    </div>
    
  );
};

export default About;