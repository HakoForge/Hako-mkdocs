# Power Harness

The HakoCore power harness system distributes clean, regulated power from the central powerboard to individual PCBs throughout the chassis. This modular approach ensures efficient power delivery and simplified cable management.

![Power Harness System](../../assets/power-harness-system.png)

## System Overview

The power harness acts as the distribution network between the central powerboard and the individual drive backplanes, providing both power delivery and management capabilities.

### Key Features

- **Modular design** with two harness lengths
- **16-pin to 4-pin distribution** architecture  
- **Color-coded connectors** for easy identification
- **Hot-swappable connections** for maintenance
- **Overcurrent protection** at the powerboard level

## Harness Specifications

### Technical Details

| Parameter | Specification |
|-----------|---------------|
| **Input Connector** | 16-pin keyed connector |
| **Output Connectors** | 4 x 4-pin power connectors |
| **Wire Gauge** | 18 AWG for 12V, 16 AWG for high current |
| **Current Rating** | 8A per 4-pin output |
| **Voltage** | 12V DC distribution |
| **Length Options** | Short (18") and Long (36") variants |

### Harness Variants

#### Short Harness (18" / 457mm)
- **Use case**: PCBs in first two rows from powerboard
- **Routing**: Direct connection with minimal slack
- **Quantity needed**: Typically 2-4 per system

#### Long Harness (36" / 914mm)  
- **Use case**: PCBs in furthest rows from powerboard
- **Routing**: Requires cable management along chassis edges
- **Quantity needed**: Typically 1-2 per system

## Connection Architecture

### Power Distribution Flow

```
PSU → Powerboard → 16-pin Harness → 4x 4-pin PCB Connectors
```

### Connector Pinout

#### 16-Pin Input Connector
| Pin | Function | Wire Color |
|-----|----------|------------|
| 1-4 | +12V Rail 1 | Red |
| 5-8 | Ground Rail 1 | Black |
| 9-12 | +12V Rail 2 | Red |
| 13-16 | Ground Rail 2 | Black |

#### 4-Pin Output Connectors
| Pin | Function | Wire Color |
|-----|----------|------------|
| 1 | +12V | Red |
| 2 | Ground | Black |
| 3 | +12V | Red |
| 4 | Ground | Black |

## Installation Guidelines

### Planning Your Installation

Before installation, determine:

1. **PCB locations** and distances from powerboard
2. **Required harness lengths** for each connection
3. **Cable routing paths** that avoid interference
4. **Power requirements** for each PCB

### Step-by-Step Installation

#### Step 1: Route Harnesses

![Harness Routing](../../assets/harness-routing.png)

1. **Plan routing path** from powerboard to each PCB
2. **Use appropriate length** harness for each connection
3. **Route along chassis edges** for longer runs
4. **Avoid crossing** over PCB mounting areas

#### Step 2: Connect to Powerboard

1. **Identify correct output** on powerboard (color-coded)
2. **Align 16-pin connector** with powerboard output
3. **Press firmly** until connector fully seats
4. **Verify secure connection** with gentle pull test

#### Step 3: Connect to PCBs

1. **Install PCBs** in their designated locations
2. **Connect 4-pin outputs** to appropriate PCB inputs
3. **Ensure keyed alignment** (connectors only fit one way)
4. **Check all connections** are fully seated

#### Step 4: Secure Cables

1. **Use zip ties** at designated attachment points
2. **Avoid overtightening** - allow for thermal expansion
3. **Route excess cable** along chassis edges
4. **Check for clearance** with moving parts

## Power Distribution Strategy

### Load Balancing

Distribute power loads evenly across harnesses:

| Harness | Recommended Load | PCB Types |
|---------|------------------|-----------|
| **Harness 1** | Standard drives | 12-SSD or Mixed backplanes |
| **Harness 2** | High-power drives | 4-HDD or high-performance SSDs |
| **Harness 3** | Balanced load | Any backplane type |
| **Harness 4** | Expansion | Future PCBs or redundancy |

### Power Budget Calculation

Calculate total power requirements:

```
Total Power = (PCB Count × PCB Power) + (Drive Count × Drive Power)

Example:
- 3 PCBs × 10W = 30W
- 12 SSDs × 8W = 96W  
- Total: 126W (within single powerboard capability)
```

## Cable Management Best Practices

### Routing Guidelines

!!! tip "Cable Management Tips"
    - Route longer cables along outer chassis edges
    - Group harnesses by destination area
    - Maintain service loops near connectors
    - Use color coding for easy identification

### Securing Methods

1. **Zip ties at PCB standoffs** for primary securing
2. **Adhesive cable mounts** for intermediate support
3. **Chassis-integrated routing** channels where available
4. **Service loops** of 2-3 inches near connectors

### Maintenance Access

Design routing to allow:
- **PCB removal** without cable disconnection
- **Harness replacement** without system disassembly
- **Visual inspection** of all connections
- **Future expansion** capability

## Troubleshooting

### Common Issues

| Symptom | Possible Cause | Solution |
|---------|---------------|----------|
| **No power to PCB** | Loose harness connection | Reseat both ends of harness |
| **Intermittent power** | Damaged wire in harness | Replace harness assembly |
| **Overheating** | Overloaded harness | Redistribute load across harnesses |
| **Connector won't seat** | Wrong harness type | Verify harness length/type |

### Diagnostic Steps

1. **Visual inspection** of all connections
2. **Voltage testing** at PCB input connectors
3. **Continuity check** of harness wiring
4. **Load testing** under operational conditions

### Safety Considerations

!!! danger "Electrical Safety"
    - Always power down before connecting/disconnecting harnesses
    - Verify proper connector orientation before seating
    - Never force connections - they should fit easily
    - Use proper ESD protection when handling

## Maintenance

### Regular Inspection

- **Monthly**: Visual check of connection security
- **Quarterly**: Thermal inspection for hot spots
- **Annually**: Connector cleaning and reseating
- **As needed**: Harness replacement if damaged

### Replacement Procedures

1. **Document existing routing** before removal
2. **Power down and disconnect** systems
3. **Remove old harness** carefully
4. **Install new harness** following same routing
5. **Test system** before full assembly
