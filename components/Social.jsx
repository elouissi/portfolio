import Link from "next/link";
import {FaGithub,FaLinkedinIn,FaInstagram,FaTwitter} from 'react-icons/fa';

const Socials = [
    {
        icon:<FaGithub/>,
        path:'https://github.com/elouissi'
    },
    {
        icon:<FaLinkedinIn/>,
        path:'https://www.linkedin.com/in/yassin-elouissi/'
    },
    {
        icon:<FaInstagram/>,
        path:'https://www.instagram.com/yassine_elouissi/'
    },
    {
        icon:<FaTwitter/>,
        path:'https://x.com/YElouissi1945'
    },
]
const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles} >
            {Socials.map((item, index)=>{
                return <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                    </Link>
            })}
        </div>
    )

}
export default Social