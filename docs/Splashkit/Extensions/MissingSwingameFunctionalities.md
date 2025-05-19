# Missing Functionalities from Swingame

Splashkit is a recreation of an old game engine made by Swinburne University called Swingame, this
document aims to collect missing functions from [Swingame](https://github.com/macite/swingame) to
expand on Splashkit's functionality. Swingame's source code is predominently written in `Pascal` so
these functions will need to be translated before implementing them into Splashkit.

## Approach

It is suggested that the missing functionalities are in relation to collision logic. By looking into
the `src` files within the
[Swingame repository](https://github.com/macite/swingame/tree/develop/CoreSDK/src) and comparing
them to that of the Splashkit `src` files, missing functionalities are found and documented.

## To be added to Splashkit

The following functions and procedures are located within the
[src](https://github.com/macite/swingame/tree/develop/CoreSDK/src) folder of the Swingame Github
repository, but cannot be located within the
[Splashkit src](https://github.com/splashkit/splashkit-core/tree/develop/coresdk/src/coresdk) files.
All function descriptions are taken from their associated Swingame `src` file.

### sgPhysics.pas

- `function BitmapPartPointCollision(bmp: Bitmap; x, y: Single; const part: Rectangle; ptX, ptY: Single): Boolean; overload;`

  - Returns True if a point (`ptX`,`ptY`) is located within the `part` (rectangle) of the bitmap
    `bmp` when it is drawn at `x`,`y`, using pixel level collisions. For bounding box collisions use
    the rectangle collision functions. The `x` and `y` values specify the world location of the
    bitmap. The `ptX` and `ptY` needs to be provided in world coordinates.

- `function BitmapPartPointCollision(bmp: Bitmap; x, y: Single; const part: Rectangle; const pt: Point2D): Boolean; overload;`

  - Returns True if a point (`pt`) is located within the `part` (rectangle) of the bitmap `bmp` when
    it is drawn at `x`,`y`, using pixel level collisions. For bounding box collisions use the
    rectangle collision functions. The `x` and `y` values specify the world location of the bitmap.
    The point `pt` needs to be provided in world coordinates.

- `function CellCollision(bmp1: Bitmap; cell1: Longint; x1, y1: Single; bmp2: Bitmap; cell2: Longint; x2, y2: Single): Boolean; overload;`

  - Returns true if the cells within the two bitmaps have collided at their specified x, y
    locations.

- `function CellCollision( bmp1: Bitmap; cell1: Longint; const pt1: Point2D; bmp2: Bitmap; cell2: Longint; const pt2: Point2D): Boolean; overload;`

  - Returns true if the cells within the two bitmaps have collided at the given points.

- `function CellBitmapCollision(bmp1: Bitmap; cell: Longint; x1, y1: Single; bmp2: Bitmap; x2, y2: Single): Boolean; overload;`

  - Returns true if the cell in the specified bitmap has collided with a bitmap.

- `function CellBitmapCollision(bmp1: Bitmap; cell: Longint; const pt1: Point2D; bmp2: Bitmap; const pt2: Point2D): Boolean; overload;`

  - Returns true if the cell in the specified bitmap has collided with a bitmap.

- `function CellBitmapCollision(bmp1: Bitmap; cell: Longint; x1, y1: Single; bmp2: Bitmap; x2, y2: Single; const part: Rectangle): Boolean; overload;`

  - Returns true if the cell in the specified bitmap has collided with a part of a bitmap.

- `function CellBitmapCollision(bmp1: Bitmap; cell: Longint; const pt1: Point2D; bmp2: Bitmap; const pt2:Point2D; const part: Rectangle): Boolean; overload;`

  - Returns true if the cell in the specified bitmap has collided with a part of a bitmap.

- `function CellRectCollision(bmp: Bitmap; cell: Longint; x, y: Single; const rect: Rectangle): Boolean; overload;`

  - Returns true if the cell of the bitmap has collided with a given rectangle.

- `function CellRectCollision(bmp: Bitmap; cell: Longint; const pt: Point2D; const rect: Rectangle): Boolean; overload;`

  - Returns true if the cell of the bitmap has collided with a given rectangle.

- `function CircleRectCollision(const c: Circle; const rect: Rectangle): Boolean;`

  - Returns True if the Circle collided with rectangle `rect`.

- `function CircleCircleCollision(const c1, c2: Circle): Boolean;`

  - Returns True if the circles have collided.

- `function CircleTriangleCollision(const c: Circle; const tri: Triangle): Boolean;`

  - Returns True if the Circle has collided with the Triangle `tri`.

- `function TriangleLineCollision(const tri: Triangle; const ln: LineSegment): Boolean;`

  - Returns true if the triangle and the line have collided.

- `function CircleLineCollision(s: Sprite; const line: LineSegment): Boolean;`

  - Returns True if the 'Sprite' `s`, represented by a bounding circle, has collided with a `line`.
    The diameter for the bounding circle is based on the sprites width or height value -- whichever
    is largest.

- `function RectLineCollision(s: Sprite; const line: LineSegment): Boolean; overload;`

  - Returns True if the bounding rectangle of the 'Sprite' `s` has collided with the `line`
    specified.

- `function RectLineCollision(const rect: Rectangle; const line: LineSegment): Boolean; overload;`

  - Returns True if the rectangle `rect` provided has collided with the `line`.

- `function SideForCollisionTest(const velocity: Vector): CollisionSide;`

  - Returns the side of that needs to be checked for collisions given the movement velocity.

- `procedure CollideCircleLine(s: Sprite; const line: LineSegment);`

  - Perform a physical collision with a circle bouncing off a line.

- `procedure CollideCircleCircle(s: Sprite; const c: Circle);`

  - Perform a physical collision with a sprite circle bouncing off a stationary circle.

- `procedure CollideCircleRectangle(s: Sprite; const rect: Rectangle); overload;`

  - Perform a physical collision with a sprite as a circle bouncing off a stationary rectangle.

- `procedure CollideCircleTriangle(s: Sprite; const tri: Triangle); overload;`

  - Perform a physical collision with a sprite as a circle bouncing off a stationary triangle.

- `procedure CollideCircles(s1, s2: Sprite);`
  - Perform a physical collision between two circular sprites.

### sgGraphics.pas

Note: Andrew Cain suggests implementing the `ShowSwinGameSplashScreen` procedure with a Splashkit
animation instead.

- `procedure ShowSwinGameSplashScreen();`
  - Shows the SwinGame intro splash screen. It would be great if you could include this at the start
    of your game to help us promote the SwinGame API.

## Further Contributions

Contributions on more missing functionalities from Swingame or removal of functionalities added to
Splashkit are encouraged.

Refer to [CONTRIBUTING.md](https://github.com/thoth-tech/documentation/blob/main/CONTRIBUTING.md)
when contributing to maintain standards and quality of documentation.
