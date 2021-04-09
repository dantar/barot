import { Injectable } from '@angular/core';
import { GameCard, GameContext, GameEvent, GameEventClickCard, GameEventStart, GameGui, GameProgress, GameRule, GameRuleIf, GameRuleStory, GameTriggerCard, GameTriggerStart } from '../models/game-models';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  context: GameContext;
  progress: GameProgress;
  gui: GameGui;

  constructor() {
    this.context = GameContext.inflate({
      rules: [
        {code: "if", trigger: {code: "start"}, rules: [
          {code: "story", story: ['The game has started.', 'Go scan some codes!']} as GameRuleStory,
        ]} as GameRuleIf,
        {code: "if", trigger: {code: "card", card: 'sword'} as GameEventClickCard, rules: [
          {code: "story", story: ['Nice sword you have!']} as GameRuleStory,
        ]} as GameRuleIf,
      ],
      cards: [
        {code: 'sword', name: 'A steel sword', barcode: '8001120884541', icon: './assets/sword.png'},
      ],
    } as GameContext);
    this.progress = {
      story: [],
    }
    this.gui = {page: 'mainmenu'};
  }

  startGame() {
    GameContext.start(this);
  }

  runEvent(event: GameEvent) {
    GameContext.event(this, event);
  }

  clickCard(card: GameCard) {
    this.runEvent(new GameEventClickCard(card.code));
    console.log('clickCard(card: GameCard)', card);
  }



}
