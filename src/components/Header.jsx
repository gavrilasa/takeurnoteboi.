import React from "react";

function Header({ setSearchTerm }) {
	return (
		<header className="bg-white py-6 px-8 lg:px-24 flex justify-between items-center shadow-slate-100 sticky top-0">
			<img
				src="../src/assets/logo-takeurnot.png"
				alt=""
				className="hidden w-64 lg:block"
			/>
			<input
				type="text"
				placeholder="Search ur note title..."
				className="p-4 rounded text-black bg-slate-100 text-left lg:w-1/4 w-full font-medium"
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
		</header>
	);
}

export default Header;
