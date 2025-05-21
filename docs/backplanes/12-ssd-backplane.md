# 12-SSD Backplane

The Standard 12-SSD Backplane provides high-density 2.5" drive storage with integrated power regulation and SAS/SATA connectivity for up to 12 solid-state drives or 2.5" hard drives.

![12-SSD Backplane](../../assets/12-ssd-backplane.png)

## Overview

This backplane is designed for maximum 2.5" drive density while providing clean power delivery and flexible connectivity options.

### Key Features

- **12 SATA/SAS 2.5" drive connectors** for maximum storage density
- **Integrated 5V power regulation** from 12V input
- **Triple SAS output connectors** for flexible HBA connectivity
- **Hot-swap capability** with proper drive cages
- **LED activity indicators** for each drive bay

## Technical Specifications

| Parameter | Specification |
|-----------|---------------|
| **Drive Connectors** | 12 x SATA/SAS 2.5" |
| **SAS Outputs** | 3 x SFF-8087 (Mini-SAS) |
| **Input Voltage** | 12V DC |
| **Output Voltage** | 5V (25A Max) |
| **Max Power Consumption** | 84 Watts |
| **Drive Support** | SATA III, SAS 6Gb/s, SAS 12Gb/s |
| **Hot-Swap** | Yes (with compatible cages) |

## Front Panel Layout

### Drive Bay Arrangement

```
[SAS1_A] [SAS1_B] [SAS1_C] [SAS1_D]
[SAS2_A] [SAS2_B] [SAS2_C] [SAS2_D]  
[SAS3_A] [SAS3_B] [SAS3_C] [SAS3_D]
```

Each row of 4 drives connects to one SAS output:
- **SAS1**: Bays A-D (top row)  
- **SAS2**: Bays E-H (middle row)
- **SAS3**: Bays I-L (bottom row)

### Status Indicators

Each drive bay includes:
- **Power LED**: Green when drive is powered
- **Activity LED**: Flashing during I/O operations  
- **Fault LED**: Red when drive error detected

## Back Panel Connections

![12-SSD Backplane Rear](../../assets/12-ssd-backplane-rear.png)

### Power Input
- **4-Pin 12V IN**: Connect to HakoCore power harness
- **Voltage**: 12V DC input
- **Current**: Up to 7A maximum draw

### Data Outputs
- **SAS OUT A**: Drives 1-4 (Orange)
- **SAS OUT B**: Drives 5-8 (Blue)  
- **SAS OUT C**: Drives 9-12 (Purple)

### Control Interface
- **PWM IN**: Fan speed control input
- **Status**: PCB health monitoring output

## Installation Guide

### Step 1: PCB Mounting

1. **Position backplane** in designated PCB mounting area
2. **Align mounting holes** with chassis standoffs
3. **Secure with screws** at all four corners
4. **Verify level mounting** to ensure proper drive alignment

### Step 2: Power Connection

1. **Locate 4-pin power connector** on harness
2. **Align connector orientation** (keyed design)
3. **Press firmly** until connector seats completely
4. **Verify secure connection** by gentle pull test

### Step 3: Data Connections

1. **Connect SAS cables** from HBA to backplane outputs
2. **Use appropriate cable length** to avoid stress
3. **Secure cable routing** to prevent interference
4. **Label connections** for future maintenance

### Step 4: Drive Installation

!!! important "Drive Installation Order"
    Install drives after all connections are complete and verified.

1. **Prepare drives** with appropriate mounting brackets if needed
2. **Insert drives gently** into hot-swap carriers
3. **Ensure full insertion** until drive locks into place
4. **Verify LED indications** after system power-on

## Performance Considerations

### Power Budget

Calculate total power consumption:

| Component | Power Draw | Quantity | Total |
|-----------|------------|----------|-------|
| **PCB Overhead** | 5W | 1 | 5W |
| **2.5" SATA SSD** | 5-8W | 0-12 | 0-96W |
| **2.5" SAS SSD** | 6-10W | 0-12 | 0-120W |
| **2.5" HDD** | 8-15W | 0-12 | 0-180W |

!!! warning "Power Limit"
    Maximum backplane output is **84W**. Calculate actual drive power consumption and ensure total does not exceed this limit.

### Thermal Management

- **Airflow requirement**: Front-to-rear airflow across drives
- **Temperature monitoring**: Use SMART data for drive temps
- **Fan placement**: Install intake fans in front of drive bays
- **Spacing**: Allow air gaps between high-performance drives

## HBA Compatibility

### Tested Controllers

The 12-SSD backplane has been verified with:

- **LSI SAS 9300 series** (IT mode)
- **Broadcom SAS 9400 series** (IT mode)  
- **ASUS HYPER M.2 cards** (with appropriate adapters)
- **Generic SATA expansion cards**

### Connection Planning

| HBA Ports | Backplane Connection | Drives Supported |
|-----------|---------------------|------------------|
| **1 Port** | SAS OUT A only | 4 drives |
| **2 Ports** | SAS OUT A + B | 8 drives |
| **3 Ports** | SAS OUT A + B + C | 12 drives |

## Troubleshooting

### Common Issues

| Symptom | Possible Cause | Solution |
|---------|---------------|----------|
| **No drive detection** | Power or SAS connection | Check all connections |
| **Intermittent detection** | Loose SAS cable | Reseat SAS connectors |
| **Drive not accessible** | Faulty drive carrier | Test drive in different bay |
| **LED indicators off** | Power supply issue | Verify 12V power delivery |

### Diagnostic Steps

1. **Check power LED** on backplane
2. **Verify SAS cable connections** are secure
3. **Test with known-good drive** in problematic bay
4. **Monitor system logs** for drive errors
5. **Check HBA firmware** compatibility

## Maintenance

### Regular Maintenance

- **Monthly**: Check drive temperatures via SMART data
- **Quarterly**: Verify all connections remain secure  
- **Annually**: Clean dust from drive bays and fans
- **As needed**: Replace failed drives promptly

### Firmware Updates

- **Backplane firmware**: Updates available via HakoForge
- **Drive firmware**: Update per manufacturer recommendations
- **HBA firmware**: Keep current for best compatibility
