# Troubleshooting: Fans Not Spinning

Work through these checks in order if fans connected to the powerboard won't spin. This page also applies to an HF-L1 with the optional powerboard installed.

!!! danger "Safety First"
    Power down the system before checking or reseating any connections inside the case.

## 1. Check the 8-Pin PCIe Power Inputs

Fans get their power from specific 8-pin PCIe inputs on the powerboard. If the input for a fan wall isn't connected, that fan wall won't spin.

| Input | Powers |
|-------|--------|
| **8-Pin PCIe IN 1** | Fan wall 1 (and the 4-pin fan outputs) |
| **8-Pin PCIe IN 3** | Fan wall 2 |
| **8-Pin PCIe IN 4** | Fan wall 3 |

!!! important "Power Priority"
    **8-Pin PCIe IN 1** powers the 4-pin fan outputs. Connect it first.

See [Powerboard Connections](connections.md#8-pin-pcie-connectors) for the full input map.

## 2. Check the Fan Cable Harness

- Make sure each Fan Cable Harness is fully seated on the powerboard.
- Make sure each fan is fully plugged into the harness.
- Each harness runs 3 fans. Check that every fan wall has its own harness.

## 3. Check the Fan Control Switch

The fan control switch decides what controls the fans. Make sure the rest of your setup matches the position it's in.

=== "MOBO FAN CTL"

    - The fans follow the **PWM_IN** cable, which should be plugged into a fan header on your motherboard.
    - If the fans are stopped, check that motherboard fan header in your BIOS or fan software. A curve set to 0% (or "fan stop") will stop the fans.
    - If you unplug **PWM_IN**, the fans should run at full speed. If they still don't spin, go back to steps 1 and 2.

=== "POWERBOARD FAN CTL"

    - The fans are controlled by the powerboard, which needs the **USB** cable connected to a USB 2.0 header on your motherboard.
    - Check your fan settings in [Hako Foundry](foundry.md).

!!! note "PWM_IN and USB connected"
    Having both the ***PWM_IN*** and ***USB*** cables connected is OK. Flip the switch to change which one controls the fans.

## 4. Test the Fan

Plug the fan into a motherboard fan header, or swap it with a fan you know works. If it still doesn't spin, the fan itself may be faulty.

## Still Not Working?

Contact us at [contact@hakoforge.com](mailto:contact@hakoforge.com) with photos of your powerboard wiring and the position of the fan control switch.
