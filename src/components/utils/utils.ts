export const editModalBoardId = 'edit_board_modal';
export const createModalBoardId = 'create_board_modal';
export const deleteModalBoardId = 'delete_board_modal';
export const navigateModalBoardId = 'navigate_board_modal';
export const createTaskModalId = 'create_task_modal';
export const editTaskModalId = 'edit_task_modal';
export const modalOpenHandler = (id: string) => {
	if (document) {
		(document.getElementById(id) as HTMLFormElement).showModal();
	}
};

export const findIndexById = (
	arr: {
		id: string;
	}[],
	id: string
) => arr.findIndex((ele) => ele.id === id);
