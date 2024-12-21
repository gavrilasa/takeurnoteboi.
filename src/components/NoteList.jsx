import React from "react";
import NoteItem from "./NoteItem";

export default function NoteList({
	notes,
	onDelete,
	onToggleArchive,
	isArchived,
	formatDate,
}) {
	return (
		<div className="grid gap-4">
			{notes.map((note) => (
				<NoteItem
					key={note.id}
					note={note}
					onDelete={onDelete}
					onToggleArchive={onToggleArchive}
					isArchived={isArchived}
					formatDate={formatDate}
				/>
			))}
		</div>
	);
}
