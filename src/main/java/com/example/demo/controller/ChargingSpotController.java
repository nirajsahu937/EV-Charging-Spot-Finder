package com.example.demo.controller;

import com.example.demo.dto.ChargingSpotDTO;
import com.example.demo.service.ChargingSpotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/charging-spots")
public class ChargingSpotController {

    @Autowired
    private ChargingSpotService chargingSpotService;

    @PostMapping
    public ChargingSpotDTO createChargingSpot(@RequestBody ChargingSpotDTO chargingSpotDTO) {
        return chargingSpotService.createChargingSpot(chargingSpotDTO);
    }

    @GetMapping("/{id}")
    public ChargingSpotDTO getChargingSpotById(@PathVariable Long id) {
        return chargingSpotService.getChargingSpotById(id);
    }

    @GetMapping
    public List<ChargingSpotDTO> getAllChargingSpots() {
        return chargingSpotService.getAllChargingSpots();
    }
}
