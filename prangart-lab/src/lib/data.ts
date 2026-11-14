import type { PaketId } from "@/lib/types";

export interface Paket {
  id: PaketId;
  nama: string;
  harga: string;
  hargaNumerik: number;
  durasi: string;
  fasilitas: string[];
}

export const dataPaket: Paket[] = [
  {
    id: "dasar",
    nama: "Paket Dasar",
    harga: "Rp1.000.000",
    hargaNumerik: 1000000,
    durasi: "4-5 menit",
    fasilitas: [
      "Aransemen musik sederhana sebagai pengiring tari",
      "Maksimal 5 instrumen",
      "Penyesuaian tempo",
      "3x revisi",
      "File akhir MP3",
      "Pengerjaan maksimal 7 hari",
    ],
  },
  {
    id: "standar",
    nama: "Paket Standar",
    harga: "Rp1.500.000",
    hargaNumerik: 1500000,
    durasi: "5-8 menit",
    fasilitas: [
      "Aransemen musik mengikuti tempo, hitungan, aksen, dan alur gerak penari",
      "5-8 instrumen fleksibel",
      "Karakter musik disesuaikan daerah/tema tari",
      "File akhir MP3 & WAV",
      "Pengerjaan maksimal 14 hari",
    ],
  },
  {
    id: "pro",
    nama: "Paket Pro",
    harga: "Rp2.000.000",
    hargaNumerik: 2000000,
    durasi: "5-8 menit",
    fasilitas: [
      "Aransemen disusun dengan penggarapan detail dan karakter kuat",
      "Penekanan dinamika, eksen, dan transisi",
      "Daerah/tema tari disesuaikan",
      "File akhir MP3 & WAV",
      "Pengerjaan maksimal 14 hari",
    ],
  },
];

export const BIAYA_VOKAL = 200000;

export const NOMOR_ADMIN = "628977250597";
export const REKENING_BCA = "6595226027";
export const REKENING_KALTIMTARA = "0017863398";
export const NAMA_REKENING = "Fikri Yassaar Arrazaq";
