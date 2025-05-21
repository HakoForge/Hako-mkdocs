# Cage Installation

Drive cages provide the mechanical interface between storage devices and the HakoCore chassis. They enable hot-swappable operation and ensure proper alignment with PCB connectors.

![Cage Installation Overview](../../assets/cage-installation-overview.png)

## Overview

The HakoCore supports multiple cage types to accommodate different storage configurations. Each cage is designed for specific drive formats and mounting requirements.

### Cage Types

| Cage Type | Drive Format | Capacity | Hot-Swap | Use Case |
|-----------|--------------|----------|----------|----------|
| **12-SSD Cage** | 2.5" SSD/HDD | 12 drives | Yes | High-density SSD arrays |
| **4-HDD Cage** | 3.5" HDD | 4 drives | Yes | Traditional bulk storage |
| **Mixed Cage** | 2.5" + 3.5" | 2+2 drives | Yes | Hybrid configurations |

### Design Features

- **Tool-free installation** using thumb screws
- **Keyed alignment** prevents incorrect mounting
- **Hot-swap carriers** for individual drive access
- **LED indicators** for drive status (if equipped)
- **Airflow channels** for optimal cooling

## Pre-Installation Requirements

### Compatibility Check

Before installing cages, verify:

1. **PCB compatibility** - Match cage type with installed backplane
2. **Space availability** - Ensure chassis position is free
3. **Airflow requirements** - Consider cooling needs
4. **Future expansion** - Plan for additional drives or configuration changes

### Required Components

- ✅ **Drive cage** (correct type for application)
- ✅ **Thumb screws** (included with cage)
- ✅ **Hot-swap carriers** (if applicable)
- ✅ **Mounting bracket** (installed in chassis)

!!! info "Pre-assembled Kits"
    HakoCore kits typically include pre-installed cages. This guide covers replacement or reconfiguration scenarios.

## Installation Procedure

### Step 1: Prepare the Mounting Area

![Cage Mounting Preparation](../../assets/cage-mount-prep.png)

1. **Power down the system** completely
2. **Remove chassis lid** following panel removal procedure
3. **Identify target mounting bracket** (rear or middle)
4. **Clear any obstructions** from the mounting area
5. **Verify PCB installation** is complete for this position

### Step 2: Position the Cage

![Cage Positioning](../../assets/cage-positioning.png)

1. **Orient cage correctly** - connectors toward PCB
2. **Align cage tabs** with bracket mounting slots
3. **Slide cage into position** against the bracket
4. **Ensure flush contact** across all mounting points

!!! warning "Proper Orientation"
    Cages must be installed with drive connectors facing the PCB. Incorrect orientation will prevent proper drive connection.

### Step 3: Secure with Thumb Screws

![Thumb Screw Installation](../../assets/thumb-screw-install.png)

1. **Insert thumb screws** through cage tabs into bracket
2. **Hand-tighten** screws in diagonal pattern
3. **Ensure even pressure** across all mounting points
4. **Final tightening** - finger-tight plus quarter turn

### Step 4: Verify Installation

1. **Check cage stability** - no movement when pressed
2. **Verify drive bay alignment** with PCB connectors
3. **Test thumb screw security** with gentle testing
4. **Ensure airflow clearance** around cage perimeter

## Drive Carrier Installation

### Hot-Swap Carrier Setup

Each drive requires a hot-swap carrier for proper installation:

#### 2.5" Drive Carriers
1. **Mount drive** to carrier using provided screws
2. **Ensure connector alignment** with carrier slot
3. **Check carrier latch** operation
4. **Verify LED connections** if applicable

#### 3.5" Drive Carriers  
1. **Install drive rails** on drive sides
2. **Mount drive** in carrier with proper orientation
3. **Connect power and data** cables if pre-routed
4. **Test carrier insertion** mechanism

### Drive Installation Process

![Drive Installation](../../assets/drive-installation.png)

1. **Prepare drive** in appropriate carrier
2. **Align carrier** with cage bay
3. **Slide carrier** into bay until resistance felt
4. **Press firmly** until carrier locks
5. **Verify secure installation** with gentle pull test

## Multiple Cage Configurations

### Planning Multi-Cage Systems

When installing multiple cages:

1. **Start with rear-most** positions first
2. **Work toward front** of chassis
3. **Consider airflow patterns** in layout planning
4. **Plan for cable routing** between cages

### Load Distribution

Balance system load across cages:

| Position | Recommended Use | Cooling Priority |
|----------|----------------|------------------|
| **Rear** | Lower-power drives | Standard airflow |
| **Middle** | Mixed workloads | Enhanced cooling |
| **Front** | High-performance drives | Maximum airflow |

## Troubleshooting

### Installation Issues

| Problem | Cause | Solution |
|---------|-------|---------|
| **Cage won't align** | Wrong bracket or orientation | Verify cage type and direction |
| **Thumb screws won't engage** | Misalignment or debris | Clean threads and realign |
| **Drives don't seat properly** | Cage misalignment | Remove cage and reinstall |
| **Airflow restrictions** | Poor cage positioning | Adjust spacing and orientation |

### Drive Recognition Issues

| Problem | Cause | Solution |
|---------|-------|---------|
| **Drive not detected** | Carrier not fully seated | Remove and reinstall carrier |
| **Intermittent connection** | Dirty or damaged connector | Clean or replace carrier |
| **Multiple drive failures** | PCB connection issue | Check PCB power and data cables |

## Maintenance Procedures

### Regular Maintenance

- **Monthly**: Visual inspection of cage mounting
- **Quarterly**: Check thumb screw tightness  
- **Semi-annually**: Clean drive bays and carriers
- **Annually**: Full system inspection and reseating

### Carrier Maintenance

1. **Clean carrier contacts** with isopropyl alcohol
2. **Lubricate latch mechanisms** lightly if needed
3. **Check carrier alignment** in bay
4. **Replace worn carriers** proactively

### Cage Replacement

When replacing cages:

1. **Document current configuration** with photos
2. **Remove drives in carriers** safely
3. **Uninstall old cage** carefully
4. **Install new cage** following procedures above
5. **Reinstall drives** and verify operation

## Safety Considerations

### Personal Safety

- **Power down completely** before cage work
- **Support cage weight** during installation
- **Use proper lifting technique** for heavy configurations
- **Wear safety glasses** when working overhead

### Equipment Protection

!!! danger "Static Discharge Protection"
    Use anti-static wrist strap when handling drives and carriers.

- **Handle drives carefully** - avoid drops or impacts
- **Keep connectors clean** and protected
- **Avoid forcing connections** - they should slide easily
- **Store removed components** safely

## Performance Optimization

### Cooling Considerations

- **Plan airflow paths** around cage layouts
- **Consider fan placement** for cage cooling
- **Monitor drive temperatures** after installation
- **Adjust configuration** if thermal issues arise

### Access Planning

Design cage layout for:
- **Easy drive replacement** without tools
- **Visual status monitoring** of all drives
- **Cable management** accessibility
- **Future expansion** capability
