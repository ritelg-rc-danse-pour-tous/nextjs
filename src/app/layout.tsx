import Favicons from "@/components/common/favicons";
import { MainLayout } from "@/components/layout";
import "../scss/global.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya:wght@500;700&family=Open+Sans&display=swap"
          rel="stylesheet"
        />
        <Favicons />
        <script src="/app.js" defer></script>
      </head>
      <body suppressHydrationWarning={true}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
