"use client";

import { usePathname, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();
  const router = useRouter();

  const navigate = (target: string) => {
    if (target === "modal-quote" || target === "modal-cyber") return;
    router.push(target === "home" ? "/" : `/${target}`);
  };

  const activePage = pathname === "/" ? "home" : pathname.replace("/", "");

  return <Navbar setPage={navigate} activePage={activePage} />;
}
