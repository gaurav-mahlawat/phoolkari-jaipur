'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { API_BASE } from '../../lib/adminApi';

const fallback=[
 {name:'For her',slug:'women',gender:'THE EVERYDAY EDIT',description:'Easy dresses, breezy co-ords and little details to love.',image:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85'},
 {name:'For him',slug:'men',gender:'COMFORT, WITH CHARACTER',description:'Relaxed fits and joyful prints for everyday plans.',image:'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1000&q=85'},
 {name:'For little ones',slug:'kids',gender:'OUR HANDBLOCK MINIS',description:'Soft, playful favourites made for big little days.',image:'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=1000&q=85'},
 {name:'Dresses',slug:'dresses',gender:'ONE AND DONE',description:'Meet the easy dress you will reach for on repeat.',image:'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=85'}
];
export default function CollectionsPage(){const [items,setItems]=useState<any[]>(fallback);useEffect(()=>{let active=true;fetch(`${API_BASE}/api/categories`).then(r=>r.ok?r.json():null).then(rows=>{if(active&&Array.isArray(rows)&&rows.length)setItems(rows)}).catch(()=>{});return()=>{active=false}},[]);return <main className="collections-page"><header className="collections-intro"><span className="eyebrow rose">A LITTLE JAIPUR MAGIC</span><h1>Find your <em>phoolkari.</em></h1><p>Thoughtful prints and easy pieces for every kind of day.</p><div className="collections-shortcuts"><Link href="/collections/bestsellers">Shop bestsellers <ArrowRight size={16}/></Link><Link href="/collections/sale">Explore the sale <ArrowRight size={16}/></Link></div></header><nav className="category-quicklinks" aria-label="Shop by category">{items.map(c=><Link href={`/collections/${c.slug}`} key={c.slug}>{c.name}<span>{c.productCount??0} pieces</span></Link>)}</nav><section className="category-cards" aria-label="All collections">{items.map(c=><Link href={`/collections/${c.slug}`} key={c.slug} className="category-card"><img src={c.image||''} alt=""/><div className="category-card-copy"><small>{c.gender||'THE EVERYDAY EDIT'}</small><h2>{c.name}</h2><p>{c.description||`Explore ${String(c.name).toLowerCase()} made with love in Jaipur.`}</p><span>EXPLORE THE EDIT <ArrowRight size={16}/></span></div></Link>)}</section></main>}
