# Arcade Machine Controls

Table of content

- [About Controls](#about-controls)
- [User Story](#user-story)
- [Use Case Diagram](#use-case-diagram)
- [Sequence Diagram](#sequence-diagram)
- [API or Code] (#API-or-Code)

## About Controls

Two `joysticks` and `buttons` are controls found on the deck of the arcade machine. Specifically, there are nine (9) `buttons` on the deck. Six of these are positioned on the right side of each of the `joysticks` (**JS**), marked with letters A to F. Lastly, the `start` button at the top-centre of the deck with the `player 1` and `player 2` buttons at the left and right-hand side of it. See the _UI mockup_ below.

![image](images/cong.png)

## User Story

| Label | Details |
| --- | --- |
| Description | Players use a joystick and buttons in the deck of the arcade machine to start, control, pause and end actions of the objects on the arcade machine’s screen. |
| User story | As a player, I want to use game controls to play games on the Deakin School of IT's arcade machine. |
| Acceptance criteria | - a player should not be able to interact with (or play) a game without pressing the `start` button (or inserting a coin). <br>- These controls must be the only user interface a player has with the game in the arcade machine. <br>- Code testing is required. |
| Data validation | 1. Ensure that the arcade machine is connected to the power and switched on. <br>2. Ensure that games are loaded on the machine. <br>3. Confirm whether a `start` button has been engaged (or a coin has been inserted). |

## Use Case Diagram

![image](images/case.png)

## Sequence Diagram

![image](images/seq.png)

## API or Code

A possible implementation for reading controls from JSON file

```cpp
public class Controls
{
    private static Json _controls_json;
    
    public Controls()
    {
        _controls_json = SplashKit.JsonFromFile("Controls.json");
    }

    public static KeyCode Keylookup(string key)
    {
        if (!_controls_json.HasKey(key)) return KeyCode.UnknownKey;

        if (Enum.IsDefined(typeof(KeyCode), _controls_json.ReadString(key))) {
            return Enum.Parse<KeyCode>(_controls_json.ReadString(key));
        }

        return KeyCode.UnknownKey;
    }
}
```
