export const editModalBoardId = 'edit_board_modal';
export const createModalBoardId = 'create_board_modal';
export const deleteModalBoardId = 'delete_board_modal';
export const navigateModalBoardId = 'navigate_board_modal';

export const modalOpenHandler = (id: string) => {
	if (document) {
		(document.getElementById(id) as HTMLFormElement).showModal();
	}
};
