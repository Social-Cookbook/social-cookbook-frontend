import { useEffect, useState } from "react";
import { Navbar } from "./navbar"
import { useRouter } from "next/router";

export default function Layout({ children }) {
	const [showNavBar, setShowNavBar] = useState(true);
	const router = useRouter();

	useEffect(() => {
		const { pathname } = router;
		setShowNavBar(pathname !== '/login' && pathname !== '/signup');
	}, [router]);

  return (
    <div>
        {showNavBar && <Navbar></Navbar>}
        <>{children}</>
    </div>
  )
}
