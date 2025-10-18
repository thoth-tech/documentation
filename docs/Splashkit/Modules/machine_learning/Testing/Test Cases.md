# Test Cases for Machine Learning

## Artificial Neural Network

### Weights

#### Test 1: Layer training working

- Create a layer with 1 output
- Save weights
- Train layer on (1 iteration):
  - Static input (all ones)
  - Static Expected Output (0)
- Assert current weights != original weights

#### Test 2: Model training working

- Create a new model with multiple layers (make sure that there is more than one layer and that each
  layer is represented at lest once)
- Save weights
- Train model on (1 iteration):
  - Static input (all ones)
  - Static Expected Output (0)
- Assert current weights != original weights (for each layer)

#### Test 3: Model training converges

- Simple 1 input 1 output model
- Input all ones
- Expected output is 0.
- Train on 20 data points
- Assert model outputs <0.5 (binary 0) greater than 50% of the time (is it converging?)
- Measure model performance

## Game AI

#### Test 1: New Agent

- Create a new ANN Agent
- Train on TicTacToe
- Assert never loses against random Agent (draws are allowed)
