import {
	EditBoardModal,
	CreateBoardModal,
	DeleteBoardModal,
	NavigateBoardModal,
} from './components/modals';
import SideBar from './components/sidebar/SideBar';
import Header from './components/Header';
import Boards from './components/board/Boards';
import CreateTaskdModal from './components/modals/CreateTaskModal';
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
			<CreateTaskdModal/>
		</div>
	);
}

export default App;
