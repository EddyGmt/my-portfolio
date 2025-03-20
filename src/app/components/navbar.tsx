import Link from 'next/link';
import Section from './section';

const Navbar = () =>{
    return(
        <header className='sticky top-0'>
            <Section className='flex items-baseline'>
                <h1 className=''> 
                    Eddy G 
                </h1>
                <p>Développeur FullStack</p>
            </Section >

            <nav>
                <ul></ul>
            </nav>
        </header>
    )
};
export default Navbar;