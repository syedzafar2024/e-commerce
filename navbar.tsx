import { Inter } from 'next/font/google'
import Image from 'next/image';
import Link from 'next/link'
import Account from './icons/account';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] });

const Navbar = () => {
    let navItems = [

        {
            name: "Home",
            link: "#",
        },
        {
            name: "Shop",
            link: "#",
        },
        {
            name: "About",
            link: "#",
        }, {
            name: "Contect",
            link: "#",
        },
    ];

    const socials = [
        { id: "1", link: "", Icon: Account },
        { id: "2", link: "", Icon: Account },
        { id: "3", link: "", Icon: Account },
        { id: "4", link: "", Icon: Account }
    ]

    return (
        <div className="flex flex-cols justify-between bg-[#F5F5F5]">
            <div className='w-full'></div>
            <ul className={`${inter.className} flex items-center justify-between has-[20px] font-medium text-[16px] space-x-8`}>
                {
                    navItems.map((item, i) => (<li key={item.name}><Link href={item.link}> {item.name}</Link></li>))
                }
            </ul >
            <ul className='w-full flex flex-row justify-center gap-6'>
                {socials.map(({ id, Icon }) => <li key={id}><Icon /></li>)}
            </ul>
        </div>
    );
};
export default Navbar