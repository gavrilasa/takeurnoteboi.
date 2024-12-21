import React, { useState } from "react";
import Header from "./components/Header";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import { getInitialData, showFormattedDate } from "./utils";

function App() {
	const [notes, setNotes] = useState(
		getInitialData().filter((note) => !note.archived)
	);
	const [archivedNotes, setArchivedNotes] = useState(
		getInitialData().filter((note) => note.archived)
	);
	const [searchTerm, setSearchTerm] = useState("");

	const addNote = (title, content) => {
		const newNote = {
			id: Date.now(),
			title,
			body: content,
			createdAt: new Date().toISOString(),
			archived: false,
		};
		setNotes([...notes, newNote]);
	};

	const deleteNote = (id, isArchived) => {
		if (isArchived) {
			setArchivedNotes(archivedNotes.filter((note) => note.id !== id));
		} else {
			setNotes(notes.filter((note) => note.id !== id));
		}
	};

	const toggleArchive = (id, isArchived) => {
		if (isArchived) {
			const note = archivedNotes.find((note) => note.id === id);
			setArchivedNotes(archivedNotes.filter((n) => n.id !== id));
			setNotes([...notes, note]);
		} else {
			const note = notes.find((note) => note.id === id);
			setNotes(notes.filter((n) => n.id !== id));
			setArchivedNotes([...archivedNotes, note]);
		}
	};

	const filteredNotes = notes.filter((note) =>
		note.title.toLowerCase().includes(searchTerm.toLowerCase())
	);
	const filteredArchivedNotes = archivedNotes.filter((note) =>
		note.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className="min-h-screen bg-gray-50 text-gray-800">
			<Header setSearchTerm={setSearchTerm} />
			<main className="p-4">
				<NoteForm addNote={addNote} />

				<div className="flex px-8 lg:px-12 gap-12 lg:flex-row flex-col text-slate-800">
					<section className="flex flex-col gap-2 flex-1">
						<h2 className="text-2xl font-bold mt-4 mb-2 ">Active Notes</h2>
						{filteredNotes.length === 0 ? (
							<p className="text-gray-500 italic">there's no active notes</p>
						) : (
							<NoteList
								notes={filteredNotes}
								onDelete={(id) => deleteNote(id, false)}
								onToggleArchive={(id) => toggleArchive(id, false)}
								isArchived={false}
								formatDate={showFormattedDate}
							/>
						)}
					</section>

					<section className="flex flex-col gap-2 flex-1">
						<h2 className="text-2xl font-bold mt-4 mb-2 ">Archived Notes</h2>
						{filteredArchivedNotes.length === 0 ? (
							<p className="text-gray-500 italic">there's no archived notes</p>
						) : (
							<NoteList
								notes={filteredArchivedNotes}
								onDelete={(id) => deleteNote(id, true)}
								onToggleArchive={(id) => toggleArchive(id, true)}
								isArchived={true}
								formatDate={showFormattedDate}
							/>
						)}
					</section>
				</div>
			</main>
		</div>
	);
}

export default App;
