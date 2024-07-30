export type Status ='todo' | 'in-progress' |'done'
export type Priority = 'low' | 'medium' | 'high'
export type Task = {
  id: string;
  title: string;
  status:Status;
  priority: Priority;
  points?: number;
};

export const statuses :Status[]=['todo','in-progress','done']
export const priorities :Priority[]=['low','medium','high']