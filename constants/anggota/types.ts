export interface Aslab {
  name: string;
  image: string;
  jabatan:
    | "anggota"
    | "ketua"
    | "sekretaris"
    | "bendahara"
    | "pdd"
    | "laboran"
    | "pembina";
  aktif: boolean;
}

export interface AsistenLab {
  date: number;
  anggota: Aslab[];
}
