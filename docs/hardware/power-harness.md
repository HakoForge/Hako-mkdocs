# Cage Installation

Drive cages provide secure, hot-swappable mounting for storage devices while maintaining proper connectivity to the backplane PCBs. The HakoCore's modular cage system allows for flexible storage configurations.

![Cage Installation Overview](../../assets/cage-installation-overview.png)

## Overview

The HakoCore chassis supports multiple cage types for different drive formats. Each cage mounts to dedicated brackets and provides both mechanical support and electrical connectivity for drives.

### Cage Types Available

- **2.5" SSD Cages**: For solid-state drives and 2.5" hard drives
- **3.5" HDD Cages**: For traditional 3.5" hard drives
- **Mixed Format Cages**: Supporting both 2.5" and 3.5" drives

## Pre-Installation Requirements

### Tools Needed

- ✅ **No tools required** - thumb screws for all mounting
- ✅ **Clean workspace** with adequate lighting
- ✅ **Anti-static precautions** when handling drives
- ✅ **Drive labels** for organization (optional)

### Component Verification

Before installation, ensure you have:

1. **Correct cage type** for your drive format
2. **Compatible PCB** already installed
3. **Power and data connections** routed and ready
4. **Drive carriers** (if using hot-swap drives)

!!! info "Cage Compatibility"
    Each cage type is designed for specific PCB backplanes. Verify compatibility before installation.

## Installation Procedure

### Step 1: Position the Cage

![Cage Positioning](../../assets/cage-positioning.png)

1. **Identify mounting location** on the cage bracket
2. **Orient the cage correctly** - connectors face toward PCB
3. **Align mounting tabs** with bracket slots
4. **Slide cage into position** until tabs engage

!!! warning "Proper Orientation"
    Ensure the cage connectors face the installed PCB backplane. Incorrect orientation will prevent proper electrical contact.

### Step 2: Secure with Thumb Screws

![Thumb Screw Installation](../../assets/thumb-screw-mounting.png)

1. **Insert thumb screws** through cage mounting tabs
2. **Thread into cage bracket** mounting points
3. **Tighten finger-tight** - excessive force not required
4. **Verify secure mounting** with gentle pull test

### Mounting Points

Each cage has multiple mounting points for security:

| Cage Size | Mounting Points | Thumb Screws |
|-----------|----------------|--------------|
| **2.5" Cage** | 4 points | 4 screws |
| **3.5" Cage** | 6 points | 6 screws |
| **Mixed Cage** | 6 points | 6 screws |

## Drive Installation

### Hot-Swap Drive Carriers

For systems with hot-swap capability:

1. **Install drives in carriers** before cage mounting
2. **Ensure carrier compatibility** with cage type
3. **Test drive insertion** before final assembly
4. **Label drives and carriers** for identification

### Direct Drive Mounting

For non-hot-swap configurations:

1. **Install cages first**, then drives
2. **Use proper drive screws** (provided with drives)
3. **Support drive weight** during installation
4. **Connect power and data** after mechanical mounting

## Cable Connections

### PCB Interface

After cage installation:

1. **Verify PCB alignment** with cage connectors
2. **Check connector engagement** - should be automatic
3. **Test electrical continuity** if possible
4. **Secure any loose connections**

### Power Distribution

- **Power flows** from harness → PCB → cage → drives
- **Each bay** receives individual power regulation
- **LED indicators** show power and activity status
- **Hot-swap protection** prevents damage during insertion

## Multi-Cage Configurations

### Planning Multiple Cages

When installing multiple cages:

1. **Install rear cages first** for easier access
2. **Route cables** before mounting front cages
3. **Plan airflow paths** between cages
4. **Consider maintenance access** for future service

### Cage Spacing

Maintain proper spacing for:

- **Airflow circulation** between drives
- **Cable routing** behind cages
- **Heat dissipation** from high-performance drives
- **Future expansion** capabilities

## Performance Considerations

### Thermal Management

Proper cage installation affects cooling:

- **Ensure air gaps** between cages and chassis walls
- **Align with fan placement** for optimal airflow
- **Consider drive heat output** when planning layout
- **Monitor drive temperatures** after installation

### Vibration Control

Minimize drive vibration:

- **Secure all mounting screws** properly
- **Use vibration dampers** if available
- **Avoid over-tightening** mounting hardware
- **Isolate high-vibration drives** when possible

## Troubleshooting

### Common Installation Issues

| Problem | Cause | Solution |
|---------|-------|----------|
| **Cage won't align** | Wrong mounting position | Check bracket compatibility |
| **Thumb screws won't thread** | Cross-threading | Back out and restart carefully |
| **No electrical contact** | PCB misalignment | Reseat cage and check alignment |
| **Drive won't insert** | Carrier incompatibility | Verify carrier type matches cage |

### Electrical Issues

If drives aren't detected:

1. **Check PCB connections** to powerboard
2. **Verify SAS/SATA cables** from HBA
3. **Test with known-good drive** in different bay
4. **Inspect cage-to-PCB interface** for damage

## Maintenance and Service

### Regular Maintenance

**Monthly checks:**
- Verify thumb screws remain tight
- Check for signs of vibration or loosening
- Inspect electrical connections
- Clean dust from cage ventilation areas

### Drive Replacement

For hot-swap systems:
1. **Power down drive** via software if required
2. **Remove drive carrier** by releasing lever/button
3. **Install new drive** in carrier
4. **Insert into cage** until fully seated
5. **Verify detection** by system

### Cage Removal

To remove cages for maintenance:

1. **Power down system** completely
2. **Remove all drives** from cage
3. **Disconnect any manual connections** (rare)
4. **Remove thumb screws** in reverse order
5. **Slide cage out** carefully

## Upgrade Considerations

### Adding More Cages

When expanding storage:

- **Verify PCB capacity** for additional drives
- **Check power budget** for new drives
- **Plan cable routing** for new connections
- **Consider cooling requirements** for added heat

### Changing Cage Types

To switch between cage formats:

1. **Remove existing cages** and drives
2. **Replace PCB backplane** if necessary
3. **Install new cages** following standard procedure
4. **Migrate data** from old to new drives
5. **Update system configuration** as needed

## Compatibility Matrix

### Cage-to-PCB Compatibility

| Cage Type | Compatible PCBs | Drive Support |
|-----------|----------------|---------------|
| **12-bay 2.5"** | 12-SSD backplane | 12 x 2.5" drives |
| **4-bay 3.5"** | 4-HDD backplane | 4 x 3.5" drives |
| **Mixed 4-bay** | Mixed backplane | 2 x 2.5" + 2 x 3.5" |

### Drive Format Support

Each cage type supports specific drive formats:

- **2.5" cages**: SATA/SAS SSDs, 2.5" HDDs
- **3.5" cages**: SATA/SAS HDDs (3.5" form factor)
- **Mixed cages**: Both 2.5" and 3.5" formats

---

Next: Review the [12-SSD Backplane](../../backplanes/12-ssd-backplane/) specifications and installation details.