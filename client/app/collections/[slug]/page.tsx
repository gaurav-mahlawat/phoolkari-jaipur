import Collection from './CollectionClient';
export function generateStaticParams(){return ['new-arrivals','bestsellers','women','men','kids','sale','all','dresses','co-ord-sets','shirts','skirts','kaftans'].map(slug=>({slug}))}
export default function Page(){return <Collection/>}
