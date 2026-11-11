import { products } from '../../../lib/products';
import ProductPage from './ProductClient';
export function generateStaticParams(){return products.map(p=>({slug:p.slug}))}
export default function Page(){return <ProductPage/>}
