# Cosmos split keyboard: wiring diagram

Derived from `cosmos-keyboard.ts` (key counts and layout). Pin names use the
nice!nano `Dn` silkscreen labels. **The pin choices are a proposal, not a
verified design.** Items marked VERIFY need a check against the datasheet or
board docs for the exact parts you buy.

## 1. Per-half summary

| | Left | Right |
|---|---|---|
| MCU | nice!nano (or compatible) | nice!nano (or compatible) |
| Switches | 30 | 28 |
| Display | Nice!View 160x68 | Nice!View 160x68 |
| Trackball | none | 34mm ball + Skree sensor |
| Per-key LEDs | 30 | 28 |
| Battery | 1x LiPo 3.7V | 1x LiPo 3.7V |
| USB-C | 1 | 1 |

## 2. Key matrix (both halves): 5 rows x 6 columns, col2row diodes

Rows R0..R4 go top to bottom (Cosmos rows -2..2). Columns C0..C5 go outer
to inner on each half, so the pin numbering is the same on both sides.
`.` marks an empty matrix cell.

### Left half (30 keys)

|    | C0 | C1 | C2 | C3 | C4 | C5 |
|----|----|----|----|----|----|----|
| R0 | esc | & | [ | { | } | ( |
| R1 | tab | ; | , | . | p | y |
| R2 | ctrl | a | o | e | u | i |
| R3 | shift | ' | q | j | k | x |
| R4 | THUMB | THUMB | $ | # | THUMB | THUMB |

Thumb keys (4): `space`, `super`, `nav`, `alt`. Put them in the four free
R4 cells (C0, C1, C4, C5). Which thumb goes in which cell is up to you, as
long as the keymap matches.

### Right half (28 keys)

|    | C0 | C1 | C2 | C3 | C4 | C5 |
|----|----|----|----|----|----|----|
| R0 | ! | ] | + | ) | * | = |
| R1 | / | l | r | c | g | f |
| R2 | - | s | n | t | h | d |
| R3 | shift | z | v | w | m | b |
| R4 | THUMB | THUMB | \ | @ | (empty) | (empty) |

Thumb keys (2): `bksp`, `enter`. Put them in R4 C0 and C1. R4 C4 and C5
stay empty.

### Diode and switch wiring (every key)

```
 COLn pin ----[ switch ]----|>|---- ROWm pin
                            diode: anode at the switch, cathode at the row
```

With the hotswap sockets, one socket pad goes to the column line and the
other goes through the diode to the row line. Use `col2row` in the ZMK
`diode-direction`.

## 3. nice!nano pin plan (same on both halves)

| Function | Pin | Notes |
|---|---|---|
| Rows R0..R4 | D4, D5, D6, D7, D8 | outputs or inputs per diode direction |
| Columns C0..C5 | D9, D14, D18, D19, D20, D21 | |
| Display MOSI | D16 | Nice!View default |
| Display SCK | D15 | Nice!View default |
| Display CS | D10 | Nice!View default |
| Display VCC / GND | 3V3 / GND | VERIFY the module's pinout |
| LED data | D2 | one chain per half, via 330 ohm resistor |
| LED power | VCC (3.3V rail or battery) | VERIFY, see section 6 |
| Spare | D0, D1, D3 | D0/D1 are the UART pins |

## 4. Right half only: trackball sensor

The Skree (ZMK) sensor needs a bus, a chip select and a motion interrupt.
The exact pins and protocol depend on the sensor chip on the board you buy.
VERIFY with its documentation before soldering. Placeholder plan:

| Sensor signal | Pin | Notes |
|---|---|---|
| VCC / GND | 3V3 / GND | |
| SCK | D15 | shared with the display clock, or a spare pin if the sensor needs its own |
| MOSI / SIO | D16 or spare | the display uses D16 as write-only, so check whether sharing works |
| CS | D0 | spare pin, placeholder |
| Motion / IRQ | D1 | spare pin, placeholder |

The bearings are mechanical only and need no wiring.

## 5. Power and USB (both halves)

```
 LiPo +  ---- [ slide switch ] ---- nice!nano B+
 LiPo -  ----------------------------- nice!nano B-
 USB-C VBUS --- nice!nano USB port (or the board's own connector)
 USB-C GND  --- GND
```

- Each half has its own battery and its own USB-C connector.
- Check the battery connector polarity before plugging in. JST cables are
  often wired backwards.

## 6. Per-key LEDs

- One data chain per half: MCU D2 -> 330 ohm resistor -> DIN of LED 1, then
  DOUT of each LED to DIN of the next.
- Power the LEDs from a switchable rail if you can. They draw current even
  when dark, and they will shorten battery life a lot. VERIFY whether the
  3.3V pin can drive them. SK6812 mini-e LEDs are meant for 5V logic and may
  need a level shifter or a 3.3V-tolerant variant.
- If you drop the LEDs, skip this section and free up D2.

## 7. What to send me when you write the firmware

- The final pin table (section 3), including the sensor pins from section 4
- The matrix map and diode direction (section 2)
- The exact boards: which nice!nano or clone, the Nice!View version, and the
  Skree sensor board
- Whether you kept the LEDs, and how you power them
- Which thumb key sits in which R4 cell
