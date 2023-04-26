export interface UserItem {
  id: number;
  name: string;
}

export interface UserInitialStateItem {
  isLoading: boolean,
  error: string | null,
  user: UserItem
}