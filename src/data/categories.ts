export type CategoryData = {
  id: string;
  name: string;
  iconName: string;
  isActive?: boolean;
  description?: string;
};

// Os dados das categorias
export const categories: CategoryData[] = [
  {
    id: '1',
    name: 'MASSAS',
    iconName: 'Utensils',
    isActive: false
  },
  {
    id: '2',
    name: 'BURGUERS',
    iconName: 'Pizza',
    isActive: true,
    description: '160 g'
  },
  {
    id: '3',
    name: 'SALADA',
    iconName: 'Salad',
    isActive: false
  }
];