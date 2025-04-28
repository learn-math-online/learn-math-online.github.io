const scriptsInEvents = {
  async Es_game_Event3_Act45(runtime, localVars) {
    PokiSDK.customEvent('game', 'segment', {
      segment: 'level' + runtime.globalVars.Levels_Completed_Count
    });
  },
  async Es_prestart_Event2_Act1(runtime, localVars) {
    !function () {
      'use strict';
    }();
  }
};
self.C3.ScriptsInEvents = scriptsInEvents;