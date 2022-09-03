import { CartList } from "../components/CartList";

export default function CartPage({ cartArr, setcartArr }) {
  return (
    <>
      <div>cart list</div>
      <CartList cartArr={cartArr} setcartArr={setcartArr}/>
    </>
  );
}
