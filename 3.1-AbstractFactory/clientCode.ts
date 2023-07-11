import { EnterpriseCreateVehicleCostumerFactory } from "./Factories/EnterpriseCostumerVehicleFactory";
import { IndividualCreateVehicleCostumerFactory } from "./Factories/IndividualCostumerVehicleFactory";

const enterpriseFactory = new EnterpriseCreateVehicleCostumerFactory();
const individualFactory = new IndividualCreateVehicleCostumerFactory();

const car1 = enterpriseFactory.createVehicle("Fusca", "João");
const car2 = individualFactory.createVehicle("Celta", "Helena");

car1.pickUp();
car2.pickUp();
