import Link from "next/link";
import { Check } from "lucide-react";
import type { Paket } from "@/lib/data";

export default function PaketCard({ paket }: { paket: Paket }) {
  return (
    <div className="bg-prang-gray border border-gray-700 rounded-xl p-6 flex flex-col hover:border-prang-gold transition-all duration-300">
      <h3 className="text-xl font-serif text-prang-gold font-bold mb-2">{paket.nama}</h3>
      <p className="text-3xl font-bold text-white mb-1">{paket.harga}</p>
      <p className="text-sm text-gray-400 mb-6 pb-4 border-b border-gray-700">Durasi: {paket.durasi}</p>
      <ul className="flex-1 space-y-3 mb-8 text-sm text-gray-300">
        {paket.fasilitas.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <Check className="w-4 h-4 mt-0.5 shrink-0 text-prang-gold" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <Link
        href={`/order?paket=${paket.id}`}
        className="w-full text-center block bg-transparent border-2 border-prang-gold text-prang-gold font-bold py-3 rounded-md hover:bg-prang-gold hover:text-prang-black transition-colors"
      >
        Pilih Paket
      </Link>
    </div>
  );
}
