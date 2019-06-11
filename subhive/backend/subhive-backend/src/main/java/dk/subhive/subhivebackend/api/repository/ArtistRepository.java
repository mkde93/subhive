package dk.subhive.subhivebackend.api.repository;

import org.springframework.data.repository.CrudRepository;

import dk.subhive.subhivebackend.api.model.Artist;


// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface ArtistRepository extends CrudRepository<Artist, Integer> {

}