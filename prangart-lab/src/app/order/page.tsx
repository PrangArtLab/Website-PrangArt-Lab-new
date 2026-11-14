import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import OrderForm from "@/components/OrderForm";

export default function OrderPage() {
  return (
    <main className="min-h-screen bg-prang-black pt-24 pb-12 px-4">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif text-prang-gold mb-2">Formulir Pemesanan</h1>
          <p className="text-gray-400">Lengkapi data di bawah ini untuk memulai produksi.</p>
        </div>
        <Suspense fallback={<div className="text-center text-prang-gold">Memuat formulir...</div>}>
          <OrderForm />
        </Suspense>
      </div>
    </main>
  );
}
