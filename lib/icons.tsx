import { FaGithub, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter, FaCircleUser } from 'react-icons/fa6';
import { PiSunLight, PiMoonLight } from 'react-icons/pi';
import { TbArrowUpRight } from 'react-icons/tb'

export interface SocialIconProps {
  network: string;
  className?: string;
}

export const getCommonIcon = (name: string, className = "w-4 h-4") => {
  switch (name.toLowerCase()) {
    case 'sun':
      return <PiSunLight className={className} />
    case 'moon':
      return <PiMoonLight className={className} />
    case 'arrowupright':
      return <TbArrowUpRight className={className} />
    default:
      return null;
  }
}

export const getSocialIcon = (network: string, className = "w-4 h-4") => {
  switch (network.toLowerCase()) {
    case 'github':
      return <FaGithub className={className} />;
    case 'twitter':
      return <FaXTwitter className={className} />;
    // case 'linkedin':
    //   return <FaLinkedin className={className} />;
    case 'instagram':
      return (
        <FaInstagram className={className} />
      );
    case 'youtube':
      return (
        <FaYoutube className={className} />
      );
    case 'portfolio':
      return <FaCircleUser className={className} />;
    default:
      return null;
  }
};

export default getSocialIcon;