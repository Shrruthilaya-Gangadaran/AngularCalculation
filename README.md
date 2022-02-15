# AngularCalculation

# Web Page for Mathematical Calculations using Angular

## AIM:
To design a dynamic website to perform mathematical calculations using Angular Framwork

## DESIGN STEPS:

### Step 1:

Requirement collection.

### Step 2:

Creating the layout using HTML and CSS in component.html file

### Step 3:

Write typescript to perform the calculations.

### Step 4:

Validate the layout in various browsers.

### Step 5:

Validate the HTML code.

### Step 6:

Publish the website in the given URL.

## PROGRAM :
### app.component.html:
~~~
<style>
    *{
box-sizing: border-box;
font-family: Arial, Helvetica, sans-serif;
}

body{
background-color: rgb(196, 0, 0);
background-image: url(https://wallpaper.dog/large/17013332.jpg);
color: black;
}

.container{
text-align: center;
width: 1080px;
height: 1000px;
margin-left: auto;
margin-right: auto;
margin-top: auto;
}

.content{
display: block;
width: 100%;
margin-left: auto;
margin-right: auto;
background-image: url(https://i.pinimg.com/564x/e9/a5/c4/e9a5c4e32b37902dc3c7750a69cf0c6b.jpg);
background-color: rgb(250, 133, 65);
margin-top: 25px;
min-height: 300px;
}

.content1{
display: block;
width: 100%;
margin-left: auto;
margin-right: auto;
background-image: url(https://i.pinimg.com/564x/e9/a5/c4/e9a5c4e32b37902dc3c7750a69cf0c6b.jpg);
background-color: rgb(250, 133, 65);
margin-top: 25px;
min-height: 300px;
}

h1{
color: rgb(0, 0, 0);
text-align: center;
padding-top: 20px;
}

h2{
color: rgb(0, 0, 0);
text-align: center;
padding-top: 5px;
}

.formelement{
text-align: center;
padding-top: 20px;
font-size: larger;
}


.footer{
display: inline-block;
width: 100%;
height: 35px;
background-color: rgb(7, 7, 7);
color: rgb(255, 255, 255);
text-align: center;
padding-top: 7px;
font-size: large;
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

</style>

<body>
    <div class="container">
    <h1>Mathematical Calculations</h1>
    <div class="content">
        <h2><u>Area of Parallelogram</u></h2>
        <Parallelogram-Area class="formelement"></Parallelogram-Area>
    </div>
    <div class="content1">
        <h2><u>Volume of Cuboid</u></h2>
        <Cuboid-Volume class="formelement"></Cuboid-Volume>
    </div>
    <div class="footer">
        Developed by Shrruthilaya G
   </div>
    </div>

</body>
~~~

### app.module.ts:
~~~
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentComponent } from './student/student.component';
import { FormsModule } from '@angular/forms';
import { CuboidComponent } from './student/cuboid.component';
import { ParallelogramComponent } from './student/parallel.component';

@NgModule({
  declarations: [
    AppComponent,StudentComponent,CuboidComponent,ParallelogramComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
~~~

### cuboid.component.html:
~~~
<div>
    Length:<input type="text" [(ngModel)]="clength">Meters<br/>
    <br/>
    Height:<input type="text" [(ngModel)]="cheight">Meters<br/>
    <br/>
    Breadth:<input type="text" [(ngModel)]="cbreadth">Meters<br/>
    <br/>
    <input type = "button" (click)="onCalculateVolume()" value="Calculate Volume"><br/>
    <br/>
    Volume:<input type="text" readonly value="0" [value]="volume">Meter<sup>3</sup>
</div>
~~~

### cuboid.component.ts:
~~~
import { Component } from "@angular/core";

@Component({
    selector:'Cuboid-Volume',
    templateUrl:'./cuboid.component.html'
})

export class CuboidComponent{
    clength:number;
    cbreadth:number;
    cheight:number;
    volume:number;
    constructor(){
        this.clength = 0;
        this.cbreadth = 0;
        this.cheight = 0;
        this.volume = this.clength*this.cbreadth*this.cheight;
    }
    onCalculateVolume()
    {
        this.volume = this.clength*this.cbreadth*this.cheight;
    }
}
~~~

### parallel.component.html:
~~~
<div>
    Base:<input type="text" [(ngModel)]="breadth">Meters<br/>
    <br/>
    Height:<input type="text" [(ngModel)]="height">Meters<br/>
    <br/>
    <input type = "button" (click)="onCalculatearea()" value="Calculate Area"><br/>
    <br/>
    Area:<input type="text" readonly value="0" [value]="area">Meter<sup>2</sup>

</div>
~~~

### parallel.component.ts:
~~~
import { Component } from "@angular/core";

@Component({
    selector:'Parallelogram-Area',
    templateUrl:'./parallel.component.html'
})

export class ParallelogramComponent{
    breadth:number;
    height:number;
    area:number;
    constructor(){
        this.breadth = 0;
        this.height = 0;
        this.area = 0;
    }
    onCalculatearea(){
        this.area=this.breadth*this.height
    }
}
~~~

### index.html:
~~~
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Mathcalculations</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>
~~~

## OUTPUT:
### Blank page:
![](default1.jpeg)

### Calculated page:
![](calculation1.jpeg)

## Result:
Thus, A dynamic website to perform mathematical calculations is designed using Angular Framwork.