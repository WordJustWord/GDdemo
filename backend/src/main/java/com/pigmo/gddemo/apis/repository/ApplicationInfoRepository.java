package com.pigmo.gddemo.apis.repository;

import com.pigmo.gddemo.entities.ApplicationEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplicationInfoRepository extends JpaRepository<ApplicationEntity,Long> {
}
