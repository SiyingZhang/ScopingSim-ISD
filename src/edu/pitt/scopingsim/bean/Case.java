package edu.pitt.scopingsim.bean;

import java.util.ArrayList;
import java.util.UUID;

public class Case {
	
	private UUID caseId;
	private UUID createdBy;
	private ArrayList<Video> videoList;
	
	public Case() {
		videoList = new ArrayList<>();
	}
	
	public void setCaseId(UUID id) {
		this.caseId = id;
	}
	
	public UUID getCaseId() {
		return this.caseId;
	}
	
	public void setCreatedBy (UUID createdBy) {
		this.createdBy = createdBy;
	}
	
	public UUID getCreatedBy() {
		return this.createdBy;
	}
	
	public void addVideo(Video v) {
		videoList.add(v);
	}
	
	//remove the latest one.
	public void removeVideo() {
		videoList.remove(videoList.size()-1);
	}
	
	public ArrayList<Video> getVideoList() {
		return this.videoList;
	}
 
}
