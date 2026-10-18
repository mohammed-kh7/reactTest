import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchProductById } from '../api/products.api';
import LoadingSkeleton from '../components/skeleton/LoadingSkeleton';
import Button from '../components/ui/Button';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: product, isLoading, error } = useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProductById(id),
  });

  if (isLoading) return <LoadingSkeleton />;

  if (error) {
    return (
      <div className="main-container">
        <div className="error-alert">
          <p>Failed to load product details.</p>
          <Button onClick={() => navigate(-1)}>Go Back</Button>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="main-container">
        <div className="empty-state">
          <p>Product not found.</p>
          <Button onClick={() => navigate('/products')}>Back to Products</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="main-container">
      <Button onClick={() => navigate(-1)}>← Back</Button>

      <div className="product-detail-card">
        <div className="product-image-section">
          <img src={product.thumbnail} alt={product.title} className="product-image" />
        </div>

        <div className="product-info">
          <span className="badge">{product.category}</span>
          <h1>{product.title}</h1>
          <div className="product-price">
            <span className="price-current">${product.price}</span>
            {product.discountPercentage > 0 && (
              <>
                <span className="price-original">
                  ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                </span>
                <span className="badge badge-green">
                  -{product.discountPercentage}% OFF
                </span>
              </>
            )}
          </div>
          <div className="product-meta">
            <span className="badge">★ {product.rating} / 5</span>
            <span className="badge">库存: {product.stock} 件</span>
            <span className="badge">SKU: {product.sku}</span>
          </div>
          <p className="product-description">{product.description}</p>

          <div className="product-actions">
            <Button>Add to Cart</Button>
            <Button variant="secondary">Add to Wishlist</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
