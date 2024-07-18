import "./globals.css";

import Theme from "@/components/Theme";
import DartLightSwitch from "@/components/DarkLightSwitch";

export const metadata = {
  title: "Touaria Sami",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Theme>
          <DartLightSwitch></DartLightSwitch>
          {children}
        </Theme>
      </body>
    </html>
  );
}
