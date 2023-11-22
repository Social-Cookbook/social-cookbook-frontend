import { useEffect, useState } from "react";
import { Navbar } from "./navbar"
import { useRouter } from "next/router";

export default function Layout({ children }) {
	const [showNavBar, setShowNavBar] = useState(true);
	const router = useRouter();

	useEffect(() => {
		if (typeof window !== "undefined") {
			setShowNavBar(window.location.href === 'http://localhost:3001/login' ? false : true);
		}
	}, [router]);

  return (
    <div>
        {showNavBar && <Navbar></Navbar>}
        <>{children}</>
    </div>
  )
}
