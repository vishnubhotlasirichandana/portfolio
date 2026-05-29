import "./globals.css";

export const metadata = {
  title: "Siri Chandana Portfolio",
  description: "AI & Full-Stack Developer"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}