import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-pink-100 to-rose-400 font-poppins">
      <div>
        {/* Floating Hearts */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="animate-ping absolute text-red-400 text-2xl" style={{ top: '8%', left: '12%', animationDelay: '0.1s' }}>
            ❤️
          </div>
          <div className="animate-bounce absolute text-pink-400 text-xl" style={{ top: '22%', left: '68%', animationDelay: '0.3s' }}>
            💖
          </div>
          <div className="animate-pulse absolute text-rose-400 text-3xl" style={{ top: '41%', left: '27%', animationDelay: '0.2s' }}>
            💕
          </div>
          <div className="animate-ping absolute text-red-300 text-xl" style={{ top: '70%', left: '5%', animationDelay: '0.4s' }}>
            💘
          </div>
          <div className="animate-bounce absolute text-pink-500 text-2xl" style={{ top: '35%', left: '85%', animationDelay: '0.6s' }}>
            💖
          </div>
          <div className="animate-pulse absolute text-red-500 text-2xl" style={{ top: '18%', left: '75%', animationDelay: '0.1s' }}>
            ❤️
          </div>
          <div className="animate-ping absolute text-pink-400 text-3xl" style={{ top: '52%', left: '33%', animationDelay: '0.3s' }}>
            💞
          </div>
          <div className="animate-bounce absolute text-rose-300 text-2xl" style={{ top: '63%', left: '60%', animationDelay: '0.5s' }}>
            💕
          </div>
          <div className="animate-pulse absolute text-red-400 text-xl" style={{ top: '88%', left: '20%', animationDelay: '0.7s' }}>
            💓
          </div>
          <div className="animate-bounce absolute text-pink-300 text-2xl" style={{ top: '47%', left: '10%', animationDelay: '0.6s' }}>
            💘
          </div>
          <div className="animate-ping absolute text-rose-400 text-2xl" style={{ top: '25%', left: '90%', animationDelay: '0.4s' }}>
            💕
          </div>
          <div className="animate-pulse absolute text-red-400 text-3xl" style={{ top: '5%', left: '45%', animationDelay: '0.8s' }}>
            ❤️
          </div>
          <div className="animate-bounce absolute text-pink-400 text-xl" style={{ top: '76%', left: '72%', animationDelay: '0.2s' }}>
            💖
          </div>
          <div className="animate-ping absolute text-rose-300 text-2xl" style={{ top: '59%', left: '15%', animationDelay: '0.9s' }}>
            💞
          </div>
        </div>

        <div className="z-10 relative text-center pt-20 px-4">
          <h1 className="text-5xl md:text-5xl font-bold text-gray-800 tracking-tighter">
            I AM SORRY JASPREET, <br />
            <span className="text-red-600 tracking-wide">I LOVE YOU</span>
          </h1>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
            {/* Song Thumbnails */}
            <div className="rounded-xl shadow-lg w-60 hover:scale-105 bg-pink-200 transition-transform duration-300 p-7 flex flex-col justify-between">
              <a href="https://open.spotify.com/track/1NZs6n6hl8UuMaX0UC0YTz?si=e1340cc219784fbb">
                <img src="/public/brooklyn baby.jpg" alt="Brooklyn Baby" className="rounded-xl" />
                <p className="font-semibold text-gray-900">Brooklyn Baby</p>
              </a>
            </div>
            <div className="rounded-xl shadow-lg w-60 hover:scale-105 bg-pink-200 transition-transform duration-300 p-7 flex flex-col justify-between">
              <a href="https://open.spotify.com/track/6SRsiMl7w1USE4mFqrOhHC?si=e8d8c45ed6b542ce">
                <img src="/public/brutal.jpg" alt="Brutal" className="rounded-xl" />
                <p className="font-semibold text-gray-900">Brutal</p>
              </a>
            </div>
            <div className="rounded-xl shadow-lg w-60 hover:scale-105 bg-pink-200 transition-transform duration-300 p-7 flex flex-col justify-between">
              <a href="https://open.spotify.com/track/2eAvDnpXP5W0cVtiI0PUxV?si=45cb5c28317e4b2a">
                <img src="/public/dandelions.jpg" alt="Dandelions" className="rounded-xl" />
                <p className="font-semibold text-gray-900">Dandelions</p>
              </a>
            </div>
            <div className="rounded-xl shadow-lg w-60 hover:scale-105 bg-pink-200 transition-transform duration-300 p-7 flex flex-col justify-between">
              <a href="https://open.spotify.com/track/2Ch7LmS7r2Gy2kc64wv3Bz?si=ddca635b60344ec0">
                <img src="/public/die for u.jpg" alt="Die For You" className="rounded-xl" />
                <p className="font-semibold text-gray-900">Die For You</p>
              </a>
            </div>
            <div className="rounded-xl shadow-lg w-60 hover:scale-105 bg-pink-200 transition-transform duration-300 p-7 flex flex-col justify-between">
              <a href="https://open.spotify.com/track/3ZCTVFBt2Brf31RLEnCkWJ?si=85d38d75528f47bb">
                <img src="/public/everything i wanted.jpg" alt="Everything I Wanted" className="rounded-xl" />
                <p className="font-semibold text-gray-900">Everything I Wanted</p>
              </a>
            </div>
            <div className="rounded-xl shadow-lg w-60 hover:scale-105 bg-pink-200 transition-transform duration-300 p-7 flex flex-col justify-between">
              <a href="https://open.spotify.com/track/51rfRCiUSvxXlCSCfIztBy?si=762a17e86e894dee">
                <img src="/public/i love you, im sorry.jpg" alt="I Love You, I'm Sorry" className="rounded-xl" />
                <p className="font-semibold text-gray-900">I Love You, I Am Sorry</p>
              </a>
            </div>
            <div className="rounded-xl shadow-lg w-60 hover:scale-105 bg-pink-200 transition-transform duration-300 p-7 flex flex-col justify-between">
              <a href="https://open.spotify.com/track/5XeFesFbtLpXzIVDNQP22n?si=6c45a84fe3d3428a">
                <img src="/public/i wanna be ur.jpg" alt="I WANNA BE YOUR" className="rounded-xl" />
                <p className="font-semibold text-gray-900">I WANNA BE YOUR</p>
              </a>
            </div>
            <div className="rounded-xl shadow-lg w-60 hover:scale-105 bg-pink-200 transition-transform duration-300 p-7 flex flex-col justify-between">
              <a href="https://open.spotify.com/track/1dGr1c8CrMLDpV6mPbImSI?si=2dc518f8affe4381">
                <img src="/public/lover.jpg" alt="Lover" className="rounded-xl" />
                <p className="font-semibold text-gray-900">Lover</p>
              </a>
            </div>
            <div className="rounded-xl shadow-lg w-60 hover:scale-105 bg-pink-200 transition-transform duration-300 p-7 flex flex-col justify-between">
              <a href="https://open.spotify.com/track/3DarAbFujv6eYNliUTyqtz?si=d32564b5d7a841d0">
                <img src="/public/you belong with me.jpg" alt="You Belong With Me" className="rounded-xl" />
                <p className="font-semibold text-gray-900">You Belong With Me</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
