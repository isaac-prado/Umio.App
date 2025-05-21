export type NotificationData = {
  id: string;
  image: string; // nome da imagem (notfication1.png, notfication2.png, etc)
  percentage: number; // valor inteiro da porcentagem
  description: string; // descrição do cupom
  date: string; // data da notificação
};

// Dados de notificações
export const notifications: NotificationData[] = [
  {
    id: "1",
    image: "notfication1",
    percentage: 15,
    description: "USE O CUPOM: PEDIDOPELOWPP",
    date: "23/03",
  },
  {
    id: "2",
    image: "notfication2",
    percentage: 20,
    description: "USE O CUPOM: PEDIDOPELOWPP",
    date: "23/03",
  },
  {
    id: "3",
    image: "notfication3",
    percentage: 10,
    description: "USE O CUPOM: PEDIDOPELOWPP",
    date: "23/03",
  },
  {
    id: "4",
    image: "notfication4",
    percentage: 25,
    description: "USE O CUPOM: PEDIDOPELOWPP",
    date: "23/03",
  },
  {
    id: "5",
    image: "notfication5",
    percentage: 30,
    description: "USE O CUPOM: PEDIDOPELOWPP",
    date: "23/03",
  },
];
