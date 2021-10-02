export interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}
export interface SideBarProps {
  selectedGenreId: number;
  setSelectedGenreId: React.Dispatch<React.SetStateAction<number>>;
}