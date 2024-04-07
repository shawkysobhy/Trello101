export interface SubTask{
  title:string;
  isChecked:boolean;
}
export interface Task {
  id:number;
	title: string;
	description: string;
	status: string;
	subtasks: SubTask[];
}

export interface Column{
  id:string;
  title:string;
  color?:string;
  tasks?:Task[]
}
export interface Board {
	name: string;
  id:string;
	columns: Column[]|[];
}