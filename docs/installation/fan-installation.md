# Fan Installation

The HakoCore chassis supports up to 9 fans total for optimal cooling performance. This guide covers installation procedures for both the included fans and optional additional cooling units.

## Overview

### Default Configuration

The HakoCore includes **3 fans pre-installed** in the front panel area. Additional fans can be installed in specific locations based on your cooling needs and drive configuration.

### Maximum Fan Configuration

| Location | Included | Additional | Total |
|----------|----------|------------|-------|
| **Front Panel** | 3 fans | +3 fans | 6 fans |
| **Rear Cage Bracket** | 0 fans | +3 fans | 3 fans |
| **Middle Cage Bracket** | 0 fans | +3 fans | 3 fans |
| **Grand Total** | 3 fans | +6 fans | **9 fans** |

!!! warning "Cage Clearance Required"
    Installing additional fans requires removing drive cages from the corresponding rows. Plan your storage and cooling requirements accordingly.

## Front Panel Fan Installation

### Step 1: Remove Magnetic Front Panel

![Remove Front Panel](../../assets/fan-install-step1.png)

1. **Locate the magnetic attachment points** on the front panel
2. **Gently pull the panel away** from the chassis - magnets will release
3. **Set panel aside safely** to avoid scratches

### Step 2: Access Fan Mounting Locations

![Fan Mounting Points](../../assets/fan-install-step2.png)

!!! important "Cage Removal Required"
    There must be **no drive cages installed in the first row** to access fan mounting points.

### Step 3: Install Additional Fans

1. **Position fan with airflow direction** pointing into chassis (intake configuration)
2. **Align fan mounting holes** with chassis mounting points
3. **Insert screws** through fan frame into chassis
4. **Tighten screws evenly** to prevent warping
5. **Connect fan power cables** to motherboard or fan controller

## Rear and Middle Bracket Installation

### Location Requirements

![Rear Fan Mounting](../../assets/fan-install-rear.png)

The rear cage bracket and middle cage bracket each have mounting locations for **up to 3 additional fans**.

### Installation Prerequisites

!!! warning "Cage Clearance"
    There must be **no cages installed around the respective rows** for fan access. Remove cages before attempting fan installation.

### Installation Process

1. **Remove relevant drive cages** from the target row
2. **Access the cage bracket mounting points**
3. **Mount fans in exhaust configuration** (airflow pointing out of chassis)  
4. **Secure with provided screws**
5. **Connect fan power and control cables**

## Fan Configuration Guidelines

### Airflow Direction

For optimal cooling performance:

```
Front (Intake) → Internal Components → Rear/Top (Exhaust)
```

| Location | Direction | Purpose |
|----------|-----------|---------|
| **Front fans** | Intake (→) | Draw cool air into chassis |
| **Rear fans** | Exhaust (←) | Expel hot air from chassis |
| **Middle fans** | Exhaust (←) | Remove heat from drive area |

### Positive Pressure Configuration

Configure fan speeds to maintain **positive internal pressure**:

- **Intake CFM** slightly higher than **Exhaust CFM**
- Prevents dust infiltration through unsealed openings
- Improves overall system cleanliness

## Power and Control Connections

### Fan Power Options

1. **Motherboard Headers**
   - 4-pin PWM for speed control
   - 3-pin for basic operation
   - Limited number of headers available

2. **HakoCore Powerboard**
   - 4-pin fan outputs available
   - Powered by PCIe IN 1 rail
   - Up to 4 fans per powerboard

3. **Dedicated Fan Controller**
   - External PWM controller
   - Advanced temperature-based control
   - Support for many fans

### Cable Management

- **Route fan cables** directly to control connections
- **Avoid interference** with moving parts
- **Secure cables** to prevent vibration damage
- **Label connections** for easy identification

## Fan Selection Guide

### Recommended Specifications

| Parameter | Recommended Range | Notes |
|-----------|------------------|-------|
| **Size** | 120mm | Standard chassis mounting |
| **Speed** | 1000-2000 RPM | Balanced noise/performance |
| **Airflow** | 60-120 CFM | Depends on system needs |
| **Static Pressure** | 1.5-3.0 mmH2O | For restricted airflow areas |
| **Noise Level** | <30 dBA | For quiet operation |

### Performance vs. Noise

Balance cooling performance with acoustic requirements:

- **High-performance**: 2000+ RPM, 100+ CFM, higher noise
- **Balanced**: 1200-1800 RPM, 60-90 CFM, moderate noise  
- **Quiet**: 800-1200 RPM, 40-70 CFM, low noise

## Troubleshooting

### Common Issues

| Problem | Possible Cause | Solution |
|---------|---------------|----------|
| **Fan won't start** | Power connection issue | Check power cable and header |
| **Excessive noise** | Fan hitting cable/component | Re-route interfering cables |
| **Poor cooling** | Incorrect airflow direction | Verify intake/exhaust setup |
| **Vibration** | Loose mounting screws | Retighten mounting hardware |

### Performance Optimization

To maximize cooling efficiency:

1. **Test different fan curves** using motherboard software
2. **Monitor temperatures** under various loads
3. **Adjust intake/exhaust balance** for best results
4. **Consider dust filters** for long-term performance

---

Next: Learn about [PCB Installation](../pcb-installation/) to complete your system assembly.