import {
	EditBoardModal,
	CreateBoardModal,
	DeleteBoardModal,
	NavigateBoardModal,
} from './components/modals';
import SideBar from './components/sidebar/SideBar';
import Header from './components/Header';
import Boards from './components/board/Boards';
import CreateTaskdModal from './components/modals/task/CreateTaskModal';
import EditTaskModal from './components/modals/task/EditTaskModal';
import { RootState } from './state/store';
import { useSelector } from 'react-redux';

function App() {
	const mode = useSelector((state: RootState) => state.mode.mode);
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
