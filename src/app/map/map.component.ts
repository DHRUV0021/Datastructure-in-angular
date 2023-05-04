import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { console.clear(); }

  method2() {



    //-----------set
    let map1: any = new Map()

    map1.set(1, "jay");
    map1.set(1, "jay");
    map1.set(2, [1, 2, 3, 4, 5, 6,]);
    map1.set("swaminarayan", 123);
    map1.set(5,{4 : "abccc"});

    console.log(map1);

    //-----------get
    console.log(map1.get("swaminarayan"));
    console.log(map1.get(2));


    //-----------has
    console.log(map1.has(3));
    console.log(map1.has(1));
    console.log(map1.has(2));



    //-----------delete
    console.log(map1.delete(1));
    console.log(map1.delete(10));


    //-----------size
    console.log(map1.size);


    //-----------clear
    console.log(map1.clear);


  }
  

  ngOnInit(): void {
    this.method2();

  }
}
