import { Crosshair, Eye, Shield } from "lucide-react";
import { SectionHeading } from "./Announcements";

export const About = () => {
  return (
    <section id="about" className="relative border-b border-border py-20 sm:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="02 / Εντολή Αποστολής"
          title="Σχετικά με το Τμήμα"
          description="Ποιοι είμαστε, τι υποστηρίζουμε και πώς λειτουργούμε."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            {
              icon: Shield,
              title: "Υπηρέτουμε",
              body: "Προστατεύουμε την κοινότητά μας με ακεραιότητα, επαγρύπνηση και υπευθυνότητα — κάθε βάρδια, κάθε κλήση.",
            },
            {
              icon: Crosshair,
              title: "Συντονιζόμαστε",
              body: "Τακτικές επιχειρήσεις, δομημένες βαθμίδες, αποστολή σε πραγματικό χρόνο. Κινούμαστε ως μία ομάδα με έναν στόχο.",
            },
            {
              icon: Eye,
              title: "Παρακολουθούμε",
              body: "Παρουσία 24/7 στο Discord. Από δόκιμους έως τον αρχηγό — τα μάτια είναι πάντα στο κανάλι.",
            },
          ].map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group relative overflow-hidden border border-border bg-card p-6"
              style={{ background: "var(--gradient-card)" }}
            >
              <Icon className="h-8 w-8 text-siren-blue transition-colors group-hover:text-siren-red" />
              <h3 className="mt-4 font-display text-2xl">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              <div className="absolute -right-4 -top-4 font-mono text-7xl font-black text-foreground/[0.03]">
                0{title.length % 9}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
