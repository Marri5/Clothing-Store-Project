use wasm_bindgen::prelude::*;

/// Applies a discount to a price
#[wasm_bindgen]
pub fn apply_discount(price: f64, discount: f64) -> f64 {
    price - (price * discount / 100.0)
}
