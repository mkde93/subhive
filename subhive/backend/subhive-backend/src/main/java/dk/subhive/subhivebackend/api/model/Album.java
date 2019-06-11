package dk.subhive.subhivebackend.api.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Album{
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	private String title;
	private String spotifyurl;
	private String soundcloudurl;
	private String type;
	private java.util.Date releasedate;
	private String bgimg;
	private String cover;
	private String tracks;
	private String artists;

	public String getTitle(){
		return title;
	}

	public void setTitle(String title){
		this.title=title;
	}

	public String getSpotifyurl(){
		return spotifyurl;
	}

	public void setSpotifyurl(String spotifyurl){
		this.spotifyurl=spotifyurl;
	}

	public String getSoundcloudurl(){
		return soundcloudurl;
	}

	public void setSoundcloudurl(String soundcloudurl){
		this.soundcloudurl=soundcloudurl;
	}

	public String getType(){
		return type;
	}

	public void setType(String type){
		this.type=type;
	}

	public java.util.Date getReleasedate(){
		return releasedate;
	}

	public void setReleasedate(java.util.Date releasedate){
		this.releasedate=releasedate;
	}

	public String getBgimg(){
		return bgimg;
	}

	public void setBgimg(String bgimg){
		this.bgimg=bgimg;
	}

	public String getCover(){
		return cover;
	}

	public void setCover(String cover){
		this.cover=cover;
	}

	public String getArtist(){
		return artists;
	}

	public String getTracks(){
		return tracks;
	}
}