# PCB Installation

PCB (Printed Circuit Board) installation is a critical step in setting up your HakoCore chassis. This guide covers the proper mounting procedures for all backplane types and ensures secure, reliable connections.

![PCB Installation Overview](../../assets/pcb-installation-overview.png)

## Overview

Each PCB in the HakoCore system provides power regulation and data connectivity for a specific set of drives. Proper installation ensures optimal performance and system reliability.

### PCB Types

The HakoCore supports several PCB configurations:

- **12-SSD Backplane**: 2.5" drive support
- **4-HDD Backplane**: 3.5" drive support  
- **Mixed 4-Bay Backplane**: Combined 2.5" and 3.5" support

## Pre-Installation Checklist

### Required Tools

- ✅ **Phillips head screwdriver** (magnetic tip recommended)
- ✅ **Anti-static wrist strap** (optional but recommended)
- ✅ **Clean lint-free cloth** for component handling
- ✅ **Proper lighting** for clear visibility

### Component Verification

Before installation, verify you have:

1. **PCB backplane** (correct type for your configuration)
2. **Mounting screws** (included with chassis)
3. **Power harness** (appropriate length)
4. **SAS/SATA cables** (if not already routed)

!!! warning "Handle with Care"
    PCBs are sensitive to static electricity. Handle only by the edges and avoid touching connectors.

## Installation Procedure

### Step 1: Identify Mounting Location

![PCB Mounting Points](../../assets/pcb-mounting-points.png)

Each PCB has designated mounting locations within the chassis:

1. **Locate standoffs** in chassis for your PCB position
2. **Verify standoff alignment** with PCB mounting holes
3. **Check clearance** for cables and adjacent components

### Step 2: Position the PCB

1. **Align PCB** over the mounting standoffs
2. **Lower gently** ensuring no cable interference
3. **Verify all mounting holes** align with standoffs
4. **Check connector accessibility** before securing

!!! tip "Alignment Check"
    Before inserting any screws, ensure the PCB sits flush and level on all standoffs.

### Step 3: Secure with Screws

![PCB Screw Installation](../../assets/pcb-screw-installation.png)

1. **Start with opposite corners**
   - Insert screw in top-left corner
   - Hand-tighten top-right corner
   - Tighten bottom-right corner  
   - Complete with bottom-left corner

2. **Tightening sequence**
   - Snug all screws hand-tight first
   - Tighten gradually in cross pattern
   - Avoid over-tightening (just past snug)

!!! warning "Torque Specification"
    Do not over-tighten screws. PCBs can crack under excessive pressure. Tighten just until snug with no movement.

## Connection Procedures

### Power Connections

After PCB is mechanically secured:

1. **Locate appropriate power harness**
   - Short harness for nearby PCBs
   - Long harness for distant PCBs

2. **Connect power harness**
   - Align connector orientation (keyed design)
   - Press firmly until fully seated
   - Verify secure connection with gentle pull

### Data Connections

1. **SAS cable connections**
   - Connect from HBA to PCB SAS outputs
   - Use proper cable routing paths
   - Secure cables to prevent stress on connectors

2. **Cable management**
   - Route according to [wire routing guidelines](../../hardware/wire-routing/)
   - Use zip-tie mounting points on PCB standoffs
   - Ensure no interference with drive installation

## Multi-PCB Installations

### Planning Multiple PCBs

When installing multiple PCBs:

1. **Start with rear-most PCBs** first
2. **Work toward front** of chassis
3. **Plan cable routing** before securing any PCBs
4. **Test fit all components** before final assembly

### Power Distribution

Each PCB requires dedicated power from the harness system:

| PCB Position | Harness Connection | Power Rail |
|--------------|-------------------|------------|
| **Rear-most** | Long harness | As assigned |
| **Middle rows** | Short harness | As assigned |
| **Front rows** | Short harness | As assigned |

## Verification Steps

### Visual Inspection

After installation, verify:

- ✅ **PCB sits level** and secure
- ✅ **All screws properly tightened**
- ✅ **No visible cable stress** or interference
- ✅ **Connectors fully seated**
- ✅ **Clear path for drive installation**

### Electrical Testing

Before installing drives:

1. **Power on system** (without drives)
2. **Check PCB power LEDs** if present
3. **Verify HBA detection** of backplane
4. **Test with single drive** before full installation

## Common Issues and Solutions

### Installation Problems

| Problem | Cause | Solution |
|---------|-------|----------|
| **PCB won't sit flat** | Standoff misalignment | Verify standoff positions |
| **Screw won't thread** | Cross-threading | Back out and restart carefully |
| **Cable interference** | Poor routing | Re-route cables before mounting |
| **No power to PCB** | Loose connection | Reseat power harness connector |

### Troubleshooting Tips

1. **Double-check orientation** - PCBs have specific mounting direction
2. **Verify standoff count** - ensure all are present and correct
3. **Check for shorts** - ensure no metal debris on PCB
4. **Test incrementally** - power up after each PCB installation

## Maintenance Considerations

### Future Access

Design your installation for easy maintenance:

- **Cable service loops** - allow for PCB removal
- **Documentation** - label all connections
- **Tool access** - ensure screw accessibility
- **Upgrade planning** - consider future expansions

### Cleaning and Care

- **Monthly**: Visual inspection for secure mounting
- **Quarterly**: Check connection tightness
- **Annually**: Clean dust from PCB surfaces
- **As needed**: Reseat connections if issues arise

---

Next: Learn about [Cage Installation](../cage-installation/) to complete your drive bay setup.