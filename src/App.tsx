import Board from './components/board/Board';
import Header from './components/Header';
import SideBar from './components/sidebar/SideBar';
import EditBoardModal from './components/modals/EditBoardModal';
import CreateBoardModal from './components/modals/CreateBoardModal';
import DeleteBoardModal from './components/modals/DeleteBoardModal';
import NavigateBoardModal from './components/modals/NavigateBoardModal';
import Boards from './components/board/Boards';
import { useState } from 'react';
import { RootState } from './state/store';
import { useSelector } from 'react-redux';
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
			{/* You can open the modal using document.getElementById('ID').showModal() method */}

			<CreateBoardModal />
			<EditBoardModal />
			<DeleteBoardModal />
			<NavigateBoardModal />
		</div>
	);
}

export default App;
