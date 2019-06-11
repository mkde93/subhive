package dk.subhive.subhivebackend.api.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import dk.subhive.subhivebackend.api.model.Artist;
import dk.subhive.subhivebackend.api.repository.ArtistRepository;

@ComponentScan("dk.subhive.subhivebackend")
@RestController
public class ArtistsController {

    @Autowired
    private ArtistRepository artistRepository;

    @CrossOrigin
    @RequestMapping(value = "/api/artists", method = RequestMethod.GET)
    public List<Artist> getArtists() {
        List<Artist> returnList = new ArrayList<>();
        artistRepository.findAll().forEach(artist -> {
            returnList.add(artist);
        });
        return returnList;
    }

    @CrossOrigin
    @RequestMapping(value = "/api/artists/getbyname", method = RequestMethod.GET)
    public Artist getArtistByName(String artistName) {
        List<Artist> allArtists = new ArrayList<>();
        artistRepository.findAll().forEach(artist -> {
            allArtists.add(artist);
        });
        return allArtists.stream().filter(artist -> artist.getName().equals(artistName)).findFirst().get();   
     }
}