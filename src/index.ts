import midi from "midi";
import {
  DEBUG,
  findIndiciesOfPad,
  KEY_DOWN,
  LEDS_FLAT,
  PAD_DOWN,
} from "./config";
import { ObsController } from "./obs";

const obsController = new ObsController();

const input = new midi.Input();
const output = new midi.Output();
output.openPort(1);
output.openVirtualPort("hello again");

function generateRandomInteger(min: number, max: number) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

console.log("👻 👻   👻   👻    👻  Boo! 👻    👻   👻  👻 👻");

const writeLed = (pad: number, color: number) => {
  // output.sendMessage([0x9f, 0x0c, 0x7f]);
  // const message: midi.MidiMessage = [
  //   KEY_DOWN,
  //   sample(LEDS_FLAT),
  //   generateRandomInteger(0, 127),
  // ];
  // if (DEBUG) {
  //   console.log("writeLed", message);
  // }
  // console.log("writeLed", message);
  // output.sendMessage(message);
  // output.sendMessage([0x9f, 0x0c, 0x00]);
};

input.getPortCount();
input.getPortName(0);

input.on("message", (deltaTime, message) => {
  const [code, value, _velocity] = message;
  if (DEBUG) console.log(`m: ${message} d: ${deltaTime}`);

  if (code == PAD_DOWN) {
    console.log(value);
    const pad = findIndiciesOfPad(value);
    if (pad) obsController.changeScene(pad);
  }

  // writeLed(value, 127);
});

input.openPort(0);
input.ignoreTypes(true, true, true);

process.on("SIGINT", function () {
  input.closePort();
  output.closePort();
  process.exit(0);
});
