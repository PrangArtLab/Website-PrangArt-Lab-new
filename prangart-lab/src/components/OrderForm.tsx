"use client";

import { useState, useEffect } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2, Sparkles, Calculator } from "lucide-react";
import { dataPaket, BIAYA_VOKAL } from "@/lib/data";
import type { OrderFormData, PaketId } from "@/lib/types";
import { formatRupiah, terbilang } from "@/lib/utils";

const pilihanVokal = [
  "Tidak menggunakan",
  "Sorakan/teriakan/senandung vokabuler",
  "Hanya nyanyian lagu",
  "Nyanyian lagu dan sorakan/teriakan/senandung",
];
const pilihanStruktur = ["Opening", "Orientasi Suasana Cerita", "Bagian Tengah", "Klimaks", "Ending"];
const pilihanNuansa = ["Sakral / Ritual", "Ceria / Enerjik", "Dramatis", "Misterius", "Lainnya"];

const inputClass = "w-full p-3 bg-prang-black border border-gray-600 rounded focus:border-prang-gold outline-none text-white text-sm";
const boxClass = "p-5 bg-prang-black/60 border border-prang-gold/30 rounded-lg space-y-4";
const labelClass = "block text-sm mb-1 text-gray-300";

export default function OrderForm() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const paramPaket = searchParams.get("paket");
  const defaultPaket: PaketId = dataPaket.some((p) => p.id === paramPaket)
    ? (paramPaket as PaketId)
    : "dasar";

  const [selectedPaket, setSelectedPaket] = useState<PaketId>(defaultPaket);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [totalHarga, setTotalHarga] = useState(0);

  const [formData, setFormData] = useState<OrderFormData>({
    nama: "",
    sanggar: "",
    kota: "",
    whatsapp: "",
    email: "",
    koreografer: "",
    judulTari: "",
    jenisTari: "Tari Tradisional Kreasi",
    jenisTariLainnya: "",
    latarBudaya: "",
    sinopsis: "",
    referensi: "",
    estimasiDurasi: "",
    tempoDasar: "",
    nuansaMusik: "Sakral / Ritual",
    nuansaMusikLainnya: "",
    instrumen: "",
    vokalDasar: "Tidak menggunakan",
    vokalStandar: "Tidak menggunakan",
    strukturTari: [],
    urutanMusikStandar: "",
    linkGdriveStandar: "",
    vokalPro: "Tidak menggunakan",
    urutanNuansaPro: "",
    linkGdrivePro: "",
    persetujuan: false,
  });

  useEffect(() => {
    const paketData = dataPaket.find((p) => p.id === selectedPaket);
    if (!paketData) return;
    const vokal = selectedPaket === "dasar" ? formData.vokalDasar : selectedPaket === "standar" ? formData.vokalStandar : formData.vokalPro;
    const adaVokal = vokal !== "Tidak menggunakan" && vokal !== "";
    setTotalHarga(paketData.hargaNumerik + (adaVokal ? BIAYA_VOKAL : 0));
  }, [selectedPaket, formData.vokalDasar, formData.vokalStandar, formData.vokalPro]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (e.target instanceof HTMLInputElement && e.target.type === "checkbox") {
      const checked = e.target.checked;
      if (name === "strukturTari") {
        setFormData((prev) => ({
          ...prev,
          strukturTari: checked ? [...prev.strukturTari, value] : prev.strukturTari.filter((item) => item !== value),
        }));
      } else {
        setFormData((prev) => ({ ...prev, [name]: checked }));
      }
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const txt = (name: keyof OrderFormData) => ({
    name,
    value: formData[name] as string,
    onChange: handleChange,
  });

  const generateSinopsis = async () => {
    if (!formData.judulTari || !formData.latarBudaya) {
      alert("Isi Judul Tari dan Latar Budaya terlebih dahulu.");
      return;
    }
    setIsGenerating(true);
    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          judul: formData.judulTari,
          latarBudaya: formData.latarBudaya,
          jenisTari: formData.jenisTari === "Lainnya" ? formData.jenisTariLainnya : formData.jenisTari,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setFormData((prev) => ({ ...prev, sinopsis: data.sinopsis }));
      } else {
        alert(data.message || "Gagal membuat sinopsis.");
      }
    } catch {
      alert("Terjadi kesalahan sistem.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.persetujuan) return alert("Anda harus menyetujui pernyataan persetujuan.");
    if (selectedPaket === "standar" && formData.strukturTari.length === 0) return alert("Pilih minimal satu struktur tari.");

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, paket: selectedPaket }),
      });
      const data = await res.json();
      if (data.success) {
        sessionStorage.setItem("prangart-wa-admin", data.waUrl);
        router.push("/success");
      } else {
        alert("Gagal: " + data.message);
      }
    } catch {
      alert("Terjadi kesalahan jaringan.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-prang-gray p-6 md:p-10 rounded-2xl border border-prang-gold/30 shadow-2xl">
      <form onSubmit={handleSubmit} className="space-y-8">
        
        <div className="bg-prang-black p-4 rounded-lg border border-gray-700">
          <label className="block text-sm font-bold mb-2 text-prang-gold">Paket yang Dipilih *</label>
          <select value={selectedPaket} onChange={(e) => setSelectedPaket(e.target.value as PaketId)} className={inputClass}>
            {dataPaket.map((p) => (
              <option key={p.id} value={p.id}>{p.nama} - {p.harga}</option>
            ))}
          </select>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-serif text-prang-gold border-b border-gray-700 pb-2">Formulir Pesanan</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div><label className={labelClass}>Nama Lengkap *</label><input required type="text" {...txt("nama")} className={inputClass} /></div>
            <div><label className={labelClass}>Sanggar / Instansi / Individu *</label><input required type="text" {...txt("sanggar")} className={inputClass} /></div>
            <div><label className={labelClass}>Kota, Provinsi *</label><input required type="text" {...txt("kota")} className={inputClass} /></div>
            <div><label className={labelClass}>Nomor WhatsApp Aktif *</label><input required type="tel" placeholder="08xxxxxxxxxx" {...txt("whatsapp")} className={inputClass} /></div>
            <div><label className={labelClass}>Email *</label><input required type="email" {...txt("email")} className={inputClass} /></div>
            <div><label className={labelClass}>Nama Lengkap Koreografer</label><input type="text" {...txt("koreografer")} className={inputClass} /></div>
          </div>
        </div>

        <div className="space-y-4 pt-4 border-t border-gray-700">
          <div><label className={labelClass}>Judul Tari / Nama Karya *</label><input required type="text" {...txt("judulTari")} className={inputClass} /></div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Jenis Tari *</label>
              <select {...txt("jenisTari")} className={inputClass}>
                <option value="Tari Tradisional Kreasi">Tari Tradisional Kreasi</option>
                <option value="Tari Modern">Tari Modern</option>
                <option value="Lainnya">Lainnya</option>
              </select>
              {formData.jenisTari === "Lainnya" && <input required type="text" placeholder="Sebutkan..." {...txt("jenisTariLainnya")} className={`${inputClass} mt-2`} />}
            </div>
            <div>
              <label className={labelClass}>Latar Belakang Budaya / Daerah *</label>
              <input required type="text" placeholder="Contoh: Kenyah, Banjar, Kutai" {...txt("latarBudaya")} className={inputClass} />
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm text-gray-300">Sinopsis *</label>
              <button type="button" onClick={generateSinopsis} disabled={isGenerating} className="flex items-center gap-1 text-xs bg-prang-gold/20 text-prang-gold px-3 py-1 rounded hover:bg-prang-gold hover:text-black transition disabled:opacity-60">
                {isGenerating ? <Loader2 className="w-3 h-3 animate-spin" /> : <Sparkles className="w-3 h-3" />}
                {isGenerating ? "Membuat..." : "Generate AI"}
              </button>
            </div>
            <textarea required rows={4} {...txt("sinopsis")} className={inputClass}></textarea>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div><label className={labelClass}>Referensi Musik (Link) *</label><input required type="text" placeholder="Isi 0 apabila tidak ada" {...txt("referensi")} className={inputClass} /></div>
            <div><label className={labelClass}>Estimasi Durasi Tari *</label><input required type="text" placeholder="Contoh: 6 Menit" {...txt("estimasiDurasi")} className={inputClass} /></div>
          </div>
        </div>

        {selectedPaket === "dasar" && (
          <div className={boxClass}>
            <h3 className="text-prang-gold font-bold border-b border-gray-700 pb-2">Detail Paket Dasar</h3>
            <div><label className={labelClass}>Tempo (BPM) *</label><input required type="text" placeholder="Contoh: 110 BPM" {...txt("tempoDasar")} className={inputClass} /></div>
            <div>
              <label className={labelClass}>Nuansa Musik yang diinginkan *</label>
              <select {...txt("nuansaMusik")} className={inputClass}>
                {pilihanNuansa.map((n) => <option key={n} value={n}>{n}</option>)}
              </select>
              {formData.nuansaMusik === "Lainnya" && <input required type="text" placeholder="Sebutkan..." {...txt("nuansaMusikLainnya")} className={`${inputClass} mt-2`} />}
            </div>
            <div><label className={labelClass}>Rekomendasi Instrumen Utama (Maksimal 5) *</label><input required type="text" {...txt("instrumen")} className={inputClass} /></div>
            <div>
              <label className={labelClass}>Penambahan Vokal (Biaya +Rp200.000) *</label>
              <select {...txt("vokalDasar")} className={inputClass}>
                {pilihanVokal.map((v) => <option key={v} value={v}>{v}</option>)}
              </select>
            </div>
          </div>
        )}

        {selectedPaket === "standar" && (
          <div className={boxClass}>
            <h3 className="text-prang-gold font-bold border-b border-gray-700 pb-2">Detail Paket Standar</h3>
            <div>
              <label className={labelClass}>Penambahan Vokal (Biaya +Rp200.000) *</label>
              <select {...txt("vokalStandar")} className={inputClass}>
                {pilihanVokal.map((v) => <option key={v} value={v}>{v}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm mb-2 text-gray-300">Struktur Tari *</label>
              <div className="space-y-2">
                {pilihanStruktur.map((struktur) => (
                  <label key={struktur} className="flex items-center gap-2 text-sm">
                    <input type="checkbox" name="strukturTari" value={struktur} checked={formData.strukturTari.includes(struktur)} onChange={handleChange} className="w-4 h-4 accent-prang-gold" />
                    {struktur}
                  </label>
                ))}
              </div>
            </div>
            <div><label className={labelClass}>Jelaskan urutan musik *</label><textarea required rows={3} placeholder="Contoh: 00:00-01:00 (Opening)..." {...txt("urutanMusikStandar")} className={inputClass}></textarea></div>
            <div><label className={labelClass}>Tautan Video Tari (Google Drive) - Opsional</label><input type="url" placeholder="Pastikan akses 'Siapa saja yang memiliki link'" {...txt("linkGdriveStandar")} className={inputClass} /></div>
          </div>
        )}

        {selectedPaket === "pro" && (
          <div className={boxClass}>
            <h3 className="text-prang-gold font-bold border-b border-gray-700 pb-2">Detail Paket Pro</h3>
            <div>
              <label className={labelClass}>Penambahan Vokal (Biaya +Rp200.000) *</label>
              <select {...txt("vokalPro")} className={inputClass}>
                {pilihanVokal.map((v) => <option key={v} value={v}>{v}</option>)}
              </select>
            </div>
            <div><label className={labelClass}>Jelaskan urutan nuansa musik *</label><textarea required rows={4} placeholder="Detail..." {...txt("urutanNuansaPro")} className={inputClass}></textarea></div>
            <div><label className={labelClass}>Tautan Video Tari (Google Drive) - Opsional</label><input type="url" placeholder="Pastikan akses 'Siapa saja yang memiliki link'" {...txt("linkGdrivePro")} className={inputClass} /></div>
          </div>
        )}

        <div className="bg-prang-gold/10 border border-prang-gold rounded-lg p-5 flex items-start gap-4">
          <Calculator className="w-6 h-6 text-prang-gold shrink-0 mt-1" />
          <div>
            <p className="text-sm text-gray-300">Estimasi Total Biaya:</p>
            <p className="text-2xl font-bold text-prang-gold">{formatRupiah(totalHarga)}</p>
            <p className="text-xs text-gray-400 capitalize">({terbilang(totalHarga)} Rupiah)</p>
            <p className="text-sm text-gray-300 mt-2">DP 50%: <span className="font-bold">{formatRupiah(totalHarga / 2)}</span></p>
          </div>
        </div>

        <div className="flex items-start gap-3 mt-8 pt-6 border-t border-gray-700">
          <input required type="checkbox" name="persetujuan" id="syarat" checked={formData.persetujuan} onChange={handleChange} className="mt-1 w-5 h-5 accent-prang-gold cursor-pointer" />
          <label htmlFor="syarat" className="text-sm text-gray-400 cursor-pointer">
            Saya menyatakan data yang diisi benar dan menyetujui <strong>Syarat & Ketentuan (Perjanjian Produksi Musik)</strong> PrangArt Lab. (Pembayaran DP 50%, kebijakan revisi).
          </label>
        </div>

        <button type="submit" disabled={isSubmitting} className="w-full bg-prang-gold text-prang-black font-bold py-4 rounded-lg hover:bg-prang-gold-light transition-colors flex justify-center items-center gap-2 disabled:opacity-60">
          {isSubmitting && <Loader2 className="w-5 h-5 animate-spin" />}
          {isSubmitting ? "Memproses..." : "Kirim Pesanan"}
        </button>
      </form>
    </div>
  );
}
