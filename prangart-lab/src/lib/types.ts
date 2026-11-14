export type PaketId = "dasar" | "standar" | "pro";

export interface OrderFormData {
  nama: string;
  sanggar: string;
  kota: string;
  whatsapp: string;
  email: string;
  koreografer: string;
  judulTari: string;
  jenisTari: string;
  jenisTariLainnya: string;
  latarBudaya: string;
  sinopsis: string;
  referensi: string;
  estimasiDurasi: string;

  tempoDasar: string;
  nuansaMusik: string;
  nuansaMusikLainnya: string;
  instrumen: string;
  vokalDasar: string;

  vokalStandar: string;
  strukturTari: string[];
  urutanMusikStandar: string;
  linkGdriveStandar: string;

  vokalPro: string;
  urutanNuansaPro: string;
  linkGdrivePro: string;

  persetujuan: boolean;
}
