// app/page.tsx
import { Metadata } from "next";
import ClientKontak from "./ClientKontak";

export const metadata: Metadata = {
  title: "Kontak | Ells WO",
  description: "Landing page resmi Ells WO.",
};

export default function Home() {
  return <ClientKontak />;
}
