import "./globals.css";

export const metadata = {
  title: "Aptcode - Solutions Engineered with Precision",
  description: "Aptcode provides precision-engineered digital solutions for your business needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white px-2">
        {children}
      </body>
    </html>
  );
}
