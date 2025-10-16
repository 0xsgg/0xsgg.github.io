import { FaGithub, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter, FaCircleUser } from 'react-icons/fa6';
import { PiSunLight, PiMoonLight } from 'react-icons/pi';
import { TbArrowUpRight } from 'react-icons/tb';
import { FaBilibili } from "react-icons/fa6";
import { SiKuaishou } from "react-icons/si";
import { MdBusiness } from "react-icons/md";

export interface SocialIconProps {
  network: string;
  className?: string;
}

// 易企秀官方 Logo - 直接使用官方 SVG 文件
const EqxiuLogo = ({ className = "w-4 h-4" }: { className?: string }) => (
  <img
    src="/eqxiu_logo.svg"
    alt="易企秀"
    className={className}
    style={{ display: 'inline-block', objectFit: 'contain' }}
  />
);

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
    case 'bilibili':
      return <FaBilibili className={className} />;
    case 'kuaishou':
      return <SiKuaishou className={className} />;
    case 'eqxiu':
      return <EqxiuLogo className={className} />;
    case 'portfolio':
      return <FaCircleUser className={className} />;
    default:
      return null;
  }
};

export default getSocialIcon;