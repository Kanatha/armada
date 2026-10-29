# Armada

A split, wired-or-wireless ergonomic keyboard with a right-hand trackball,
designed in [Cosmos](https://ryanis.cool/cosmos).

## Repository layout

| Path | Contents |
|---|---|
| `config/cosmos-keyboard.ts` | The Cosmos config. Paste it into the Cosmos code editor to regenerate the case. |
| `docs/wiring-diagram.md` | Key matrix, nice!nano pin plan, power, LEDs, trackball sensor. |

## Quieter, less plastic-sounding build

### Heavy fill (epoxy and filler)
- Damps the shell so it stops ringing like a hollow plastic box.
- **Never let metal dust touch the electronics.** Iron, steel and copper dust
  conducts and can short the sockets or the nice!nano. Keep it in a sealed
  chamber away from the wiring, such as the base under the bottom plate.
- Near electronics, use non-conductive filler instead: quartz sand, glass
  microspheres or barite.
- Epoxy is permanent. Fill a separate sealed bottom chamber, or cast a plug
  that screws in and out, so the wiring stays serviceable.
- It adds a lot of weight, which matters for a chair-mounted keyboard.

### Foam instead of cotton
- Cotton helps a little with ping but absorbs moisture and compresses.
  Closed-cell foam (Poron, silicone or EVA) is better.
- Keep it clear of wires and solder joints.

### Soft layer under the key web
Keep the key web rigid. A fully soft TPU web lets MX switches wobble and the
hotswap sockets seat badly. Add a soft layer underneath instead. The underside
holds sockets, diodes, LEDs and wiring, so the layer needs cutouts.

1. **Cut a sheet from the web outline (simplest).** Export the STEP file, open
   it in FreeCAD or Fusion 360, project the `Web` part's underside onto a
   sketch, offset it inward 1-2 mm, cut out the sockets, diodes and wire paths
   (use `Switch Holders` as a guide), and extrude 1-2 mm. Print it in 95A TPU,
   or cut the same shape from silicone or Poron. Glue it on with contact
   adhesive (TPU bonds poorly with cyanoacrylate).
2. **Pads at contact points only.** Put 5-10 mm TPU or silicone pads where the
   web meets the walls and bottom plate, and soft washers under the M3 screw
   heads.
3. **Two-material print.** Split the `Web` into a thin bottom slab and the
   rest, then print PETG on top and TPU below. TPU and PETG bond weakly, so
   test a piece first.

Keep the soft layer under about 2 mm, or the switches shift when pressed.

### Other changes that help
- Print in PETG or ASA with thick walls (4-6 perimeters) and high infill.
- Lube the switches and tape-mod them. Much of the plastic sound comes from
  the switches.
- Make the bottom plate thicker or glue dense rubber or foam inside it.
- Use soft rubber feet.
- Put O-rings or silicone washers under screw heads so the case is not
  rigidly bolted to the plate.
- Thicker PBT keycaps sound deeper than thin ABS ones.

## Exporting parts

The Cosmos STEP export contains separate parts: `Walls`, `Web`,
`Switch Holders`, `Screw Attachments`, `Bottom Plate` and
`Microcontroller Holder`. The plain STL download is the whole case in one
file, so use STEP and re-export individual parts from CAD.
