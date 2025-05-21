# Mixed 4-Bay Backplane

The Mixed 4-Bay Backplane provides the flexibility of both 2.5" and 3.5" drive support in a single PCB, ideal for hybrid storage configurations combining SSDs and traditional hard drives.

![Mixed 4-Bay Backplane](../../assets/mixed-4-bay-backplane.png)

## Overview

This backplane combines the best of both storage worlds, allowing users to optimize for both performance (SSD) and capacity (HDD) within the same chassis row.

### Key Features

- **Hybrid connectivity**: 2x 2.5" SSD + 2x 3.5" HDD connectors
- **Unified power management** for both drive types
- **Single SAS output** simplifies cabling
- **Independent drive control** for each bay
- **Optimized power delivery** for mixed workloads

## Technical Specifications

| Parameter | Specification |
|-----------|---------------|
| **2.5" Connectors** | 2 x SATA/SAS 2.5" |
| **3.5" Connectors** | 2 x SATA/SAS 3.5" |
| **SAS Output** | 1 x SFF-8087 (Mini-SAS) |
| **Input Voltage** | 12V DC |
| **Output Voltages** | 12V pass-through, 5V regulated (5A Max) |
| **Max Power Consumption** | 40 Watts |
| **Drive Support** | SATA III, SAS 6Gb/s, SAS 12Gb/s |
| **Hot-Swap** | Yes (with compatible cages) |

## Drive Bay Layout

### Physical Configuration

```
┌─────────────────────────────────────┐
│  [2.5" Bay 0]  [2.5" Bay 1]        │
│                                     │
│  [3.5" Bay 2]  [3.5" Bay 3]        │
└─────────────────────────────────────┘
```

### Bay Assignments

| Position | Drive Size | Connector | Typical Use |
|----------|------------|-----------|-------------|
| **Bay 0** | 2.5" | SAS1_0 | OS/Boot SSD |
| **Bay 1** | 2.5" | SAS1_1 | Cache/Fast storage |
| **Bay 2** | 3.5" | SAS1_2 | Bulk storage HDD |
| **Bay 3** | 3.5" | SAS1_3 | Backup/Archive HDD |

## Front Panel Design

![Mixed Backplane Front](../../assets/mixed-backplane-front.png)

### Drive Connectors

#### 2.5" Section (Top)
- **Optimized for SSDs** with lower power requirements
- **High-speed data paths** for maximum SSD performance  
- **Compact connector design** for space efficiency

#### 3.5" Section (Bottom)  
- **Full power delivery** for spinning disk drives
- **Robust mechanical connection** for larger drives
- **Spinup current management** for HDD requirements

### Status Indicators

Each bay provides comprehensive status monitoring:

| Indicator | Color | Function |
|-----------|-------|----------|
| **Power** | Green | Drive powered and ready |
| **Activity** | Blue | Data transfer in progress |
| **Fault** | Red | Drive error or failure |
| **Locate** | Amber | Drive identification |

## Back Panel Connections

![Mixed Backplane Rear](../../assets/mixed-backplane-rear.png)

### Power Input

- **4-Pin 12V IN**: Connection to HakoCore power harness
- **Power distribution**: Intelligent routing to both drive types
- **Current capacity**: Up to 3.5A continuous

### Data Output  

- **SAS OUT A**: Single SFF-8087 connector
- **Lane assignment**: 4 SAS lanes for all drives
- **Protocol support**: Mixed SATA and SAS in same chain

### Additional Features

- **Voltage regulation**: On-board 5V supply for drive logic
- **Power sequencing**: Managed spinup for HDDs
- **Health monitoring**: Temperature and voltage sensing

## Power Management

### Drive Power Requirements

Typical power consumption by drive type:

| Drive Configuration | Peak Power | Steady State | Notes |
|---------------------|------------|--------------|-------|
| **2x SSD + 2x HDD** | ~45W | ~35W | Recommended config |
| **2x SSD only** | ~20W | ~16W | High performance |
| **2x HDD only** | ~35W | ~30W | High capacity |
| **Full mixed load** | ~50W | ~40W | Maximum configuration |

### Intelligent Power Features

- **Staggered spinup**: HDDs start sequentially to reduce peak current
- **5V regulation**: Clean power for drive electronics
- **Overcurrent protection**: Individual bay monitoring
- **Thermal management**: Temperature-based fan control integration

## Installation Guide

### Pre-Installation Planning

1. **Determine storage strategy**
   - OS/boot drives in 2.5" bays
   - Data storage in 3.5" bays
   - Performance vs. capacity balance

2. **Calculate power requirements**
   - Sum all drive power consumption
   - Verify within 40W backplane limit
   - Consider spinup current for HDDs

### Installation Steps

#### Step 1: Mount Backplane

1. **Position in chassis** at designated mounting location
2. **Align with standoffs** for level installation
3. **Secure with screws** in diagonal pattern
4. **Verify connector clearance** for mixed drive sizes

#### Step 2: Power Connection

1. **Connect power harness** from powerboard
2. **Verify secure seating** of 4-pin connector
3. **Check power indicators** if present
4. **Test power delivery** to both sections

#### Step 3: Data Connection

1. **Connect SAS cable** from HBA to SAS OUT A
2. **Route cable** to avoid interference with drives
3. **Secure connections** at both ends
4. **Label for future reference**

#### Step 4: Drive Installation

!!! tip "Installation Order"
    Install 3.5" drives first, then 2.5" drives to avoid interference.

1. **Install 3.5" HDDs** in bottom bays (2 & 3)
2. **Install 2.5" SSDs** in top bays (0 & 1)  
3. **Verify all drives** seat properly
4. **Check status LEDs** after power-on

## Configuration Strategies

### Performance-Optimized Setup

```
Bay 0: Boot SSD (OS)
Bay 1: Data SSD (Applications/temp files)
Bay 2: Fast HDD (User data)
Bay 3: Archive HDD (Backups)
```

### Capacity-Focused Setup

```
Bay 0: Management SSD (OS only)
Bay 1: Cache SSD (Read cache)
Bay 2: Primary HDD (Active data)
Bay 3: Secondary HDD (Archives)
```

### RAID Configurations

#### RAID 1 (Mirroring)
- **SSD Mirror**: Bays 0 + 1 for OS/critical data
- **HDD Mirror**: Bays 2 + 3 for user data

#### RAID 0 (Striping)
- **SSD Stripe**: Bays 0 + 1 for maximum performance
- **HDD Stripe**: Bays 2 + 3 for maximum capacity

#### Mixed RAID
- **RAID 1 SSDs**: Bays 0 + 1 for reliability
- **Individual HDDs**: Bays 2 + 3 for flexibility

## HBA Compatibility

### Recommended Controllers

The mixed backplane works optimally with:

- **LSI SAS 9300 series**: Excellent mixed protocol support
- **Broadcom SAS 9400 series**: Latest features and performance
- **Dell PERC H310** (IT mode): Budget-friendly option
- **IBM ServeRAID M1015** (IT mode): Proven reliability

### Protocol Mixing

| Configuration | Compatibility | Performance |
|---------------|---------------|-------------|
| **All SATA** | Universal | Good |
| **All SAS** | SAS HBA required | Excellent |
| **Mixed SATA/SAS** | SAS HBA required | Good |

## Troubleshooting

### Mixed Drive Issues

| Problem | Possible Cause | Solution |
|---------|---------------|----------|
| **SSD not detected** | Power or connection issue | Check 2.5" bay power |
| **HDD spinup failure** | Insufficient power | Verify 12V supply |
| **Mixed protocol errors** | HBA configuration | Check IT mode firmware |
| **Performance degradation** | Cable or connection issue | Verify SAS cable integrity |

### Performance Optimization

1. **Separate workloads** by drive type
2. **Use SSDs for hot data** frequently accessed
3. **Configure HDD for bulk storage** less frequently accessed
4. **Monitor thermal performance** of both drive types

## Maintenance

### Regular Monitoring

- **Drive health**: Check SMART data for all drives
- **Performance metrics**: Monitor I/O patterns  
- **Temperature**: Ensure adequate cooling for both types
- **Power consumption**: Verify within limits

### Drive Replacement

#### 2.5" Drive Replacement
1. **Hot-swap capable** in most configurations
2. **Remove drive carrier** from bay
3. **Install new drive** and verify detection
4. **Rebuild array** if RAID configured

#### 3.5" Drive Replacement
1. **May require shutdown** depending on configuration
2. **Follow HDD replacement procedures**
3. **Allow for spinup time** after installation
4. **Monitor rebuild progress** carefully

## Use Cases

### Home Media Server
- **Bay 0**: OS SSD for responsiveness
- **Bay 1**: Cache SSD for frequently accessed media
- **Bays 2+3**: Large HDDs for media storage

### Small Business Server
- **Bay 0**: Boot SSD with OS and applications
- **Bay 1**: Database SSD for transaction logs
- **Bays 2+3**: RAID 1 HDDs for user data

### Development Workstation
- **Bays 0+1**: RAID 0 SSDs for maximum performance
- **Bays 2+3**: RAID 1 HDDs for project storage

### Surveillance System
- **Bay 0**: OS SSD for system stability
- **Bay 1**: Buffer SSD for recording overflow
- **Bays 2+3**: Large HDDs for video archives