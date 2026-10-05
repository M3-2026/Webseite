import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "../pages/Contact";

export const Route = createFileRoute("/kontakt")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Kontakt – Michél Meier | M³ Performance" },
      {
        name: "description",
        content:
          "20 Minuten Orientierungsgespräch mit Michél. Direkt, ehrlich und auf Augenhöhe per WhatsApp, Cal.com oder Telefon.",
      },
    ],
  }),
});

function ContactPage() {
  return <Contact />;
}
