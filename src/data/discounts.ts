export type DiscountData = {
  id: string;
  title: string;
  discount: string;
  subtitle: string;
};

// Dados do banner de desconto
export const discounts: DiscountData[] = [
  {
    id: '1',
    title: 'CUPONS',
    discount: '20%',
    subtitle: 'DE DESCONTO'
  }
]; 