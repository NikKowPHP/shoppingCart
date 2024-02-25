import { Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";

type CartItemProps = {
	id: number;
	quantity: number;
};
export function CartItem({ id, quantity }: CartItemProps) {
	const { removeFromCart, getItemQuantity } = useShoppingCart();
	const item = storeItems.find((i) => i.id == id);
	if (item == null) return null;
	return (
		<Stack direction="horizontal" gap={2}>
			<img
				src={item.imgUrl}
				style={{ width: "125px", height: "75px", objectFit: "cover" }}
			/>
			<div className="me-auto">
				<div>
					{item.name}
					{quantity > 1 && (
						<span className="text-muted" style={{ fontSize: ".65rem" }}>
							x{quantity}
						</span>
					)}
				</div>
			</div>
		</Stack>
	);
}
