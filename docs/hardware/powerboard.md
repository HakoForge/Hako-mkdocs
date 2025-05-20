# Powerboard

The powerboard is the central power distribution hub for the HakoCore chassis. It takes 8-pin PCIe power inputs from your ATX power supply and distributes power through the HakoCore power harness system to individual PCBs.

![Powerboard Diagram](../../assets/powerboard-diagram.png)

## Overview

The powerboard provides clean, regulated power distribution for all storage devices and cooling systems in the HakoCore chassis.

### Key Features

- **Input**: Multiple 8-pin PCIe power connectors from PSU
- **Output**: 24-pin connector to HakoCore power harness
- **Fan Power**: Direct 4-pin fan power outputs
- **Modular Design**: Support for single or dual powerboard configuration

## Input Connections

### 8-Pin PCIe Inputs

The powerboard accepts up to 4 x 8-pin PCIe power connectors:

| Connector | Purpose | Power Rail |
|-----------|---------|------------|
| **8-Pin PCIe IN 1** | Primary power + fan power | 12V rail |
| **8-Pin PCIe IN 2** | Additional power | 12V rail |
| **8-Pin PCIe IN 3** | Additional power | 12V rail |
| **8-Pin PCIe IN 4** | Additional power | 12V rail |

!!! important "Power Priority"
    **8-Pin PCIe IN 1** powers the 4-pin fan outputs. This input should be prioritized and connected first to ensure proper fan operation.

## Output Connections

### HakoCore Power Harness

Each 8-pin PCIe input corresponds to specific outputs on the 24-pin connector:

| Input | Output Harness | Color Code |
|-------|---------------|------------|
| PCIe IN 1 | Harness 1 OUT 1A & 1B | 🟢 Green |
| PCIe IN 2 | Harness 1 OUT 2A & 2B | 🟣 Purple |
| PCIe IN 3 | Harness 2 OUT 3A & 3B | 🔵 Blue |
| PCIe IN 4 | Harness 2 OUT 4A & 4B | 🟠 Orange |

### Fan Power Outputs

- **4-Pin Fan OUT**: Direct fan power connections
- **Powered by**: 8-Pin PCIe IN 1
- **Control**: PWM speed control supported

## Installation

### Mounting the Powerboard

1. **Location**: Mount in designated powerboard area of chassis
2. **Orientation**: Ensure connectors face accessible direction
3. **Securing**: Use provided mounting screws
4. **Clearance**: Verify adequate space for cable connections

### Connection Sequence

!!! tip "Recommended Connection Order"
    1. Install powerboard in chassis
    2. Connect 8-pin PCIe cables from PSU
    3. Connect HakoCore power harness to 24-pin output
    4. Connect 4-pin fan cables
    5. Verify all connections before powering on

## Power Distribution Map

```
PSU → 8-Pin PCIe Connectors → Powerboard → 24-Pin Harness → Individual PCBs
                ↓
              4-Pin Fan Outputs → Chassis Fans
```

## Dual Powerboard Configuration

For maximum power delivery (1200W total), install two powerboards:

### Benefits

- **Increased capacity**: 1200W total power delivery
- **Redundancy**: Backup power capability
- **Load distribution**: Balanced power across drives

### Installation Notes

- Install second powerboard in parallel configuration
- Use separate PSU rails for each powerboard
- Connect harnesses to appropriate PCB rows

## Troubleshooting

### Common Issues

| Problem | Cause | Solution |
|---------|-------|----------|
| No fan operation | PCIe IN 1 not connected | Verify PCIe IN 1 connection |
| Intermittent power | Loose connections | Check all connector seating |
| Overload protection | Too many drives | Verify total power consumption |

### Power Calculations

Calculate total power requirements:

- **Per SSD**: ~5-8W typical
- **Per HDD**: ~15-25W typical  
- **Per Fan**: ~3-5W typical
- **PCB overhead**: ~5-10W per PCB

---

Next: Learn about the [Power Harness](../power-harness/) system that distributes power to individual PCBs.