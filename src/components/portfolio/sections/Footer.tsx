export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row">
        <div className="flex items-center gap-2 font-display font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-gold text-primary-foreground">
            K
          </span>
          Kaleab Moges
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Kaleab Moges · Empowering through education.
        </p>
      </div>
    </footer>
  );
}
