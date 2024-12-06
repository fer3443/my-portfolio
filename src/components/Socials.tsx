import Link from "next/link";
import { FaGithub, FaLinkedinIn} from 'react-icons/fa';

interface Props {
  containerStyles: string;
  iconStyles: string;
}

const socials = [
  {icon: <FaGithub/>, path:"https://github.com/fer3443"},
  {icon: <FaLinkedinIn/>, path:"https://www.linkedin.com/in/fer3443in/"},
]

export const Socials = ({containerStyles, iconStyles}:Props) => {
  return (
    <div className={containerStyles}>
      {
        socials.map((item, index) => (
          <Link target="_blank" key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        ))
      }
    </div>
  )
}
