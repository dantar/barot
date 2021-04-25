import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puzzle-pieces',
  templateUrl: './puzzle-pieces.component.html',
  styleUrls: ['./puzzle-pieces.component.scss']
})
export class PuzzlePiecesComponent implements OnInit {

  constructor() { }

  items: {[id:string]: DraggableItem};

  ngOnInit(): void {
    this.items = {};
    this.registerDraggableItem({id: 'itemA', dx: 0, dy: 0});
    this.registerDraggableItem({id: 'itemB', dx: 20, dy: 20});
    this.registerDraggableItem({id: 'itemC', dx: 40, dy: 40});
  }

  registerDraggableItem(item: DraggableItem) {
    this.items[item.id] = item;
  }

  clickItem(event: any) {
    console.log(event);
  }

  onPan(event:any) {
    let id = event.target.id;
    if (this.items[id]) {
      let c: Coordinates = this.panEventCoordinates(event);
      this.items[id].dx = c.x;
      this.items[id].dy = c.y;
    }
  }

  transformItem(id: string) {
    let item = this.items[id];
    return {
      fill: '#555555',
      transform: `translate(${item.dx}px, ${item.dy}px)`,
    }
  }

  panEventCoordinates(event: any): Coordinates {
    let side = Math.min(window.innerWidth, window.innerHeight);
    let ratio = 100 / side;
    return {
      x: (event.center.x - (window.innerWidth-side)/2) * ratio,
      y: (event.center.y - (window.innerHeight-side)/2) * ratio,
    }
  }

}

class DraggableItem {
  id: string;
  dx: number;
  dy: number;
}

class Coordinates {
  x: number;
  y: number;
}
