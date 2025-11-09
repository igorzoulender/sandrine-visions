const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Sandrine AGBODJI. Tous droits réservés.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Développé avec passion à Lomé, Togo 🇹🇬
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
