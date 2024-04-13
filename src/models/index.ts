export interface SubTask {
	// id:string,
	title: string;
	isChecked: boolean;
}
export interface Task {
	id: string;
	boardId: string;
	columnId: string;
	title: string;
	description: string;
	subtasks: SubTask[];
	// status: string;
}

export interface Column {
	id: string;
	column: string;
	color?: string;
	tasks?: Task[] | [];
}
export interface Board {
	name: string;
	id: string;
	columns: Column[];
}
export interface BoardForm{
	name: string;
	columnNumbers?: { column: string }[];
};