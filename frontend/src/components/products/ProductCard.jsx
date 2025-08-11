import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div className="card">
      <div style={{ height: 140, background: '#f1f3f5', borderRadius: 6, marginBottom: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span>No Image</span>
      </div>
      <h3>{product.name}</h3>
      <p style={{ minHeight: 48 }}>{product.description}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div>₹{product.basePrice}/{product.rentalUnit}</div>
          <div style={{ fontSize: '0.9em', color: 'var(--muted)' }}>
            Available: {product.availableQuantity}
          </div>
        </div>
        <Link to={`/products/${product._id}`} className="btn">View</Link>
      </div>
    </div>
  );
}


