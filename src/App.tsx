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
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleMode } from './state/AppmodeSlice';

function App() {
	const dispatch = useDispatch();
	const mode = useSelector((state: RootState) => state.mode.mode);
	useEffect(() => {
		dispatch(toggleMode());
	},[]);
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
