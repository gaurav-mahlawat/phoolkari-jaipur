import type { Metadata } from 'next';
import './globals.css';
import { StoreProvider } from '../components/StoreProvider';
import { Header, Footer } from '../components/Chrome';
export const metadata: Metadata = { title: 'Phoolkari Jaipur | Modern Handcrafted Clothing', description: 'Thoughtfully made Indian wear, handcrafted in Jaipur. Discover easy, joyful pieces for every day.' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body><StoreProvider><div className="announcement">A little joy for your first order — use <b>FIRST05</b> for 5% off <span>✦</span> Free shipping on prepaid orders</div><Header/>{children}<Footer/></StoreProvider></body></html> }
