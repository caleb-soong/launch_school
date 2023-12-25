function setProductPrice(product, newPrice) {
  if (newPrice >= 0) {
    product.price = newPrice;
  } else {
    alert('Invalid price!');
  }
}