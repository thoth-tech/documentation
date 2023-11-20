## Title: Sprite Layering tutorial
### Introduction
In this tutorial, we are going to cover the concept of sprite layering. Before we get dive into it let's look at what does layering mean. Before we dive into it, let's first understand what layering means. Think of layers like sheets of paper stacked on top of each other. In short, layering involves stacking 'layers' on top of each other to achieve the desired result.
Here's an example of layering looks like:
[I Made the PERFECT 3D Pokémon Cards!!! by Jazza](https://www.youtube.com/watch?app=desktop&v=JCfpVvy5Rhs)

### Functions Used (Link to Splashkit documentation)

1. [Create Sprite](https://splashkit.io/api/sprites/#create-sprite)
2. [Sprite Add Layer](https://splashkit.io/api/sprites/#sprite-add-layer)
3. [Sprite Hide Layer](https://splashkit.io/api/sprites/#sprite-hide-layer-named)
4. [Sprite Show Layer](https://splashkit.io/api/sprites/#group-sprite-show-layer)

### Apply the method to Splashkit sprite
To demonstrate this, we are going to create a simple move around program which uses 4 custom made sprite images. Those 4 images represent 4 sided face:
```
LEFT
RIGHT
TOP
BOTTOM
```
Firstly we load those 4 images as bitmap:
```cpp
bitmap front_image = load_bitmap("face_front", "face_front.png");
bitmap back_image = load_bitmap("face_back", "face_back.png");
bitmap left_image = load_bitmap("face_left", "face_left.png");
bitmap right_image = load_bitmap("face_right", "face_right.png");
```

Then we create a sprite call Y_face which is basically just yellow face and add the 4 layers for the sprite:
```cpp
sprite Yellow_face = create_sprite("Y_face",front_image);
sprite_add_layer(Yellow_face, back_image ,"back");
sprite_add_layer(Yellow_face, front_image ,"front");
sprite_add_layer(Yellow_face, left_image ,"left");
sprite_add_layer(Yellow_face, right_image ,"right");
```
Now we create a enumeration and a function call `face_swap()` which is a function to swap layers when we press the arrow key to move around(Note: you can do it in other ways if you feel like to, this is just a way to make the explaination easier):
```cpp
enum  face{
	FRONT,
	BACK,
	LEFT,
	RIGHT
};

void  face_swap(sprite  Yellow_face, int  face){
	switch(face){

	case FRONT:
		sprite_show_layer(Yellow_face, "front");
		sprite_hide_layer(Yellow_face, "back");
		sprite_hide_layer(Yellow_face, "left");
		sprite_hide_layer(Yellow_face, "right");
		break;

	case BACK:
		sprite_hide_layer(Yellow_face, "front");
		sprite_show_layer(Yellow_face, "back");
		sprite_hide_layer(Yellow_face, "left");
		sprite_hide_layer(Yellow_face, "right");
		break;

	case LEFT:
		sprite_hide_layer(Yellow_face, "right");
		sprite_show_layer(Yellow_face, "left");
		sprite_hide_layer(Yellow_face, "front");
		sprite_hide_layer(Yellow_face, "back");
		break;

	case RIGHT:
		sprite_hide_layer(Yellow_face, "left");
		sprite_show_layer(Yellow_face, "right");
		sprite_hide_layer(Yellow_face, "front");
		sprite_hide_layer(Yellow_face, "back");
		break;
	}

}
```
`sprite_hide_layer`: Hides the layer
`sprite_show_layer`: Shows the layer

Now we declare the enumeration:
```cpp
face  face;

// those code below are optional
// because my image files are too small I have to do this 
double  x = 100;
double  y = 100;

sprite_set_scale(Yellow_face, 5);
```
Next in our loop function, we character movement through the arrow key:
```cpp
while (!quit_requested()){

	process_events();

	if (key_down(UP_KEY)){
		face = BACK;
		y -= 0.1; // Move up by decreasing the y-coordinate
	
	}else  if (key_down(DOWN_KEY)){
		face = FRONT;
		y += 0.1; // Move down by increasing the y-coordinate

	}else  if (key_down(LEFT_KEY)){
		face = LEFT;
		x -= 0.1; // Move left by decreasing the x-coordinate

	}else  if (key_down(RIGHT_KEY)){
		face = RIGHT;
		x += 0.1; // Move right by increasing the x-coordinate
	}
	
	face_swap(Yellow_face, face);
	clear_screen(COLOR_WHITE);
	draw_sprite(Yellow_face, x, y);
	refresh_screen();
}
```
That's all the code implementation, here's the result:

https://github.com/MangoS9/SplashKit-Tutorial/assets/128771372/1ff549f6-2207-41f9-bb06-d47bf9b2f1d5

### Other functions 
While this is one basic example of using layering, there are other functions that we haven't use but it's good to know them incase we ever needed them:
1. [sprite_bring_layer_to_front(sprite s, int visible_layer)](https://splashkit.io/api/sprites/#sprite-bring-layer-to-front) : Brings the layer to the front of other layers
2. [sprite_bring_layer_forward(sprite s, int visible_layer) ](https://splashkit.io/api/sprites/#sprite-bring-layer-forward) : Bring a layer 1 step forward of another layer.

### Expected Learning Outcomes

The learning outcome that the reader can expect to have gained after completing this series of
tutorials is to have gained an understanding of Sprite Layering, including a theoretical
understanding of the concept including how Splashkit specifically interacts with layered sprites, as
well as a practical showcase of the concept

### Conclusion

The importance of this tutorial comes from the required ability to be able further interact with
Sprites as apart of the Splashkit library. Easing workflows and system process management via Sprite
layering rather than raw Sprite manipulation and management allows for a greater understanding of
the framework and concept as a whole and further entrenches students with the ability to use and
understand Sprites.


