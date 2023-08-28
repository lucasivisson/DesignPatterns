import { AdvancedRemoteControl } from "./AdvancedRemoteControl";
import { Radio } from "./Radio";
import { RemoteControl } from "./RemoteControl";
import { Tv } from "./Tv";

const tv = new Tv();
const remote = new RemoteControl(tv);
remote.togglePower();

const radio = new Radio();
const advancedRemote = new AdvancedRemoteControl(radio);
