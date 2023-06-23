export interface FlyingTransport {
  fly: (origin: string, destination: string, passengers: number) => void;
}
