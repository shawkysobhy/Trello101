import { RootState } from './state/store';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
	EditBoardModal,
	CreateBoardModal,
	DeleteBoardModal,
	NavigateBoardModal,
} from './components/modals';
import SideBar from './components/sidebar/SideBar';
import Header from './components/Header';
import Boards from './components/BoardContainer';
import CreateTaskdModal from './components/modals/task/CreateTaskModal';
import EditTaskModal from './components/modals/task/EditTaskModal';

function App() {
	const mode = useSelector((state: RootState) => state.mode.mode);
	useEffect(() => {
		document.body.className = mode;
	}, [mode]);
	return (
		<div className={`flex flex-col h-screen ${mode} bg-secondaryBackground`}>
			<Header />
			<main className='relative flex w-full h-full overflow-auto'>
				<SideBar />
				<Boards />
			</main>
			<CreateBoardModal />
			<EditBoardModal />
			<DeleteBoardModal />
			<NavigateBoardModal />
			<CreateTaskdModal />
			<EditTaskModal />
		</div>
	);
}

export default App;
