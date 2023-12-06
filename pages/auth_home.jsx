import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.token) {
        router.push("/login");
      } else {
        try {
          const { data } = await axios.post(
            "" + process.env.NEXT_PUBLIC_API_URL + "auth", // Your server-side verification endpoint
            {},
            { withCredentials: true }
          );
          const { status, user } = data;
          setUsername(user);
          if (status) {
            toast(`Hello ${user}`, {
              position: "top-right",
            });
          } else {
            removeCookie("token");
            router.push("/login");
          }
        } catch (error) {
          console.error("There was an error verifying the user", error);
          removeCookie("token");
          router.push("/login");
        }
      }
    };

    verifyUser();
  }, [cookies, router, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    router.push("/signup");
  };

  return (
    <>
      <div className="home_page">
        <h4>Welcome <span>{username}</span></h4>
        <button onClick={Logout}>LOGOUT</button>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
