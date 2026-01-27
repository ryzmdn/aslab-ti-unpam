import { ContactProps } from "@/types";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export const contacts: ContactProps[] = [
  {
    title: "Lokasi",
    value:
      "Jl. Raya Puspitek, Buaran, Kec. Pamulang, Kota Tangerang Selatan, Banten 15310",
    icon: MapPin,
  },
  {
    title: "Email",
    value: "laporanpraktikum.aslab@gmail.com",
    icon: Mail,
  },
  {
    title: "Telefon",
    value: "+62 8211 4424 218",
    icon: Phone,
  },
  {
    title: "Jam Operasional",
    value: "11.00 AM - 23.00 PM",
    icon: Clock,
  },
];
