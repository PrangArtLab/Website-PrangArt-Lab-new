"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle, MessageCircle, UploadCloud } from "lucide-react";
import { REKENING_BCA, REKENING_KALTIMTARA, NAMA_REKENING } from "@/lib/data";

export default function SuccessPage() {
  const [waUrl, setWaUrl] = useState<string | null>(null);

  useEffect(() => {
    try {
      setWaUrl(sessionStorage.getItem("prangart-wa-admin"));
    } catch {
      setWaUrl(null);
    }
  }, []);

  return (
    <div className="min-h-screen bg-prang-black flex items-center justify-center p-4 py-12">
      <div className="bg-prang-gray p-8 md:p-10 rounded-xl border border-prang-gold/30 max-w-lg w-full">
        <div className="text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-2xl font-serif text-prang-gold mb-2">Pesanan Berhasil Dibuat!</h1>
          <p className="text-gray-300 mb-8 text-sm">
            Silakan transfer DP sebesar 50% ke salah satu rekening di bawah ini, lalu lanjutkan ke WhatsApp untuk mengirim bukti transfer.
          </p>
        </div>

        <div className="grid gap-3 mb-8">
          <div className="bg-prang-black border border-gray-700 rounded-lg p-4 text-left">
            <p className="text-xs text-gray-400 mb-1">Bank BCA</p>
            <p className="font-bold text-white text-xl tracking-wider">{REKENING_BCA}</p>
          </div>
          <div className="bg-prang-black border border-gray-700 rounded-lg p-4 text-left">
            <p className="text-xs text-gray-400 mb-1">Bank Kaltimtara</p>
            <p className="font-bold text-white text-xl tracking-wider">{REKENING_KALTIMTARA}</p>
          </div>
          <p className="text-center text-sm text-gray-400 mt-2">a/n {NAMA_REKENING}</p>
        </div>

        {waUrl ? (
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 w-full bg-prang-gold text-prang-black font-bold py-4 rounded-md hover:bg-prang-gold-light transition mb-6 shadow-lg shadow-prang-gold/20"
          >
            <div className="flex items-center gap-2 text-lg">
              <MessageCircle className="w-6 h-6" />
              Kirim Pesanan & Bukti Transfer
            </div>
            <span className="text-xs font-normal opacity-80">Buka WhatsApp Admin</span>
          </a>
        ) : (
          <p className="text-gray-400 text-sm mb-6 text-center">
            Ringkasan pesanan tidak ditemukan. Silakan hubungi admin langsung.
          </p>
        )}

        <div className="bg-blue-500/10 border border-blue-500/30 p-4 rounded-lg flex gap-3 text-sm text-blue-200 mb-6">
          <UploadCloud className="w-5 h-5 shrink-0" />
          <p>Jangan lupa melampirkan <strong>foto/screenshot bukti transfer</strong> Anda di chat WhatsApp tersebut.</p>
        </div>

        <div className="text-center">
          <Link href="/" className="text-prang-gold hover:underline text-sm font-semibold">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
