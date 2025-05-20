# 4-HDD Backplane

The Standard 4-HDD Backplane provides power and data connectivity for up to four 3.5" hard disk drives or large-capacity SSDs, with integrated power regulation and SAS connectivity.

![4-HDD Backplane](../../assets/4-hdd-backplane.png)

## Overview

This backplane is optimized for traditional 3.5" hard disk drives, providing the higher power requirements and robust connectivity needed for spinning disk storage systems.

### Key Features

- **4 SATA/SAS 3.5" drive connectors** for full-size drives
- **Pass-through power delivery** (12V and 5V)
- **Single SAS output connector** for simplified cabling
- **Hot-swap capability** with appropriate drive cages
- **High current capacity** for spinning disk requirements

## Technical Specifications

| Parameter | Specification |
|-----------|---------------|
| **Drive Connectors** | 4 x SATA/SAS 3.5" |
| **SAS Output** | 1 x SFF-8087 (Mini-SAS) |
| **Input Voltage** | 12V DC |
| **Output Voltages** | 12V pass-through, 5V regulated (5A Max) |
| **Max Power Consumption** | 53 Watts |
| **Drive Support** | SATA III, SAS 6Gb/s, SAS 12Gb/s |
| **Hot-Swap** | Yes (with compatible cages) |
| **Current Capacity** | High current design for HDD spinup |

## Drive Bay Configuration

### Physical Layout

```
┌─────────────────────────────────────┐
│ [SAS1_0]  [SAS1_1]  [SAS1_2]  [SAS1_3] │
│    Bay 0     Bay 1     Bay 2     Bay 3 │
└─────────────────────────────────────┘
```

All four drives connect to a single SAS output chain, simplifying cable management while maintaining full bandwidth for each drive.

### Drive Numbering

| Physical Position | Connector Label | Drive ID |
|------------------|-----------------|----------|
| **Leftmost** | SAS1_0 | Drive 0 |
| **Second** | SAS1_1 | Drive 1 |
| **Third** | SAS1_2 | Drive 2 |
| **Rightmost** | SAS1_3 | Drive 3 |

## Front Panel Features

![4-HDD Front Panel](../../assets/4-hdd-front-panel.png)

### Drive Connectors

Each 3.5" connector provides:
- **Power delivery**: 12V and 5V rails
- **Data connectivity**: SATA or SAS protocols
- **Spinup control**: Managed power sequencing
- **Hot-swap support**: Safe insertion/removal

### Status Indicators

Each drive bay includes:
- **Power LED**: Green when drive is powered and spinning
- **Activity LED**: Flashing during read/write operations
- **Fault LED**: Red when drive error or failure detected
- **Locate LED**: Blue for drive identification (if supported)

## Back Panel Connections

![4-HDD Backplane Rear](../../assets/4-hdd-backplane-rear.png)

### Power Input

- **4-Pin 12V IN**: Primary power from HakoCore harness
- **Input requirement**: 12V DC up to 4.5A
- **Power connector**: Keyed design prevents mis-insertion

### Data Output

- **SAS1_Out**: Single SFF-8087 connector
- **Data lanes**: 4 lanes supporting all drive positions
- **Cable type**: Standard Mini-SAS to Mini-SAS or breakout

### Additional Connections

- **4-Pin 12V IN**: HakoCore power harness input
- **Status outputs**: PCB health monitoring

## Power Requirements

### Drive Power Budget

Calculate total power for different drive types:

| Drive Type | Typical Power | Spinup Power | 4 Drive Total |
|------------|---------------|--------------|---------------|
| **7200 RPM HDD** | 15W | 25W | 60W + spinup |
| **5400 RPM HDD** | 12W | 20W | 48W + spinup |
| **Enterprise SSD** | 8W | 8W | 32W steady |
| **3.5" SATA SSD** | 5W | 5W | 20W steady |

!!! warning "Spinup Current"
    HDDs require significant current during spinup. The backplane manages this with intelligent sequencing, but ensure adequate PSU capacity.

### Power Management Features

- **Intelligent spinup sequencing** to reduce peak current
- **5V regulation** from 12V input for drive logic
- **Overcurrent protection** per drive bay
- **Thermal monitoring** of power delivery circuitry

## Installation Guide

### Step 1: PCB Mounting

1. **Position backplane** in chassis mounting location
2. **Align with standoffs** ensuring level installation
3. **Secure with screws** at all four corners
4. **Verify connector accessibility** for drives and cables

### Step 2: Power Connection

1. **Connect 4-pin power harness** from powerboard
2. **Verify secure seating** of power connector
3. **Check power LED** indication (if present)
4. **Test voltage levels** if diagnostic tools available

### Step 3: Data Connection

1. **Connect SAS cable** from HBA to SAS1_Out
2. **Ensure proper cable routing** to avoid strain
3. **Secure cable** at both ends
4. **Label connection** for future reference

### Step 4: Drive Installation

!!! info "Installation Order"
    Install drives after all connections are complete to avoid interference.

1. **Prepare drives** with appropriate carriers
2. **Install drives sequentially** starting with Bay 0
3. **Verify full insertion** and locking
4. **Check status LEDs** after power-on

## HBA Compatibility

### Recommended Controllers

Tested and confirmed compatible:

- **LSI SAS 9300-8i** (IT mode) - Excellent performance
- **LSI SAS 9211-8i** (IT mode) - Proven reliability  
- **Broadcom SAS 9400-8i** (IT mode) - Latest features
- **Dell PERC H310** (IT mode) - Budget option

### Connection Options

| HBA Configuration | Cable Type | Notes |
|------------------|------------|-------|
| **Single port** | SAS to 4x SATA breakout | Individual drive addressing |
| **SAS expander** | SAS to SAS | Unified drive management |
| **Direct SAS** | SAS to SAS | Simple single-cable solution |

## Performance Characteristics

### Throughput Capabilities

- **Per-drive bandwidth**: Full SATA III (6 Gbps) or SAS speeds
- **Aggregate bandwidth**: Limited by HBA connection (typically 6-12 Gbps)
- **Queue depth**: Supports full drive capabilities
- **Simultaneous operations**: All drives can operate independently

### Thermal Performance

- **Operating temperature**: 0°C to 60°C
- **Power dissipation**: Minimal heat generation
- **Airflow requirement**: Front-to-rear across drives
- **Thermal monitoring**: Available via SMART data

## Troubleshooting

### Common Issues

| Problem | Symptoms | Solution |
|---------|----------|----------|
| **Drive not detected** | Missing in OS/BIOS | Check power and SAS connections |
| **Slow performance** | High latency | Verify SAS cable integrity |
| **Drive drops offline** | Intermittent disconnects | Check drive carrier seating |
| **Multiple drive failure** | All drives affected | Verify backplane power |

### Diagnostic Procedures

1. **Visual inspection** of all connections
2. **Power verification** at backplane input
3. **SAS cable continuity** testing
4. **Individual drive testing** in known-good system
5. **Backplane substitution** if available

### Advanced Diagnostics

- **SAS topology scanning** with HBA utilities
- **Drive SMART monitoring** for health status
- **Power consumption measurement** under load
- **Temperature monitoring** of drives and backplane

## Maintenance

### Preventive Maintenance

- **Monthly**: Check drive status LEDs
- **Quarterly**: Verify connection tightness
- **Semi-annually**: Clean drive bays and connectors
- **Annually**: Test drive spinup sequencing

### Drive Replacement

1. **Identify failing drive** via monitoring software
2. **Power down system** (or use hot-swap if supported)
3. **Remove drive carrier** from bay
4. **Install replacement drive** in carrier
5. **Reinsert carrier** and verify detection
6. **Initiate rebuild** if RAID configured

## Upgrade Considerations

### Capacity Expansion

- **Drive replacement**: Install larger capacity drives
- **RAID configuration**: Plan for rebuild times with large drives
- **Power requirements**: Verify PSU capacity for new drives

### Performance Upgrades

- **SSD replacement**: Consider 3.5" SATA SSDs for performance
- **SAS drives**: Upgrade to SAS for better performance/reliability
- **HBA upgrades**: Consider newer controllers for additional features

---

Next: Learn about the [Mixed 4-Bay Backplane](../mixed-4-bay-backplane/) for hybrid storage configurations.