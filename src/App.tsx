import { RootState } from './state/store';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
	EditBoardModal,
	CreateBoardModal,
	DeleteBoardModal,
	NavigateBoardModal,
} from './modals';
import {SideBar ,Header,BoardContainer} from './components';
import CreateTaskdModal from './modals/task/CreateTaskModal';
import EditTaskModal from './modals/task/EditTaskModal';

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
				<BoardContainer />
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
