# Wire Routing

Proper cable management is essential for optimal airflow, maintenance access, and system reliability. The HakoCore chassis includes multiple routing paths and secure attachment points for clean cable organization.

![Wire Routing Diagram](../../assets/wire-routing-diagram.png)

## Cable Management Philosophy

!!! tip "Best Practices"
    When the HakoCore is purchased with PCB kits, it comes pre-assembled with professional cable management. Use these practices when managing cables yourself.

## Routing Guidelines

### Power Cables (HakoCore Power Harness)

**Route towards the powerboard side of the chassis**

- ✅ Follow the shortest path to powerboard connections
- ✅ Use outer edge routing for excess length
- ✅ Group harnesses by power rail when possible
- ✅ Secure with zip ties at PCB standoff locations

### Data Cables (SAS/SATA)

**Route away from the powerboard side or straight across PCBs**

- ✅ Minimize cable crossing with power harnesses
- ✅ Use straight-across routing for short connections
- ✅ Route longer cables along outer chassis edge
- ✅ Label cables for easy identification during maintenance

### Fan Cables

**Route directly to motherboard or fan controller connections**

- ✅ Use shortest practical path to reduce clutter
- ✅ Avoid routing near hot components
- ✅ Secure to prevent interference with moving parts
- ✅ Leave service loops near connectors

## Routing Strategies

### Outer Edge Routing

For longer cables that need additional length management:

1. **Route along chassis perimeter**
2. **Take up extra slack along the edges**
3. **Reduces cable density in center area**
4. **Minimizes tangling with other cables**

### Zip-Tie Locations

The chassis includes designated zip-tie mounting points:

#### PCB Standoffs
- **Location**: Around each PCB mounting point
- **Purpose**: Secure cables to prevent connector interference
- **Spacing**: Approximately every 4-6 inches along cable runs

#### Chassis Rails
- **Location**: Along internal chassis rails
- **Purpose**: Major cable routing and organization
- **Load capacity**: Suitable for multiple cable bundles

## Cable Types and Routing

### Power Harness Cables (Yellow)

| Cable Type | Routing Path | Securing Points |
|------------|--------------|-----------------|
| **Short Harness** | Direct to nearby PCBs | PCB standoffs only |
| **Long Harness** | Via outer edge | Multiple chassis points |

### SAS Cables (Blue)

| Cable Type | Routing Path | Notes |
|------------|--------------|-------|
| **Backplane to HBA** | Outer edge or straight across | Avoid power cable areas |
| **Daisy chain** | Sequential PCB connections | Minimize loops |

## Assembly Sequence

For optimal cable management during assembly:

### Phase 1: Power Infrastructure
1. Install powerboard
2. Route power harnesses to PCB locations
3. Secure harnesses before PCB installation
4. Test fit all connections

### Phase 2: Data Connections
1. Install PCBs and backplanes
2. Route SAS/SATA cables
3. Make temporary connections to verify routing
4. Secure and finalize cable placement

### Phase 3: Final Organization
1. Install remaining fans and peripherals
2. Complete all connections
3. Secure all cables with zip ties
4. Verify no interference with moving parts

## Troubleshooting Cable Issues

### Common Problems

| Issue | Cause | Solution |
|-------|-------|----------|
| **Connector interference** | Cables too close to PCB connectors | Re-route with more clearance |
| **Poor airflow** | Cables blocking fan intake/exhaust | Relocate cables to edge routing |
| **Difficult maintenance** | No service loops at connections | Add slack near removable components |
| **Cable damage** | Sharp edges or pinch points | Use edge protectors or re-route |

### Maintenance Planning

Design your cable routing with future maintenance in mind:

- **Hot-swap access**: Keep drive bay cables accessible
- **Component replacement**: Plan for PCB and fan removal
- **Expansion capability**: Leave capacity in routing channels
- **Labeling system**: Mark cables for easy identification

## Tools and Materials

### Recommended Supplies

- **Zip ties**: Various lengths (4", 6", 8", 12")
- **Cable labels**: For identification
- **Velcro straps**: For temporary securing during assembly
- **Cable combs**: For parallel cable organization (optional)

### Installation Tools

- **Zip tie gun**: For consistent tension
- **Flush cutters**: For trimming zip tie tails
- **Cable pulling system**: For difficult routing paths
- **Inspection mirror**: For verifying hidden connections