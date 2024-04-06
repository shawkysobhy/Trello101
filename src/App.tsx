import Board from './components/board/Board';
import Header from './components/Header';
import SideBar from './components/sidebar/SideBar';
import EditBoardModal from './components/modals/EditBoardModal';
import CreateBoardModal from './components/modals/CreateBoardModal';
import DeleteBoardModal from './components/modals/DeleteBoardModal';
import NavigateBoardModal from './components/modals/NavigateBoardModal';
function App() {
	return (
		<div className='flex flex-col h-screen dark bg-secondaryBackground'>
			<Header />
			<main className='relative flex w-full h-full overflow-auto'>
				<SideBar />
				<Board />
			</main>
			{/* You can open the modal using document.getElementById('ID').showModal() method */}

			<CreateBoardModal />
			<EditBoardModal/>
			<DeleteBoardModal/>
			<NavigateBoardModal/>
		</div>
	);
}

export default App;
