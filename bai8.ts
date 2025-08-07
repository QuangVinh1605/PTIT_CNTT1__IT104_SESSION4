
type Product = {
  readonly id: string;
  name: string;
  price: number;
};

type OrderItem = {
  product: Product;
  quantity: number;
};

type Order = {
  orderId: string;
  customerName: string;
  items: OrderItem[];
  note?: string;
};

const calculateOrderTotal = (order: Order): number => {
  let total = 0;

  for (let i = 0; i < order.items.length; i++) {
    const { product, quantity } = order.items[i];
    const { price } = product;
    total += price * quantity;
  }

  return total;
};

const printOrder = (order: Order): void => {
  const { orderId, customerName, items, note } = order;

  console.log(` Đơn hàng: #${orderId}`);
  console.log(` Khách hàng: ${customerName}`);
  console.log(` Sản phẩm:`);

  for (let i = 0; i < items.length; i++) {
    const { product, quantity } = items[i];
    const { name, price } = product;
    const subtotal = price * quantity;
    console.log(`- ${name} × ${quantity} = ${subtotal.toLocaleString()} VND`);
  }

  const total = calculateOrderTotal(order);
  console.log(`Tổng cộng: ${total.toLocaleString()} VND`);

  if (note) {
    console.log(`Ghi chú: ${note}`);
  }
};

const aoThun: Product = { id: "P001", name: "Áo thun", price: 200000 };
const quanJean: Product = { id: "P002", name: "Quần jeans", price: 350000 };

const order1: Order = {
  orderId: "ORD123",
  customerName: "Nguyễn Qaung Vinh",
  items: [
    { product: aoThun, quantity: 2 },
    { product: quanJean, quantity: 1 },
  ],
  note: "Giao hàng trước 17h",
};

printOrder(order1);
