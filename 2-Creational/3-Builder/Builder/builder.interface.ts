export interface Builder {
  reset(): void;
  setSeats(numberOfSeats: number): void;
  setEngine(engine: string): void;
  setTripComputer(tripComputer: boolean): void;
  setGPS(gps: boolean): void;
}
