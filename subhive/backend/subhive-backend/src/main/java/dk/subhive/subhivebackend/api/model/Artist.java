package dk.subhive.subhivebackend.api.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Artist{
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;
	private String name;
	private String location;
	private String facebook;
	private String soundcloud;
	private String twitter;
	private String instagram;
	private Boolean subhiveartist;
	private String img;
	private String bgimg;

	public String getName(){
		return name;
	}

	public void setName(String name){
		this.name=name;
	}

	public String getLocation(){
		return location;
	}

	public void setLocation(String location){
		this.location=location;
	}

	public String getFacebook(){
		return facebook;
	}

	public void setFacebook(String facebook){
		this.facebook=facebook;
	}

	public String getSoundcloud(){
		return soundcloud;
	}

	public void setSoundcloud(String soundcloud){
		this.soundcloud=soundcloud;
	}

	public String getTwitter(){
		return twitter;
	}

	public void setTwitter(String twitter){
		this.twitter=twitter;
	}

	public String getInstagram(){
		return instagram;
	}

	public void setInstagram(String instagram){
		this.instagram=instagram;
	}

	public String getImg(){
		return img;
	}

	public void setImg(String img){
		this.img=img;
	}

	public String getBgimg(){
		return bgimg;
	}

	public void setBgimg(String bgimg){
		this.bgimg=bgimg;
	}

	public void setSubhiveartist(Boolean subhiveartist) {
		this.subhiveartist=subhiveartist;
	}

	public Boolean getSubhiveartist(){
		return subhiveartist;
	}
}