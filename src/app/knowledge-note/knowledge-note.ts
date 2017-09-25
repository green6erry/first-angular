import { Input, Component } from '@angular/core';
@Component ({
    selector: 'app-knowledge-note',
    templateUrl: './knowledge-note.html'
})

export class KnowledgeNote {

    @Input()
    public knotes: Array<KNote> = [];
  
    private backup: Array<KNote>;
  
    constructor() {
      this.knotes.push({
        id: 1,
        src: 'https://mbkr-minimalistbaker.netdna-ssl.com/wp-content/uploads/2017/08/DELICIOUS-Vegan-Gluten-Free-BISCUITS-9-Ingredients-fluffy-TENDER-5-ingredients-THICK-flavorful-The-perfect-sauce-for-Greek-night.-biscuits-recipe-vegan-glutenfree-minimalistbaker-4.jpg',
        alt: 'EASY VEGAN GLUTEN-FREE BISCUITS',
        desc: 'EASY VEGAN GLUTEN-FREE BISCUITS'
      }, {
        id: 2,
        src: 'https://mbkr-minimalistbaker.netdna-ssl.com/wp-content/uploads/2017/08/AMAZING-Vegan-Chocolate-Chip-Zucchini-Bread-1-bowl-naturally-sweetened-SO-delicious-chocolate-zucchini-recipe-vegan-glutenfree-minimalistbaker-10.jpg',
        alt: '1-BOWL CHOCOLATE ZUCCHINI BREAD',
        desc: '1-BOWL CHOCOLATE ZUCCHINI BREAD'
      });
      this.backup = this.knotes.map((knote: KNote) => Object.assign({}, knote));
    }
}

export interface KNote {
    id: number;
    src: string;
    alt: string;
    desc: string;
}