import { FC } from 'react';

import './Home.css';
import NavigationBar from '@/common/NavigationBar';

const Home: FC = ({}) => {
  return (
    <div className="flex h-screen flex-wrap content-start flex-row">
      <NavigationBar />
      <div className="w-100 order-last h-4/6 sm:w-70 lg:w-60 flex-auto flex flex-col items-center justify-center max-w-4xl">
        <div
          id="info"
          className="h-3/6 w-4/5 p-12 min-h-[300px] max-h-96 bg-clip-padding bg-white bg-opacity-10 backdrop-filter-lg drop-shadow-lg backdrop-blur-lg rounded-3xl"
        >
          <h1 className="neon-text name text-left text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            {' '}
            <span className="flicker-fast">E</span>ri
            <span className="flicker-slow">k</span>
          </h1>
          <h1 className="neon-text name text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-800">
            {' '}
            Tyr<span className="flicker-fast">y</span>s
            <span className="flicker-slow">h</span>k
            <span className="flicker-slow">i</span>n{' '}
          </h1>
          <h3 className="neon-text description text-1xl sm:text-2xl text-left mt-6">
            Turning ideas into reality
          </h3>
        </div>
      </div>
      <div className="sm:w-auto sm:flex-auto"></div>
    </div>
  );
};

export default Home;
