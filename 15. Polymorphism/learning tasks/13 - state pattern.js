/* TcpConnection.js
Write a prototype class of how the tcp protocol works using state pattern with two state classes - Connected and Disconnected.
Example of work:
// Takes ip and port
let connection = new TcpConnection('132.223.243.88', 2342);
connection.connect();
connection.getCurrentState(); // connected
connection.write('data');
connection.disconnect();
connection.getCurrentState(); // disconnected
connection.disconnect(); // Throws error
connection.write('data'); // Throws error
*/
class TcpConnection {
  constructor(ip, port) {
    this.ip = ip;
    this.port = port;
    this.states = {
      /// Two states - two classes
      disconnected: DisconnectedState,
      connected: ConnectedState,
    };
    // Current state new Disconnected class
    this.state = new this.states.disconnected(this);
  }
  // All methods redirect to the state methods to eliminate all conditionals completely
  connect() {
    this.state.connect(this);
  }
  disconnect() {
    this.state.disconnect(this);
  }
  getCurrentState() {
    return this.state.returnState(this);
  }
  write(data) {
    this.state.write(data);
  }
}

///////// CONNECTED
class Connected {
  constructor(connection) {
    this.connection = connection;
  }
  returnState() {
    return "connected";
  }
  connect() {
    // If already connected, throwing error
    throw new Error("Already connected");
  }
  disconnect() {
    this.connection.state = new this.connection.states.disconnected(
      this.connection
    );
  }
  write(data) {
    // never really doing anything here
    return;
  }
}

//////// DISCONNECTED
class Disconnected {
  constructor(connection) {
    this.connection = connection;
  }
  returnState() {
    return "disconnected";
  }
  connect() {
    this.connection.state = new this.connection.states.connected(
      this.connection
    );
  }
  /// Throw new error when already disconnected
  disconnect() {
    throw new Error("You are disconnected already");
  }
  /// cannot write anything disconnected
  write(data) {
    throw new Error("You are disconnected");
  }
}
