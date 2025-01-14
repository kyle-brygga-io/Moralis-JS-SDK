import { Connection, Connector } from './Connector';
import { ConnectorResolver } from './ConnectorResolver';

class FakeConnector implements Connector<object> {
  public constructor(public readonly name: string) {}

  public connect(): Promise<Connection<object>> {
    throw new Error('Method not implemented.');
  }
}

describe('ConnectorResolver', () => {
  const defaultConnector = new FakeConnector('default0');

  describe('alfa/beta and default0', () => {
    const alfaConnector = new FakeConnector('alfa');
    const betaConnector = new FakeConnector('beta');
    const resolver = new ConnectorResolver([alfaConnector, betaConnector], defaultConnector);

    describe('resolveName()', () => {
      it('returns a default name when the value is empty', () => {
        expect(resolver.resolveName(undefined)).toBe('default0');
      });

      it('return a passed value if the value is not empty', () => {
        expect(resolver.resolveName('foo')).toBe('foo');
      });
    });

    describe('resolve', () => {
      it('returns beta connector', () => {
        expect(resolver.resolve('beta')).toBe(betaConnector);
      });

      it('returns alfa connector', () => {
        expect(resolver.resolve('alfa')).toBe(alfaConnector);
      });

      it('returns default0 connector', () => {
        expect(resolver.resolve('default0')).toBe(defaultConnector);
      });
    });
  });

  it('can replace default connector with the same name', () => {
    const newDefault0 = new FakeConnector('default0');

    expect(newDefault0.name).toBe(defaultConnector.name);
    expect(newDefault0).not.toBe(defaultConnector);

    const resolver = new ConnectorResolver([newDefault0], defaultConnector);

    expect(resolver.resolve('default0')).toBe(newDefault0);
  });
});
