export type FoodData = {
  id: string;
  name: string;
  description: string;
  price: string;
};

// Os dados dos alimentos
export const foods: FoodData[] = [
  {
    id: '1',
    name: 'Do Meu Jeito & Mió',
    description: '(Burger 160g)',
    price: '21.90'
  },
  {
    id: '2',
    name: 'Salada',
    description: '(Burger 160g)',
    price: '28.90'
  },
  {
    id: '3',
    name: 'Bacon',
    description: '(Burger 160g)',
    price: '33.90'
  },
  {
    id: '4',
    name: 'Catupiry',
    description: '(Burger 160g)',
    price: '32.90'
  }
]; 