import Link from "next/link";
import { FaGithub, FaLinkedinIn} from 'react-icons/fa';

interface Props {
  containerStyles: string;
  iconStyles: string;
}

const socials = [
  {icon: <FaGithub/>, path:""},
  {icon: <FaLinkedinIn/>, path:""},
]

export const Socials = ({containerStyles, iconStyles}:Props) => {
  return (
    <div className={containerStyles}>
      {
        socials.map((item, index) => (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        ))
      }
    </div>
  )
}
