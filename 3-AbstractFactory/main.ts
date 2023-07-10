import { ApplicationConfigurator } from "./ApplicationConfigurator";

const macConfig: ApplicationConfigurator = new ApplicationConfigurator();
macConfig.main("Mac");
macConfig.render();
const windowsConfig = new ApplicationConfigurator();
windowsConfig.main("Windows");
windowsConfig.render();
const linuxConfig = new ApplicationConfigurator();
linuxConfig.main("Linux");
linuxConfig.render();
