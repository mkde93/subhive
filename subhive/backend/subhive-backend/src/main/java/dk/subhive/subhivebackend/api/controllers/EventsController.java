package dk.subhive.subhivebackend.api.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import dk.subhive.subhivebackend.api.model.Event;
import dk.subhive.subhivebackend.api.repository.EventRepository;

@ComponentScan("dk.subhive.subhivebackend")
@RestController
public class EventsController {

    @Autowired
    private EventRepository EventRepository;

    @CrossOrigin
    @RequestMapping(value = "/api/events", method = RequestMethod.GET)
    public List<Event> getEvents() {
        List<Event> returnList = new ArrayList<>();
        EventRepository.findAll().forEach(Event -> {
            returnList.add(Event);
        });
        return returnList;
    }
}