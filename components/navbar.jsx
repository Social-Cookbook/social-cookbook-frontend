import React from "react";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

export function Navbar() {
    const router = useRouter();
    const [cookies, setCookie, removeCookie] = useCookies(["token"]);
    const Logout = () => {
        removeCookie("token");
        router.push("/login");
    };
    let hidden="";
    if (typeof window !== "undefined") {
        if (window.location.pathname == "/login") {
            hidden = "hidden";
        }
    }    

    return (
        <div className={hidden}>
            <div className="flex flex-row h-24 bg-sage-100 items-center w-full" id="background">
                <img className="h-24 w-24 rounded-full p-3 ml-2" src="socialcookbooklogo.png"></img>
                <p className="ml-3 text-4xl">Social Cookbook</p>
                <a className="text-xl ml-20 hover:bg-sage-200 p-3 rounded-xl" href="/feed">My Feed</a>
                <a className="text-xl ml-7 hover:bg-sage-200 p-3 rounded-xl" href="/user">My Cookbook</a>
                <a className="text-xl ml-7 mr-7 hover:bg-sage-200 p-3 rounded-xl" href="/createpost">Add Recipe</a>
                <button className="text-lg bg-sage-200 hover:bg-sage-150 p-3 rounded-xl justify-items-end ml-auto mr-5" onClick={Logout}>
                    Log Out
                </button>
            </div>
        </div>
    )
}