import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import SincroniaDigital from "@/components/landing/SincroniaDigital";
import AboutCEO from "@/components/landing/AboutCEO";
import Stats from "@/components/landing/Stats";
import Footer from "@/components/landing/Footer";

const title = "Raíz Creativa | Impulsamos tus comienzos digitales";
const description =
  "Servicios creativos, estratégicos y personalizados: identidad visual, redes sociales, ads, sitios web y automatización con IA para marcas personales.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="font-sans">
      <Hero />
      <Services />
      <SincroniaDigital />
      <AboutCEO />
      <Stats />
      <Footer />
    </main>
  );
}
