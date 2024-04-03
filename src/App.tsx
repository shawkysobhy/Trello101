import Board from './components/Board';
import Header from './components/Header';
import SideBar from './components/SideBar';
import BoardCreateModal from './ui/BoardCreateModal';
function App() {
	return (
		<div className='flex flex-col h-screen dark bg-secondaryBackground'>
			<Header />
			<main className='relative flex w-full h-full overflow-auto'>
				<SideBar />
				<Board />
			</main>
			{/* You can open the modal using document.getElementById('ID').showModal() method */}

			<BoardCreateModal />
		</div>
	);
}

export default App;
