# javascript-refactor

## Pull Class Members Up refactoring﻿
The Pull Class Members Up refactoring moves class methods upwards in the class hierarchy – from the current class to a superclass.

Example: moving a class method to a superclass

Suppose you have a class AccountingDepartment that extends an abstract class Department. In this example, the Pull Class Members Up refactoring moves the printMeeting() method from AccountingDepartment to its superclass Department.

## Rename refactorings

Besides Renaming files and folders, which is available in the context of any language, you can also rename classes, methods, functions, variables, and parameters. WebStorm changes the name of the symbol in its declaration and by default all its usages in the current project.
