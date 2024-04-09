import BoardList from '../board/BoardList';
export default function SideBar() {
	return (
		<div
			className='overflow-y-auto hidden md:flex fixed flex-col justify-between bg-background  min-w-[300px] z-10  border-r border-border
          h-[calc(100vh-96px)] pt-6 pb-14  left-0 text-gray'>
			<div>
				<p className='mb-8 ml-12 text-xs font-bold tracking-widest border-r border-border'>
					ALL BOARDS (5)
				</p>
				<BoardList />
			</div>
			<div>
				<div className='ml-12'>
					{/* <ToggleModeButton/> */}
					{/* <div className=' py-8 px-8 bg-secondaryBackground w-[240px] rounded-lg flex items-center justify-center space-x-6 '>
						<img src={MoonIcon} />
						<input
							type='checkbox'
							role='switch'
							className=' toggle toggle-lg [--tglbg:#635fc7] bg-white hover:bg-white border-secondaryBackground'
							onChange={() => setIsChecked((prev) => !prev)}
							checked={checked}
						/>
						<img src={SunIcon} />
					</div> */}
					{/* <div className='flex items-center px-8 py-4 space-x-6'>
						<img src={hideSidebar} />
						<p className='text-base font-bold'>Hide Sidebar</p>
					</div> */}
				</div>
			</div>
		</div>
	);
}
