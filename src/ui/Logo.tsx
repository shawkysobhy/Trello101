import logoMobile from '../assets/logo-mobile.svg';
import logoLight from '../assets/logo-light.svg';

export default function Logo() {
	return (
		<picture className='md:border-r border-border  border-gray-500 md:min-w-[300px]'>
			<img src={logoLight} className='hidden pl-12 pr-0 py-14 md:block' />
			<img src={logoMobile} className='pl-12 pr-0 py-14 md:hidden' />
			<img />
		</picture>
	);
}
