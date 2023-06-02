import './globals.css'
import { inter, josefins_sans, roboto, jetbrains } from "@aki/fonts"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aki | Portfólio",
  description: "Portfólio de Alan Silva, desenvolvedor fullstack em TypeScript, Angular, React e Node.",
}

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.className} ${inter.variable} ${josefins_sans.variable} ${roboto.variable} ${jetbrains.variable}`}
      >
        {children}
        <div id="portal" />
      </body>
    </html>
  )
}
