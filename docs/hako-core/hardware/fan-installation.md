# Fan Installation

## Overview
!!! warning "Fan Thickness Compatibility"
    Only ***Fan Wall 1*** and ***Fan wall 3*** are capable of **35mm** thickness fans. ***Fan Wall 2*** is only able to fit **25mm** thickness fans.
!!! info "Fan Wall Compatibility"
    All fan walls use **120mm** fans.
### Hako-Core
- Hako-Core supports up to **3 fan walls totaling 9 fans total** (120mm)
- 1 Exhaust fan (80mm or 92mm)
- Auxiliary fans for PCIe cooling
### Hako-Core Mini
- Hako-Core Mini supports up to **2 fan walls totaling 6 fans total** (120mm)
- 1 Exhaust fan (80mm or 92mm)
- Auxiliary fans for PCIe cooling

Auxiliary fans can be mounted using one of our fan brackets:

- [Angled Fan Bracket](https://hakoforge.com/collections/accessories/products/angled-fan-bracket)
- [Horizontal 120mm Fan Bracket](https://hakoforge.com/collections/accessories/products/horrizontal-120mm-fan-bracket)

For the fans themselves, we recommend the [Noctua NF-F12 industrialPPC-3000 PWM](https://hakoforge.com/collections/accessories/products/noctua-nf-f12-industrialppc-3000-pwm).

## Installation Process
!!! danger "Safety First"
    It is always recommended to power down the system when working inside the case.

### Fan Wall 1
![Front Fan Wall](../imgs/FrontFanWallMount.jpg)
Remove the magnetic faceplate and install the fans using the mounting holes.
![Air Blocks](../imgs/AirBlocks.jpg)
!!! info "Air Block Clearance"
    The 3D printed air blocks may be too tight for fan installation. Unscrew these and reinstall them **along** with the fan at the same time to get them to fit together. 
#### Fan Headers
![Front Fan Wall Headers](../imgs/FrontFanWallWires.jpg)
The fan headers for ***Fan Wall 1*** are located above the the left fan and connect to the powerboard. Plug the fans in here and tuck the wires in between the fans. 

### Fan Wall 2/3
![Middle Fan Wall](../imgs/MiddleFanWall.jpg)
!!! tip "Middle Fan Headers"
    ***Fan Wall 2*** uses fan extension cable to connect to the powerboard. Plugging the fans in first and tucking the wires under the fan makes the install easier. 
Install the fans using the mounting holes. Fan wall 2 and 3 use similar mounting points. The fourth screw on the edge fans are not used.
#### Fan Extension
![Middle Wall Headers](../imgs/MiddleFanWallWires.jpg)
This cable is used for ***Fan Wall 2***.
#### Exposed Powerboard Headers
![Powerboard Fan Headers](../imgs/ExposedFanHeaders.jpg)
***Fan Wall 3*** uses the exposed fan headers on the powerboard.
!!! info "Hako-Core Mini Fan Walls"
    The Hako-Core Mini does not utilize a third fan wall so the exposed headers can be used for any other fans you may have.

### Exhaust Fan
![Exhaust Fan](../imgs/ExhaustFan.jpg)
Use the 2 mount points to install a 80 mm or 92 mm fan to help facilitate airflow. 

### Auxiliary Fans

Auxiliary fans mount to one of two brackets, sold separately.

#### Angled Fan Bracket
![Angled Bracket](../imgs/AngledFanBracket.jpg)
Use 2 of the mounting holes to secure a fan to the angled bracket.
!!! info "Direction of Air Flow"
    Take note of the fan mount direction to ensure proper air flow. Depending on the bracket orientation installed in the case, the fan may be flipped. 

##### Angled Overhang Mount
![Overhang Angled](../imgs/OverhangAngledMount.jpg)
![Angled Positions](../imgs/AngledOverhangPositions.jpg)
The mounting location can be moved left and right as well as up and down. 
!!! info "Lower Mount Point"
    When installing in the lowered position, one of the mount points will not be used. 

##### Angled Underhang Mount
![Underhang Angled](../imgs/UnderhangAngledMount.jpg)
![Angled Positions](../imgs/AngledUnderhangPositions.jpg)
The angled fan bracket can also be under mounted. This can be useful depending on wire clearances with different HBA cards.

##### Mount Extension
![Angled Extension](../imgs/AngledExtension.jpg)
The included mount extensions can be used to extend the bracket out for extra coverage on the furthest PCIe card. Use the extended screws for this configuration.

#### Horizontal Fan Bracket
![Horizontal Bracket](../imgs/HorizontalFanBracket.jpg)
Use 4 of the mounting holes to secure a fan to the horizontal bracket.

##### Horizontal Overhang Mount
![Overhang Horizontal](../imgs/OverhangHorizontalMount.jpg)
![Horizontal Positions](../imgs/HorizontalOverhangPositions.jpg)
The mounting location can be moved left and right as well as up and down. 
!!! info "Left or Right Mount Points"
    When installing in the shifted left or right position, one of the mount points will not be used.

## Powering Fans
<div align="center" markdown="1">

![Powerboard Fan Diagram](../imgs/FanPowerDiagram.jpg){: style="width: 400px; height: auto;"}

</div>
The fans are powered by the 8-pin PCIe connections on the powerboard. 
Each 8-Pin PCIe connector powers a specific set of hardware. If there is a set of hardware that is not being used in your configuration, connection is optional. 
### 8-Pin PCIe IN 1
- Fan wall 1

### 8-Pin PCIe IN 3
- Fan wall 2

### 8-Pin PCIe IN 4
- Fan wall 3

## Controlling Fans
Visit the [Powerboard Connections](../connections.md) page for more information on how the fans are controlled. 
