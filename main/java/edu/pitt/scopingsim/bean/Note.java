package java.edu.pitt.scopingsim.bean;

import java.util.UUID;

public class Note {
	
	private UUID noteId;
	private String noteText;
	private String timeIndex;
	
	/**
	 * @return the noteId
	 */
	public UUID getNoteId() {
		return noteId;
	}
	/**
	 * @param noteId the noteId to set
	 */
	public void setNoteId(UUID noteId) {
		this.noteId = noteId;
	}
	
	/**
	 * @return the noteText
	 */
	public String getNoteText() {
		return noteText;
	}
	/**
	 * @param noteText the noteText to set
	 */
	public void setNoteText(String noteText) {
		this.noteText = noteText;
	}
	
	/**
	 * @return the timeIndex
	 */
	public String getTimeIndex() {
		return timeIndex;
	}
	/**
	 * @param timeIndex the timeIndex to set
	 */
	public void setTimeIndex(String timeIndex) {
		this.timeIndex = timeIndex;
	}

}
