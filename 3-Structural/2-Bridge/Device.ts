export abstract class Device {
  private _quantityOfNumberToSkip: number;
  private _enabled: boolean;
  private _volumn: number;
  private _channel: number;

  public get quantityOfNumberToSkip(): number {
    return this._quantityOfNumberToSkip;
  }

  public set quantityOfNumberToSkip(value: number) {
    this._quantityOfNumberToSkip = value;
  }

  public get enabled(): boolean {
    return this._enabled;
  }

  public set enabled(value: boolean) {
    this._enabled = value;
  }

  public get volumn(): number {
    return this._volumn;
  }

  public set volumn(value: number) {
    this._volumn = value;
  }

  public get channel(): number {
    return this._channel;
  }

  public set channel(value: number) {
    this._channel = value;
  }

  public abstract isEnabled(): boolean;
  public abstract enable(): void;
  public abstract disable(): void;
  public abstract getVolumn(): number;
  public abstract setVolumn(value: number): void;
  public abstract getChannel(): number;
  public abstract setChannel(value: number): void;
}
