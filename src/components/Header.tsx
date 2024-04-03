import iconVEllipsis from '../assets/icon-vertical-ellipsis.svg';
import { AddMobileButton,Logo } from '../ui';
function Header() {
	return (
		<header className='flex items-center border-b border-border bg-background '>
			<Logo />
			<div className='flex items-center justify-between flex-grow px-6 md:px-12'>
				<h1 className='text-4xl font-bold text-title'>Platform Launch</h1>
				<div className='flex items-center space-x-4'>
					<button className='text-[15px]  hidden md:block bg-brand text-title px-7 py-5 rounded-full font-bold'>
						+Add New Task
					</button>
					<AddMobileButton />
					<button className='px-4 py-2 rounded-full hover:bg-secondaryBackground'>
						<img src={iconVEllipsis} />
					</button>
				</div>
			</div>
		</header>
	);
}

export default Header;
