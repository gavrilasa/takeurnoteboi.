import React from "react";

export default function NoteItem({
	note,
	onDelete,
	onToggleArchive,
	isArchived,
	formatDate,
}) {
	return (
		<div className="border p-4 rounded shadow">
			<h3 className="font-bold mb-2 text-lg">{note.title}</h3>
			<p>{note.body}</p>
			<small className="block mt-2 text-gray-600">
				{formatDate(note.createdAt)}
			</small>
			<div className="flex gap-2 mt-4">
				<button
					onClick={() => onToggleArchive(note.id)}
					className="bg-slate-800 text-white px-4 py-2 rounded"
				>
					{isArchived ? "Pindahkan ke Aktif" : "Arsipkan"}
				</button>
				<button
					onClick={() => onDelete(note.id)}
					className="bg-white border-slate-800 border-2 text-slate-800 px-4 py-2 rounded"
				>
					Hapus
				</button>
			</div>
		</div>
	);
}
