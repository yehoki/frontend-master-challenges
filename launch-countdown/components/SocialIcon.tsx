import Image from 'next/image';

interface SocialIconProps {
  iconUrl: string;
  iconName: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ iconUrl, iconName }) => {
  return (
    <>
      <Image
        className="cursor-pointer"
        src={iconUrl}
        alt={iconName}
        width={24}
        height={24}
      />
    </>
  );
};

export default SocialIcon;
