import { FC } from 'react';

import githubLogo from '@/assets/github.svg';
import linkedInLogo from '@/assets/linkedin.svg';
import gmailLogo from '@/assets/gmail.svg';

const NavigationBar: FC = ({}) => {
  return (
    <div className="w-full z-10 h-12 justify-center md:justify-start flex items-start flex-row-reverse pt-1 sn:pr-5">
      <a
        href="mailto:tyryshkinerik@gmail.com"
        className="w-10 h-10 mx-5 md:mr-10"
      >
        <img src={gmailLogo} alt="Github link" className="w-full" />
      </a>
      <a
        href="https://www.linkedin.com/in/eriktyryshkin/"
        className="w-8 h-8 mx-5 md:mr-10"
      >
        <img src={linkedInLogo} alt="Github link" className="w-full" />
      </a>
      <a
        href="https://github.com/kingcobra2468"
        className="w-9 h-9 mx-5 md:mr-10"
      >
        <img src={githubLogo} alt="Github link" className="w-full" />
      </a>
    </div>
  );
};

export default NavigationBar;
