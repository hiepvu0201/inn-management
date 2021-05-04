package com.thesis.innmanagement.services;

import com.thesis.innmanagement.entities.ElectricityWater;
import com.thesis.innmanagement.entities.Rooms;
import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.repositories.ElectricityWaterRepository;
import com.thesis.innmanagement.repositories.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class ElectricityWaterService {

    @Autowired
    private ElectricityWaterRepository electricityWaterRepository;

    @Autowired
    private RoomRepository roomRepository;

    public List<ElectricityWater> findAll() {
        return electricityWaterRepository.findAll();
    }

    public ElectricityWater findById(Long id) throws ResourceNotFoundException {
        return electricityWaterRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Electricity water not found on id: "+id));
    }

    public ElectricityWater createOrUpdate(Long id, ElectricityWater electricityWater) throws ResourceNotFoundException {
        Rooms room = roomRepository.findById(electricityWater.getRoomId()).orElseThrow(() -> new ResourceNotFoundException("Room not found with id " + electricityWater.getRoomId()));
        electricityWater.setRoom(room);
        if(id == null) {
            electricityWaterRepository.save(electricityWater);
            return electricityWater;
        }
        else {
            ElectricityWater electricityWaterUpdate = electricityWaterRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("This electricity water not found on:" + id));
            electricityWaterUpdate.setRoom(electricityWater.getRoom());
            electricityWaterUpdate.setNumElectricOld(electricityWater.getNumElectricOld());
            electricityWaterUpdate.setNumElectricNew(electricityWater.getNumElectricNew());
            electricityWaterUpdate.setNumElectricConsump(electricityWater.getNumElectricConsump());
            electricityWaterUpdate.setNumWaterOld(electricityWater.getNumWaterOld());
            electricityWaterUpdate.setNumWaterNew(electricityWater.getNumWaterNew());
            electricityWaterUpdate.setNumWaterConsump(electricityWater.getNumWaterConsump());
            electricityWaterUpdate.setChecked(electricityWater.isChecked());
            electricityWaterUpdate.setMonth(electricityWater.getMonth());
            electricityWaterRepository.save(electricityWaterUpdate);
            return electricityWaterUpdate;
        }
    }

    public Map<String, Boolean> delete(Long id) throws ResourceNotFoundException {
        ElectricityWater electricityWater = electricityWaterRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Electricity water not found on: " + id));
        electricityWaterRepository.delete(electricityWater);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
