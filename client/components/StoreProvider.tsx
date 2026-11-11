'use client';
import { useEffect } from 'react';
import { useCart } from '../lib/cart';
import { CartDrawer } from './Chrome';
export function StoreProvider({children}:{children:React.ReactNode}){useEffect(()=>{useCart.persist.rehydrate()},[]);return <>{children}<CartDrawer/></>}
