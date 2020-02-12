package com.pigmo.gddemo.apis.repository;

import com.pigmo.gddemo.entities.ClientEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<ClientEntity,Long> {
}
