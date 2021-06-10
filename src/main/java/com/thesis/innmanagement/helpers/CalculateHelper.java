package com.thesis.innmanagement.helpers;

import com.thesis.innmanagement.entities.ElectricityWater;
import com.thesis.innmanagement.entities.Facilities;
import com.thesis.innmanagement.entities.Rooms;
import com.thesis.innmanagement.entities.enums.EQuality;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.List;

@Service
public class CalculateHelper {

    public BigDecimal sumList(List<BigDecimal> lstSum) {
        return new BigDecimal(lstSum.stream().mapToDouble(BigDecimal::doubleValue).sum());
    }

    public BigDecimal getFacilityTotalPrice(List<Facilities> facilities) {
        return new BigDecimal(facilities
                .stream()
                .filter(newFacility -> newFacility.getQuality() == EQuality.NEW)
                .map(Facilities::getTotal)
                .mapToDouble(BigDecimal::doubleValue)
                .sum()
        );
    }

    public BigDecimal getWaterTotalPrice(ElectricityWater electricityWater) {
        return electricityWater.getWaterUnitPrice()
                .multiply(new BigDecimal(electricityWater.getNumWaterConsump()));
    }

    public BigDecimal getElectricityTotalPrice(ElectricityWater electricityWater) {
        return electricityWater.getElectricityUnitPrice()
                .multiply(new BigDecimal(electricityWater.getNumElectricConsump()));
    }

    public BigDecimal getTotalFacilityPrice(Facilities facility) {
        return facility.getUnitPrice().multiply(new BigDecimal(facility.getQuantity()));
    }

    public BigDecimal getRoomTotal(Rooms room, LocalDateTime from, LocalDateTime to) {
        switch (room.getRoomType()) {
            case ROOM_BY_HOUR:
                long hours = ChronoUnit.HOURS.between(from, to);
                if (hours <= 0) hours = 1L;
                return (room.getPriceByFirstHour()
                        .add(room.getPriceByNextHour().divide(BigDecimal.ONE)))
                        .multiply(BigDecimal.valueOf(hours));
            case ROOM_BY_DAY:
                long days = ChronoUnit.DAYS.between(from, to);
                if (days <= 0) days = 1L;
                return room.getPriceByDay().multiply(BigDecimal.valueOf(days));
            case ROOM_BY_WEEK:
                long weeks = ChronoUnit.WEEKS.between(from, to);
                if (weeks <= 0) weeks = 1L;
                return room.getPriceByWeek().multiply(BigDecimal.valueOf(weeks));
            case ROOM_BY_MONTH:
                long months = ChronoUnit.MONTHS.between(from, to);
                if (months <= 0) months = 1L;
                return room.getPriceByMonth().multiply(BigDecimal.valueOf(months));
            default:
                return BigDecimal.ZERO;
        }
    }
}
