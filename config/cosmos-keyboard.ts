const options: Options = {
  wallThickness: 3,
  wallShrouding: 0,
  wallXYOffset: 5,
  wallZOffset: 15,
  webThickness: 0,
  webMinThicknessFactor: 0.8,
  verticalClearance: 0.1,
  plateThickness: 2,
  keyBasis: "xda",
  screwIndices: [-1, -1, -1, -1, -1, -1, -1],
  screwCountersink: true,
  screwSize: "M3",
  screwType: "screw insert",
  clearScrews: true,
  rounded: {},
  connectors: [
    { preset: "trrs" },
    { preset: "usb", size: "average" }
  ],
  connectorIndex: -1,
  microcontroller: "nrfmicro-or-nicenano",
  microcontrollerAngle: 0,
  fastenMicrocontroller: true,
  flipConnectors: false,
  wristRestOrigin: new Trsf().translate(10, -110, 0),
  shell: {
    type: "basic",
    lip: false,
    embedded: false
  }
}
// NOTE: Screws / the connector with
// negative indices are placed automatically.
// In the basic/advanced tab, these values were:
// [left] screwIndices: [11.5, 1.5, 21.5, 26.5, 16.5, 6.5, 37.5]
// [left] connectorIndex: 32.9
// [right] screwIndices: [20.5, 35.5, 5.5, 42.5, 56.5, 27.5, 13.5]
// [right] connectorIndex: 50.9

/**
 * The planes used to position the clusters.
 * It's rotated by the x rotation (tenting removed)
 */ 
const rightFingersPlane = new Trsf()
  .rotate(1.0222222222222221, [0, 0, 0], [1, 0, 0], false)
  .rotate(15, [0, 0, 0], [0, 1, 0], false)
  .rotate(0.2222222222222222, [0, 0, 0], [0, 0, 1], false)
  .translate(18, 35.6, -15.2)

const rightThumbsPlane = new Trsf()
  .rotate(-11.88888888888889, [0, 0, 0], [1, 0, 0])
  .rotate(-24.8, [0, 0, 0], [0, 1, 0])
  .rotate(34.44444444444444, [0, 0, 0], [0, 0, 1])
  .translate(-35.8, -25.6, 0)
  .transformBy(new Trsf()
    .translate(-18, -35.6, 15.2)
    .rotate(-0.2222222222222222, [0, 0, 0], [0, 0, 1])
    .rotate(-15, [0, 0, 0], [0, 1, 0])
    .rotate(-1.0222222222222221, [0, 0, 0], [1, 0, 0])
  )
  .transformBy(new Trsf()
    .rotate(1.0222222222222221, [0, 0, 0], [1, 0, 0], false)
    .rotate(15, [0, 0, 0], [0, 1, 0], false)
    .rotate(0.2222222222222222, [0, 0, 0], [0, 0, 1], false)
    .translate(18, 35.6, -15.2)
  )

const leftFingersPlane = new Trsf()
  .rotate(1.0222222222222221, [0, 0, 0], [1, 0, 0], false)
  .rotate(-15, [0, 0, 0], [0, 1, 0], false)
  .rotate(-0.2222222222222222, [0, 0, 0], [0, 0, 1], false)
  .translate(-18, 35.6, -15.2)

const leftThumbsPlane = new Trsf()
  .rotate(-11.88888888888889, [0, 0, 0], [1, 0, 0])
  .rotate(24.8, [0, 0, 0], [0, 1, 0])
  .rotate(-34.44444444444444, [0, 0, 0], [0, 0, 1])
  .translate(35.8, -25.6, -7.1)
  .transformBy(new Trsf()
    .translate(18, -35.6, 15.2)
    .rotate(0.2222222222222222, [0, 0, 0], [0, 0, 1])
    .rotate(15, [0, 0, 0], [0, 1, 0])
    .rotate(-1.0222222222222221, [0, 0, 0], [1, 0, 0])
  )
  .transformBy(new Trsf()
    .rotate(1.0222222222222221, [0, 0, 0], [1, 0, 0], false)
    .rotate(-15, [0, 0, 0], [0, 1, 0], false)
    .rotate(-0.2222222222222222, [0, 0, 0], [0, 0, 1], false)
    .translate(-18, 35.6, -15.2)
  )


/** Definitions for all keys. */
const fingersLeft: Key[] = [
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: 2.5,
        row: -2,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        arc: 0,
        curvatureOfColumnDisparity: 0,
        curvatureOfRow: 5
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "(",
      row: 1,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: 2.5,
        row: -1,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        arc: 0,
        curvatureOfColumnDisparity: 0,
        curvatureOfRow: 5
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "y",
      row: 2,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: 2.5,
        row: 0,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        arc: 0,
        curvatureOfColumnDisparity: 0,
        curvatureOfRow: 5
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "i",
      row: 3,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: 2.5,
        row: 1,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        arc: 0,
        curvatureOfColumnDisparity: 0,
        curvatureOfRow: 5
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "x",
      row: 4,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: 1.5,
        row: -2,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        arc: 0,
        curvatureOfColumnDisparity: 0,
        curvatureOfRow: 5
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "}",
      row: 1,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: 1.5,
        row: -1,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        arc: 0,
        curvatureOfColumnDisparity: 0,
        curvatureOfRow: 5
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "p",
      row: 2,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: 1.5,
        row: 0,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        arc: 0,
        curvatureOfColumnDisparity: 0,
        curvatureOfRow: 5
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "u",
      home: "index",
      row: 3,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: 1.5,
        row: 1,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        arc: 0,
        curvatureOfColumnDisparity: 0,
        curvatureOfRow: 5
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "k",
      row: 4,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: -2,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        curvatureOfColumnDisparity: 0,
        arc: 0,
        columnForArc: 0.5
      })
      .transformBy(new Trsf().translate(0, 6.5, -4.5)
      )
      .placeColumn({
        column: 0.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "{",
      row: 1,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: -1,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        curvatureOfColumnDisparity: 0,
        arc: 0,
        columnForArc: 0.5
      })
      .transformBy(new Trsf().translate(0, 6.5, -4.5)
      )
      .placeColumn({
        column: 0.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: ".",
      row: 2,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 0,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        curvatureOfColumnDisparity: 0,
        arc: 0,
        columnForArc: 0.5
      })
      .transformBy(new Trsf().translate(0, 6.5, -4.5)
      )
      .placeColumn({
        column: 0.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "e",
      home: "middle",
      row: 3,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 1,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        curvatureOfColumnDisparity: 0,
        arc: 0,
        columnForArc: 0.5
      })
      .transformBy(new Trsf().translate(0, 6.5, -4.5)
      )
      .placeColumn({
        column: 0.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "j",
      row: 4,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 2,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        curvatureOfColumnDisparity: 0,
        arc: 0,
        columnForArc: 0.5
      })
      .transformBy(new Trsf().translate(0, 6.5, -4.5)
      )
      .placeColumn({
        column: 0.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "#",
      row: 4,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: -2,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        curvatureOfColumnDisparity: 0,
        arc: 0,
        columnForArc: -0.5
      })
      .transformBy(new Trsf().translate(0, 3.9, -0.5)
      )
      .placeColumn({
        column: -0.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "[",
      row: 1,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: -1,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        curvatureOfColumnDisparity: 0,
        arc: 0,
        columnForArc: -0.5
      })
      .transformBy(new Trsf().translate(0, 3.9, -0.5)
      )
      .placeColumn({
        column: -0.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: ",",
      row: 2,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 0,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        curvatureOfColumnDisparity: 0,
        arc: 0,
        columnForArc: -0.5
      })
      .transformBy(new Trsf().translate(0, 3.9, -0.5)
      )
      .placeColumn({
        column: -0.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "o",
      home: "ring",
      row: 3,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 1,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        curvatureOfColumnDisparity: 0,
        arc: 0,
        columnForArc: -0.5
      })
      .transformBy(new Trsf().translate(0, 3.9, -0.5)
      )
      .placeColumn({
        column: -0.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "q",
      row: 4,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 2,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        curvatureOfColumnDisparity: 0,
        arc: 0,
        columnForArc: -0.5
      })
      .transformBy(new Trsf().translate(0, 3.9, -0.5)
      )
      .placeColumn({
        column: -0.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "$",
      row: 4,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: -2,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        curvatureOfColumnDisparity: 0,
        arc: 0,
        columnForArc: -1.5
      })
      .transformBy(new Trsf().translate(0, -10.2, 6)
      )
      .placeColumn({
        column: -1.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "&",
      row: 1,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: -1,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        curvatureOfColumnDisparity: 0,
        arc: 0,
        columnForArc: -1.5
      })
      .transformBy(new Trsf().translate(0, -10.2, 6)
      )
      .placeColumn({
        column: -1.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: ";",
      row: 2,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 0,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        curvatureOfColumnDisparity: 0,
        arc: 0,
        columnForArc: -1.5
      })
      .transformBy(new Trsf().translate(0, -10.2, 6)
      )
      .placeColumn({
        column: -1.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "a",
      home: "pinky",
      row: 3,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 1,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        curvatureOfColumnDisparity: 0,
        arc: 0,
        columnForArc: -1.5
      })
      .transformBy(new Trsf().translate(0, -10.2, 6)
      )
      .placeColumn({
        column: -1.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "'",
      row: 4,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: -2,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        curvatureOfColumnDisparity: 0,
        arc: 0,
        columnForArc: -2.5
      })
      .transformBy(new Trsf().translate(0, -10.2, 6)
      )
      .placeColumn({
        column: -2.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "esc",
      row: 1,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: -1,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        curvatureOfColumnDisparity: 0,
        arc: 0,
        columnForArc: -2.5
      })
      .transformBy(new Trsf().translate(0, -10.2, 6)
      )
      .placeColumn({
        column: -2.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "tab",
      row: 2,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 0,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        curvatureOfColumnDisparity: 0,
        arc: 0,
        columnForArc: -2.5
      })
      .transformBy(new Trsf().translate(0, -10.2, 6)
      )
      .placeColumn({
        column: -2.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "ctrl",
      row: 3,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 1,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        curvatureOfColumnDisparity: 0,
        arc: 0,
        columnForArc: -2.5
      })
      .transformBy(new Trsf().translate(0, -10.2, 6)
      )
      .placeColumn({
        column: -2.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "shift",
      row: 4,
      profile: "xda"
    }
  },
  {
    type: "oled-160x68-1.08in-niceview",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: 3.5,
        row: -1.5,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        arc: 0,
        curvatureOfColumnDisparity: 0,
        curvatureOfRow: 5
      })
      .transformBy(leftFingersPlane)
  }
]

const thumbsLeft: Key[] = [
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "thumbs",
    position: new Trsf()
      .rotate(17.8, [0, 0, 0], [1, 0, 0])
      .rotate(-3.2888888888888888, [0, 0, 0], [0, 1, 0])
      .rotate(8.2, [0, 0, 0], [0, 0, 1])
      .translate(0, 0, 3.5)
      .placeOnMatrix({
        column: -0.4,
        row: -0.34,
        spacingOfColumns: 20,
        spacingOfRows: 20,
        curvatureOfColumn: 0,
        arc: 0,
        curvatureOfColumnDisparity: 0,
        curvatureOfRow: 0
      })
      .transformBy(leftThumbsPlane),
    keycap: {
      letter: "space",
      home: "thumb",
      row: 5,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "thumbs",
    position: new Trsf()
      .rotate(17.8, [0, 0, 0], [1, 0, 0])
      .rotate(-3.2888888888888888, [0, 0, 0], [0, 1, 0])
      .rotate(8.2, [0, 0, 0], [0, 0, 1])
      .translate(0, 0, -4.2)
      .placeOnMatrix({
        column: -0.29,
        row: 0.67,
        spacingOfColumns: 20,
        spacingOfRows: 20,
        curvatureOfColumn: 0,
        arc: 0,
        curvatureOfColumnDisparity: 0,
        curvatureOfRow: 0
      })
      .transformBy(leftThumbsPlane),
    keycap: {
      letter: "space",
      row: 5,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "thumbs",
    position: new Trsf()
      .rotate(15.11111111111111, [0, 0, 0], [1, 0, 0])
      .rotate(-16, [0, 0, 0], [0, 1, 0])
      .rotate(21.8, [0, 0, 0], [0, 0, 1])
      .translate(0, 0, 0.4)
      .placeOnMatrix({
        column: -1.43,
        row: -0.06,
        spacingOfColumns: 20,
        spacingOfRows: 20,
        curvatureOfColumn: 0,
        arc: 0,
        curvatureOfColumnDisparity: 0,
        curvatureOfRow: 0
      })
      .transformBy(leftThumbsPlane),
    keycap: {
      letter: "nav",
      row: 5,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "thumbs",
    position: new Trsf()
      .rotate(18.2, [0, 0, 0], [1, 0, 0])
      .rotate(7.111111111111111, [0, 0, 0], [0, 1, 0])
      .rotate(1, [0, 0, 0], [0, 0, 1])
      .translate(0, 0, 3.1)
      .placeOnMatrix({
        column: 0.64,
        row: -0.44,
        spacingOfColumns: 20,
        spacingOfRows: 20,
        curvatureOfColumn: 0,
        arc: 0,
        curvatureOfColumnDisparity: 0,
        curvatureOfRow: 0
      })
      .transformBy(leftThumbsPlane),
    keycap: {
      letter: "alt",
      row: 5,
      profile: "xda"
    }
  }
]

const fingersRight: Key[] = [
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: -2.5,
        row: -2,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        arc: 0,
        curvatureOfColumnDisparity: 0,
        curvatureOfRow: 5
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: "=",
      row: 1,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: -2.5,
        row: -1,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        arc: 0,
        curvatureOfColumnDisparity: 0,
        curvatureOfRow: 5
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: "f",
      row: 2,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: -2.5,
        row: 0,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        arc: 0,
        curvatureOfColumnDisparity: 0,
        curvatureOfRow: 5
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: "d",
      row: 3,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: -2.5,
        row: 1,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        arc: 0,
        curvatureOfColumnDisparity: 0,
        curvatureOfRow: 5
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: "b",
      row: 4,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: -1.5,
        row: -2,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        arc: 0,
        curvatureOfColumnDisparity: 0,
        curvatureOfRow: 5
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: "*",
      row: 1,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: -1.5,
        row: -1,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        arc: 0,
        curvatureOfColumnDisparity: 0,
        curvatureOfRow: 5
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: "g",
      row: 2,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: -1.5,
        row: 0,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        arc: 0,
        curvatureOfColumnDisparity: 0,
        curvatureOfRow: 5
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: "h",
      home: "index",
      row: 3,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: -1.5,
        row: 1,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        arc: 0,
        curvatureOfColumnDisparity: 0,
        curvatureOfRow: 5
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: "m",
      row: 4,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: -2,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        curvatureOfColumnDisparity: 0,
        arc: 0,
        columnForArc: -0.5
      })
      .transformBy(new Trsf().translate(0, 6.5, -4.5)
      )
      .placeColumn({
        column: -0.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: ")",
      row: 1,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: -1,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        curvatureOfColumnDisparity: 0,
        arc: 0,
        columnForArc: -0.5
      })
      .transformBy(new Trsf().translate(0, 6.5, -4.5)
      )
      .placeColumn({
        column: -0.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: "c",
      row: 2,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 0,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        curvatureOfColumnDisparity: 0,
        arc: 0,
        columnForArc: -0.5
      })
      .transformBy(new Trsf().translate(0, 6.5, -4.5)
      )
      .placeColumn({
        column: -0.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: "t",
      home: "middle",
      row: 3,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 1,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        curvatureOfColumnDisparity: 0,
        arc: 0,
        columnForArc: -0.5
      })
      .transformBy(new Trsf().translate(0, 6.5, -4.5)
      )
      .placeColumn({
        column: -0.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: "w",
      row: 4,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 2,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        curvatureOfColumnDisparity: 0,
        arc: 0,
        columnForArc: -0.5
      })
      .transformBy(new Trsf().translate(0, 6.5, -4.5)
      )
      .placeColumn({
        column: -0.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: "@",
      row: 4,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: -2,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        curvatureOfColumnDisparity: 0,
        arc: 0,
        columnForArc: 0.5
      })
      .transformBy(new Trsf().translate(0, 0.7, -0.5)
      )
      .placeColumn({
        column: 0.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: "+",
      row: 1,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: -1,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        curvatureOfColumnDisparity: 0,
        arc: 0,
        columnForArc: 0.5
      })
      .transformBy(new Trsf().translate(0, 0.7, -0.5)
      )
      .placeColumn({
        column: 0.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: "r",
      row: 2,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 0,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        curvatureOfColumnDisparity: 0,
        arc: 0,
        columnForArc: 0.5
      })
      .transformBy(new Trsf().translate(0, 0.7, -0.5)
      )
      .placeColumn({
        column: 0.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: "n",
      home: "ring",
      row: 3,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 1,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        curvatureOfColumnDisparity: 0,
        arc: 0,
        columnForArc: 0.5
      })
      .transformBy(new Trsf().translate(0, 0.7, -0.5)
      )
      .placeColumn({
        column: 0.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: "v",
      row: 4,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 2,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        curvatureOfColumnDisparity: 0,
        arc: 0,
        columnForArc: 0.5
      })
      .transformBy(new Trsf().translate(0, 0.7, -0.5)
      )
      .placeColumn({
        column: 0.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: "\\",
      row: 4,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: -2,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        curvatureOfColumnDisparity: 0,
        arc: 0,
        columnForArc: 1.5
      })
      .transformBy(new Trsf().translate(0, -11.7, 6)
      )
      .placeColumn({
        column: 1.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: "]",
      row: 1,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: -1,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        curvatureOfColumnDisparity: 0,
        arc: 0,
        columnForArc: 1.5
      })
      .transformBy(new Trsf().translate(0, -11.7, 6)
      )
      .placeColumn({
        column: 1.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: "l",
      row: 2,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 0,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        curvatureOfColumnDisparity: 0,
        arc: 0,
        columnForArc: 1.5
      })
      .transformBy(new Trsf().translate(0, -11.7, 6)
      )
      .placeColumn({
        column: 1.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: "s",
      home: "pinky",
      row: 3,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 1,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        curvatureOfColumnDisparity: 0,
        arc: 0,
        columnForArc: 1.5
      })
      .transformBy(new Trsf().translate(0, -11.7, 6)
      )
      .placeColumn({
        column: 1.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: "z",
      row: 4,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: -2,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        curvatureOfColumnDisparity: 0,
        arc: 0,
        columnForArc: 2.5
      })
      .transformBy(new Trsf().translate(0, -11.7, 6)
      )
      .placeColumn({
        column: 2.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: "!",
      row: 1,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: -1,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        curvatureOfColumnDisparity: 0,
        arc: 0,
        columnForArc: 2.5
      })
      .transformBy(new Trsf().translate(0, -11.7, 6)
      )
      .placeColumn({
        column: 2.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: "/",
      row: 2,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 0,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        curvatureOfColumnDisparity: 0,
        arc: 0,
        columnForArc: 2.5
      })
      .transformBy(new Trsf().translate(0, -11.7, 6)
      )
      .placeColumn({
        column: 2.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: "-",
      row: 3,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 1,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        curvatureOfColumnDisparity: 0,
        arc: 0,
        columnForArc: 2.5
      })
      .transformBy(new Trsf().translate(0, -11.7, 6)
      )
      .placeColumn({
        column: 2.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: "shift",
      row: 4,
      profile: "xda"
    }
  },
  {
    type: "oled-160x68-1.08in-niceview",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: -3.5,
        row: -1.5,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfColumn: 14,
        arc: 0,
        curvatureOfColumnDisparity: 0,
        curvatureOfRow: 5
      })
      .transformBy(rightFingersPlane)
  }
]

/**
 * Position of the right-hand trackball; the two thumb keys sit side by side at its top left.
 * Placed near the centre of the thumb cluster (mirroring the left-hand cluster),
 * shifted inward so the keys clear the finger keys.
 */
const trackballMatrix = {
  column: -0.13,
  row: -0.04,
  spacingOfColumns: 20,
  spacingOfRows: 20,
  curvatureOfColumn: 0,
  arc: 0,
  curvatureOfColumnDisparity: 0,
  curvatureOfRow: 0
}
/** Distance (mm) from the trackball centre to the key pair. */
const trackballKeyRadius = 37
/** How far (degrees) the key pair is tilted to face the trackball. */
const trackballKeyTilt = 8
/** Height offset (mm) of the key pair. */
const trackballKeyZ = 0
/** Where the key pair sits around the trackball (degrees, 0 = above it, +ve = counter-clockwise). */
const trackballKeyAngle = 28
/** Centre-to-centre distance (mm) between the two keys. */
const trackballKeySpacing = 21

const thumbsRight: Key[] = [
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "thumbs",
    position: new Trsf()
      .rotate(trackballKeyTilt, [0, 0, 0], [1, 0, 0])
      .translate(-trackballKeySpacing / 2, trackballKeyRadius, trackballKeyZ)
      .rotate(trackballKeyAngle, [0, 0, 0], [0, 0, 1])
      .placeOnMatrix(trackballMatrix)
      .transformBy(rightThumbsPlane),
    keycap: {
      letter: "bksp",
      home: "thumb",
      row: 5,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    variant: { led: "North LED", hotswap: "Kailh" },
    aspect: 1,
    cluster: "thumbs",
    position: new Trsf()
      .rotate(trackballKeyTilt, [0, 0, 0], [1, 0, 0])
      .translate(trackballKeySpacing / 2, trackballKeyRadius, trackballKeyZ)
      .rotate(trackballKeyAngle, [0, 0, 0], [0, 0, 1])
      .placeOnMatrix(trackballMatrix)
      .transformBy(rightThumbsPlane),
    keycap: {
      letter: "enter",
      row: 5,
      profile: "xda"
    }
  },
  {
    type: "trackball",
    aspect: 1,
    cluster: "thumbs",
    position: new Trsf()
      .translate(0, 0, 0)
      .placeOnMatrix(trackballMatrix)
      .transformBy(rightThumbsPlane),
    variant: {
      size: "34mm",
      bearings: "Ball",
      sensor: "Skree (ZMK)"
    },
    size: {}
  }
]

export default {
  left: {
    ...options,
    keys: [...fingersLeft, ...thumbsLeft],
  },
  right: {
    ...options,
    keys: [...fingersRight, ...thumbsRight],
  },
}
