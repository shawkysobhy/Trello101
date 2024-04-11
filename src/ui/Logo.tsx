import logoMobile from '../assets/logo-mobile.svg';
import logoLight from '../assets/logo-light.svg';
import logoDark from '../assets/logo-dark.svg'
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';

export default function Logo() {
	const mode = useSelector((state: RootState) => state.mode.mode);
	const currentLogo=mode=="dark"?logoLight:logoDark;
	return (
		<picture className='md:border-r border-border  border-gray-500 md:min-w-[300px]'>
			<img src={currentLogo} className='hidden pl-12 pr-0 py-14 md:block' />
			<img src={logoMobile} className='pl-12 pr-0 py-14 md:hidden' />
			<img />
		</picture>
	);
}
