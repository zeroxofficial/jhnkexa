import { SectionHeading } from "./Announcements";

const DIVISIONS = [
  { name: "Ο.Τ.Α", description: "Ομαδα Ταχυτατης Ανταποκρισης (Α.Δ)", color: "#dc2626", image: "/ota.png" },
  { name: "Ο.Δ.ΥΣ", description: "Ομαδα Δυναμικης Υποστηριξης (ΔΙ.ΑΣ)", color: "#1e3a8a", image: "/odys.png" },
  { name: "Ο.Δ.Α.Κ", description: "Ομαδα Διωξης & Αμεσης Καταστολης (Ο.Π.Κ.Ε)", color: "#dc2626", image: "/odak.png" },
  { name: "Ο.Ε.M", description: "Ομαδα Επεμβασης Μοτοσικλετιστων (Ζ)", color: "#1e3a8a", image: "/oem.png" },
  { name: "Δ.Α.Π.Ο", description: "Διευθυνση Αντιμετωπισης Παρανομων Ουσιων (Διωξη Ναρκωτικων)", color: "#dc2626", image: "/dapo.png" },
  { name: "Ε.Μ.Α.Κ", description: "Ειδικη Μοναδα Αμεσης Καταστολης (Ε.Κ.Α.Μ)", color: "#1e3a8a", image: "/emak.png" },
  { name: "Τ.Ε.Ε", description: "Τμημα Εγκληματολογικων Ερευνων (Εγκληματολογικο)", color: "#dc2626", image: "/tee.png" },
  { name: "Ο.Ο.Ε", description: "Ομαδα Οδικων Ελεγχων (Τροχαια)", color: "#1e3a8a", image: "/ooe.png" },
  { name: "Ο.Ε.Σ", description: "Ομαδα Εξουδετερωσης Στοχων (Δραση)", color: "#dc2626", image: "/oes.png" },
];

export const Divisions = () => {
  return (
    <section id="divisions" className="border-b border-border py-20 sm:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="03 / Αλυσιδα Διοικησης"
          title="Βαθμοι & Τμηματα"
          description="Δομημενες μοναδες. Σαφης αλυσιδα διοικησης. Καθορισμενοι ρολοι."
        />

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {DIVISIONS.map((d, i) => (
            <div
              key={d.name}
              className="group relative flex items-start gap-4 border border-border bg-card p-5 transition-colors hover:border-foreground/30"
              style={{ background: "var(--gradient-card)" }}
            >
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center border overflow-hidden"
                style={{
                  borderColor: d.color,
                  background: `${d.color}1a`,
                  boxShadow: `0 0 12px ${d.color}55`,
                }}
              >
                <img
                  src={d.image}
                  alt={d.name}
                  className="h-full w-full object-contain p-1"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display text-lg leading-tight">{d.name}</h3>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    #{String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{d.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
