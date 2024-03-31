/* eslint-disable @typescript-eslint/no-unused-vars */
import logoDark from '../assets/logo-dark.svg';
import iconVEllipsis from '../assets/icon-vertical-ellipsis.svg';
import logoLight from '../assets/logo-light.svg';
function Header() {
	return (
		<header className='flex items-center border-b border-border bg-background '>
			<picture className='border-r border-border  border-gray-500 min-w-[300px]'>
				<img src={logoLight} className='pl-12 pr-0 py-14 ' />
			</picture>
			<div className='flex items-center justify-between flex-grow px-12'>
				<h1 className='text-4xl font-bold text-title'>Platform Launch</h1>
				<div className='flex space-x-4'>
					<button className='text-[15px] bg-brand text-title px-7 py-5 rounded-full font-bold'>
						+Add New Task
					</button>
					<button className='px-4 py-2 rounded-full hover:bg-secondaryBackground'>
						<img src={iconVEllipsis} />
					</button>
				</div>
			</div>
		</header>
	);
}

export default Header;
