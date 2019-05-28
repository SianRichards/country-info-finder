The task is to create an application that accepts an input from the user: either a 2 or 3 letter ISO code for a country and displays the relevant country information.

My technical solution does not yet contain any tests. This was due to an under-familiarisation with the testing tools. 

However, below I have pseudo-coded how I would go about testing the user stories and I have offered a few more concrete directions I would take to achieve these tests.

•	If a valid ISO code is entered, the Country component state should update and an alert stating “Please enter a valid ISO code” should not pop up. 

•	Possible solutions:
o	Jest to test state: find tsx element “h2”. The text should not equal “” (empty string) or “Not classified” if it’s valid
o	Use Jest to check that there’s also no window alert e.g. expect window.alert to have not been called/been called zero times

•	If an invalid ISO code is entered, either the Country component state does not update and an alert stating “Please enter a valid ISO code” pops up, or the Country component state does update and an alert stating “Please enter a valid ISO code” pops up.

•	Possible solutions:
o	Check to see if try (in componentDidUpdate) fails and catch is triggered
o	Use Jest to check that there’s a window alert e.g. expect window.alert to have been called
