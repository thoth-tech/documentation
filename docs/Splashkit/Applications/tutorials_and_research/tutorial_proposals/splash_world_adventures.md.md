## Software Requirements Specification for Mario-Like Game Tutorial Using Splashkit

### 1. Purpose Description

The purpose of this game tutorial is to create an engaging and educational Mario-like game that
utilizes various functionalities of Splashkit.

The tutorial aims to teach users how to implement key game mechanics and features, such as character
movement, collision detection, sprite animation, and interactive gameplay.

By building this game, users will gain hands-on experience with Splashkit's capabilities and learn
how to apply them effectively in real-world game development scenarios.

### 2. Features

The Mario-like game tutorial will include the following **features**:

1. **Character Movement**: Implementing smooth movement for the main character using keyboard input.
1. **Collision Detection**: Handling collisions between the main character and other game objects,
   such as obstacles and enemies.
1. **Sprite Animation**: Creating animations for the main character, enemies, and other in-game
   elements using Splashkit's animation functionalities.
1. **Interactive Gameplay**: Designing interactive elements like collectible items, power-ups, and
   enemies to provide an engaging gaming experience.
1. **Scoring System**: Implementing a scoring mechanism to track and display the player's progress.
   _Stretch_: different scene via states system
1. **Audio Integration**: Incorporating sound effects and background music using Splashkit's audio
   functionalities.
1. **Level Design**: Creating multiple levels with increasing difficulty and unique challenges.

#### Stretch Features

Menu system to start the game. Utilizes mouse input and States to change scenes using Splashkit game
engine.

### 3. User Case

As a user, I want to follow the Mario-like game tutorial to **learn how to develop** a game using
Splashkit's functionalities effectively.

---

The tutorial should provide step-by-step instructions on implementing key game mechanics, including
character movement, collision detection, sprite animation, interactive gameplay, scoring system,
audio integration, and level design. By engaging in the tutorial, I aim to gain practical experience
in game development with Splashkit, understand its features, and apply the learned knowledge to
create my own games with similar functionalities.

---

**Stretch User story**

As a prospective Deakin University student, I want to play the Mario-like game developed using
Splashkit at the Deakin Arcade Showcase, so that I can experience and appreciate the programming
skills showcased at Deakin and get inspired to learn programming myself.

### 4. Class Diagram

This is a high-level plan of the game

```mermaid
classDiagram
    class Game {
	    -gameEngine: IGameEngine
    }
	class IRenderer {
		<<interface>>
		Init()*: void
		Clear()*: void
		RenderObject()*: void
		Present()*: void
		Shutdown()*: void
    }
    class SplashkitRenderer {
	    Init(): void
		Clear(): void
		RenderObject(): void
		Present(): void
		Shutdown(): void
    }

	class ILogger {
		<<interface>>
		+Log(): void
		+LogError(): void
		+LogException(): void
		+LogFormat(): void
		+LogWarning(): void
	}

	class SplashkitLogger {
		+logEnabled: bool
		+IsLogTypeAllowed(): bool
		+Log(): void
		+LogError(): void
		+LogException(): void
		+LogFormat(): void
		+LogWarning(): void
	}

	class IGameStateManager {
		<<interface>>
		-gameStates: stack[GameState]
        +changeState()*: void
		+getCurrentState()* : GameState*
		+popState()* : void
		+pushState()* : void
		+render()* : void
		+update()* : void
	}

	class IGameEngine {
		<<interface>>
		#renderer: IRenderer
		#gameStateManager: IGameStateManager
	    #logger: ILogger
        +Start()*: void
        +Update()*: void
        +Draw()*: void
	}

	class GameEngine {
		#gameStateManager: IGameStateManager
	    #logger: ILogger
        +Start(): void
        +Update(): void
        +Draw(): void
	}

    class GameStateManager {
	    -gameStates: stack[GameState]
        +changeState(): void
		+getCurrentState() : GameState*
		+popState() : void
		+pushState() : void
		+render() : void
		+update() : void
    }

    class IGameState {
        <<interface>>
        +update()
        +draw()
    }

    class MainMenuState {
        +update()
        +draw()
    }

    class PlayGameState {
	    +Levels: Level
        +update()
        +draw()
    }

    class IGameLevel {
	    <<interface>>
        +gameObjects : vector~GameObject~
        +AddGameObject(GameObject gameObject)*
        +RemoveGameObject(GameObject gameObject)*
    }

    class GameObject {
	    <<abstract>>
        #name : str
        #components : vector~IComponent~
        #transform: Transform
        +GameObject(str name, vector~Icomponent~ components)*
        +AddComponent(IComponent component)*: void
        +GetComponent(str name)*: self
        +RemoveComponent(IComponent component)*: void
        +ToString()*: str
    }

    class Component {
        <<interface>>
        #gameObject: GameObject
        +parent: gameObject
        +Awake()
        +Start()
        +Update()
    }

	class Transform {
		#gameObject: GameObject
		+childCount: int
		+hasChanged: bool
		+localPosition: Vector2D
		+parent: gameObject
		+up: Vector2D
		+forward: Vector2D
		+hasChanged: bool
		+Awake()
        +Start()
        +Update()
        +Translate()
	}

	Game *-- IGameEngine
	IGameEngine <|-- GameEngine: Implements
	IRenderer <|-- SplashkitRenderer: Implements
	IGameEngine  *-- IGameStateManager
    IGameEngine *-- ILogger
    IGameEngine *-- IRenderer
    IGameStateManager <|.. GameStateManager: Implements
    ILogger <|.. SplashkitLogger: Implements
    PlayGameState o-- IGameLevel
    GameStateManager --> IGameState
    IGameState <|.. MainMenuState: Implements
    IGameState <|.. PlayGameState: Implements
    IGameLevel *-- GameObject
    GameObject *--* Component
    GameObject *-- Transform
    Component <|.. Transform: Implements
```

### 5. Sequence Diagrams

```mermaid
sequenceDiagram
    participant g as Game
    participant gsm as GameStateManager
    participant gs as GameState
    participant l as IGameLevel
    participant go as GameObject
    participant c as Component

    g->>gsm: start()
    gsm->>gsm: GameStateManager()
    gsm->>gs: pushState(MainMenuState)
    gsm->>gs: getCurrentState()
    Note over gsm,gs: Current state is now MainMenuState

    g->>gsm: update()
    gsm->>gs: update()
    Note over gsm,gs: MainMenuState update is called

    gsm->>gs: changeState(PlayGameState)
    gsm->>gs: getCurrentState()
    Note over gsm,gs: Current state is now PlayGameState

    g->>gsm: update()
    gsm->>gs: update()
    gs->>l: update()
    l->>go: update()
    go->>c: Update()

```
