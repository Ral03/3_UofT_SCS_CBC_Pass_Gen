# UofT_SCS_CBC_Pass_Gen
Password generator project for coding bootcamp.

![1570344934841](C:\Users\rusau\AppData\Roaming\Typora\typora-user-images\1570344934841.png)

Unfortunately by the time i got around to doing this assignment, having done a pull on lessons, the homework for lesson03 has been updated to something like the Rock Paper Scissors game. And in all honesty i made little effort in trying to source the original homework screenshot for the layout.

The Password generator validates if the user input is a valid number between 8 an 20, including the end values, and will default to 8 if "return" key is pressed.

The generator then divides the password length into equal parts based on the desired values the password should contain (uppercase, lowercase, numeric and special characters).

Selection logic:
	pass_length / nr_of_char_types = x
	x is rounded up to 1st even number. to ensure that *Math.round* does not round down and the final pass length is too 	short.
	x items of each char type is randomly selected, duplications being allowed.

The values are then concatenated in a separate array which is has its index shuffled. The resulting array is then sliced to stipulated length of the password.

the resulting array is .join-ed into a string that is then displayed for the user.