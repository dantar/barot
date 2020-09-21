import { Injectable } from '@angular/core';
import { GameCard, GameContext, GameEvent, GameEventClickCard, GameEventStart, GameRule, GameRuleIf, GameRuleStory, GameTriggerCard, GameTriggerStart } from '../models/game-models';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  context: GameContext;

  constructor() {
    this.context = new GameContext([
      new GameRuleIf(
        new GameTriggerStart(), [new GameRuleStory(['The game has started.', 'Go scan some codes!'])]
      ),
      new GameRuleIf(
        new GameTriggerCard('sword'), [new GameRuleStory(['Nice sword you have!'])]
      ),
    ]);
    this.context.addCard(new GameCard('sword', 'A steel sword'));
  }

  startGame() {
    this.context.start();
  }

  runEvent(event: GameEvent) {
    this.context.event(event);
  }

  clickCard(card: GameCard) {
    this.runEvent(new GameEventClickCard(card.code));
  }

}
