
import "./globals.css"
import { saira } from '@/app/ui/fonts.js'

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${saira.className} antialiased overflow-x-hidden`}>{children}</body>
    </html>
  );
}
