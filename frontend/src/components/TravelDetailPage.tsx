import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTravelTip } from "../data/api.js";

interface TravelTip {
  _id: string;
  slug: string;
  title: string;
  subtitle?: string;
  emoji: string;
  image: string;
  story?: string;
  closingNote?: string;
  items: any[];
  destination?: any;
  tripInfo?: any;
}

export default function TravelDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [tip, setTip] = useState<TravelTip | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!slug) return;
    getTravelTip(slug)
      .then((data: TravelTip) => {
        setTip(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading…</div>;
  if (error || !tip) return <div className="min-h-screen flex items-center justify-center">Travel tip not found</div>;

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="font-serif text-4xl italic mb-4">{tip.title}</h1>
      {tip.subtitle && <p className="text-muted-foreground mb-6">{tip.subtitle}</p>}
      <img src={tip.image} alt={tip.title} className="w-full rounded-lg mb-8" />
      {tip.story && <p className="text-lg mb-8">{tip.story}</p>}
      
      <div className="mb-8">
        <h2 className="font-serif text-2xl mb-4">Tips</h2>
        <ul className="space-y-4">
          {tip.items.map((item: any) => (
            <li key={item.id} className="border-l-4 border-foreground pl-4">
              <p className="font-medium">{item.tip}</p>
              {item.note && <p className="text-sm text-muted-foreground">{item.note}</p>}
            </li>
          ))}
        </ul>
      </div>

      {tip.closingNote && <p className="italic text-muted-foreground">{tip.closingNote}</p>}
    </div>
  );
}