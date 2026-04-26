import { SectionHeading } from "./Announcements";

const RULES = [
  "Σεβασμός σε κάθε μέλος — μηδενική ανοχή για παρενόχληση, υβριστικούς χαρακτηρισμούς ή διακρίσεις.",
  "Ακολουθήστε την αλυσίδα διοίκησης. Οι αξιωματικοί υπακούν στον άμεσο ανώτερό τους.",
  "Απαγορεύεται spam, περιεχόμενο NSFW και διαφήμιση σε οποιοδήποτε κανάλι.",
  "Μείνετε εντός χαρακτήρα κατά τη διάρκεια ενεργών επιχειρήσεων. Η εκτός παιχνιδιού συνομιλία γίνεται στο #lounge.",
  "Κρατάτε τα φωνητικά κανάλια καθαρά κατά την αποστολή — πειθαρχία ραδιοφώνου ανά πάσα στιγμή.",
  "Αναφέρετε παραβιάσεις κανόνων σε έναν συντονιστή. Μην αντιμετωπίζετε απευθείας τους παραβάτες.",
];

const REQUIREMENTS = [
  "Ελάχιστη ηλικία 16+ με ώριμη φωνή και συμπεριφορά.",
  "Λειτουργικό μικρόφωνο για αποστολή και επιχειρήσεις.",
  "Ενεργός τουλάχιστον 3 ημέρες την εβδομάδα.",
  "Διαβάστε και αποδεχτείτε τους παραπάνω κανόνες πριν υποβάλετε αίτηση.",
];

export const Rules = () => {
  return (
    <section id="rules" className="border-b border-border py-20 sm:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="05 / Μόνιμες Εντολές"
          title="Κανόνες & Απαιτήσεις"
          description="Διαβάστε προσεκτικά. Εφαρμόζονται αυστηρά."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="border border-border bg-card p-6" style={{ background: "var(--gradient-card)" }}>
            <h3 className="font-display text-xl tracking-widest text-siren-red">Κανόνες Server</h3>
            <ol className="mt-4 space-y-3">
              {RULES.map((r, i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <span className="font-mono text-xs font-bold text-siren-red">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  <span className="text-foreground/80">{r}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="border border-border bg-card p-6" style={{ background: "var(--gradient-card)" }}>
            <h3 className="font-display text-xl tracking-widest text-siren-blue">Απαιτήσεις Αίτησης</h3>
            <ol className="mt-4 space-y-3">
              {REQUIREMENTS.map((r, i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <span className="font-mono text-xs font-bold text-siren-blue">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  <span className="text-foreground/80">{r}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
