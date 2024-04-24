//@ts-ignore
//@ts-nocheck

export async function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children}

      {/* @ts-expect-error Server Component */}
    </>
  );
}

export default MainLayout;
