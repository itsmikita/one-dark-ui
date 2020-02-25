'use babel';

export default {
  activate() {
    // Make windows transparent
    require( 'electron' ).remote.getCurrentWindow().setVibrancy( 'dark' );
  },

  // ?
  update() {
    // Make windows transparent
    require( 'electron' ).remote.getCurrentWindow().setVibrancy( 'dark' );
  },

  // Remove windows transparency
  deactivate() {
    require( 'electron' ).remote.getCurrentWindow().setVibrancy( 'dark' );
  }
};
