# Beziers_Turned_Twisted

Check it out [here](https://bezier-curve-site.netlify.app/)

<!--Contents --> 
<details>
  <summary>Contents</summary>
  <ul>
    <li>
      <a href="#bezier">What is a Bezier Curve?</a> 
    </li>
    <li>
      <a href="#linebezier">What is a Linear Bezier Curve?</a>
    </li>
    <li>
       <a href="#quadbezier">What is a Quadratic Bezier Curve?</a>
    </li>
    <li>
       <a href="#cubebezier">What is a Cubic Bezier Curve?</a>
    </li>
    <li>
       <a href="#lerp">What is lerping?</a>
    </li>
    <li>
       <a href="#bounceball">Why bounceball function?</a>
    </li>
    <li>
       <a href="#conpoint">What is a control point?</a>
    </li>
    <li>
       <a href="#ancpoint">What is an anchor point?</a>
    </li>
  </ul> 

</details>
<br>

<!--Bezier Intro -->
## <a name="bezier" />What is a Bezier Curve?
It is a curve that can be formed manually by introducing a concept of control points.
These control points are the points that work on anchor points or static points and the 
line segment between them. The more the number of control points the more complex the 
curve gets.
<br>
<br>
<!--linear Bezier-->
## <a name="linebezier" />What is a Linear Bezier curve?
As said, linear bezier curve is pecisely one single line between 2 points. Since it has 
no control point, it cannot be manipulated into a bezier cure. So a linear bezier curve
is more or less a straight line.
<br>
<br>
<!--Quadratic Bezier-->
## <a name="quadbezier" />What is a Quadratic Bezier curve?
A quadratic bezier curve is produced while taking in considertaion a single control 
point. The line between the anchor points is manipulated with this one point of control.
Again, since the number of control points is low, the curve is less complicated.
<br>
<br>
<!--Cubic Bezier-->
## <a name="cubebezier" />What is a Cubic Bezier curve?
A cubic bezier curve is a curve having two control points controlling the two anchor 
points. The line between the static points is manipulated by the two control points 
making the curvature of the line in wide range of possibilities.
<br>
<br>
<!--Lerp-->
## <a name="lerp" />What is lerping?
A lerp is also called as linear interpolation mathematically. It is a process of constructing
a curve while considering 2 values, in this case two anchor points, and returns a value along 
the line with a factor that determines the percentage of the line covered. It is an exclusive function provided by [p5.j editor](https://editor.p5js.org/).
```
formula for lerping: 
lerp(x0,x1,t) = x0 + (x1-x0)*t 
```
<br>

<!--bounceball-->
## <a name="bounceball" />Why bounceball function?
It is a user defined function that lets you play with or move around the points in the
considered canvas. It automatically starts to move as soon as the code is executed. 
<br>
<br>

<!--control point-->
## <a name="conpoint" />What is a control point?
A control point is a user defined point that manipulates a line into a curve.
<br>
<br>

<!--anchor point-->
## <a name="ancpoint" />What is an anchor point?
An anchor point is a point that does not move and creates a bezier curve around 
that point.
<br>
<br>

# Some Additional Points to be considered:
- The curve can be manipulated as dots instead of lines as well.
- Include js file individually into html file. 
- Available js files are [cubebez.js](https://github.com/Rhuthvik-D/Beziers_Turned_Twisted/blob/main/cubebez.js) and [quadbez.js](https://github.com/Rhuthvik-D/Beziers_Turned_Twisted/blob/main/quadbez.js) 
