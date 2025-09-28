import {
  Github,
  Twitter,
  Linkedin,
  ExternalLink,
  CircleUser
} from 'lucide-react';

export interface SocialIconProps {
  network: string;
  className?: string;
}

export const getSocialIcon = (network: string, className = "w-4 h-4") => {
  switch (network.toLowerCase()) {
    case 'github':
      return <Github className={className} />;
    case 'twitter':
      return <Twitter className={className} />;
    case 'linkedin':
      return <Linkedin className={className} />;
    // case 'instagram':
    //   return (
    //     <span className={`${className} bg-gradient-to-r from-purple-500 to-pink-500 text-white text-tiny rounded flex items-center justify-center font-bold`}>
    //       IG
    //     </span>
    //   );
    // case 'youtube':
    //   return (
    //     <span className={`${className} bg-red-500 text-white text-tiny rounded flex items-center justify-center font-bold`}>
    //       YT
    //     </span>
    //   );
    case 'portfolio':
      return <CircleUser className={className} />;
    default:
      return null;
  }
};

export default getSocialIcon;