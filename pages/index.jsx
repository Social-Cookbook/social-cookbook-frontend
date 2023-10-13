import { useState } from "react";

export default function Home() {
	const [data, setData] = useState('');

	const handleClick = async () => {
		const resp = await fetch("https://catfact.ninja/fact");
		const data = await resp.json();
		setData(data.fact);
	}

  return (
    <div>
			<h1 className="font-bold text-orange-500">Display API Data Below</h1>
			<button onClick={handleClick}>
				Display New Cat Fact
			</button>
			<p>{data}</p>
		</div>
  );
}
