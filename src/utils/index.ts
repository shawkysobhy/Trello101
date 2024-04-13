import { BoardsState } from "../state/BoardsSlilce";

export const editModalBoardId = 'edit_board_modal';
export const createModalBoardId = 'create_board_modal';
export const deleteModalBoardId = 'delete_board_modal';
export const navigateModalBoardId = 'navigate_board_modal';
export const createTaskModalId = 'create_task_modal';
export const editTaskModalId = 'edit_task_modal';
export const deleteTaskModalId = 'delete_task_modal';
export const modalOpenHandler = (id: string) => {
	if (document) {
		(document.getElementById(id) as HTMLFormElement).showModal();
	}
};

export const modalCloseHandler = (id: string) => {
	if (document) {
		(
			document?.getElementById(id) as HTMLFormElement
		)?.close();
	}
};

export const findIndexById = (
	arr: {
		id: string;
	}[],
	id: string
) => arr.findIndex((ele) => ele.id === id);
export const updateBoardStorge = (storgeName: string, storge: BoardsState) => {
	localStorage.setItem(storgeName, JSON.stringify(storge));
};
export const getStorge = (storgeName: string) => {
	return localStorage.getItem(storgeName);
};
