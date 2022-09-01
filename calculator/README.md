

## How to run

In the project directory, you can run:

### `npm install`

This will install all of the neccesary depedencies as described in the project.json folder

afterward run:

### `npm start`

Runs the app in the development mode.\
This should automatically open the app in your default browser.

Otherwise:
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


## Notes:

The calculator shows all the buttons but only supports the basic sub/add/div/mult operations plus the "=" and "AC" buttons.
It can only handle one operation at a time, but chains the result of one operation as the first input for the next operation.

It is statically styled, the instructions didn't specify if styling it in a responsive way was neccesarry.

### Possible improvements:

Functionality to input multiple operations/sets of arguments at once. This could be achieved by sticking all of arguments + operations into an array and running reduce on it. This would not respect order of operations, to achieve that, some sort of parser would have to be written.

Add other functions, the code is written in a way to easily add functions to support the other shown buttons.

Make the calculator responsive.

Deal with decimals/floating point number better. Right now its using the default JavaScript math operators (which come with many small errors when dealing with floats), I would probably import a library that handles floats better.

There is a small bug/feature when inputing a digit after the result of a operation has computed. This may be consided a bug/feature depending on desired functionality.

Add the ability to "undo". Would have to create some sort of stack structure in state to go back to a previous state.


