package dk.subhive.subhivebackend.api.repository;

import org.springframework.data.repository.CrudRepository;

import dk.subhive.subhivebackend.api.model.Album;


// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface AlbumRepository extends CrudRepository<Album, Integer> {

}