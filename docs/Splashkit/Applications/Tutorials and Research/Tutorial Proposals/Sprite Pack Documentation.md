# Sprite Pack Documentation

## Introduction

Sprite packs are a mechanism for managing and organizing sets of sprites within a game or
application. Sprites are visual elements that can be used to represent objects, characters, or other
graphics within the user interface. This documentation outlines the functions and concepts related
to sprite packs, including creating, updating, drawing, and selecting sprite packs.

## Function Overview

### `create_sprite_pack(const String &name)`

- **Description:** Creates a new sprite pack with a given name. This pack can then be selected and
  used to control which sprites are drawn/updated in the calls to `draw_all_sprites` and
  `update_all_sprites`.
- **Parameters:**
  - `name` (Type: `string`): The name of the new sprite pack.

### `current_sprite_pack()`

- **Description:** Returns the name of the currently selected sprite pack.
- **Return Type:** `string`
- **Signatures:**

  ```cpp
    string current_sprite_pack();
  ```

### `draw_all_sprites()`

- **Description:** Draws all of the sprites in the current sprite pack. Packs can be switched to
  select between different sets of sprites.
- **Parameters:** None
- **Signatures:**

  ```cpp
    void draw_all_sprites();
  ```

### `update_all_sprites()`

- **Description:** Updates all sprites in the current sprite pack.
- **Parameters:** None
- **Signatures:**

  ```cpp
    void update_all_sprites();
  ```

### `update_all_sprites(float pct)`

- **Description:** Updates all sprites in the current sprite pack with a specified percentage.
- **Parameters:**
  - `pct` (Type: `float`): The percentage of the update to apply.
- **Signatures:**

  ```cpp
    void update_all_sprites(float pct);
  ```

## Example Usage

```cpp
create_sprite_pack("pack1");
select_sprite_pack("pack1");
draw_all_sprites();
update_all_sprites(0.5);
free_sprite_pack("pack1");
```

## Internal Functions

### `_update_sprite_pct(void *s, Float pct)`

- **Description:** Internal function for updating a sprite with a specified percentage.

### `_draw_sprite(void *s)`

- **Description:** Internal function for drawing a sprite.

### `_free_sprite(void *s)`

- **Description:** Internal function for freeing a sprite.

### `_call_for_all_sprites(vector<void *> &sprites, sprite_function *fn)`

- **Description:** Internal function for calling a sprite function on a vector of sprites.

### `_call_for_all_sprites(vector<void *> &sprites, sprite_float_function *fn, Float val)`

- **Description:** Internal function for calling a sprite function with a value on a vector of
  sprites.

## Internal Data and Structures

### `_sprite_packs`

- A map that stores sprite packs where keys are pack names and values are vectors of sprites.

### `_current_pack`

- A string representing the name of the currently selected sprite pack.
