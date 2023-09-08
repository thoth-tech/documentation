# Code for High Score

Table of content

- [Player details](#player-details)
- [Score Made](#score-made)
- [Display](#display)

## Player details

The code below requires a player to enter his initials or name. We use a `do while` loop to force a player to enter a name not longer than three characters.

```cpp
Console.WriteLine("Enter your name or initials (up to 3 letters): ");

do
{
    string name = Console.ReadLine();           

    if (name.Length < 1 || name.Length > 3)
    {
        Console.WriteLine("Please enter a name with 3 characters.");
    }
}
while (name.Length < 1 || name.Length > 3);
```

To record the player's name in the list, we implement the following code:

```cpp
score.AddScore(name);
```

Below, we initiate the `Player` list (i.e., `private List<Player> Players = new List<Player>();`) and save the player's initials or name in it.

```cpp
using System.Collections.Generic;

public class Score
{
    public List<Highest<int, string>> _scores { get; } = new List<Highest>();
    private List<Player> Players = new List<Player>();

    int highestScore, recordedScores, i = 0;

    public void AddScore(Highest score, Player name)
    {
        _scores.Add(score, name);
        Players.Add(name);
    }

    public Highest GetScore(int score)
    {
        for(int i = 0; i < _scores.Count; i++)
        {
            recordedScores = _score[i];
            if(score > 0)
            {
                return score;
            }

            highestScore = _scores[i + 1];
            _scores[i + 1] = _scores[i];
            _scores[i] = score;
        }

        for(int j = 0; j < 10; j++)
        {   
            SplashKit.ClearScreen(Color.White);
            Console.WriteLine((j + 1) + " score: " + _scores[j]);
            SplashKit.RefreshScreen();
            SplashKit.ProcessEvents();
            SplashKit.Delay(10000);
        }
    }

    public void ExecuteTransaction(ScoreMade scoreMade)
    {
        scoreMade.Execute();
    }

    public void Print()
    {
        Console.WriteLine($"{_name} scored {_endScore}.");
    }
}
```

## Score Made

Above, we also initiate the `_scores` list (i.e., `public List<Highest<int, string>> _scores { get; } = new List<Highest>();`) and will save the players' scores and names in it. You will notice that we have a `GetScore` method that access the `_scores` list and reading its contents. After, we compare the scores in the list to the current player's `score`. Furthermore, we have a method that calls the `scoreMade` class. Below, we have the `Player` class, which captures the `scoreMade` in another class.

```cpp
using System;

public class Player
{          
    public string _name;
    public int _score;
      
    public string Name
    {
        get { return _name; }
    }

    public Player(string name , int totalScore)
    {
        _name = name;
        _endScore = totalScore;
    }

    public void CurrentGame(int scoreMade)
    {
        if (scoreMade > 0)
        {
            get { return _endScore; }            
        }
        else
        {
            Console.WriteLine($"{_name} scored {_endScore}. Try again!!");
        }
    } 
}
```

The following `ScoreMade` class tracks the scores made by a player.

```cpp
using System;

public class ScoreMade
{
    public Player _player;
    public int _score;
    private bool _executed = false;
    private bool _success = false;

    public bool Executed
    {
        get { return _executed; }
    }

    public bool Success
    {
        get { return _success; }
    }

    public ScoreMade(Player player, int score)
    {
        _player = player;
        _score = score;
    }

    public void Execute()
    { 
        if (_executed)
        {
            throw new Exception("Your score has been recorded");
        }

        _executed = true;
        _success = _player.CurrentGame(_score);
    }
}
```

## Display

To print the scores, the following code must be implemented:

```cpp
score.Print();
```
