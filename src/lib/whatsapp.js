import business from "../data/business";

export function createWhatsAppOrderMessage({
  customer,
  cart,
  orderType,
  address = "",
  notes = "",
}) {
  const itemLines = cart
    .map((item) => {
      const itemTotal =
        Number(item.price || 0) * Number(item.quantity || 0);

      return `${item.quantity} × ${item.name} — ₹${itemTotal}`;
    })
    .join("\n");

  const cartTotal = cart.reduce(
    (total, item) =>
      total +
      Number(item.price || 0) * Number(item.quantity || 0),
    0
  );

  const orderLabel =
    orderType === "delivery" ? "Delivery" : "Pickup";

  const message = [
    `Hello ${business.name}! 👋`,
    "",
    "I'd like to place an order.",
    "",
    "━━━━━━━━━━━━━━━━",
    "ORDER DETAILS",
    "━━━━━━━━━━━━━━━━",
    "",
    itemLines,
    "",
    `Total: ₹${cartTotal}`,
    "",
    "━━━━━━━━━━━━━━━━",
    "CUSTOMER DETAILS",
    "━━━━━━━━━━━━━━━━",
    "",
    `Name: ${customer.name}`,
    `Phone: ${customer.phone}`,
    `Order type: ${orderLabel}`,
    address ? `Address: ${address}` : "",
    notes ? `Notes: ${notes}` : "",
    "",
    "Please confirm my order. Thank you!",
  ]
    .filter(Boolean)
    .join("\n");

  return message;
}

export function getWhatsAppUrl(message) {
  const phoneNumber = business.contact.whatsapp;

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
}

export function openWhatsAppOrder(orderData) {
  const message = createWhatsAppOrderMessage(orderData);
  const whatsappUrl = getWhatsAppUrl(message);

  window.open(
    whatsappUrl,
    "_blank",
    "noopener,noreferrer"
  );
}