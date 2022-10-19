import OBSWebSocket from "obs-websocket-js";

type Scene = { name: string; buffer?: string };

// These are just the names of scenes in OBS, they are arranged in order on my
// midi pad.
const scenes: Scene[] = [
  {
    name: "Blank",
  },
  {
    name: "Creepers Peepers",
  },
  {
    name: "Green Hands",
  },
  {
    name: "Zombies at Window",
  },
  {
    name: "Goblin Eyes",
  },
  {
    name: "Skeleton Jazz",
  },
  {
    name: "Lady",
    buffer: "Lady Buffer",
  },
];

export class ObsController {
  private client = new OBSWebSocket();

  constructor() {
    this.setup();
  }

  async setup() {
    console.log("Connecting to OBS...");
    await this.client.connect("ws://localhost:4455");
    console.log("✅");
  }

  async changeScene(padIndicies: [number, number]) {
    try {
      const scene = scenes[padIndicies[1]];
      const sceneName =
        scene.buffer && padIndicies[0] === 0 ? scene.buffer : scene.name;

      console.log("Changing scene to", sceneName);

      await this.client.call("SetCurrentProgramScene", {
        sceneName: sceneName,
      });
    } catch (e) {
      console.log(`❌ Failed to change scene to  ${padIndicies}`);
    }
  }
}
