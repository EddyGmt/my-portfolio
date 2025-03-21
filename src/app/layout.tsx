import "./globals.css";
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="fr">
        <body>
          {/* Layout UI */}
          <main>{children}</main>
        </body>
      </html>
    )
  }