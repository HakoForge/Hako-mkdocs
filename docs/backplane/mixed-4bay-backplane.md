# Mixed 4-Bay Backplane

The Mixed 4-Bay Backplane offers the ultimate flexibility by supporting both 2.5" and 3.5" drives in a single unit, perfect for configurations requiring both high-performance SSDs and high-capacity HDDs.

![Mixed 4-Bay Backplane Overview](../../assets/mixed-4-bay-backplane.png)

## Overview

This innovative backplane combines the best of both worlds - the speed of 2.5" SSDs with the capacity of 3.5" HDDs in a single, manageable unit. Ideal for tiered storage configurations and mixed workloads.

### Key Features

- **Dual drive format support** in one backplane
- **2 x 2.5" SSD/HDD bays** for high-performance storage
- **2 x 3.5" HDD bays** for high-capacity storage  
- **Single SAS output** for simplified cabling
- **Optimized power distribution** for mixed drive types
- **Individual drive status LEDs** for all bays
- **Hot-swap capability** across all bays

## Technical Specifications

| Parameter | Specification |
|-----------|---------------|
| **2.5" Drive Connectors** | 2 x SATA/SAS 2.5" |
| **3.5" Drive Connectors** | 2 x SATA/SAS 3.5" |
| **SAS Output** | 1 x SFF-8087 (Mini-SAS) |
| **Input Voltage** | 12V DC |
| **Output Voltages** | 12V + 5V (5A max combined) |
| **Max Power Consumption** | 40 Watts |
| **Drive Support** | SATA III, SAS 6Gb/s, SAS 12Gb/s |
| **Hot-Swap** | Yes (all bays) |
| **Form Factor** | Custom HakoCore PCB |

## Drive Bay Layout

### Physical Configuration

```
[2.5" SAS1_0] [2.5" SAS1_1]
[3.5" SAS1_2] [3.5" SAS1_3]
```

**Bay Assignment:**
- **Bays 0-1**: 2.5" drives (top row)
- **Bays 2-3**: 3.5" drives (bottom row)
- **All drives**: Connected to single SAS output
- **Sequential addressing**: 0, 1, 2, 3

### Drive Status Indicators

Each bay features independent status LEDs:

| LED Color | Status | Meaning |
|-----------|--------|---------|
| **Green Solid** | Power OK | Drive receiving proper power |
| **Blue Flashing** | Activity | Drive I/O operations active |
| **Red Solid** | Fault | Drive error detected |
| **Orange** | Locate | Drive identification active |
| **Off** | Empty/No Power | Bay empty or power issue |

## Power Management

### Power Budget Distribution

| Drive Bay | Typical Power | Maximum Power |
|-----------|---------------|---------------|
| **2.5" Bay 0** | 5-8W | 15W |
| **2.5" Bay 1** | 5-8W | 15W |
| **3.5" Bay 2** | 15-20W | 25W |
| **3.5" Bay 3** | 15-20W | 25W |
| **PCB Overhead** | 3-5W | 5W |
| **Total** | 43-61W | **80W max** |

!!! warning "Power Planning"
    Total consumption must not exceed **40W** as per specification. High-performance drives may require careful power management.

### Voltage Distribution

**12V Rail:**
- Primary power for 3.5" drive motors
- Auxiliary power for 2.5" drives
- Total budget: 3A maximum

**5V Rail:**
- Primary power for 2.5" drive logic
- Logic power for 3.5" drives  
- Total budget: 5A maximum

## Back Panel Connections

![Mixed Backplane Rear Panel](../../assets/mixed-backplane-rear.png)

### Connection Points

1. **SAS OUT A** (Orange connector)
   - Single SFF-8087 output
   - All 4 drives accessible through this port
   - Supports up to 12Gb/s aggregate

2. **4-Pin 12V IN** (Green connector)
   - Power input from HakoCore harness
   - Supplies power for entire backplane
   - Keyed connector prevents incorrect insertion

### Control Interface

- **Management pins** for enclosure services
- **Temperature monitoring** capability
- **Fan control output** (if connected)
- **Status reporting** to management systems

## Installation Guide

### Pre-Installation Planning

Consider your storage strategy:

**High-Performance Tier (2.5" bays):**
- Operating system drives
- Database files
- Application storage
- Cache drives

**High-Capacity Tier (3.5" bays):**
- Data storage
- Backup destinations
- Media files
- Archive storage

### Physical Installation

1. **Mount PCB** to chassis standoffs
2. **Connect power harness** from powerboard
3. **Connect SAS cable** to HBA or expander
4. **Install drive cages** for both formats
5. **Verify all connections** before drive installation

### Drive Population Strategy

**Recommended order:**
1. Install 2.5" drives first (easier access)
2. Test 2.5" drive detection
3. Install 3.5" drives
4. Verify all drives detected
5. Configure storage pools or arrays

## Performance Considerations

### Bandwidth Allocation

**Shared bandwidth considerations:**
- All drives share single 12Gb/s SAS connection
- 2.5" SSDs may require bandwidth prioritization
- 3.5" HDDs typically use less bandwidth
- Plan workloads to avoid bottlenecks

### Optimal Configurations

**Boot + Data configuration:**
- 2.5" SSDs: Operating system and applications
- 3.5" HDDs: User data and storage pools
- Results in balanced performance and capacity

**Tiered Storage:**
- 2.5" SSDs: Hot data tier
- 3.5" HDDs: Cold data tier
- Automatic tiering software can optimize placement

## Use Cases

### Home Lab Environments

**Perfect for:**
- Proxmox VE with local storage
- TrueNAS with SSD cache + HDD pools
- Development environments
- Media server with SSD metadata

### Small Business Applications

**Ideal for:**
- File servers with SSD acceleration
- Database servers with tiered storage
- Backup appliances with fast indexing
- Virtualization hosts with mixed storage

### Specialized Configurations

**Advanced setups:**
- ZFS with SSD SLOG and HDD data
- Ceph clusters with mixed OSDs
- Surveillance systems with SSD buffer
- Content delivery with SSD cache

## Compatibility Matrix

### Drive Type Support

| Bay Type | Supported Drives | Recommended Use |
|----------|-----------------|-----------------|
| **2.5" Bays** | SATA/SAS SSDs, 2.5" HDDs | OS, apps, cache |
| **3.5" Bays** | SATA/SAS HDDs | Data, storage pools |

### Software Compatibility

**Tested with:**
- ZFS (OpenZFS, TrueNAS)
- Linux software RAID (mdadm)
- Windows Storage Spaces
- VMware vSAN
- Proxmox storage

## Troubleshooting

### Mixed Drive Issues

| Problem | Cause | Solution |
|---------|-------|----------|
| **Only 2.5" drives detected** | 3.5" drive power issue | Check 12V power supply |
| **Only 3.5" drives detected** | 2.5" connection issue | Verify SAS cable and connectors |
| **Intermittent detection** | Loose connections | Reseat all connectors |
| **Poor performance** | Bandwidth contention | Review workload distribution |

### Power-Related Problems

**Common power issues:**
1. **Insufficient 12V** - 3.5" drives fail to spin up
2. **5V instability** - 2.5" drives drop offline
3. **Overcurrent protection** - System shuts down under load
4. **Thermal issues** - Drives throttle in warm conditions

### Resolution Steps

1. **Monitor power consumption** during operation
2. **Check drive temperatures** regularly
3. **Verify adequate cooling** for all drive types
4. **Balance workloads** across drive types

## Maintenance

### Regular Monitoring

**Weekly checks:**
- Drive temperatures via SMART data
- Error rates in system logs
- Performance metrics
- Power consumption levels

**Monthly maintenance:**
- Clean dust from PCB area
- Verify mounting security
- Check cable connections
- Update drive firmware

### Lifecycle Management

**Drive replacement planning:**
- Monitor SMART attributes for early warnings
- Plan replacement during maintenance windows
- Keep spare drives for both formats
- Document drive history and performance

## Advanced Configuration

### RAID Considerations

**Recommended RAID configurations:**

**RAID 1 (Mirror):**
- 2 x 2.5" SSDs for OS reliability
- 2 x 3.5" HDDs for data redundancy

**RAID 0 (Stripe):**
- 2 x 2.5" SSDs for maximum performance
- Use with separate backup strategy

**JBOD (Individual drives):**
- Mix of individual SSDs and HDDs
- Maximum flexibility for different workloads

### ZFS Configuration Examples

**Basic ZFS setup:**
```bash
# Create SSD mirror for OS
zpool create rpool mirror /dev/sda /dev/sdb

# Create HDD mirror for data
zpool create tank mirror /dev/sdc /dev/sdd

# Add SSD cache to HDD pool
zpool add tank cache /dev/sde
```

**Advanced tiered storage:**
```bash
# Create pool with SSD cache and HDD data
zpool create tank mirror /dev/sdc /dev/sdd
zpool add tank cache /dev/sda
zpool add tank log /dev/sdb
```

## Future Expansion

### Scaling Considerations

**Horizontal scaling:**
- Add more Mixed 4-Bay backplanes
- Use SAS expanders for additional connectivity
- Plan for increased power requirements

**Vertical scaling:**
- Upgrade to higher-capacity drives
- Replace HDDs with SSDs for all-flash
- Add NVMe drives via separate controllers

---

This completes the core documentation for the Mixed 4-Bay Backplane. The flexible design makes it an excellent choice for users who need both high performance and high capacity in a single, manageable unit.