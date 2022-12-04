import "./globals.css";
import Topbar from "./topbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Topbar />
        {children}
      </body>
    </html>
  );
}
