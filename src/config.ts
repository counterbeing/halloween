export const PAD_DOWN = 153;
export const KEY_DOWN = 144;
export const MIDI_CLOCK = 248;
export const DEBUG = process.env.DEBUG == "true";

export const PADS = [
  [40, 41, 42, 43, 48, 49, 50, 51],
  [36, 37, 38, 39, 44, 45, 46, 47],
];

export const findIndiciesOfPad = (pad: number) => {
  let indicies: [number, number] | undefined;
  PADS.forEach((row, rowIndex) => {
    return row.includes(pad) && (indicies = [rowIndex, row.indexOf(pad)]);
  });

  return indicies;
};

export const FLAT_PADS = PADS.flat();

export const LEDS = [
  [96, 97, 98, 99, 100, 101, 102, 103, 104],
  [112, 113, 114, 115, 116, 117, 118, 119, 120],
];
export const LEDS_FLAT = LEDS.flat();
