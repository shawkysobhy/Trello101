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
function App() {
	return (
		<div className='flex flex-col h-screen dark bg-secondaryBackground'>
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
			<EditTaskModal/>
		</div>
	);
}

export default App;
