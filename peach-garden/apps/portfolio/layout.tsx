// apps/portfolio/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Peach Garden - Developer Portfolio</title>
        <meta name="description" content="My web garden portfolio" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}