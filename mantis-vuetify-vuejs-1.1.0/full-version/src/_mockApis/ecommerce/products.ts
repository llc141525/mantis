import mock from '../mockAdapter';

// third-party
import { add, sub } from 'date-fns';
import { Chance } from 'chance';
import product1 from '@/assets/images/e-commerce/prod-1.png';
import product2 from '@/assets/images/e-commerce/prod-2.png';
import product3 from '@/assets/images/e-commerce/prod-3.png';
import product4 from '@/assets/images/e-commerce/prod-4.png';
import product5 from '@/assets/images/e-commerce/prod-5.png';
import product6 from '@/assets/images/e-commerce/prod-6.png';
import product7 from '@/assets/images/e-commerce/prod-7.png';
import product8 from '@/assets/images/e-commerce/prod-8.png';
import product9 from '@/assets/images/e-commerce/prod-9.png';
//Types
import type { Products } from '@/types/ecommerce/index';

const chance = new Chance();
// products list
const products: Products[] = [
  {
    id: 1,
    image: product1,
    name:"哈密瓜",
    description: "正宗新疆吐鲁番哈密瓜,新鲜当季水果甜瓜,香瓜蜜瓜西州蜜",
    rating: chance.floating({ min: 0.1, max: 5.0 }),
    discount: 25,
    salePrice: 19.8,
    offerPrice: 20.8,
    gender: '水果',
    categories: ['fashion', 'books'],
    popularity: chance.natural(),
    date: chance.natural(),
    created: sub(new Date(), { days: 8, hours: 6, minutes: 20 }),
    isStock: true,
    qty: 1
  },
  {
    id: 2,
    image: product2,
    name: "涌泉蜜桔",
    description: "台州临海涌泉蜜桔，源自自然的馈赠，每一颗都凝聚着阳光与雨露的滋养。皮薄肉厚，入口即化，带来无尽的清爽与满足。",
    rating: chance.floating({ min: 0.1, max: 5.0 }),
    discount: 10,
    salePrice: 29.0,
    offerPrice: 36.5,
    gender: '水果',
    categories: ['fashion', 'toys'],
    colors: ['primary200', 'success', 'secondary200', 'warning'],
    popularity: chance.natural(),
    date: chance.natural(),
    created: sub(new Date(), { days: 10, hours: 8, minutes: 69 }),
    isStock: false,
    qty: 1
  },
  {
    id: 3,
    image: product3,
    name: "木瓜",
    description: "活力满满，营养满分！木瓜之魅，唤醒你的味蕾，每一口都是自然的甘甜与滋润。选木瓜，就选我们的，让健康与美味同行",
    rating: chance.floating({ min: 0.1, max: 5.0 }),
    discount: 40,
    salePrice: 12.8,
    offerPrice: 18.59,
    gender: "水果",
    categories: ['fashion', 'electronics'],
    colors: ['primary200', 'primary'],
    popularity: chance.natural(),
    date: chance.natural(),
    created: sub(new Date(), { days: 4, hours: 9, minutes: 50 }),
    isStock: true,
    qty: 1
  },
  {
    id: 4,
    image: product4,
    name: "人参果",
    description: "源自云南石林人参果，自然馈赠，甜蜜多汁，健康生活好伴侣。",
    rating: chance.floating({ min: 0.1, max: 5.0 }),
    discount: 17,
    salePrice: 10.8,
    offerPrice: 15.8,
    gender: '水果',
    categories: ['fashion', 'electronics', 'toys'],
    popularity: chance.natural(),
    date: chance.natural(),
    created: sub(new Date(), { days: 7, hours: 6, minutes: 45 }),
    isStock: false,
    qty: 1
  },
  {
    id: 5,
    image: product5,
    name: "圣女果",
    description: "YIKECAI小番茄 小西红柿现摘新鲜串红樱桃番茄千禧圣女果",
    rating: chance.floating({ min: 0.1, max: 5.0 }),
    discount: 20,
    salePrice: 14.8,
    offerPrice: 17.8,
    gender: '水果',
    categories: ['books'],
    colors: ['warning', 'primary200'],
    popularity: chance.natural(),
    date: chance.natural(),
    created: sub(new Date(), { days: 2, hours: 9, minutes: 45 }),
    isStock: true,
    qty: 1
  },
  {
    id: 6,
    image: product6,
    name: "白羽鸡",
    description: "生态放养，谷物喂养，土生土长，肉质鲜嫩——品尝正宗土鸡，享受健康美味！",
    rating: chance.floating({ min: 0.1, max: 5.0 }),
    discount: 13,
    salePrice: 68,
    offerPrice: 71.9,
    gender: '禽类',
    categories: ['fashion', 'kitchen'],
    colors: ['primary', 'warning'],
    popularity: chance.natural(),
    date: chance.natural(),
    created: add(new Date(), { days: 6, hours: 10, minutes: 0 }),
    isStock: true,
    qty: 1
  },
  {
    id: 7,
    image: product7,
    name:"土鸡蛋",
    description: "源自农家，自然散养，纯正土鸡蛋，富硒营养",
    rating: chance.floating({ min: 0.1, max: 5.0 }),
    discount: 15,
    salePrice: 12.9,
    offerPrice: 15.59,
    gender: '禽类',
    categories: ['fashion'],
    colors: ['error', 'secondary', 'primary', 'warning'],
    popularity: chance.natural(),
    date: chance.natural(),
    created: add(new Date(), { days: 14, hours: 1, minutes: 55 }),
    isStock: false,
    qty: 1
  },
  {
    id: 8,
    image: product8,
    name:"西兰花",
    description:"营养满分，翠绿诱人，西兰花，健康美味双重享受！",
    rating: chance.floating({ min: 0.1, max: 5.0 }),
    discount: 20,
    salePrice: 14.92,
    offerPrice: 18.80,
    gender: '蔬菜',
    categories: ['toys'],
    colors: ['darkMain', 'primary', 'successDark'],
    popularity: chance.natural(),
    date: chance.natural(),
    created: sub(new Date(), { days: 0, hours: 11, minutes: 10 }),
    isStock: true,
    qty: 1
  },
  {
    id: 9,
    image: product9,
    name: "绍兴无沙梅干菜",
    description: "传统风味，岁月沉淀，梅干菜，唤醒记忆中的家乡味！",
    rating: chance.floating({ min: 0.1, max: 5.0 }),
    discount: 40,
    salePrice: 7.7,
    offerPrice: 14.74,
    gender: "农副产品",
    categories: ['fashion', 'electronics'],
    colors: ['primary200', 'primary'],
    popularity: chance.natural(),
    date: chance.natural(),
    created: sub(new Date(), { days: 4, hours: 9, minutes: 50 }),
    isStock: true,
    qty: 1
  },
];

// ==============================|| MOCK SERVICES ||============================== //

mock.onGet('/api/products/list').reply(() => {
  return [200, products];
});

export default products;
