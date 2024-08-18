package com.example.demo.service;

import com.example.demo.dto.ChargingSpotDTO;
import com.example.demo.entity.ChargingSpot;
import com.example.demo.repository.ChargingSpotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ChargingSpotService {

    @Autowired
    private ChargingSpotRepository chargingSpotRepository;

    public ChargingSpotDTO createChargingSpot(ChargingSpotDTO chargingSpotDTO) {
        ChargingSpot chargingSpot = new ChargingSpot();
        chargingSpot.setLocation(chargingSpotDTO.getLocation());
        chargingSpot.setBrand(chargingSpotDTO.getBrand());
        chargingSpot.setAvailable(chargingSpotDTO.isAvailable());
        chargingSpot.setPricePerHour(chargingSpotDTO.getPricePerHour());

        chargingSpot = chargingSpotRepository.save(chargingSpot);

        chargingSpotDTO.setId(chargingSpot.getId());
        return chargingSpotDTO;
    }

    public ChargingSpotDTO getChargingSpotById(Long id) {
        ChargingSpot chargingSpot = chargingSpotRepository.findById(id).orElseThrow();
        ChargingSpotDTO chargingSpotDTO = new ChargingSpotDTO();
        chargingSpotDTO.setId(chargingSpot.getId());
        chargingSpotDTO.setLocation(chargingSpot.getLocation());
        chargingSpotDTO.setBrand(chargingSpot.getBrand());
        chargingSpotDTO.setAvailable(chargingSpot.isAvailable());
        chargingSpotDTO.setPricePerHour(chargingSpot.getPricePerHour());
        return chargingSpotDTO;
    }

    public List<ChargingSpotDTO> getAllChargingSpots() {
        return chargingSpotRepository.findAll().stream().map(chargingSpot -> {
            ChargingSpotDTO chargingSpotDTO = new ChargingSpotDTO();
            chargingSpotDTO.setId(chargingSpot.getId());
            chargingSpotDTO.setLocation(chargingSpot.getLocation());
            chargingSpotDTO.setBrand(chargingSpot.getBrand());
            chargingSpotDTO.setAvailable(chargingSpot.isAvailable());
            chargingSpotDTO.setPricePerHour(chargingSpot.getPricePerHour());
            return chargingSpotDTO;
        }).collect(Collectors.toList());
    }
}
