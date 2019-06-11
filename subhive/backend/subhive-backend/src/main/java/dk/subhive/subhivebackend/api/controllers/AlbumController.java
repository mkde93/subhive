package dk.subhive.subhivebackend.api.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import dk.subhive.subhivebackend.api.model.Album;
import dk.subhive.subhivebackend.api.repository.AlbumRepository;

@ComponentScan("dk.subhive.subhivebackend")
@RestController
public class AlbumController {

    @Autowired
    private AlbumRepository AlbumRepository;

    @CrossOrigin
    @RequestMapping(value = "/api/albums", method = RequestMethod.GET)
    public List<Album> getAlbums() {
        List<Album> returnList = new ArrayList<>();
        AlbumRepository.findAll().forEach(Album -> {
            returnList.add(Album);
        });
        return returnList;
    }
}