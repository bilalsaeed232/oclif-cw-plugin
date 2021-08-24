import {Command, flags} from '@oclif/command'
export default class Goodbye extends Command {
  async run() {
    console.log("Goodbye, CW Team!");
  }
}
