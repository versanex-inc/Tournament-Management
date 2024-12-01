import "./globals.css";

export const metadata = {
  title: "Tournament Management",
  description: "This app is about managing different gaming tournaments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
