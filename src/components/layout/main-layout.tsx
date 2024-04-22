//@ts-ignore
//@ts-nocheck
import { Nav } from "@/components/common";
import { env } from "@/utils/env";

export async function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Nav endpoint={env.BACKEND_ENDPOINT} />
      {children}

      {/* @ts-expect-error Server Component */}
    </>
  );
}

export default MainLayout;
