import { Component, OnInit } from '@angular/core';
import {Set,Map} from 'immutable';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.scss']
})
export class SetComponent implements OnInit {

  constructor() { console.clear(); }

  method1() {



    //---------------- set method-------------------------
    // let set1: any = new Set();

    // set1.add('abc');
    // set1.add('abc');

    // set1.add('abcd');

    // set1.add([123]);
    // set1.add([123]);
    // set1.add([123, "dhruv"]);
    // set1.add({1 : " kkk"})
    // set1.add({1 : " kkk"})

    // console.log(set1);


    // --------------------has
    // console.log(set1.has("abc"));
    // console.log(set1.has("abcde"));
    // console.log(set1.has([1234]));


    // ----------------------size
    // console.log(set1.size);


    // --------------------delete
    // console.log(set1.delete(2));
    // console.log(set1.delete("abc"));


    // --------------clear
    // console.log(set1.clear());

    // console.log(set1);


    //----------------- set object refrance
    // let set2: any = new Set();


    // set2.add({id:1, name:"dhruv"});
    // set2.add({id:2, name:"krutik"});
    // set2.add({id:3, name:"ankit"});
    // set2.add({id:3, name:"ankit"});
    // set2.add({id:4, name:"dhaval"});

    // console.log(set2.has(set2));
    //     console.log(set2);


    // console.log(set2.size);
    var set:any = Set();

    set = set.add(Map({1:"Dhruv" }));
    set = set.add(Map({1:"Dhruv" }));
    set = set.add(Map({2:"krutik" }));
    set = set.add(Map({ 3:"dhval" }));
    set = set.add(Map({ 3:"dhval" }));
    set = set.add(Map({ 4:"ankit" }));


    console.log(set.toJS());
    
    console.log(set.size);
  }

  ngOnInit(): void {
    this.method1();

  }
}
