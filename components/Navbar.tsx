import { UserButton, auth } from "@clerk/nextjs";
import React from "react";
import { MainNav } from "./MainNav";
import { StoreSwitcher } from "./store-switcher";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";

const Navbar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const stores = await prismadb.store.findMany({
    where: {
      userId,
    },
  });
  return (
    <div style={{ borderBottom: "1px solid gray" }}>
      <div style={{ display: "flex", alignItems: "center", padding: 16 }}>
        <div>
          <StoreSwitcher items={stores} />
        </div>

        <div style={{ display: "flex", alignItems: "center", padding: 16 }}>
          <MainNav />
        </div>
        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
            padding: 4,
          }}
        >
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
