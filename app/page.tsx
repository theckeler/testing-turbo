"use client";

import { useEffect, useState } from "react";

export default function App() {
	const [windowSize, setWindowSize] = useState<Number | undefined>(1000);

	// useEffect(() => {
	// 	console.log(windowSize);
	// }, [windowSize]);

	useEffect(() => {
		setWindowSize(window?.currentTarget?.innerWidth);
	}, []);

	typeof window !== "undefined" &&
		window.addEventListener("resize", (e: UIEvent) => {
			setWindowSize(e.currentTarget?.innerWidth);
		});

	return (
		<div className="@container/testlayer min-h-screen" id="testlayer">
			<div className="@container min-w-[500px] max-w-[800px]">
				<div className="bg-gray-300 @sm:bg-purple-200 @md:bg-blue-200 @lg:bg-red-200 @xl:bg-orange-300 @2xl:bg-green-500 @3xl:bg-cyan-400 @4xl:bg-fuchsia-700 w-full p-4 @sm:p-6 @md:p-8 @lg:p-10 @xl:p-12 @2xl:p-14 transition-all ">
					<button
						popovertarget="testingPopover"
						popovertargetaction="show"
						className="border p-2 bg-yellow-400"
					>
						Show popover
					</button>

					<div>{windowSize}</div>
				</div>
			</div>
			<div className="bg-slate-400 @md/testlayer:bg-orange-500 @lg/testlayer:bg-red-700 @xl/testlayer:bg-yellow-400 p-20 xl:p-32"></div>

			<div
				id="testingPopover"
				popover=""
				className=" p-10 backdrop:backdrop-blur-sm rounded-md shadow-md backdrop:bg-slate-100/50 bg-white"
			>
				<ul className="flex items-center border-b mb-4 pb-2">
					<li className="">Testing Popover</li>
					<li className="ml-auto">
						<button
							popovertarget="testingPopover"
							popovertargetaction="hide"
							className="border p-2 bg-yellow-400"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="24px"
								viewBox="0 -960 960 960"
								width="24px"
							>
								<path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
							</svg>
						</button>
					</li>
				</ul>
				<p>
					This here is some very important content that we want to draw your
					attention to before you light dismiss it. Read it all, do not delay!
				</p>
			</div>
		</div>
	);
}
