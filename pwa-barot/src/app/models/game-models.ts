import { SharedDataService } from "../services/shared-data.service";

export class GameGui {
    page: string;
}

export class GameProgress {

    story: string[];

    constructor() {
        this.story = [];
    }

}

export class GameContext {

    rules: GameRule[];
    cards: GameCard[];

    constructor(context: GameContext) {
        this.rules = context.rules;
        this.cards = context.cards;
    }

    static inflate(dto: GameContext): GameContext {
        return new GameContext(dto);
    }

    static start(shared: SharedDataService) {
        GameContext.event(shared, new GameEventStart());
    }

    static event(shared: SharedDataService, e: GameEvent) {
        shared.context.rules.forEach(r => {
            GameRule.brains(r).digest(shared, e);
        })
    }

    static addCard(shared: SharedDataService, card: GameCard) {
        shared.context.cards.push(card);
    }

}

export class GameCard {
    code: string;
    name: string;
    barcode: string;
    icon: string;

    static brains(card: GameCard): GameCard {
        return new GameCard(card.code, card.name);
    }

    constructor(code, name) {
        this.code = code;
        this.icon = `assets/${code}.png`;
        this.barcode = this.eanEncode(code);
        this.name = name;
    }
    eanEncode?(code: any): string {
        return code;
    }

}

export class GameCardBarcoded {

}

export class GameRule {
    code: string;
    static reg: {[code: string]: (r: GameRule) => GameRule} = {};
    static brains(rule: GameRule): GameRule {
        return this.reg[rule.code](rule);
    }
    digest?(shared: SharedDataService, event: GameEvent): void {};
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
    code = 'if';
    trigger?: GameTrigger;
    rules?: GameRule[];
    constructor(rule: GameRuleIf) {
        super();
        this.trigger = rule.trigger;
        this.rules = rule.rules;
    }
    digest?(shared: SharedDataService, event: GameEvent): void {
        if (GameTrigger.inflate(this.trigger).triggers(event)) {
            this.rules.forEach(r => GameRule.brains(r).digest(shared, event));
        }
    };
}
GameRule.reg['if'] = (r: GameRule) => new GameRuleIf(r as GameRuleIf);

export class GameRuleStory extends GameRule {
    code = 'story';
    story: string[];
    constructor(rule: GameRuleStory) {
        super();
        this.story = rule.story;
    }
    digest?(shared: SharedDataService, event: GameEvent): void {
        this.story.forEach(s => {
            shared.progress.story.push(s);
        });
    };
}
GameRule.reg['story'] = (r: GameRule) => new GameRuleStory(r as GameRuleStory);

export class GameTrigger {
    code: string;
    triggers?(event: GameEvent): boolean {
        return false;
    }
    static reg: {[code: string]: (r: GameTrigger) => GameTrigger} = {};
    static inflate(trigger: GameTrigger): GameTrigger {
        return this.reg[trigger.code](trigger);
    }
}

export class GameTriggerStart extends GameTrigger {
    code = 'start';
    constructor () {
        super();
    }
    triggers?(event: GameEvent): boolean {
        return event.code === 'start';
    }
}
GameTrigger.reg['start'] = (r: GameTrigger) => new GameTriggerStart();

export class GameTriggerCard extends GameTrigger {
    code = 'card';
    card: string;
    constructor (card: GameTriggerCard) {
        super();
        this.card = card.card;
    }
    triggers?(event: GameEvent): boolean {
        return event.code === 'card' && (event as GameEventClickCard).card == this.card;
    }
}
GameTrigger.reg['card'] = (r: GameTrigger) => new GameTriggerCard(r as GameTriggerCard);
