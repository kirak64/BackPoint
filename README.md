## Welcome to BackPoints
![BackPoint result ](https://i.ibb.co/pRQVz8M/Screenshot-2021-07-28-at-13-13-12-Point-backgrounds.png)
**with backpoints you can have a nice interface with background points, these are generated in random places and have different colors.
BackPoints is a project that will be constantly updated to make life easier for users.
If you like this project, share it with your friends.**

------


Add it to your project:

	   <script src="https://cdn.jsdelivr.net/npm/backpoint@1.0.0/index.js"></script>

---
# html
It must have a canvas tag with its respective ID:
	

	
	<html>
	    <body>
	    
	    <canvas id ="yourID">
	    
	    </body>
	<html/>

---


#	JS	
**parameters**
 - id:              <--  takes the id value you have in the canvas tag
 - maxSize:   <-- takes the maximum value that the figure can have.
 - minSize:    <-- takes the minimum value that the figure can have.
 - maxQuantity : <-- Enter the maximum number of figure
 - minQuantity: <-- Enter the minimum number of figure 

We make use of BackPoint by calling the "getBackPoints" function.

----
	<html>
	    <body>
	    
	    <canvas id ="yourID">
	    <script src="https://cdn.jsdelivr.net/npm/backpoint@1.0.0/index.js"></script>
	    
		// write the code 
	    <script>
	    
		  getBackPoints({
			id: "yourID",
			maxSize: 25,
			minSize: 10,
			maxQuantity: 20,
			minQuantity: 10
		})
		
	    </script>
	    </body>
	<html/>

# Css

    body{
	margin: 0;
	padding: 0;
	}
	canvas{
	position: fixed;
	top: 0;
	margin: 0;
	}
