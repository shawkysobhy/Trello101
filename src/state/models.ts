export interface SubTask {
	// id:string,
	title: string;
	isChecked: boolean;
}
export interface Task {
	id: string;
	title: string;
	description: string;
	status: string;
	subtasks: SubTask[];
}

export interface Column {
	id: string;
	column: string;
	color?: string;
	tasks?: Task[];
}
export interface Board {
	name: string;
	id: string;
	columns: Column[];
}
