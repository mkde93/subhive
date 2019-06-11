package dk.subhive.subhivebackend.api.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Event{
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;
	private String title;
	private java.util.Date date;
	private String location;
	private String eventlink;
	private String aftermovie;
	private String poster;
	private String bgimg;
	private String titlecolor;
	private String textcolor;
	private String artists;
	private String settimes;	

	public String getTitle(){
		return title;
	}

	public void setTitle(String title){
		this.title=title;
	}

	public java.util.Date getDate(){
		return date;
	}

	public void setDate(java.util.Date date){
		this.date=date;
	}

	public String getLocation(){
		return location;
	}

	public void setLocation(String location){
		this.location=location;
	}

	public String getEventlink(){
		return eventlink;
	}

	public void setEventlink(String eventlink){
		this.eventlink=eventlink;
	}

	public String getAftermovie(){
		return aftermovie;
	}

	public void setAftermovie(String aftermovie){
		this.aftermovie=aftermovie;
	}

	public String getPoster(){
		return poster;
	}

	public void setPoster(String poster){
		this.poster=poster;
	}

	public String getBgimg(){
		return bgimg;
	}

	public void setBgimg(String bgimg){
		this.bgimg=bgimg;
	}

	public String getTitlecolor(){
		return titlecolor;
	}

	public void setTitlecolor(String titlecolor){
		this.titlecolor=titlecolor;
	}

	public String getTextcolor(){
		return textcolor;
	}

	public void setTextcolor(String textcolor){
		this.textcolor=textcolor;
	}

	public String getArtists(){
		return artists;
	}

	public void setArtists(String artists){
		this.artists=artists;
	}

	public String getSettimes(){
		return settimes;
	}

	public void setSettimes(String settimes){
		this.settimes=settimes;
	}
}