export class GameContext {

    rules: GameRule[];
    cards: GameCard[];

    cardsIndex: {[id: string]: GameCard};

    story: string[];
  
    constructor(rules: GameRule[]) {
        this.rules = rules;
        this.story = [];
        this.cards = [];
        this.cardsIndex = {};
    }
  
    start() {
        this.event(new GameEventStart());
    }

    event(e: GameEvent) {
        this.rules.forEach(r => {
            r.digest(this, e);
        })
    }

    addCard(card: GameCard) {
        this.cards.push(card);
        this.cardsIndex[card.code] = card;
    }

}

export class GameCard {
    barcode: string;
    code: string;
    name: string;
    icon: string;
    constructor(code, name) {
        this.code = code;
        this.icon = `assets/${code}.png`;
        this.barcode = this.eanEncode(code);
        this.name = name;
    }
    eanEncode(code: any): string {
        return code;
    }
}

export class GameRule {
    code: string;
    digest(context: GameContext, event: GameEvent): void {};
}

export class GameEvent {
    code: string;
}

export class GameEventStart {
    code = 'start';
}

export class GameEventClickCard {
    code = 'card';
    card: string;
    constructor(card: string) {
        this.card = card;
    }
}

export class GameRuleIf extends GameRule {
    code: 'if';
    trigger?: GameTrigger;
    rules?: GameRule[];
    constructor(trigger: GameTrigger, rules: GameRule[]) {
        super();
        this.trigger = trigger;
        this.rules = rules;
    }
    digest(context: GameContext, event: GameEvent): void {
        if (this.trigger.triggers(event)) {
            this.rules.forEach(r => r.digest(context, event));
        }
    };
}

export class GameRuleStory extends GameRule {
    code = 'story';
    story: string[];
    constructor (story: string[]) {
        super();
        this.story = story;
    }
    digest(context: GameContext, event: GameEvent): void {
        this.story.forEach(s => {
            context.story.push(s);
        });
    };
}

export class GameTrigger {
    code: string;
    triggers(event: GameEvent): boolean {
        return false;
    }
}

export class GameTriggerStart extends GameTrigger {
    code = 'start';
    constructor () {
        super();
    }
    triggers(event: GameEvent): boolean {
        return event.code === 'start';
    }
}

export class GameTriggerClick extends GameTrigger {
    code = 'click';
    item: string;
    constructor (item: string) {
        super();
        this.item = item;
    }
    triggers(event: GameEvent): boolean {
        return event.code === 'card' && (event as GameEventClickCard).card == this.item;
    }
}