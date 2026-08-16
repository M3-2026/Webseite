import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border py-12 bg-card/20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="M³ Performance" className="h-8 w-8 object-contain" />
          <div>
            <div className="font-display tracking-wider">M³ Performance</div>
            <div className="text-xs text-muted-foreground">Performance beginnt mit Gesundheit.</div>
          </div>
        </div>
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Michél Meier · M³ Performance
        </div>
      </div>
    </footer>
  );
}
