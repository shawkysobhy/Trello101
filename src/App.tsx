import { useSelector } from 'react-redux';
import { useState } from 'react';
import {
	EditBoardModal,
	CreateBoardModal,
	DeleteBoardModal,
	NavigateBoardModal,
} from './components/modals';
import SideBar from './components/sidebar/SideBar';
import Header from './components/Header';
import Boards from './components/board/Boards';
import { RootState } from './state/store';
function App() {
	const boards = useSelector((state: RootState) => state.boards.boards);
	const [activeBoardId, setActive] = useState(boards[0]?.id || '');
	const handleActiveBoard = (id: string) => {
		setActive(id);
	};
	return (
		<div className='flex flex-col h-screen dark bg-secondaryBackground'>
			<Header />
			<main className='relative flex w-full h-full overflow-auto'>
				<SideBar
					activeBoardId={activeBoardId}
					handleActiveBoard={handleActiveBoard}
				/>
				<Boards activeBoardId={activeBoardId} />
			</main>
			<CreateBoardModal />
			<EditBoardModal />
			<DeleteBoardModal />
			<NavigateBoardModal />
		</div>
	);
}

export default App;
