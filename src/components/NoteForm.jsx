import React, { useState } from "react";

export default function NoteForm({ addNote }) {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (title.trim() && content.trim()) {
			addNote(title, content);
			setTitle("");
			setContent("");
		}
	};

	return (
		<div className="flex flex-col gap-2 items-center lg:p-12 px-8">
			<h1 className="lg:text-6xl text-4xl md:text-center font-bold text-slate-800 leading-snug lg:py-12 py-4 hidden md:block">
				Place Your Brilliant Ideas💡 <br />
				Right Here to Stay Organized 📝
			</h1>
			<img
				src="../src/assets/logo-takeurnot.png"
				alt=""
				className="w-2/3 py-4 md:hidden"
			/>

			<form
				onSubmit={handleSubmit}
				className="flex flex-col gap-2 w-full lg:w-1/2"
			>
				<input
					type="text"
					placeholder="Notes Title (max 50 character)"
					maxLength={50}
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					className="p-4 border rounded text-center text-xl"
				/>
				<textarea
					placeholder="Write ur Brilliant Ideas Here..."
					value={content}
					onChange={(e) => setContent(e.target.value)}
					className="p-4 border rounded text-lg h-48 lg:h-64"
				></textarea>
				<button
					type="submit"
					className="p-3 mt-2 text-lg font-semibold tracking-wide bg-slate-800 text-white rounded hover:bg-blue-700"
				>
					Create
				</button>
			</form>
		</div>
	);
}
